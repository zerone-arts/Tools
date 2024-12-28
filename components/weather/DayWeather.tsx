"use client";

import { getDate, weekDayNames } from "@/app/weather/page";
import Image from "next/image";

export default function DayWeather({
  filteredForecast,
}: {
  filteredForecast: any;
}) {
  // console.log(filteredForecast[0]);
  return (
    <div className="w-[250px] h-[230px] rounded-xl dark:bg-zinc-900 p-4 flex flex-col text-gray-200 border border-white/40 dark:border-none">
      <h1 className="font-semibold">Day</h1>
      <div className="p-0 h-full overflow-scroll flex flex-col gap-4 mt-0 ">
        <ul className="flex flex-col ">
          {filteredForecast.map((item: any, index: number) => {
            let date = new Date(item.dt * 1000);
            let weekDayName = weekDayNames[date.getDay()];
            return (
              <li
                key={item.dt}
                className="w-full h-[35px]  flex items-center gap-2 "
              >
                <div className="text-sm w-[50px] pl-3">
                  <Image
                    className="w-[35px] h-[35px]"
                    width="500"
                    height="500"
                    src={require(`@/public/assets/image/icon/${item.weather[0].icon}.png`)}
                    alt={item.weather[0].description}
                  />
                </div>
                <div className="flex items-center gap-1 w-[30px] ">
                  <p className="text-[10px]">
                    {Math.floor(item.main.temp_min)}˚
                  </p>
                  <p className="text-[9px] text-gray-400">
                    {Math.floor(item.main.temp_max)}˚
                  </p>
                </div>

                <div className="text-[9px] m-7 text-gray-400 flex  justify-between w-[70px] ">
                  <p>{getDate(item.dt).slice(0, length - 3)}</p>
                  <p>{weekDayName}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
