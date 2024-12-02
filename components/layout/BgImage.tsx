import Image from "next/image";
import img from "@/public/image/bg/spider2.png";
export default function BgImage() {
  return (
    <Image
      src={img}
      alt="test"
      layout="fill"
      objectFit="cover"
      sizes="100vw"
      fill={true}
      className="-z-10 opacity-20 duration-500 ease-out"
    />
  );
}
