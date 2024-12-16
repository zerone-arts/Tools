"use client";
import { useEffect, useRef, useState } from "react";

const month = [
  "All Month",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function MonthGroup({
  selectMonth,
  setSelectMonth,
  cancelHandle,
}: {
  selectMonth: any;
  setSelectMonth: any;
  cancelHandle: any;
}) {
  const [active, setActive] = useState(false);

  const monthRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // 특정 영역 외 클릭 시 발생하는 이벤트
    function handleFocus(e: MouseEvent) {
      if (monthRef.current && !monthRef.current?.contains(e.target as Node)) {
        // input 체크 해제
        setActive(false);
      }
    }

    // 이벤트 리스너에 handleFocus 함수 등록
    document.addEventListener("mouseup", handleFocus);
    return () => {
      document.removeEventListener("mouseup", handleFocus);
    };
  }, [monthRef]);
  return (
    <button
      className={`
      relative
  w-[80px] sm:opacity-100 sm:w-[150px]
  rounded-lg flex items-center text-xs
  justify-center bg-gray-200 text-gray-400 
  duration-300
  group
  overflow-y-hidden

  ${active ? "h-[250px] bg-gray-300 dark:bg-black/50" : "h-[40px] bg-gray-200"}

  dark:bg-gray-200/0 text-white border

  `}
      onClick={() => (
        active ? setActive(false) : setActive(true), cancelHandle()
      )}
      ref={monthRef}
    >
      <div className="flex justify-center items-center absolute top-[0px] h-[40px] ">
        <span className="opacity-0 w-0 sm:opacity-100 sm:w-[60px] text-gray-400 ">
          Group by:
        </span>
        <span className="font-light text-black pl-1 text-[10px] sm:text-xs  dark:text-white">
          {month[selectMonth]}
        </span>
        <span className="text-gray-600 pl-2 dark:text-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4.0}
            stroke="currentColor"
            className="size-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
      <div
        className={`w-[150px] h-full absolute top-[45px] overflow-y-scroll right-0 bg-black `}
      >
        <ul className="pr-4  font-light text-black  text-[10px] text-right flex flex-col gap-2  sm:text-xs  ">
          {month.map((item, index) => {
            return (
              <li
                key={item}
                className={`hover:text-black ${
                  index === selectMonth
                    ? "text-black dark:text-white"
                    : "text-gray-400 dark:text-gray-400 dark:hover:text-white"
                }`}
                onClick={() => setSelectMonth(index)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </button>
  );
}
