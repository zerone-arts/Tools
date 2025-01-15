"use client";
import { supabase } from "@/utils/supabase";
import { useImageStore } from "../../../utils/zustand";

export default function BackGroundImagePage({}) {
  const setImage = useImageStore((state: any) => state.setImage);

  const fileHandle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setImage(file.name);

      const { data, error } = await supabase.storage
        .from("RotionBackground/bg")
        .upload(file.name, file, {
          cacheControl: "3600",
          upsert: false,
        });
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 ">
      <div className="relative mb-[150px] w-[300px]">
        <p
          className={`absolute left-0 w-full text-center opacity-100 dark:opacity-0 duration-300`}
        >
          원하는 이미지를 올려주세요.
        </p>
        <p
          className={`absolute left-0 w-full text-center opacity-0 dark:opacity-100 duration-300`}
        >
          Please upload the image you want.
        </p>
      </div>
      <div className="absolute w-full h-full flex items-center justify-center">
        <label
          htmlFor="file"
          className="border w-[50px] h-[50px] flex items-center justify-center rounded-full cursor-pointer text-[20px] group hover:bg-gray-400/50 duration-300"
        >
          <input
            type="file"
            id="file"
            name="file"
            onChange={fileHandle}
            multiple
            hidden
          />
          <span className="mb-1 group-hover:scale-[1.5] duration-300">+</span>
        </label>
      </div>
    </div>
  );
}
