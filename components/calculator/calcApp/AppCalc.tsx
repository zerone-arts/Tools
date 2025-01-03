"use client";

import { useState } from "react";

const CalcGroup = [
  {
    name: "C",
    operator: "clear",
  },
  {
    name: "+/-",
    operator: "()",
  },
  {
    name: "%",
    operator: "%",
  },
  {
    name: "÷",
    operator: "/",
  },
  {
    name: "7",
    operator: "",
  },
  {
    name: "8",
    operator: "",
  },
  {
    name: "9",
    operator: "",
  },
  {
    name: "×",
    operator: "*",
  },
  {
    name: "4",
    operator: "",
  },
  {
    name: "5",
    operator: "",
  },
  {
    name: "6",
    operator: "",
  },
  {
    name: "−",
    operator: "-",
  },
  {
    name: "1",
    operator: "",
  },
  {
    name: "2",
    operator: "",
  },
  {
    name: "3",
    operator: "",
  },
  {
    name: "+",
    operator: "+",
  },
  {
    name: "0",
    operator: "",
  },
  {
    name: ".",
    operator: "",
  },
  {
    name: "Enter",
    operator: "=",
  },
];

export default function AppCalc({}) {
  const [typingValue, setTypingValue] = useState("");
  const [value, setValue] = useState("");
  const [valueCheck, setValueCheck] = useState(false);

  const checkType = (e: any) => {
    if (
      CalcGroup.some(
        (item: any) =>
          item.name === e.key ||
          e.key === "Enter" ||
          e.key === "Backspace" ||
          e.key === "*" ||
          e.key === "/"
      )
    ) {
      setValueCheck(true);
    } else {
      setValueCheck(false);
    }
  };

  const valueHandle = (e: any) => {
    if (valueCheck) {
      const { value } = e.target;
      // '/'를 '÷'로 변환
      const modifiedValue = value.replace(/\//g, "÷").replace(/\*/g, "+");
      setTypingValue(modifiedValue);
    }
  };

  return (
    <div className="w-1/2 h-full pt-[90px] pb-7 px-4">
      <div className="w-full h-full flex flex-col items-center justify-center ">
        <div className="relative w-[225px] h-[50px] text-[10px] text-gray-500 ">
          <p className="absolute bottom-0 right-0 text-right w-[225px] break-words px-3">
            {typingValue}
          </p>
        </div>
        <input
          className=" w-[225px] h-[30px]  mb-[10px] text-right bg-black/0  focus:outline-none px-3"
          type="text"
          value={typingValue}
          placeholder="0"
          onChange={valueHandle}
          onKeyDown={checkType}
        />
        <ul className="w-[240px] h-[270px] flex flex-wrap  justify-center items-center text-gray-400 ">
          {CalcGroup.map((item, idx) => {
            return (
              <li
                key={item.name}
                className={` ${
                  idx === 16 ? "w-[108px]" : "w-[50px]"
                } h-[50px] mx-1 flex items-center justify-center text-[18px] `}
              >
                <button className="w-3/4 h-3/4 rounded-full  hover:text-white transition duration-200 scale-[1] hover:scale-[1.2] bg-zinc-700/0 active:bg-zinc-700 active:duration-100">
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
