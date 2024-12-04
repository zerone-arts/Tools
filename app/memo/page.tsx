export default function MemoPage() {
  return (
    <div className="w-full h-screen rounded-xl flex flex-col ">
      <div className=" w-full h-[170px] flex flex-col bg-gray-100 gap-2 pr-3">
        <div className="w-full  p-1 pt-5 flex items-center justify-between ">
          <div className="text-xl pl-10">Memo</div>
          <div className="flex gap-4">
            <div className="w-[200px] h-[40px] ">
              <span className="absolute flex justify-center items-center w-9 h-9 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 mt-1"
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
                // onChange={(e) => console.log(e.target.value)}
              />
            </div>

            <button
              className="w-[120px] border-2 
          rounded-lg text-sm flex items-center 
          justify-center border-indigo-400
          text-indigo-700
          "
            >
              + New Memo
            </button>
          </div>
        </div>
        <div className="h-full flex justify-end p-1 gap-4">
          <button
            className="w-[80px] h-[40px]
          rounded-lg flex items-center text-xs
          justify-between bg-gray-200 text-gray-400 px-4
          "
          >
            Sort
            <span className="text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3.0}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
          <button
            className="w-[150px] h-[40px] 
          rounded-lg flex items-center text-xs
          justify-center bg-gray-200 text-gray-400 
          "
          >
            Group by:
            <span className="font-light text-black pl-1">All Month</span>
            <span className="text-gray-600 pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4.0}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="w-full bg-gray-300 h-full border-t-2 border-gray-500 border-opacity-10"></div>
    </div>
  );
}
