"use client";

import Link from "next/link";
import { useState } from "react";

export default function Web({ user }: { user: string | null }) {
  const [count, setCount] = useState(0);

  const List = [
    "Tools",
    "Note",
    "Calendar",
    "Weather",
    "Calculator",
    "Setting",
  ];

  console.log(user);
  return (
    <div className="w-full h-full  max-md:hidden flex flex-col justify-center items-center gap-0 p-[100px]">
      <div className="w-[100px] h-[100px]  flex items-center justify-center">
        <div className="cube w-[80px] h-[80px] text-white top-2">
          <div className="face front">
            <div className="w-[70px] h-[70px] bg-zinc-400 rounded-lg dark:bg-white"></div>
          </div>

          <div className="face left">
            <div className="w-[70px] h-[70px] border-[3px] rounded-lg flex items-center justify-center text-[10px]">
              TOOLS
            </div>
          </div>

          <div className="face top">
            <div className="w-[70px] h-[70px] bg-black rounded-lg dark:bg-cyan-600 "></div>
          </div>
        </div>
      </div>
      <div className="w-full h-[200px] flex flex-col justify-center items-center gap-5  ">
        <div className="w-full h-[130px]  relative overflow-hidden ">
          <div
            className={`w-full h-[130px]  absolute duration-500`}
            style={{
              transform: `translateY(${count * -130}px)`,
            }}
          >
            {List.map((item, idx) => {
              return (
                <div
                  key={item}
                  className={`text-[100px] tracking-widest w-full h-[130px] flex items-center justify-center 
                   duration-300 ${count === idx ? "opacity-1" : "opacity-0"}`}
                  style={{
                    textShadow:
                      "0px 4px 3px rgba(0,0,0,0.4)  ,0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)",
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <ul className="w-full text-center text-[15px] text-zinc-400 relative">
          <li
            className={`absolute w-full  duration-300 ${
              count === 0 ? "opacity-1 delay-300" : "opacity-0 delay-0"
            }`}
          >
            <span className=" text-white">Tools</span>은 일상에서 활용도가 높은
            <br />
            <span className=" text-white">다양한 도구</span>를 통합한 스마트
            플랫폼입니다.
          </li>
          <li
            className={`absolute w-full  duration-300 ${
              count === 1 ? "opacity-1 delay-300" : "opacity-0 delay-0"
            }`}
          >
            Note는 검색 및 월별 필터링을 통해 메모를 <br /> 쉽고 체계적으로
            관리할 수 있는 간편한 디지털
            <span className="text-white ml-1">메모장</span>입니다.
          </li>
          <li
            className={`absolute w-full  duration-300 ${
              count === 2 ? "opacity-1 delay-300" : "opacity-0 delay-0"
            }`}
          >
            Calendar는 <span className="text-white">일정</span>을 한눈에 관리할
            수 있는 앱으로,
            <br /> 날짜별 할 일과 메모를 손쉽게 정리할 수 있습니다.
          </li>
          <li
            className={`absolute w-full  duration-300 ${
              count === 3 ? "opacity-1 delay-300" : "opacity-0 delay-0"
            }`}
          >
            Weather는 간편한 인터페이스로 지역별 기온과 <br />
            현재 <span className="text-white">날씨</span>, 예보를 확인할 수 있는
            앱입니다.
          </li>
          <li
            className={`absolute w-full  duration-300 ${
              count === 4 ? "opacity-1 delay-300" : "opacity-0 delay-0"
            }`}
          >
            Calculator는 일반 계산과 퍼센트 계산 기능을 제공하여,
            <br /> <span className="text-white">수학적 계산</span>이 필요한 여러
            상황에서 편리하게 사용할 수 있도록 설계되었습니다
          </li>
          <li
            className={`absolute w-full  duration-300 ${
              count === 5 ? "opacity-1 delay-300" : "opacity-0 delay-0"
            }`}
          >
            Tools은 사용자만의 배경 이미지를 설정할 수 있는 <br />
            <span className="text-white">Light Mode</span>와 어두운 배경의
            <span className="ml-1 text-zinc-500">Dark Mode</span>가 있습니다.
          </li>
        </ul>
      </div>
      <div className="top-[70px] relative">
        <ul className=" w-[450px] h-[80px]  flex items-center justify-between relative mb-5">
          <li
            className={`w-[50px] h-[50px] border-2 rounded-md  duration-300 hover:mb-5 shadow-3xl shadow-black 
            text-white flex items-center justify-center dark:bg-zinc-800 dark:border-none dark:text-white
            ${count === 0 ? "mb-5" : "mb-0"}`}
            onClick={() => setCount(0)}
          >
            <button className="w-full h-full flex items-center justify-center">
              <div className="flex itmes-center justify-center text-[20px] font-semibold   relative">
                T
              </div>
            </button>
          </li>
          <li
            className={`w-[50px] h-[50px] border-2 rounded-md  duration-300 hover:mb-5 shadow-3xl shadow-black 
            text-white  dark:bg-zinc-800 dark:border-none dark:text-white
            ${count === 1 ? "mb-5" : "mb-0"}`}
            onClick={() => setCount(1)}
          >
            <button className="w-full h-full flex items-center justify-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li
            className={`w-[50px] h-[50px] border-2 rounded-md  duration-300 hover:mb-5 shadow-3xl shadow-black 
            text-white  dark:bg-zinc-800 dark:border-none dark:text-white
            ${count === 2 ? "mb-5" : "mb-0"}`}
            onClick={() => setCount(2)}
          >
            <button className="w-full h-full flex items-center justify-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li
            className={`w-[50px] h-[50px] border-2 rounded-md  duration-300 hover:mb-5 shadow-3xl shadow-black 
            text-white  dark:bg-zinc-800 dark:border-none dark:text-white
            ${count === 3 ? "mb-5" : "mb-0"}`}
            onClick={() => setCount(3)}
          >
            <button className="w-full h-full flex items-center justify-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li
            className={`w-[50px] h-[50px] border-2 rounded-md  duration-300 hover:mb-5 shadow-3xl shadow-black 
            text-white  dark:bg-zinc-800 dark:border-none dark:text-white
            ${count === 4 ? "mb-5" : "mb-0"}`}
            onClick={() => setCount(4)}
          >
            <button className="w-full h-full flex items-center justify-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li
            className={`w-[50px] h-[50px] border-2 rounded-md  duration-300 hover:mb-5 shadow-3xl shadow-black 
            text-white flex items-center justify-center dark:bg-zinc-800 dark:border-none dark:text-white
            ${count === 5 ? "mb-5" : "mb-0"}`}
            onClick={() => setCount(5)}
          >
            <button className="w-full h-full flex items-center justify-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <ul className="absolute w-[450px] h-[3px]  flex items-end justify-between bottom-3">
            {List.map((item, idx) => (
              <li
                key={item}
                className={`w-[50px] h-[2px]    duration-300  flex items-center justify-center ${
                  count === idx
                    ? "opacity-1 translate-y-0 "
                    : "opacity-0 translate-y-3 "
                } `}
              >
                <div className="w-[40px] h-full bg-white mr-[1px] rounded-md"></div>
              </li>
            ))}
          </ul>
        </ul>
        <div className="w-full flex items-center justify-center">
          {user === "" ? (
            <div></div>
          ) : user === null ? (
            <Link href="/setting/mypage" className="relative group">
              Go to Login
              <div className="absolute w-[0%] h-[1px] bg-white group-hover:w-[100%] duration-300"></div>
            </Link>
          ) : (
            <div className="w-full text-zinc-400 font-medium flex flex-col leading-[30px] items-center">
              <div className="">
                Hello!
                <span className="text-white px-2">{user?.split("@")[0]}</span>
                Welcome to Tools :&#41;
              </div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
