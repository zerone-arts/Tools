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
  const [selectDay, setSelectDay] = useState<number | null>(null);

  const [anniversarys, setAnniversarys] = useState<any[]>([
    {
      anniversaryYear: 2024,
      anniversaryMonth: 11,
      anniversaryDay: 10,
      anniversaryContent: ["day 5", "hello world", "test"],
    },
    {
      anniversaryYear: 2025,
      anniversaryMonth: 0,
      anniversaryDay: 5,
      anniversaryContent: [
        "day 5",
        "hello world",
        "test",
        "day 5",
        "hello world",
        "test",
      ],
    },
    {
      anniversaryYear: 2025,
      anniversaryMonth: 0,
      anniversaryDay: 15,
      anniversaryContent: ["day 15", "hello world"],
    },
  ]);

  const calendarState = {
    month,
    setMonth,
    year,
    setYear,
    selectDay,
    setSelectDay,
    anniversarys,
    setAnniversarys,
  };
  return (
    <div className="w-full text-gray-100 flex items-center justify-center  ">
      <div className="duration-300 border w-[1000px] h-[600px] max-[1100px]:w-[500px] max-sm:w-[300px] max-sm:h-[430px] flex rounded-xl overflow-hidden max-sm:px-2">
        <CalendarLeftPage {...calendarState} />
        <CalendarRightPage />
      </div>
    </div>
  );
}
