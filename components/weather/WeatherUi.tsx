"use client";

export default function WeatherUi({
  currentLocationHandle,
  setSearchInput,
  searchLocationHandle,
}: {
  currentLocationHandle: any;
  setSearchInput: any;
  searchLocationHandle: any;
}) {
  const onChangeSearchInput = (e: any) => {
    setSearchInput(e.target.value);
  };
  return (
    <div
      className=" h-[60px]  w-full flex items-center justify-between max-sm:flex-col
     gap-2  pt-[20px] max-sm:h-[120px] max-sm:mt-10 max-sm:gap-3"
    >
      <h1 className=" text-xl font-medium text-gray-200 dark:text-gray-200 max-sm:text-5xl">
        Weather
      </h1>
      <div
        className="absolute w-full flex justify-between p-[50px] gap-2
       max-sm:items-center max-sm:justify-center max-sm:mt-10"
      >
        <div className=""></div>
        <div className="border border-white/50 w-[300px] h-[40px] rounded-3xl flex items-center p-3 gap-2 justify-between dark:bg-zinc-900 dark:text-gray-200/85 max-sm:w-[200px] max-sm:h-[30px] ">
          <input
            type="text"
            className=" w-[230px] max-sm:w-[150px] bg-white/0 focus:outline-none placeholder:text-sm text-gray-200 pl-2"
            placeholder="지역을 입력해주세요."
            onChange={onChangeSearchInput}
            onKeyPress={(e) =>
              e.key === "Enter" ? searchLocationHandle() : undefined
            }
          />
          <button
            className=" text-gray-200/85 pr-2"
            onClick={() => searchLocationHandle()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        <button
          className=" w-[110px] h-[40px]  rounded-3xl  flex items-center justify-between p-4 border-2  border-cyan-500 text-cyan-500
        transition-all
        max-sm:w-[30px]    max-sm:h-[30px] max-sm:p-1 
        "
          onClick={() => currentLocationHandle()}
        >
          <span className="">
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
              className="feather feather-map-pin max-sm:scale-[0.7]"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </span>

          <p className="text-sm pr-1 max-sm:opacity-0 transition-all">
            내 위치
          </p>
        </button>
      </div>
    </div>
  );
}
