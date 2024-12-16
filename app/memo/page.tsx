"use client";

import MemoContent from "@/components/memo/MemoContent";

import MonthGroup from "@/components/memo/ui/MonthGroup";
import { Database } from "@/types_db";
import { supabase } from "@/utils/supabase";

import { useEffect, useState } from "react";

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
  const [list, setList] = useState<
    Database["public"]["Tables"]["rotionTable"]["Row"][]
  >([]);
  const [createBtn, setCreateBtn] = useState(false);
  const [selectMonth, setSelectMonth] = useState(0);

  const deleteHandle = async () => {
    setDeletePopUp(false);

    if (count !== null) {
      // console.log(`${count}가 삭제 되었습니다.`);
      // list.splice(count, 1);

      // setList(list.filter((item, index) => index !== count));

      const { data, error } = await supabase
        .from("rotionTable")
        .delete()
        .eq("id", count);
      if (error) {
        console.log(error);
      }
      fetchList();
    }
    setCount(null);
  };

  const updateHandle = async (titleValue: string, textValue: string) => {
    if (count !== null) {
      if (createBtn) {
        const { data, error } = await supabase.from("rotionTable").insert({
          title: titleValue,
          text: textValue,
        });

        if (error) {
          console.log(error);
        }

        setCreateBtn(false);
        fetchList();
      } else {
        const { data, error } = await supabase
          .from("rotionTable")
          .update({
            title: titleValue,
            text: textValue,
          })
          .eq("id", count);
        if (error) {
          console.log(error);
        }

        fetchList();
      }
    }
  };

  const createContentHandle = () => {
    if (!createBtn) {
      setSelectMonth(0);
      setList((prevList) => [
        { id: list.length + 500, title: "", text: "", created_at: "New" },
        ...prevList,
      ]);
      setCreateBtn(true);
    }
  };

  const cancelHandle = () => {
    setList(list.filter((list) => list.created_at !== "New"));
    setCreateBtn(false);
    setCount(null);
  };

  const fetchList = async () => {
    const { data, error } = await supabase.from("rotionTable").select("*");
    if (error) {
      return;
    }
    console.log(new Date(data[2].created_at));

    let filter = data.sort((a: any, b: any) => {
      // return b.created_at.substring(5, 7) - a.created_at.substring(5, 7);
      let aDate: any = new Date(a.created_at);
      let bDate: any = new Date(b.created_at);
      return bDate - aDate;
    });
    setList(filter);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className={`relative flex flex-col w-full h-screen rounded-xl `}>
      <div className=" w-full h-[170px] flex flex-col bg-gray-100 gap-2 z-10 dark:bg-black/40">
        <div className="flex items-center justify-between p-1 pt-5 ">
          <div className="pl-10 text-xl font-medium dark:text-gray-200">
            Memo
          </div>
          <div className="flex gap-4 pr-3 w-9 sm:w-[120px]">
            <button
              className="w-9 sm:w-[120px] h-[40px] border-2 
          rounded-lg text-sm flex items-center 
          justify-center border-indigo-400
          text-indigo-700

          dark:text-indigo-400
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
        <div className="absolute right-0 flex justify-end h-[50px] gap-4 p-1 pr-4 top-20">
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
              className="w-full h-[40px] bg-gray-200 rounded-lg pl-8 placeholder:text-gray-400 text-xs focus:outline-none dark:bg-gray-200/0  dark:dark:bg-zinc-900 dark:text-gray-400"
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              onClick={cancelHandle}
            />
          </div>
          <MonthGroup
            selectMonth={selectMonth}
            setSelectMonth={setSelectMonth}
            cancelHandle={cancelHandle}
          />
        </div>
      </div>
      <div
        className="relative z-8 w-full h-full overflow-scroll bg-gray-200 border-t-2 border-gray-500 border-opacity-10 
      dark:bg-black/40 dark:border-opacity-80 
      "
      >
        <MemoContent
          content={list}
          searchValue={search}
          setDeletePopUp={setDeletePopUp}
          count={count}
          setCount={setCount}
          updateHandle={updateHandle}
          createBtn={createBtn}
          selectMonth={selectMonth}
          cancelHandle={cancelHandle}
        />
      </div>
      <div
        className={`${
          deletePopUp
            ? "z-20 opacity-100"
            : "-z-20 opacity-0 pointer-events-none"
        } absolute w-full h-screen top-0 z-20 flex items-center justify-center bg-black bg-opacity-50 dark:bg-opacity-80  `}
      >
        <div
          className="w-[270px] h-[100px] bg-gray-200 rounded-2xl border-4 border-indigo-400
           text-indigo-700 flex flex-col items-center justify-center gap-2 dark:bg-black dark:text-gray-300"
        >
          <h1>정말 이 메모를 삭제하시겠습니까?</h1>
          <div className="h-3 flex gap-[40px]">
            <button
              className="m-1 duration-300 opacity-50 hover:text-red-500 hover:opacity-100 dark:opacity-80"
              onClick={deleteHandle}
            >
              삭제
            </button>
            <button
              className="m-1 duration-300 opacity-50 hover:text-indigo-700 hover:opacity-100 dark:opacity-80"
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
