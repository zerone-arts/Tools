import { useEffect, useState } from "react";

export default function CalendarItem({
  month,
  year,
  setMonth,
  setYear,
  selectDay,
  setSelectDay,
  anniversarys,
}: {
  month: any;
  year: any;
  setMonth: any;
  setYear: any;
  selectDay: any;
  setSelectDay: any;
  anniversarys: any;
}) {
  const [count, setCount] = useState(1);
  const [transition, setTransition] = useState(true);
  const [startY, setStartY] = useState<number | null>(null);
  const day = new Date().getDate();

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

  const dragHandle = (e: any) => {
    if (e === "-1") {
      setTransition(true),
        setCount((prev) => prev - 1),
        setMonth((prev: any) => prev - 1);

      count === 1 ? setYear(year - 1) : null;
    }

    if (e === "+1") {
      setTransition(true),
        setCount((prev) => prev + 1),
        setMonth((prev: any) => prev + 1);

      count === 12 ? setYear(year + 1) : null;
    }
  };

  useEffect(() => {
    let timeoutId: any;
    if (count === 0) {
      setMonth(11);
      timeoutId = setTimeout(() => {
        setCount(FrameArr.length - 2);

        setTransition(false);
      }, 300);
    }
    if (count === 13) {
      setMonth(0);
      timeoutId = setTimeout(() => {
        setCount(1);
        setTransition(false);
      }, 300);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [count]);

  // useEffect(() => {
  //   const frameIndex = FrameArr.findIndex((frameMonth) => frameMonth === month);
  //   if (frameIndex !== -1) {
  //     setTransition(true);
  //     setCount(frameIndex);
  //   }
  // }, [month]);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    const clientY =
      "touches" in e
        ? (e as React.TouchEvent).touches[0].clientY
        : (e as React.MouseEvent).clientY;
    setStartY(clientY);
  };

  const handleMouseUp = (e: React.MouseEvent | React.TouchEvent) => {
    if (startY !== null) {
      const clientY =
        "touches" in e
          ? (e as React.TouchEvent).changedTouches[0].clientY
          : (e as React.MouseEvent).clientY;
      const distance = clientY - startY;

      if (distance <= -50) {
        dragHandle("+1");
      } else if (distance >= 50) {
        dragHandle("-1");
      }
    }
  };

  return (
    <div
      className="h-[250px] max-sm:h-[240px]  text-[15px] max-sm:text-sm relative overflow-hidden select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      <div
        className={`absolute w-full h-[250px] max-sm:h-[240px] ${
          transition && "transition-transform duration-300"
        } `}
        style={{
          transform: `translateY(-${count * 100}%)`,
        }}
      >
        {FrameArr.map((item: any, idx: any) => {
          return (
            <ul
              className="h-[250px] max-sm:h-[240px] grid grid-cols-7 justify-items-center"
              key={idx}
            >
              {generateDays(year, item).map((item: any, idx: any) => (
                <li
                  key={idx}
                  className={`flex items-center justify-center rounded-full max-sm:w-[35px] max-sm:h-[35px] w-[40px] h-[40px] duration-300 hover:bg-cyan-500  ${
                    day === item &&
                    month === new Date().getMonth() &&
                    year === new Date().getFullYear()
                      ? "border-2 font-bold"
                      : ""
                  } ${
                    anniversarys.some(
                      (anniv: any) =>
                        anniv.anniversaryDay === item &&
                        anniv.anniversaryYear === year &&
                        anniv.anniversaryMonth === month
                    )
                      ? "bg-cyan-800"
                      : ""
                  }`}
                >
                  <button
                    className="w-full h-full rounded-full"
                    onClick={() => setSelectDay(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          );
        })}
      </div>
    </div>
  );
}
