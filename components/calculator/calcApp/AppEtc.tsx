"use client";

import { useState, useEffect } from "react";

export default function AppEtc() {
  const [values, setValues] = useState({
    value1: "",
    percentage1: "",
    value2: "",
    base2: "",
    value3: "",
    changeValue3: "",
    value4: "",
    increment4: "",
  });

  const [results, setResults] = useState<any>({
    result1: null,
    result2: null,
    result3: null,
    result4: null,
  });

  const calculateResults = () => {
    const {
      value1,
      percentage1,
      value2,
      base2,
      value3,
      changeValue3,
      value4,
      increment4,
    } = values;

    setResults({
      result1:
        value1 && percentage1
          ? ((parseFloat(value1) * parseFloat(percentage1)) / 100).toFixed(2)
          : null,
      result2:
        value2 && base2
          ? ((parseFloat(base2) / parseFloat(value2)) * 100).toFixed(2)
          : null,
      result3:
        value3 && changeValue3
          ? (
              ((parseFloat(changeValue3) - parseFloat(value3)) /
                parseFloat(value3)) *
              100
            ).toFixed(2)
          : null,
      result4:
        value4 && increment4
          ? (parseFloat(value4) * (1 + parseFloat(increment4) / 100)).toFixed(2)
          : null,
    });
  };

  useEffect(() => {
    calculateResults();
  }, [values]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // 변경된 그룹과 관련된 필드만 유지
    const relatedFields =
      {
        value1: ["value1", "percentage1"],
        percentage1: ["value1", "percentage1"],
        value2: ["value2", "base2"],
        base2: ["value2", "base2"],
        value3: ["value3", "changeValue3"],
        changeValue3: ["value3", "changeValue3"],
        value4: ["value4", "increment4"],
        increment4: ["value4", "increment4"],
      }[name] || [];

    const updatedValues = Object.fromEntries(
      (Object.keys(values) as (keyof typeof values)[]).map((key) => [
        key,
        relatedFields.includes(key) ? (key === name ? value : values[key]) : "",
      ])
    ) as typeof values;

    setValues(updatedValues);
  };

  return (
    <div className="w-[300px] h-full py-10 px-2 text-gray-100 ">
      <div className="w-full h-full flex flex-col items-center justify-between">
        <div className="w-full h-[400px] flex items-center justify-center text-[50px] overflow-scroll p-1 ">
          {results.result1 && <span className="">{results.result1}</span>}
          {results.result2 && <span className="">{results.result2}%</span>}
          {results.result3 && <span className="">{results.result3}%</span>}
          {results.result4 && <span className="">{results.result4}</span>}
        </div>
        <ul className="h-[150px] text-[10px] flex flex-col gap-2">
          <li>
            <input
              type="text"
              className="bg-black/0 border-b-[1px] w-[70px] h-3 opacity-50 text-right focus:outline-none focus:opacity-100 duration-200"
              name="value1"
              value={values.value1}
              onChange={handleInputChange}
            />
            <span className="mr-2"> 의</span>
            <input
              type="text"
              className="bg-black/0 border-b-[1px] w-[70px] h-3 opacity-50 text-right focus:outline-none focus:opacity-100 duration-200"
              name="percentage1"
              value={values.percentage1}
              onChange={handleInputChange}
            />
            <span className="mr-2"> %는?</span>
          </li>

          <li>
            <input
              type="text"
              className="bg-black/0 border-b-[1px] w-[70px] h-3 opacity-50 text-right focus:outline-none focus:opacity-100 duration-200"
              name="value2"
              value={values.value2}
              onChange={handleInputChange}
            />
            <span className="mr-2"> 에서</span>
            <input
              type="text"
              className="bg-black/0 border-b-[1px] w-[70px] h-3 opacity-50 text-right focus:outline-none focus:opacity-100 duration-200"
              name="base2"
              value={values.base2}
              onChange={handleInputChange}
            />
            <span className="mr-2"> 은(는) 몇%?</span>
          </li>

          <li>
            <input
              type="text"
              className="bg-black/0 border-b-[1px] w-[70px] h-3 opacity-50 text-right focus:outline-none focus:opacity-100 duration-200"
              name="value3"
              value={values.value3}
              onChange={handleInputChange}
            />
            <span className="mr-2"> 이/가</span>
            <input
              type="text"
              className="bg-black/0 border-b-[1px] w-[70px] h-3 opacity-50 text-right focus:outline-none focus:opacity-100 duration-200"
              name="changeValue3"
              value={values.changeValue3}
              onChange={handleInputChange}
            />
            <span className="mr-2"> 으로 변하면?</span>
          </li>

          <li>
            <input
              type="text"
              className="bg-black/0 border-b-[1px] w-[70px] h-3 opacity-50 text-right focus:outline-none focus:opacity-100 duration-200"
              name="value4"
              value={values.value4}
              onChange={handleInputChange}
            />
            <span className="mr-2"> 이/가</span>
            <input
              type="text"
              className="bg-black/0 border-b-[1px] w-[70px] h-3 opacity-50 text-right focus:outline-none focus:opacity-100 duration-200"
              name="increment4"
              value={values.increment4}
              onChange={handleInputChange}
            />
            <span className="mr-2"> % 증가하면?</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
