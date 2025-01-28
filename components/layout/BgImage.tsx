"use client";

import Image from "next/image";
import img from "@/public/assets/image/bg/spider2.png";
import { useEffect, useState } from "react";
import { useImageStore } from "../../utils/zustand";
import { supabase } from "@/utils/supabase";
import { useAuth } from "@/context/AuthProvider";
export default function BgImage() {
  const [image, setImage] = useState<string | null>(null);
  const imageName = useImageStore((state: any) => state.image);
  const { user } = useAuth();
  const getImageFile = async () => {
    if (imageName) {
      const { data } = await supabase.storage
        .from("RotionBackground/bg")
        .getPublicUrl(imageName);

      setImage(data.publicUrl);
    } else {
      const { data } = await supabase.storage
        .from("RotionBackground")
        .list("bg");
      let arr: any = data
        ?.filter((item) => item.name !== ".emptyFolderPlaceholder")
        .map((item) => item.name);

      if (arr.length === 0) {
        setImage(null);
      } else {
        const imgUrl = supabase.storage
          .from("RotionBackground/bg")
          .getPublicUrl(arr[0]);

        setImage(imgUrl.data.publicUrl);
      }
    }
  };

  useEffect(() => {
    getImageFile();
  }, [imageName]);
  getImageFile();

  return (
    <div className="absolute w-full h-screen top-0 left-0 pointer-events-none">
      {image !== null ? (
        <Image
          src={image}
          alt="bg"
          sizes="100vw"
          fill
          className="absolute -z-10 opacity-20 duration-500 ease-out object-cover dark:opacity-5 "
          priority
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}
