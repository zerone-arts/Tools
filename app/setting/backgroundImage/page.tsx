"use client";
import { supabase } from "@/utils/supabase";
import { useImageStore } from "../../../utils/zustand";

export default function BackGroundImagePage({}) {
  const setImage = useImageStore((state: any) => state.setImage);

  const fileHandle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileName = file.name;
    const bucketName = "ToolsBackGround";
    const folderPath = "bg"; // 저장할 폴더 경로

    try {
      // 기존 파일 삭제
      const { data: listData, error: listError } = await supabase.storage
        .from(bucketName)
        .list(folderPath);

      if (listError) {
        console.error("파일 목록 불러오기 실패:", listError.message);
      } else if (listData && listData.length > 0) {
        const existingFiles = listData.map(
          (file) => `${folderPath}/${file.name}`
        );
        const { error: removeError } = await supabase.storage
          .from(bucketName)
          .remove(existingFiles);
        if (removeError) {
          console.error("기존 파일 삭제 실패:", removeError.message);
        } else {
          console.log("기존 파일 삭제 완료");
        }
      }

      // 새로운 이미지 업로드
      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(`${folderPath}/${fileName}`, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        console.error("이미지 업로드 실패:", error.message);
      } else {
        console.log("이미지 업로드 성공:", data);
        setImage(fileName);
      }
    } catch (err) {
      console.error("파일 업로드 중 오류 발생:", err);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 absolute left-0">
      <div className="relative mb-[150px] w-[300px]">
        <p className="absolute left-0 w-full text-center opacity-100 dark:opacity-0 duration-300">
          원하는 이미지를 올려주세요.
        </p>
        <p className="absolute left-0 w-full text-center opacity-0 dark:opacity-100 duration-300">
          Please upload the image you want.
        </p>
      </div>
      <div className="absolute w-full h-full flex items-center justify-center">
        <label
          htmlFor="file"
          className="border w-[50px] h-[50px] flex items-center justify-center rounded-full cursor-pointer text-[20px] group hover:bg-white/10 duration-300"
        >
          <input
            type="file"
            id="file"
            name="file"
            onChange={fileHandle}
            multiple
            hidden
          />
          <span className="mb-1 duration-300">+</span>
        </label>
      </div>
    </div>
  );
}
