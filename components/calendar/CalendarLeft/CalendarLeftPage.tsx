"use client";
import { MONTHLIST } from "@/app/calendar/page";
import CalendarItem from "../CalendarItem";
import { useEffect, useState } from "react";

export default function CalendarLeftPage({
  month,
  year,
  setMonth,
  setYear,
}: {
  month: any;
  year: any;
  setMonth: any;
  setYear: any;
}) {
  const calendarState = {
    month,
    setMonth,
    year,
    setYear,
  };

  const monthTitleHandle = (month: any) => {
    if (MONTHLIST[month]) return MONTHLIST[month].toUpperCase().toUpperCase();
  };

  return (
    <div className="relative w-[500px] h-full flex flex-col gap-5 dark:bg-black">
      <div className="w-full h-[80px] flex flex-col justify-end px-5">
        <div className="font-bold tracking-[2px] text-[20px] dark:text-cyan-400">
          {monthTitleHandle(month)}
        </div>
        <div className="text-[10px] dark:text-cyan-600">{year}</div>
      </div>
      <div className=" w-full h-[450px] flex  justify-center  max-sm:h-[300px] overflow-scroll">
        <div className="flex flex-col w-full py-2 px-6 gap-1 max-sm:px-2">
          <ul className="h-[55px] max-sm:h-[35px] grid grid-cols-7 justify-items-center">
            {["S", "M", "T", "W", "T", "F", "S"].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center justify-center  rounded-full max-sm:w-[35px] max-sm:h-[35px]  w-[50px] h-[50px] font-light"
              >
                {item}
              </li>
            ))}
          </ul>
          <CalendarItem {...calendarState} />
        </div>
      </div>
      {/* <PopUp /> */}
    </div>
  );
}
