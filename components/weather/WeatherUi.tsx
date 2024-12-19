export default function WeatherUi() {
  return (
    <div
      className="h-[80px] flex items-center justify-between
     gap-2 mx-8 "
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
        className=" w-[110px] h-[40px] rounded-3xl  flex items-center justify-between p-4 border-2  border-indigo-500 text-indigo-700 dark:text-indigo-400
        
        "
      >
        <div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-map-pin"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </span>
        </div>
        <p className="text-sm pr-1">내 위치</p>
      </button>
    </div>
  );
}
