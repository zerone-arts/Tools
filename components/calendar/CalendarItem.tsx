"use client";
import { abs } from "mathjs";
import { useEffect, useState } from "react";

export default function CalendarItem({
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
  const [count, setCount] = useState(1);
  const [transition, setTransition] = useState(true);

  const day = new Date().getDate();
  const anniversary = [5, 10];
  const FrameArr = [11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0];

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
    const firstDayOfMonth = getFirstDayOfMonth(fYear, fMonth);
    let firstEmpty = Array(firstDayOfMonth).fill(null);
    let days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return [...firstEmpty, ...days];
  };

  // const days = generateDays(year, month);

  const dragHandle = (e: any) => {
    if (e === "-1") {
      setTransition(true),
        setCount((prev) => prev - 1),
        setMonth((prev: any) => prev - 1);
    }
    if (e === "+1") {
      setTransition(true),
        setCount((prev) => prev + 1),
        setMonth((prev: any) => prev + 1);
    }
  };

  useEffect(() => {
    let timeoutId: any;
    if (count === 0) {
      setMonth(11);
      setYear(year - 1);
      timeoutId = setTimeout(() => {
        setCount(FrameArr.length - 2);

        setTransition(false);
      }, 500);
    }
    if (count === FrameArr.length - 1) {
      setMonth(0);
      setYear(year + 1);
      timeoutId = setTimeout(() => {
        setCount(1);

        setTransition(false);
      }, 500);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [count]);

  return (
    <div className="h-[330px] max-sm:h-[240px]  text-xl max-sm:text-sm relative overflow-scroll">
      <div className="absolute flex w-full justify-center z-[999]">
        <button
          className="w-10 h-10 border bg-white text-black"
          onClick={() => dragHandle("-1")}
        >
          -
        </button>
        <button
          className="w-10 h-10 border bg-white text-black"
          onClick={() => dragHandle("+1")}
        >
          +
        </button>
      </div>
      <div
        className={`absolute w-full h-[330px] max-sm:h-[240px] ${
          transition && "transition-transform duration-300"
        } `}
        style={{
          transform: `translateY(-${count * 100}%)`,
        }}
      >
        {/* <ul className=" h-[330px] max-sm:h-[240px] grid grid-cols-7 justify-items-center">
          {days.map((item: any, idx: any) => (
            <li
              key={idx}
              className={`flex items-center justify-center rounded-full max-sm:w-[35px] max-sm:h-[35px]  w-[50px] h-[50px] ${
                day === item ? "border-2" : ""
              } ${anniversary.includes(item) ? "bg-cyan-800" : ""}`}
            >
              {item}
            </li>
          ))}
        </ul> */}
        {FrameArr.map((item: any, idx: any) => {
          return (
            <ul
              className=" h-[330px] max-sm:h-[240px] grid grid-cols-7 justify-items-center"
              key={idx}
            >
              {generateDays(year, item).map((item: any, idx: any) => (
                <li
                  key={idx}
                  className={`flex items-center justify-center rounded-full max-sm:w-[35px] max-sm:h-[35px]  w-[50px] h-[50px] ${
                    day === item ? "border-2" : ""
                  } ${anniversary.includes(item) ? "bg-cyan-800" : ""}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          );
        })}
      </div>
    </div>
  );
}
