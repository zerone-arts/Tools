"use client";

import CalendarLeftPage from "@/components/calendar/CalendarLeft/CalendarLeftPage";
import CalendarRightPage from "@/components/calendar/CalendarRight/CalendarRightPage";
import PopUp from "@/components/calendar/CalendarLeft/PopUp";
import { useEffect, useState } from "react";
import { Database } from "@/types_db";
import { supabase } from "@/utils/supabase";

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

  // const [anniversarys, setAnniversarys] = useState<any[]>([
  //   {
  //     anniversaryYear: 2024,
  //     anniversaryMonth: 11,
  //     anniversaryDay: 10,
  //     anniversaryContent: ["day 5", "hello world", "test"],
  //   },
  //   {
  //     anniversaryYear: 2025,
  //     anniversaryMonth: 0,
  //     anniversaryDay: 5,
  //     anniversaryContent: [
  //       "day 5",
  //       "hello world",
  //       "test",
  //       "day 5",
  //       "hello world",
  //       "test",
  //     ],
  //   },
  //   {
  //     anniversaryYear: 2025,
  //     anniversaryMonth: 0,
  //     anniversaryDay: 15,
  //     anniversaryContent: ["day 15", "hello world"],
  //   },
  // ]);

  const [anniversarys, setAnniversarys] = useState<
    Database["public"]["Tables"]["rotionCalendarTable"]["Row"][]
  >([]);

  const calendarLeftState = {
    month,
    setMonth,
    year,
    setYear,
    selectDay,
    setSelectDay,
    anniversarys,
    setAnniversarys,
  };
  const calendarRightState = {
    month,
    year,
    selectDay,
    setSelectDay,
    anniversarys,
    setAnniversarys,
  };

  useEffect(() => {
    setSelectDay(null);
  }, [month]);

  const fetchList = async () => {
    const { data, error } = await supabase
      .from("rotionCalendarTable")
      .select("*");
    if (error) {
      return;
    }

    setAnniversarys(data);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="w-full text-gray-100 flex items-center justify-center ">
      <div className="duration-300  w-[900px] h-[600px] max-[1100px]:w-[450px] max-sm:w-[300px] max-sm:h-[580px] flex justify-between rounded-xl overflow-hidden border dark:border-none">
        <CalendarLeftPage {...calendarLeftState} fetchList={fetchList} />
        <CalendarRightPage {...calendarRightState} />
      </div>
      {/* <div className="duration-300  w-[1000px] h-[600px] max-[1100px]:w-[1000px] max-sm:w-[300px] max-sm:h-[430px] flex rounded-xl -translate-x-[300px] border dark:border-none">
        <CalendarLeftPage {...calendarLeftState} />
        <CalendarRightPage {...calendarRightState} />
      </div> */}
    </div>
  );
}
