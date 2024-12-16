export default function WeatherUi() {
  return (
    <div
      className="border border-black h-[80px] flex items-center justify-between
     gap-2 mx-8"
    >
      <h1 className=" text-xl font-medium dark:text-gray-200">Weather</h1>

      <div className="bg-gray-200 w-[300px] h-[40px] rounded-3xl flex items-center p-3 gap-2 dark:bg-zinc-900 dark:text-gray-200/85">
        <span className="mt-[2px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </span>
        <input
          type="text"
          className="bg-white/0 focus:outline-none placeholder:text-sm "
          placeholder="지역을 입력해주세요."
        />
      </div>
      <button
        className=" w-[110px] h-[40px] rounded-3xl  flex items-center justify-between p-3 border-2  border-indigo-500 text-indigo-700 dark:text-indigo-400
        
        "
      >
        <div>O</div>
        <p className="text-sm pr-1">내 위치</p>
      </button>
    </div>
  );
}
