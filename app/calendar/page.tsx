"use client";

import CalendarLeftPage from "@/components/calendar/CalendarLeft/CalendarLeftPage";
import CalendarRightPage from "@/components/calendar/CalendarRight/CalendarRightPage";
import PopUp from "@/components/calendar/PopUp";
import { useState } from "react";

export const MONTHLIST = [
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

export default function CalendarPage() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <div className="w-full text-gray-100 flex items-center justify-center">
      <div className="duration-300 border w-[1000px] h-[600px] max-[1100px]:w-[500px] max-sm:w-[300px] max-sm:h-[430px] flex rounded-xl overflow-hidden">
        <CalendarLeftPage year={year} month={month} />
        <CalendarRightPage />
      </div>
    </div>
  );
}
