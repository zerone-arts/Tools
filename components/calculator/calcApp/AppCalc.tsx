"use client";

import { useEffect, useRef, useState } from "react";
import { evaluate } from "mathjs";
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
  const [typingValue, setTypingValue] = useState("0");
  const [value, setValue] = useState("");
  const [valueCheck, setValueCheck] = useState(false);

  const checkType = (e: any) => {
    if (
      CalcGroup.some(
        (item: any) =>
          item.name === e.key ||
          e.key === "Backspace" ||
          e.key === "*" ||
          e.key === "/" ||
          e.key === "-" ||
          e.key === "(" ||
          e.key === ")"
      )
    ) {
      setValueCheck(true);
    } else {
      setValueCheck(false);
    }

    if (e.key === "Enter") {
      calculateHandle();
    }
  };

  const valueHandle = (e: any) => {
    if (valueCheck) {
      const { value } = e.target;
      // '/'를 '÷'로 변환
      let rawValue = value.replace(/[^0-9+\-*/().]/g, "");
      let modifiedValue = rawValue.replace(/\//g, "÷").replace(/\*/g, "×");
      setTypingValue(addMommas(modifiedValue));

      if (
        e.target.value.indexOf("(") == -1 ||
        e.target.value.indexOf(")") != -1
      ) {
        if (
          e.target.value.indexOf("+") != -1 ||
          e.target.value.indexOf("-") != -1 ||
          e.target.value.indexOf("*") != -1 ||
          e.target.value.indexOf("%") != -1 ||
          e.target.value.indexOf("/") != -1 ||
          e.target.value.indexOf(")") != -1
        ) {
          setTypingValue("");
          setValue((prev) => prev + modifiedValue);
        }
      }
    }
  };

  const typingHandle = async (e: any) => {
    if (typingValue === "0") {
      setTypingValue("");
    }
    if (e !== "COPY") {
      setTypingValue((prev) => prev + e);
    }
    switch (e) {
      case "AC":
        setTypingValue("");
        setValue("");
        break;
      case "COPY":
        await navigator.clipboard.writeText(typingValue);

        break;
      case "C":
        setTypingValue(typingValue.slice(0, -1));
        break;
      case "+":
        setValue((prev) => prev + typingValue + e);
        setTypingValue("");
        break;
      case "−":
        setValue((prev) => prev + typingValue + e);
        setTypingValue("");
        break;
      case "×":
        setValue((prev) => prev + typingValue + e);
        setTypingValue("");
        break;
      case "÷":
        setValue((prev) => prev + typingValue + e);
        setTypingValue("");
        break;
      case "%":
        setValue((prev) => prev + typingValue + e);
        setTypingValue("");
        break;
      case "+/-":
        setValue((prev) => prev + "(" + typingValue + ")");
        setTypingValue("");
        break;
      case "Enter":
        calculateHandle();
        break;
    }
  };

  const calculateHandle = () => {
    let calcValue = value + typingValue;
    let filteredValue = calcValue.replace(/\÷/g, "/").replace(/\×/g, "*");

    filteredValue = filteredValue.replace(/,/g, "");

    try {
      let calc = evaluate(filteredValue);
      setTypingValue(calc.toString());

      setValue("");
    } catch {
      setTypingValue("error : AC 해주세요.");
      setValue("");
    }
  };

  const addMommas = (amount: any) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="w-[300px] h-full pt-[90px] pb-7 px-4 ">
      <div className="w-full h-full flex flex-col items-center justify-center ">
        <div className="relative w-[225px] h-[50px] text-[10px] text-gray-500 ">
          <p className="absolute bottom-0 right-0 text-right w-[225px] break-words px-[17px]">
            {addMommas(value)}
          </p>
        </div>
        <input
          className={`w-[225px] h-[30px]  mb-[10px] text-right bg-black/0  focus:outline-none px-4 ${
            typingValue === "0" ? "text-gray-400" : "text-gray-100"
          }`}
          type="text"
          value={addMommas(typingValue)}
          onChange={valueHandle}
          onKeyDown={checkType}
          onFocus={() => setTypingValue("")}
        />
        <div
          className={`w-[255px] h-5 items-center justify-end px-2 gap-2 flex duration-150 ${
            typingValue === "0"
              ? "opacity-0 pointer-events-none"
              : "opacity-1 pointer-events-auto"
          }`}
        >
          <button
            className=" w-[20px] h-[20px] flex items-center justify-center text-[10px] rounded-sm duration-200 text-gray-400 hover:text-gray-100 active:bg-zinc-700"
            onClick={() => typingHandle("AC")}
          >
            AC
          </button>

          <button
            className="peer w-[20px] h-[20px] flex items-center justify-center rounded-sm duration-200 text-gray-400 hover:text-gray-100 active:bg-zinc-700 "
            onClick={() => typingHandle("COPY")}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                />
              </svg>
            </span>
          </button>
          <div
            className={`text-[5px] opacity-0 peer-active:opacity-100 duration-200`}
          >
            copy!
          </div>
        </div>
        <ul className="w-[240px] h-[270px] flex flex-wrap  justify-center items-center text-gray-400 ">
          {CalcGroup.map((item, idx) => {
            return (
              <li
                key={item.name}
                className={` ${
                  idx === 16 ? "w-[108px]" : "w-[50px]"
                } h-[50px] mx-1 flex items-center justify-center text-[18px] `}
              >
                <button
                  className={`w-3/4 h-3/4 rounded-full  hover:text-white transition duration-200 scale-[1] hover:scale-[1.2] bg-zinc-700/0 active:bg-zinc-700 active:duration-100 ${
                    item.name === "Enter" ? "text-[14px]" : "text-[18px]"
                  }`}
                  onClick={() => typingHandle(item.name)}
                >
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
