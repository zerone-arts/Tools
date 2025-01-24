"use client";

import Link from "next/link";
import { useState } from "react";

export default function App({ user }: { user: string | null }) {
  const [count, setCount] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [dragDistance, setDragDistance] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [drag, setDrag] = useState(true);
  const List = [
    "Tools",
    "Note",
    "Calendar",
    "Weather",
    "Calculator",
    "Setting",
  ];

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setDrag(false);
    const clientX =
      "touches" in e
        ? (e as React.TouchEvent).touches[0].clientX
        : (e as React.MouseEvent).clientX;
    setStartX(clientX);
    setIsDragging(true); // 드래그 시작
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (startX !== null) {
      const clientX =
        "touches" in e
          ? (e as React.TouchEvent).touches[0].clientX
          : (e as React.MouseEvent).clientX;
      const distance = clientX - startX;
      setDragDistance(distance); // 드래그 거리 업데이트
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false); // 드래그 종료
    if (Math.abs(dragDistance) >= 50) {
      // 드래그 거리가 50px 이상인 경우
      if (dragDistance < 0 && count < List.length - 1) {
        setCount((prev) => prev + 1); // 오른쪽으로 이동
      } else if (dragDistance > 0 && count > 0) {
        setCount((prev) => prev - 1); // 왼쪽으로 이동
      }
    }
    // 상태 초기화 및 제자리로 복귀
    setStartX(null);
    setDragDistance(0);
  };

  return (
    <div className="w-full h-full hidden max-md:flex justify-center items-center flex-col gap-2 ">
      <div className="w-[250px] h-[500px] rounded-lg flex flex-col gap-3 items-center  justify-center">
        <div
          className="w-[250px] h-[260px] rounded-lg overflow-hidden flex flex-col justify-between text-gray-200 relative "
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove} // 드래그 중
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove} // 터치 드래그 중
          onTouchEnd={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="absolute w-[250px] h-[200px]  flex items-center justify-end ">
            <div
              className={` w-[50px] h-[50px] relative  ${
                drag ? "opacity-1" : "opacity-0"
              } pointer-events-none `}
            >
              <div className="arrowCss">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="text-[5px] absolute bottom-0 right-0">
                Click Drag
              </div>
            </div>
          </div>
          <ul
            className={`w-[1500px] h-[230px] absolute left-0 flex `}
            style={{
              transform: `translateX(${
                isDragging ? dragDistance - count * 250 : -count * 250
              }px)`,
              transition: isDragging ? "none" : "transform 0.3s ease", // 드래그 중에는 애니메이션 비활성화
            }}
          >
            <li className="w-[250px] h-[250px] flex flex-col items-center justify-center gap-5 ">
              <div className="w-[150px] h-[150px] text-[80px] font-bold flex items-center justify-center text-black rounded-lg shadow-3xl shadow-black border dark:bg-white/0 dark:text-white duration-300">
                <div className="w-[80px] h-[80px]  flex items-center justify-center ">
                  <div className="cubeApp w-[70px] h-[70px] text-white   ">
                    <div className="face frontApp">
                      <div className="w-[50px] h-[50px] bg-zinc-400 rounded-lg dark:bg-white"></div>
                    </div>

                    <div className="face leftApp">
                      <div className="w-[50px] h-[50px] border-[3px] rounded-lg flex items-center justify-center text-[8px]">
                        TOOLS
                      </div>
                    </div>

                    <div className="face topApp">
                      <div className="w-[50px] h-[50px] bg-black rounded-lg dark:bg-cyan-500"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[250px] h-[30px] bottom-5 border-black text-[10px] flex flex-col justify-center items-center">
                <p>
                  <span className="text-white mr-[1px] font-bold">Tools</span>은
                  일상에서 활용도가 높은 다양한 도구를
                </p>
                <p>통합한 스마트 플랫폼입니다.</p>
              </div>
            </li>
            <li className="w-[250px] h-[250px] flex flex-col items-center justify-center gap-5">
              <div className="w-[150px] h-[150px] text-[80px] font-bold border flex items-center justify-center text-white rounded-lg shadow-3xl shadow-black dark:border dark:bg-white/0 dark:text-white duration-300 ">
                <span className="scale-[1.8]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                    />
                  </svg>
                </span>
              </div>
              <div className="w-[250px] h-[30px] bottom-5 border-black text-[10px] flex flex-col justify-center items-center">
                <p>
                  <span className="text-white mr-[1px] font-bold">Note</span>는
                  검색 및 월별 필터링을 통해 메모를 쉽고
                </p>
                <p>체계적으로 관리할 수 있는 간편한 디지털 메모장입니다.</p>
              </div>
            </li>
            <li className="w-[250px] h-[250px] flex flex-col items-center justify-center gap-5">
              <div className="w-[150px] h-[150px] text-[80px] font-bold border flex items-center justify-center text-white rounded-lg shadow-3xl shadow-black dark:border dark:bg-white/0 dark:text-white duration-300">
                <span className="scale-[1.8]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                </span>
              </div>
              <div className="w-[250px] h-[30px] bottom-5 border-black text-[10px] flex flex-col justify-center items-center">
                <p>
                  <span className="text-white mr-[1px] font-bold">
                    Calendar
                  </span>
                  는 일정을 한눈에 관리할 수 있는 앱으로,
                </p>
                <p>날짜별 할 일과 메모를 손쉽게 정리할 수 있습니다."</p>
              </div>
            </li>
            <li className="w-[250px] h-[250px] flex flex-col items-center justify-center gap-5">
              <div className="w-[150px] h-[150px] text-[80px] font-bold border flex items-center justify-center text-white rounded-lg shadow-3xl shadow-black dark:border dark:bg-white/0 dark:text-white duration-300">
                <span className="scale-[1.8]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                    />
                  </svg>
                </span>
              </div>
              <div className="w-[250px] h-[30px] bottom-5 border-black text-[10px] flex flex-col justify-center items-center">
                <p>
                  <span className="text-white mr-[1px] font-bold">Weather</span>
                  는 간편한 인터페이스로 지역별 기온과
                </p>
                <p>현재 날씨, 예보를 확인할 수 있는 앱입니다.</p>
              </div>
            </li>
            <li className="w-[250px] h-[250px] flex flex-col items-center justify-center gap-5">
              <div className="w-[150px] h-[150px] text-[80px] font-bold border flex items-center justify-center text-white rounded-lg shadow-3xl shadow-black dark:border dark:bg-white/0 dark:text-white duration-300">
                <span className="scale-[1.8]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
                    />
                  </svg>
                </span>
              </div>
              <div className="w-[250px] h-[30px] bottom-5 border-black text-[10px] flex flex-col justify-center items-center">
                <p>
                  <span className="text-white mr-[1px] font-bold">
                    Calculator
                  </span>
                  는 산술 계산과
                </p>
                <p>여러 상황의 퍼센트를 계산해 주는 앱입니다.</p>
              </div>
            </li>
            <li className="w-[250px] h-[250px] flex flex-col items-center justify-center gap-5">
              <div className="w-[150px] h-[150px] text-[80px] font-bold border flex items-center justify-center text-white rounded-lg shadow-3xl shadow-black dark:border dark:bg-white/0 dark:text-white duration-300">
                <span className="scale-[1.8]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10"
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
              </div>
              <div className="w-[250px] h-[30px] bottom-5 border-black text-[10px] flex flex-col justify-center items-center">
                <p>사용자만의 배경 이미지를 설정 할 수 있는 </p>
                <p>
                  <span className="text-white mr-[1px] font-bold">
                    Light Mode
                  </span>
                  와
                  <span className="text-white mr-[1px] font-bold">
                    Dark Mode
                  </span>
                  가 있습니다.
                </p>
              </div>
            </li>
          </ul>
          <ul className="w-full h-[20px] flex items-center justify-center gap-2 absolute bottom-0 ">
            {List.map((item, idx) => (
              <button
                key={item}
                className={`${
                  count !== idx ? "w-[7px]" : "w-[10px]"
                } h-[7px] border-2 rounded-full duration-300`}
                onClick={() => setCount(idx)}
              ></button>
            ))}
          </ul>
        </div>
        <div className="w-full flex items-center justify-center">
          {user === "" ? (
            <div></div>
          ) : user === null ? (
            <Link href="/setting/mypage" className="relative group">
              Go to Login
              <div className="absolute w-[0%] h-[1px] bg-white group-hover:w-[100%] duration-300"></div>
            </Link>
          ) : (
            <div className="w-full text-gray-300 font-medium flex flex-col leading-[30px] items-center">
              <div>
                Hello!
                <span className="text-white px-2">{user?.split("@")[0]}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
