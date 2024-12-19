export default function PresentWeather({}) {
  return (
    <div className="bg-gray-200 w-[250px] h-[230px] rounded-xl p-5 flex  flex-col gap-2 dark:bg-zinc-900">
      <div>
        <h2 className="font-bold">Present</h2>
      </div>
      <div className="flex items-center gap-7">
        <h1 className="text-[60px] flex">
          4 <span className="text-sm mt-3 font-bold">&#8451;</span>
        </h1>
        <div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-cloud-rain"
            >
              <line x1="16" y1="13" x2="16" y2="21"></line>
              <line x1="8" y1="13" x2="8" y2="21"></line>
              <line x1="12" y1="15" x2="12" y2="23"></line>
              <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
            </svg>
          </span>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-1 ">
        <div className="flex text-[0.5rem] gap-1 items-center">
          <span>
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
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
          </span>
          <p>12월 18일 수요일</p>
        </div>
        <div className="flex text-[0.5rem] gap-1 items-center ">
          <span>
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
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </span>
          <p>제주특별자치도 제주시 이도2동</p>
        </div>
      </div>
    </div>
  );
}
