"use client";
import { useState } from "react";

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

export default function MonthGroup() {
  const [active, setActive] = useState(false);
  const [selectMonth, setSelectMonth] = useState(0);
  return (
    <button
      className={`
      relative
      h-[40px] 
  w-[80px] sm:opacity-100 sm:w-[150px]
  rounded-lg flex items-center text-xs
  justify-center bg-gray-200 text-gray-400 

  duration-300
  group
  overflow-y-hidden

  ${active ? "h-[250px] bg-gray-300" : "h-[40px] bg-gray-300"}

  `}
      onClick={() => (active ? setActive(false) : setActive(true))}
    >
      <div className="flex justify-center items-center absolute top-[0px] h-[40px]">
        <span className="opacity-0 w-0 sm:opacity-100 sm:w-[60px]">
          Group by:
        </span>
        <span className="font-light text-black pl-1 text-[10px] sm:text-xs">
          {month[selectMonth]}
        </span>
        <span className="text-gray-600 pl-2 ">
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
      <div className="w-[150px] h-[180px] absolute top-[45px] overflow-y-scroll right-0">
        <ul className="pr-4   font-light text-black  text-[10px] text-right flex flex-col gap-2  sm:text-xs  ">
          {month.map((item, index) => {
            return (
              <li
                key={item}
                className={`hover:text-black ${
                  index === selectMonth ? "text-black" : "text-gray-400"
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
