"use client";
import { MONTHLIST } from "@/app/calendar/page";
import CalendarItem from "./CalendarItem";
import { useEffect, useState } from "react";
import Popup from "./PopUp";

export default function CalendarLeftPage({
  month,
  year,
  setMonth,
  setYear,
  selectDay,
  setSelectDay,
  anniversarys,
  setAnniversarys,
  fetchList,
  user,
}: {
  month: any;
  year: any;
  setMonth: any;
  setYear: any;
  selectDay: any;
  setSelectDay: any;
  anniversarys: any;
  setAnniversarys: any;
  fetchList: any;
  user: any;
}) {
  const [toggle, setToggle] = useState(false);
  const [yearToggle, setYearToggle] = useState(false);

  const calendarState = {
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

  const monthTitleHandle = (month: any) => {
    if (MONTHLIST[month]) return MONTHLIST[month].toUpperCase().toUpperCase();
  };

  return (
    <div className="relative w-[450px] max-[1100px]:w-[450px] h-full flex flex-col gap-5 dark:bg-black">
      <div
        className={`absolute w-[450px] h-full  pointer-events-none  duration-300 z-[989]  ${
          toggle ? "bg-black/80 pointer-events-auto" : "bg-black/0"
        } `}
        onClick={() => (selectDay !== null ? setSelectDay(null) : "")}
      ></div>
      <div className="w-full h-[80px] flex flex-col justify-end max-sm:px-5  px-10 ">
        <div className="font-bold  text-[20px] text-cyan-400 dark:text-cyan-600 w-[200px] h-[30px] flex items-center gap-2">
          <button
            className={` absolute top-0 z-[990] flex items-center  ${
              toggle
                ? "w-2/3 h-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center"
                : " w-[150px] h-[20px] top-[40px] left-[15px]"
            }`}
            onClick={() => (toggle ? setToggle(false) : setToggle(true))}
          >
            <div
              className={` flex flex-wrap  justify-center items-center px-[2px] 
          max-sm:ml-2 ${
            toggle
              ? "w-[300px] h-[300px] gap-2 max-sm:-ml-2 "
              : "w-[20px] h-[20px] gap-[0.5px]    ml-7 "
          }
            `}
            >
              {Array(12)
                .fill("")
                .map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className={` w-1/4 h-1/5 text-cyan-100 hover:text-cyan-400   flex justify-center items-center   ${
                        toggle ? "rounded-md  bg-cyan-400/0" : "bg-cyan-400"
                      }`}
                      onClick={() => (toggle ? setMonth(idx) : null)}
                    >
                      <p
                        className={` text-[10px] max-sm:text-[8px]  ${
                          toggle
                            ? "opacity-1 duration-300"
                            : "opacity-0 duration-0"
                        }`}
                      >
                        {monthTitleHandle(idx)}
                      </p>
                    </div>
                  );
                })}
            </div>
          </button>
          <span className="p-7 tracking-[2px] ">{monthTitleHandle(month)}</span>
        </div>
        <div className="text-[10px] text-cyan-600 dark:text-cyan-700 px-1 flex gap-2">
          <button
            onClick={() =>
              yearToggle ? setYearToggle(false) : setYearToggle(true)
            }
          >
            {year}
          </button>
          <button
            className={`text-cyan-100 hover:text-cyan-600 hover:dark:text-cyan-700 duration-200 ${
              yearToggle ? "opacity-1" : "opacity-0"
            }`}
            onClick={() => {
              setYearToggle(false), setYear(year - 1);
            }}
          >
            {year - 1}
          </button>
          <button
            className={`text-cyan-100 hover:text-cyan-600 hover:dark:text-cyan-700 duration-200 ${
              yearToggle ? "opacity-1" : "opacity-0"
            }`}
            onClick={() => {
              setYearToggle(false), setYear(year + 1);
            }}
          >
            {year + 1}
          </button>
        </div>
      </div>
      <div className=" w-full h-[450px] flex  justify-center  max-sm:h-[300px] overflow-scroll">
        <div className="flex flex-col w-full py-2 px-6 gap-1 max-sm:px-2">
          <ul className="h-[45px] max-sm:h-[35px] grid grid-cols-7 justify-items-center">
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
      <Popup
        {...calendarState}
        monthTitleHandle={monthTitleHandle}
        fetchList={fetchList}
      />
    </div>
  );
}
