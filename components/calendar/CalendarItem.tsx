"use client";
import { useState } from "react";

export default function CalendarItem({ month }: { month: any }) {
  return (
    <div className="flex flex-col w-full p-2">
      <ul className="h-full max-sm:h-[300px] grid grid-cols-7 justify-items-center ">
        {["S", "M", "T", "W", "T", "F", "S"].map((item, idx) => (
          <li
            key={idx}
            className="flex items-center justify-center border rounded-full max-sm:w-[35px] max-sm:h-[35px]  w-[50px] h-[50px]"
          >
            {item}
          </li>
        ))}
        {new Array(42).fill("").map((item, idx) => (
          <li
            key={idx}
            className="flex items-center justify-center border rounded-full max-sm:w-[35px] max-sm:h-[35px]  w-[50px] h-[50px]"
          >
            {idx}
          </li>
        ))}
      </ul>
    </div>
  );
}
