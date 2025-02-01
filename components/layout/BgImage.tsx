"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useImageStore } from "../../utils/zustand";
import { supabase } from "@/utils/supabase";
import { useAuth } from "@/context/AuthProvider";

export default function BgImage() {
  const [image, setImage] = useState<string | null>(null);
  const imageName = useImageStore((state: any) => state.image);
  const { user: userInfo } = useAuth();
  const user = userInfo?.email; // ✅ user.email 사용

  const getImageFile = async () => {
    if (!user) {
      console.error("User not authenticated");
      return;
    }

    try {
      let filePath = "";

      if (imageName) {
        // ✅ `imageName`이 전체 경로인지 확인하고 중복 방지
        filePath = imageName.includes(`bg/${user}/`)
          ? imageName
          : `bg/${user}/${imageName}`;

        const { data } = await supabase.storage
          .from("ToolsBackGround")
          .getPublicUrl(filePath);

        setImage(data?.publicUrl ?? null);
      } else {
        const { data, error } = await supabase.storage
          .from("ToolsBackGround")
          .list(`bg/${user}`);

        if (error) throw error;

        let arr = data
          ? data
              .filter((item) => item.name !== ".emptyFolderPlaceholder")
              .map((item) => item.name)
          : [];

        if (arr.length === 0) {
          setImage(null);
        } else {
          filePath = `bg/${user}/${arr[0]}`; // ✅ 중복 방지 적용

          const imgUrl = supabase.storage
            .from("ToolsBackGround")
            .getPublicUrl(filePath);

          setImage(imgUrl.data?.publicUrl ?? null);
        }
      }
    } catch (error: any) {
      console.error("Error fetching images:", error.message);
    }
  };

  useEffect(() => {
    if (user) {
      getImageFile();
    }
  }, [imageName, user]); // ✅ user가 변경될 때도 다시 실행

  return (
    <div className="absolute w-full h-screen top-0 left-0 pointer-events-none">
      {image ? (
        <Image
          src={image}
          alt="bg"
          sizes="100vw"
          fill
          className="absolute -z-10 opacity-20 duration-500 ease-out object-cover dark:opacity-5"
          priority
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}
