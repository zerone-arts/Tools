import { supabase } from "@/utils/supabase";
import { useEffect, useRef, useState } from "react";

export default function Popup({
  month,
  year,
  setMonth,
  setYear,
  selectDay,
  setSelectDay,
  anniversarys,
  setAnniversarys,
  monthTitleHandle,
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
  monthTitleHandle: any;
  fetchList: any;
  user: any;
}) {
  const [inputToggle, setInputToggle] = useState(false);
  const [content, setContent] = useState("");
  const [contentArr, setContentArr] = useState([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const getWeek = (day: any) => {
    const weekArr = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
    ];

    const weekArrIdx = new Date(year, month, day).getDay();

    return weekArr[weekArrIdx];
  };

  const saveHandle = async () => {
    if (content.trim() === "") return;

    const existingAnniversary = anniversarys.find(
      (anniv: any) =>
        anniv.anniversaryYear === year &&
        anniv.anniversaryMonth === month &&
        anniv.anniversaryDay === selectDay
    );

    if (existingAnniversary) {
      const updatedContent = [
        ...existingAnniversary.anniversaryContent,
        content,
      ];

      const { error } = await supabase
        .from("rotionCalendarTable")
        .update({
          anniversaryYear: year,
          anniversaryMonth: month,
          anniversaryDay: selectDay,
          anniversaryContent: updatedContent,
          user_id: user,
        })
        .eq("id", existingAnniversary.id);

      if (error) {
        console.error("Error updating anniversary:", error);
        return;
      }
      fetchList();
    } else {
      const { error } = await supabase.from("rotionCalendarTable").insert({
        anniversaryYear: year,
        anniversaryMonth: month,
        anniversaryDay: selectDay,
        anniversaryContent: [content],
        user_id: user,
      });

      if (error) {
        console.error("Error inserting new anniversary:", error);
        return;
      }
      fetchList();
    }

    setInputToggle(false);
    inputRef.current?.blur();
    setContent("");
  };

  const inputValueHandle = (e: any) => {
    setContent(e.target.value);
  };

  const deleteHandle = async (idx: any) => {
    const targetAnniversary = anniversarys.find(
      (anniv: any) =>
        anniv.anniversaryYear === year &&
        anniv.anniversaryMonth === month &&
        anniv.anniversaryDay === selectDay
    );

    if (!targetAnniversary) return;

    const adjustedIdx = targetAnniversary.anniversaryContent.length - 1 - idx;
    const updatedContent = targetAnniversary.anniversaryContent.filter(
      (_: any, contentIdx: any) => contentIdx !== adjustedIdx
    );

    if (updatedContent.length > 0) {
      const { error } = await supabase
        .from("rotionCalendarTable")
        .update({
          anniversaryYear: year,
          anniversaryMonth: month,
          anniversaryDay: selectDay,
          anniversaryContent: updatedContent,
          user_id: user,
        })
        .eq("id", targetAnniversary.id);
      fetchList();
      if (error) {
        console.error("Error updating anniversary:", error);
        return;
      }
    } else {
      const { error } = await supabase
        .from("rotionCalendarTable")
        .delete()
        .eq("id", targetAnniversary.id)
        .eq("user_id", user);
      fetchList();
      if (error) {
        console.error("Error deleting anniversary:", error);
        return;
      }
    }
  };

  useEffect(() => {
    if (!selectDay) {
      setInputToggle(false);
    }
  }, [selectDay]);

  useEffect(() => {
    const filteredAnniversary: any = anniversarys
      .filter(
        (anniv: any) =>
          anniv.anniversaryYear === year &&
          anniv.anniversaryMonth === month &&
          anniv.anniversaryDay === selectDay
      )
      .flatMap((anniv: any) => anniv.anniversaryContent)
      .reverse();

    setContentArr(filteredAnniversary);
  }, [anniversarys, selectDay]);

  return (
    <div
      className={`absolute w-full h-[170px]  max-sm:w-full duration-300  overflow-hidden flex flex-col p-2 gap-0 shadow-xl bottom-2 max-sm:px-7 px-7`}
    >
      <div
        className={`w-full h-[2px] absolute top-0 left-0 flex gap-2 items-center px-10 max-sm:px-6 opacity-1 dark:opacity-0 duration-300`}
      >
        <div className="w-2/4 h-[1px] bg-white"></div>
        <div className="w-[2px] h-[2px] bg-white"></div>
        <div className="w-2/4 h-[1px] bg-white"></div>
      </div>
      <div className="w-full  flex justify-between mb-2 px-3 max-sm:px-0 mt-2">
        <div className="font-semibold w-full flex text-[13px] gap-1">
          <p>{monthTitleHandle(month)}</p>
          <p>{selectDay === null ? "" : getWeek(selectDay)}</p>
          <p>{selectDay}</p>
        </div>

        <button
          onClick={() => {
            setInputToggle(true), inputRef.current?.focus();
          }}
          className={`duration-200 scale-[1] hover:scale-[1.2] ${
            inputToggle ? "opacity-0" : "opacity-1"
          } ${selectDay === null ? "hidden" : ""}`}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </span>
        </button>
      </div>
      <div
        className={` duration-300   w-full flex justify-between items-center text-[10px] px-3 max-sm:px-0  ${
          inputToggle
            ? "h-5 opacity-1 pointer-events-auto mb-2"
            : "h-0 opacity-0 pointer-events-none mb-0"
        } `}
      >
        <input
          className={`w-3/4  h-full border-b-[1px] border-0 bg-white/0 focus:outline-none px-1  shadow-xl  `}
          ref={inputRef}
          type="text"
          value={content}
          onChange={inputValueHandle}
        ></input>
        <div className="flex gap-2">
          <button
            className="text-gray-200 hover:text-white "
            onClick={saveHandle}
          >
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </span>
          </button>
          <button
            className="text-gray-200 hover:text-white "
            onClick={() => {
              setInputToggle(false), inputRef.current?.blur();
            }}
          >
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <ul
        className={`w-full  px-3 text-[10px] max-sm:px-0  flex flex-col duration-300 overflow-scroll gap-1  ${
          inputToggle ? "text-gray-300" : "text-gray-100 "
        }`}
      >
        {contentArr.map((content: any, idx: any) => {
          return (
            <li key={idx} className="flex items-center  justify-between group">
              <p>• {content}</p>
              <button
                className="rounded-full duration-300  opacity-0 group-hover:opacity-100"
                onClick={() => deleteHandle(idx)}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
