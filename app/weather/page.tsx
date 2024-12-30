"use client";

import DayWeather from "@/components/weather/DayWeather";
import PresentWeather from "@/components/weather/PresentWeather";
import TimeWeather from "@/components/weather/TimeWeather";
import WeatherUi from "@/components/weather/WeatherUi";
import { getForecast, getWeather } from "../api/weather/route";
import axios from "axios";
import { useEffect, useState } from "react";

export const weekDayNames = ["일", "월", "화", "수", "목", "금", "토"];
export const monthNames = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

export const getDate = (dateUnix: number): string => {
  const date = new Date(dateUnix * 1000);
  const weekDayName = weekDayNames[date.getDay()];
  const monthName = monthNames[date.getMonth()];

  return `${monthName} ${date.getDate()}일 ${weekDayName}요일`;
};

export default function WeatherPage({ props }: { props: any }) {
  // const weathers = await getWeather();
  // const forecast = await getForecast();

  const [weathers, setWeathers] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const getWeather = async (
    // lat: number = 33.4996213,
    // lon: number = 126.5311884
    lat: number = 37.514575,
    lon: number = 127.0495556
  ) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API}&units=metric`
      );
      const data = res.data;

      setWeathers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getForecast = async (
    lat: number = 37.514575,
    lon: number = 127.0495556
  ) => {
    try {
      const res: any = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API}&units=metric`
      );
      const data = res.data;
      setForecast(data);
    } catch (error) {
      console.error(error);
    }
  };

  const currentLocationHandle = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
          getWeather(position.coords.latitude, position.coords.longitude);
          getForecast(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            alert(
              "위치 정보 접근이 차단되었습니다. 브라우저 설정을 확인해주세요"
            );
          } else {
            alert("위치 정보를 가져오는 데 실패했습니다.");
          }
        }
      );
    }
  };

  useEffect(() => {
    getWeather();
    getForecast();
  }, []);

  return (
    <div className="relative w-full dark:dark:bg-black/40 dark:text-gray-100 max-sm:h-screen max-sm:overflow-scroll">
      <WeatherUi currentLocationHandle={currentLocationHandle} />
      {weathers && forecast ? (
        <div className="h-full max-sm:mt-[40px]">
          <div className=" p-7  flex gap-7  max-sm:justify-center">
            <PresentWeather weathers={weathers} />
          </div>
          <div className="p-7 pt-2 max-sm:h-[500px] flex max-sm:items-center gap-7 max-sm:flex-col max-sm:gap-7 max-sm:pt-0">
            <TimeWeather forecast={forecast} />
            <DayWeather forecast={forecast} />
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
