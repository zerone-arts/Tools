"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SettingUi({}) {
  const pathName = usePathname();

  return (
    <ul className="absolute w-[300px] h-[100px] text-white flex  items-end justify-center gap-5 p-2 ">
      <li
        className={`border-bottom ${
          pathName === "/setting/mypage" ? "text-gray-100" : "text-gray-400"
        }`}
      >
        <Link href={"/setting/mypage"}>My</Link>
      </li>
      <li
        className={`border-bottom ${
          pathName === "/setting/backgroundImage"
            ? "text-gray-100"
            : "text-gray-400"
        }`}
      >
        <Link href={"/setting/backgroundImage"}>Bg</Link>
      </li>
    </ul>
  );
}
