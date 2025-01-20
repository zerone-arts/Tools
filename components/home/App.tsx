"use client";

import { divide } from "mathjs";
import Link from "next/link";
import { useState } from "react";

export default function App({ user }: { user: string | null }) {
  const [count, setCount] = useState(0);
  const List = [
    "Rotion",
    "Note",
    "Calendar",
    "Weather",
    "Calculator",
    "setting",
  ];

  return (
    <div className="w-full h-full  hidden max-md:flex justify-center items-center flex-col gap-2 ">
      <div className="w-[250px] h-[500px] rounded-lg flex flex-col gap-3  items-center border justify-center">
        <div className="w-[250px] h-[280px] rounded-lg  overflow-hidden flex flex-col justify-between  text-gray-100 relative">
          <ul
            className={`w-[1500px] h-[230px]  absolute left-0 flex -translate-x-[${
              count * 250
            }px] duration-300`}
          >
            <li className="w-[250px] h-[250px] flex flex-col items-center justify-center gap-5">
              <div className="w-[150px] h-[150px] text-[80px] font-bold  bg-white flex items-center justify-center text-black rounded-lg">
                R
              </div>
              <div className=" w-[250px] h-[30px] bottom-5 border-black text-[10px] flex flex-col justify-center items-center">
                <span>로션은 일상생활에 자주 씌이는 도구들을 </span>
                <span>모아놓은 애플리케이션입니다.</span>
              </div>
            </li>
            <li className="w-[250px] h-[250px] ">Note</li>
            <li className="w-[250px] h-[250px] ">CAl</li>
            <li className="w-[250px] h-[250px] ">Wea</li>
            <li className="w-[250px] h-[250px] ">Calc</li>
            <li className="w-[250px] h-[250px] ">Sett</li>
          </ul>
          <ul className="w-full h-[20px]  flex items-center justify-center gap-2 absolute bottom-0">
            {List.map((item, idx) => (
              <button
                key={item}
                className={`${
                  count !== idx ? "w-[7px]" : "w-[10px]"
                } h-[7px]  border-2  rounded-full duration-300`}
                onClick={() => setCount(idx)}
              ></button>
            ))}
          </ul>
        </div>
        <div className="w-full flex items-center justify-center ">
          {user === "" ? (
            <div></div>
          ) : user === null ? (
            <Link href="/setting/mypage" className="relative group ">
              Go to Login
              <div className="absolute w-[0%] h-[1px] bg-white group-hover:w-[100%] duration-300 "></div>
            </Link>
          ) : (
            <div className="w-full text-[20px] text-gray-400 font-medium flex flex-col leading-[30px] items-center">
              <div>
                Hello,
                <span className="text-white px-2 ">{user?.split("@")[0]}</span>
              </div>
              <div className="text-[20px] ">welcome to Lotion!</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
