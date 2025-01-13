import { useEffect, useState } from "react";

export default function CalendarRightPage({
  month,
  year,
  selectDay,
  setSelectDay,
  anniversarys,
  setAnniversarys,
}: {
  month: any;
  year: any;
  selectDay: any;
  setSelectDay: any;
  anniversarys: any;
  setAnniversarys: any;
}) {
  const generateDays = (year: any, month: any) => {
    let fMonth =
      month <= -1
        ? 12 - Math.abs(month)
        : month && month >= 12
        ? month - 12
        : month;
    let fYear = month <= -1 ? year - 1 : year && month >= 12 ? year + 1 : year;

    const getDaysInMonth = (fYear: any, fMonth: any) =>
      new Date(fYear, fMonth + 1, 0).getDate();
    const getFirstDayOfMonth = (fYear: any, fMonth: any) =>
      new Date(fYear, fMonth, 1).getDay();

    const daysInMonth = getDaysInMonth(fYear, fMonth);

    let days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return [...days];
  };

  const getWeek = (day: any) => {
    const weekArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const weekArrIdx = new Date(year, month, day).getDay();

    return weekArr[weekArrIdx];
  };

  const getContent = (day: any) => {
    const Arr = anniversarys
      .filter(
        (anniv: any) =>
          anniv.anniversaryYear === year &&
          anniv.anniversaryMonth === month &&
          anniv.anniversaryDay === day
      )
      .flatMap((anniv: any) => anniv.anniversaryContent);

    return Arr;
  };

  return (
    <div className={`w-[450px] h-full max-[1100px]:hidden flex `}>
      <div className="w-full h-full overflow-scroll">
        <ul>
          {generateDays(year, month).map((item, idx) => {
            return (
              <li key={item} className="w-full h-[80px]  flex">
                <div
                  className={`w-10 flex flex-col items-center justify-center ${
                    item === new Date().getDate() &&
                    month === new Date().getMonth() &&
                    year === new Date().getFullYear()
                      ? "text-cyan-600"
                      : ""
                  } `}
                >
                  <p className="text-[6px]">{getWeek(item)}</p>
                  <p>{item}</p>
                </div>
                <ul
                  className={`w-full overflow-scroll
                    ${
                      idx % 2 == 0
                        ? "bg-gray-100/10 dark:bg-cyan-600"
                        : "bg-gray-100/5 dark:bg-cyan-600/95"
                    }`}
                >
                  {getContent(item).map((content: any, idx: any) => {
                    return (
                      <li
                        key={idx}
                        className="text-[15px] flex items-center gap-3 px-3"
                      >
                        <div className="w-[2px] h-[7px] rounded-full bg-white"></div>
                        <p>{content}</p>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
