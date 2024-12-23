"use client";
import { weatherIconHandle, WeathersTodayType } from "@/app/weather/page";
import { useEffect, useState } from "react";

const LYRIC = [
  {
    time: [1, 2, 3, 4, 5],
    name: "Panic! At the Disco - High Hopes",
    lyric: "Always had high, high hopes",
    lyricKR: "언제나 높고 높은 희망을 가졌어",
  },
  {
    time: [6, 7, 8, 9, 10],
    name: "OneRepublic - I Ain't Worried",
    lyric: "I ain't worried 'bout it right now",
    lyricKR: "난 지금 걱정 하나 없어.",
  },
  {
    time: [11, 12, 13, 14, 15],
    name: "Sia - Unstoppable",
    lyric: "I'll show you that I am",
    lyricKR: "내가 누군지 보여줄게",
  },
  {
    time: [16, 17, 18, 19, 20],
    name: "Charlie Puth - Dangerously",
    lyric: "I loved you dangerously",
    lyricKR: "죽을만큼 사랑해",
  },
  {
    time: [21, 22, 23, 24],
    name: "Henry Moodie - drunk text",
    lyric: "I wish I Was who you drunk texted at midnight.",
    lyricKR: "있잖아 난, 네가 술에 취해 밤에 연락하는 사람이 나였으면 좋겠어.",
  },
];

export default function TimeWeather({
  WeathersToday,
}: {
  WeathersToday: WeathersTodayType[];
}) {
  const [currentTime, setCurrentTime] = useState(new Date().getHours());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getHours());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-[250px] h-[230px] rounded-xl flex-grow flex-col b  dark:bg-zinc-900 flex p-2 justify-center max-sm:flex-grow-0 text-gray-200 max-sm:border border-white/50 dark:border-none">
      <div className="w-full overflow-scroll flex flex-col gap-[6px] ">
        <div className="pl-2">
          <h1 className="font-semibold max-sm:mb-1">Today</h1>
        </div>
        <ul className="flex gap-[10px] h-[90px] w-full pl-2">
          {WeathersToday.map((item, idx) => {
            return (
              <li
                key={idx}
                className="bg-zinc-700/80  w-[70px] rounded-lg flex flex-col justify-center items-center gap-1 dark:bg-zinc-700 flex-shrink-0"
              >
                <div className="flex gap-1 text-[10px] font-semibold">
                  <span>{item.time}</span>
                  <span> {item.time < 18 ? "AM" : "PM"}</span>
                </div>
                <div>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: weatherIconHandle(item.weather)!,
                    }}
                  />
                </div>
                <div className="flex text-[12px]">
                  {item.temp}
                  <span className="text-[8px] font-bold mt-[1px]">&#8451;</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" w-full h-[80px]  p-2 mt-5 gap-5  flex flex-col items-center justify-center max-sm:gap-3 max-sm:h-[20px] ">
        <ul className="text-[8px] max-[740px]:text-[6px] drop-shadow-xl  w-full">
          {LYRIC.map((item, idx) => (
            <li
              key={item.name}
              className={`w-full h-[20px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition duration-300 ${
                item.time.some((time) => time === currentTime)
                  ? "opacity-1"
                  : "opacity-0 "
              }`}
            >
              <p className={``}>{item.name}</p>
            </li>
          ))}
        </ul>
        <ul className="relative w-full  text-[12px] max-[740px]:text-[10px] text-yellow-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] flex flex-col items-center ">
          {LYRIC.map((item, idx) => (
            <li
              key={item.name}
              className={`w-full h-[20px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition duration-300 ${
                item.time.some((time) => time === currentTime)
                  ? "opacity-1"
                  : "opacity-0 "
              }`}
            >
              <p className={``}>{item.lyric}</p>
            </li>
          ))}
        </ul>
        <ul className="text-[8px] max-[740px]:text-[6px] drop-shadow-xl  w-full">
          {LYRIC.map((item, idx) => (
            <li
              key={item.name}
              className={`w-full h-[20px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition duration-300 ${
                item.time.some((time) => time === currentTime)
                  ? "opacity-1"
                  : "opacity-0 "
              }`}
            >
              <p className={``}>{item.lyricKR}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
