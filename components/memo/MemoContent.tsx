"use Client";

import { useEffect, useState } from "react";

export default function MemoContent({
  content,
  searchValue,
  setDeletePopUp,
  count,
  setCount,
  updateHandle,
  createBtn,
  setCreateBtn,
}: {
  content: any;
  searchValue: any;
  setDeletePopUp: any;
  count: any;
  setCount: any;
  updateHandle: any;
  createBtn: any;
  setCreateBtn: any;
}) {
  const [toggle, setToggle] = useState(false);
  const [upDate, setUpDate] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onUpDateHandle = () => {
    setToggle(false);
    setUpDate(true);
  };

  const onSaveHandle = () => {
    setToggle(false);
    setUpDate(false);

    updateHandle(title, text);

    setTitle("");
    setText("");
  };

  const onCancelHandle = () => {
    setToggle(false);
    setUpDate(false);

    setTitle("");
    setText("");
  };

  const toggleHandle = (id: number) => {
    toggle ? setToggle(false) : setToggle(true);

    setCount(id);

    console.log(id);
  };

  useEffect(() => {
    if (createBtn) {
      toggleHandle(content.length - 1);
      onUpDateHandle();
    }
  }, [createBtn]);

  return (
    <div className="flex flex-wrap justify-center w-full p-4 gap-9 ">
      {content
        .slice(0)
        .reverse()
        .filter(
          (data: any) =>
            data?.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            data?.text.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((item: any, index: number) => {
          return (
            <li
              key={item.id}
              className="relative bg-white w-[270px] h-[200px] rounded-xl flex flex-col p-2 "
            >
              <div className="relative flex justify-between px-2 py-1">
                {upDate && count === item.id ? (
                  <input
                    className="font-bold outline-none "
                    placeholder={
                      item.title === "" ? "제목을 입력해주세요." : item.title
                    }
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  ></input>
                ) : (
                  <div className="font-bold h-[30px]">{item.title}</div>
                )}
                <div className="relative flex justify-end   w-[100px] ">
                  <div
                    className={`flex justify-center items-center gap-1  absolute duration-300  mt-1  mr-7 ${
                      toggle && item.id === count
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <button
                      className="opacity-60 hover:opacity-100"
                      onClick={onUpDateHandle}
                    >
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
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </button>
                    <button
                      className="opacity-60 hover:opacity-100"
                      onClick={() => setDeletePopUp(true)}
                    >
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
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                    className=" duration-300 pointer-events: none; absolute ml-2 opacity-50 hover:opacity-100 "
                    onClick={() => toggleHandle(item.id)}
                  >
                    {toggle && item.id === count ? (
                      <span className="relative top-1">
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
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                    ) : (
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                          />
                        </svg>
                      </span>
                    )}
                  </button>
                </div>
              </div>
              <div className="mx-1  my-3 border-[1px] border-gray-200" />
              {upDate && item.id === count ? (
                <textarea
                  className="mx-1 h-[90px] text-sm overflow-scroll bg-gray-100 outline-none resize-none rounded-md"
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
              ) : (
                <div className="mx-1 h-[90px] text-sm overflow-scroll">
                  {item.text}
                </div>
              )}
              <div className="absolute text-xs text-right text-gray-400 bottom-1 right-3">
                {item.date}
              </div>
              <button
                className={` absolute left-3 text-xs text-right text-indigo-500 font-bold bottom-1 bg-gray-100 p-1 rounded-md   border-2 border-indigo-500 duration-300
                  ${
                    upDate && item.id === count
                      ? "opaicty-50 hover:opacity-100 "
                      : "opacity-0 pointer-events-none"
                  }
                  `}
                onClick={onSaveHandle}
              >
                Save
              </button>
              <button
                className={` absolute left-[60px] text-xs text-right text-indigo-500 font-bold bottom-1 bg-gray-100 p-1 rounded-md   border-2 border-indigo-500 duration-300
                  ${
                    upDate && item.id === count
                      ? "opaicty-50 hover:opacity-100 "
                      : "opacity-0 pointer-events-none"
                  }
                  `}
                onClick={onCancelHandle}
              >
                Cancel
              </button>
            </li>
          );
        })}
    </div>
  );
}
