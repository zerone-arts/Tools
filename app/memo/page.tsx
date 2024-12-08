"use client";

import MemoContent from "@/components/memo/MemoContent";
import MonthGroup from "@/components/memo/ui/MonthGroup";
import { useState } from "react";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Hellow black",
    content: "dummyData Content !!",
    date: "2024-12-5",
  },
  {
    id: 2,
    title: "hellow white",
    content: "dummyData Content !!",
    date: "2024-12-4",
  },
  {
    id: 3,
    title: "Hellow yellow",
    content: "dummyData Content !!",
    date: "2024-12-3",
  },
  {
    id: 4,
    title: "Hellow Green",
    content: "dummyData Content !!",
    date: "2024-12-5",
  },
  {
    id: 5,
    title: "Hellow Pupple",
    content: "dummyData Content !!",
    date: "2024-12-4",
  },
  {
    id: 6,
    title: "Hellow Grat",
    content: "dummyData Content !!",
    date: "2024-12-3",
  },
];

export default function MemoPage() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="w-full h-screen rounded-xl flex flex-col ">
      <div className=" w-full h-[170px] flex flex-col bg-gray-100 gap-2 z-10 ">
        <div className="p-1 pt-5 flex items-center justify-between ">
          <div className="text-xl pl-10 ">Memo</div>
          <div className="flex gap-4 pr-3 w-9 sm:w-[120px]">
            <button
              className="w-9 sm:w-[120px] h-[40px] border-2 
          rounded-lg text-sm flex items-center 
          justify-center border-indigo-400
          text-indigo-700
          duration-300
        
          "
            >
              +
              <span className="opacity-0 w-0 sm:opacity-100 sm:w-[80px] whitespace-nowrap duration-300">
                New Memo
              </span>
            </button>
          </div>
        </div>
        <div className="h-full flex justify-end p-1 gap-4 pr-4 absolute right-0 top-20">
          <div className="w-[200px] h-[40px] ">
            <span className="absolute flex justify-center items-center w-9 h-9 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-4 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
            <input
              className="w-full h-[40px] bg-gray-200 rounded-lg pl-8 placeholder:text-gray-400 text-xs focus:outline-none"
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <MonthGroup />
        </div>
      </div>
      <div className="z-10 relative w-full bg-gray-200 h-full border-t-2 border-gray-500 border-opacity-10 overflow-scroll ">
        <MemoContent content={DUMMY_DATA} searchValue={search} />
      </div>
    </div>
  );
}
