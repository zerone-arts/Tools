import { useEffect, useState } from "react";

export default function Popup({
  month,
  year,
  setMonth,
  setYear,
  selectDay,
  setSelectDay,
  anniversarys,
  setAnniversarys,
}: {
  month: any;
  year: any;
  setMonth: any;
  setYear: any;
  selectDay: any;
  setSelectDay: any;
  anniversarys: any;
  setAnniversarys: any;
}) {
  const [inputToggle, setInputToggle] = useState(false);
  const [content, setContent] = useState("");
  const [contentArr, setContentArr] = useState([]);

  const saveHandle = () => {
    if (content.trim() === "") return;

    let existContent = anniversarys.some(
      (anniv: any) =>
        anniv.anniversaryYear === year &&
        anniv.anniversaryMonth === month &&
        anniv.anniversaryDay === selectDay
    );

    const newAnniversary = {
      anniversaryYear: year,
      anniversaryMonth: month,
      anniversaryDay: selectDay,
      anniversaryContent: [content],
    };

    if (!existContent) {
      setAnniversarys((prev: any) => [...prev, newAnniversary]);
    }

    setInputToggle(false);
    setContent("");
  };

  console.log(anniversarys);

  const inputValueHandle = (e: any) => {
    setContent(e.target.value);
  };

  const deleteHandle = (idx: any) => {
    console.log(idx);
  };

  useEffect(() => {
    if (!selectDay) {
      setInputToggle(false);
    }
  }, [selectDay]);

  useEffect(() => {
    const filteredAnniversary = anniversarys
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
      className={`absolute w-[300px] h-[200px] bg-cyan-600 left-1/2  transform -translate-x-1/2  max-sm:w-[250px] duration-300 z-[999] rounded-xl overflow-hidden flex flex-col p-2 gap-0 ${
        selectDay === null ? "bottom-[-300px]" : "bottom-[30px]"
      }`}
    >
      <div className="w-full  flex justify-between mb-2">
        <div className="font-bold px-3">{selectDay}</div>

        <button
          onClick={() => setInputToggle(true)}
          className={`duration-200 scale-[1] hover:scale-[1.2]  ${
            inputToggle ? "opacity-0" : "opacity-1"
          }`}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-5"
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
        className={` duration-300  px-2  w-full flex justify-between items-center ${
          inputToggle
            ? "h-7 opacity-1 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        } `}
      >
        <input
          className={`w-3/4  h-full border bg-white/0 focus:outline-none px-2  rounded-md shadow-xl  `}
          type="text"
          value={content}
          onChange={inputValueHandle}
        ></input>
        <button
          className="text-gray-200 hover:text-white "
          onClick={saveHandle}
        >
          <span className=""> save</span>
        </button>
      </div>
      <ul
        className={`w-full  px-3  flex flex-col duration-300 overflow-scroll  ${
          inputToggle ? "text-gray-300" : "text-gray-100 "
        }`}
      >
        {contentArr.map((content: any, idx: any) => {
          return (
            <li
              key={idx}
              className="border flex items-center  justify-between group"
            >
              <p>{content} </p>
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
