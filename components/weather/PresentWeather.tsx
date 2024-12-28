"use client";

import { getDate } from "@/app/weather/page";
import Image from "next/image";

export default function PresentWeather({ weathers }: { weathers: any }) {
  const date = getDate(weathers.dt);
  let iconUrl = require(`@/public/assets/image/icon/${weathers.weather[0].icon}.png`);

  return (
    <div className=" w-[250px] h-[230px] rounded-xl  flex flex-col gap-2 text-gray-200 dark:bg-zinc-900 p-10 dark:p-5 transition-all  max-sm:justify-center max-sm:items-center dark:max-sm:justify-normal dark:max-sm:items-start">
      <div>
        <h2 className="font-bold">Present</h2>
      </div>
      <div className="flex items-center">
        <h1 className="text-[60px] flex">
          {Math.floor(weathers.main.temp)}
          <span className="text-sm mt-3 font-bold">&#8451;</span>
        </h1>
        <div className="">
          <Image
            className="w-[70px] h-[70px]"
            width="500"
            height="500"
            src={iconUrl}
            alt={weathers.weather[0].description}
          />
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
          <p>{date}</p>
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
