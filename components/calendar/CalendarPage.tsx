"use client";

import CalendarLeftPage from "@/components/calendar/CalendarLeft/CalendarLeftPage";
import CalendarRightPage from "@/components/calendar/CalendarRight/CalendarRightPage";

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

export default function CalendarPageCSR() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectDay, setSelectDay] = useState<number | null>(null);
  const [user, setUser] = useState<any>(null);

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
    user,
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

  const userIdFetch = async () => {
    const { data } = await supabase.auth.getSession();
    const session = data?.session;
    console.log(session?.user?.email);

    if (session?.user?.email) {
      setUser(session.user.email);
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    if (user) {
      fetchList();
    }
  }, [user]);

  const fetchList = async () => {
    const { data, error } = await supabase
      .from("rotionCalendarTable")
      .select("*")
      .eq("user_id", user);
    if (error) {
      return;
    }
    console.log(data);
    setAnniversarys(data);
  };

  useEffect(() => {
    userIdFetch();
  }, []);

  return (
    <div className="w-full h-screen text-gray-100 flex items-center justify-center absolute">
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
