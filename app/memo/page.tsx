"use client";

import MemoContent from "@/components/memo/MemoContent";

import MonthGroup from "@/components/memo/ui/MonthGroup";

import { useState } from "react";

interface List {
  id: number;
  title: string;
  text: string;
  date: string;
}

let TestList = [
  {
    id: 0,
    title: "Hellow black  1",
    text: "dummyData text !!",
    date: "2024-12-5",
  },
  {
    id: 1,
    title: "hellow white  2",
    text: "dummyData text !!",
    date: "2024-12-4",
  },
  {
    id: 2,
    title: "Hellow yellow  3",
    text: "dummyData text !!",
    date: "2024-12-3",
  },
  {
    id: 3,
    title: "Hellow Green  4",
    text: "dummyData text !!",
    date: "2024-12-5",
  },
  {
    id: 4,
    title: "Hellow Pupple  5",
    text: "dummyData text !!",
    date: "2024-12-4",
  },
  {
    id: 5,
    title: "Hellow Grat  6",
    text: "dummyData text !!",
    date: "2024-12-3",
  },
];

export default function MemoPage() {
  const [search, setSearch] = useState("");
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [count, setCount] = useState(null);
  const [list, setList] = useState<List[]>(TestList);
  const [createBtn, setCreateBtn] = useState(false);

  const deleteHandle = () => {
    setDeletePopUp(false);

    if (count !== null) {
      // console.log(`${count}가 삭제 되었습니다.`);
      // list.splice(count, 1);

      setList(list.filter((item, index) => index !== count));
    }
  };

  const updateHandle = (titleValue: string, textValue: string) => {
    if (count !== null) {
      const upDateList: any = list.map((item, idx) => {
        if (count === idx) {
          return { ...item, title: titleValue, text: textValue };
        } else {
          return { ...item };
        }
      });
      setList(upDateList);
    }
  };

  const createContentHandle = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);
    let NowDate = year + "-" + month + "-" + day;

    setList((prevList) => [
      ...prevList,
      { id: list.length, title: "", text: "", date: NowDate },
    ]);

    setCreateBtn(true);
  };

  return (
    <div className="relative flex flex-col w-full h-screen rounded-xl ">
      <div className=" w-full h-[170px] flex flex-col bg-gray-100 gap-2 z-10 ">
        <div className="flex items-center justify-between p-1 pt-5 ">
          <div className="pl-10 text-xl ">Memo</div>
          <div className="flex gap-4 pr-3 w-9 sm:w-[120px]">
            <button
              className="w-9 sm:w-[120px] h-[40px] border-2 
          rounded-lg text-sm flex items-center 
          justify-center border-indigo-400
          text-indigo-700
          duration-300
        
          "
              onClick={createContentHandle}
            >
              +
              <span className="opacity-0 w-0 sm:opacity-100 sm:w-[80px] whitespace-nowrap duration-300">
                New Memo
              </span>
            </button>
          </div>
        </div>
        <div className="absolute right-0 flex justify-end h-full gap-4 p-1 pr-4 top-20">
          <div className="w-[200px] h-[40px] ">
            <span className="absolute flex items-center justify-center text-gray-400 w-9 h-9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="mt-1 size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
            <input
              className="w-full h-[40px] bg-gray-200 rounded-lg pl-8 placeholder:text-gray-400 text-xs focus:outline-none"
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <MonthGroup />
        </div>
      </div>
      <div className="relative z-10 w-full h-full overflow-scroll bg-gray-200 border-t-2 border-gray-500 border-opacity-10 ">
        <MemoContent
          content={list}
          searchValue={search}
          setDeletePopUp={setDeletePopUp}
          count={count}
          setCount={setCount}
          updateHandle={updateHandle}
          createBtn={createBtn}
          setCreateBtn={setCreateBtn}
        />
      </div>
      <div
        className={`${
          deletePopUp
            ? "z-20 opacity-100"
            : "-z-20 opacity-0 pointer-events-none"
        } absolute w-full h-screen top-0 z-20 flex items-center justify-center bg-black bg-opacity-50`}
      >
        <div
          className="w-[270px] h-[100px] bg-gray-200 rounded-2xl border-4 border-indigo-400
           text-indigo-700 flex flex-col items-center justify-center gap-2"
        >
          <h1>정말 이 메모를 삭제하시겠습니까?</h1>
          <div className="h-3 flex gap-[40px]">
            <button
              className="m-1 duration-300 opacity-50 hover:text-red-500 hover:opacity-100"
              onClick={deleteHandle}
            >
              삭제
            </button>
            <button
              className="m-1 duration-300 opacity-50 hover:text-indigo-700 hover:opacity-100"
              onClick={() => setDeletePopUp(false)}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
