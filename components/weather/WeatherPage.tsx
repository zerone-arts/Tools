"use client";

import DayWeather from "@/components/weather/DayWeather";
import PresentWeather from "@/components/weather/PresentWeather";
import TimeWeather from "@/components/weather/TimeWeather";
import WeatherUi from "@/components/weather/WeatherUi";

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
declare global {
  interface Window {
    kakao: any;
  }
}
export default function WeatherPage({}) {
  // const weathers = await getWeather();
  // const forecast = await getForecast();

  const [weathers, setWeathers] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [currentLocation, setCurrentLocation] = useState("서울 강남구");
  const [searchInput, setSearchInput] = useState("");

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
    setCurrentLocation("Loading ...");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);

          getWeather(position.coords.latitude, position.coords.longitude);
          getForecast(position.coords.latitude, position.coords.longitude);

          if (typeof window !== "undefined") {
            window.kakao.maps.load(() => {
              let geocoder = new window.kakao.maps.services.Geocoder();
              let coord = new window.kakao.maps.LatLng(
                position.coords.latitude,
                position.coords.longitude
              );
              let callback = function (result: any, status: any) {
                if (status === window.kakao.maps.services.Status.OK) {
                  const arr = { ...result };

                  setCurrentLocation(
                    `${arr[0].address.region_1depth_name} ${arr[0].address.region_2depth_name} ${arr[0].address.region_3depth_name}`
                  );

                  // console.log(arr);
                  // setCurrentLocation(arr);
                }
              };
              let location = geocoder.coord2Address(
                coord.getLng(),
                coord.getLat(),
                callback
              );
            });
          }
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

  const searchLocationHandle = () => {
    if (typeof window !== "undefined") {
      window.kakao.maps.load(() => {
        let geocoder = new window.kakao.maps.services.Geocoder();

        let callback = function (result: any, status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            console.log(result[0].address_name);
            setLat(result[0].y);
            setLon(result[0].x);
            setCurrentLocation(result[0].address_name);
            getWeather(result[0].y, result[0].x);
            getForecast(result[0].y, result[0].x);
          }
        };
        let location = geocoder.addressSearch(searchInput, callback);
      });
    }
  };

  useEffect(() => {
    getWeather();
    getForecast();
  }, []);

  return (
    <div className="relative w-full h-screen dark:text-gray-100 max-sm:h-screen max-sm:overflow-y-scroll overflow-x-hidden">
      <WeatherUi
        currentLocationHandle={currentLocationHandle}
        setSearchInput={setSearchInput}
        searchLocationHandle={searchLocationHandle}
      />
      {weathers && forecast ? (
        <div className="h-full max-sm:mt-[40px]">
          <div className=" p-7  flex gap-7  max-sm:justify-center">
            <PresentWeather
              weathers={weathers}
              currentLocation={currentLocation}
            />
          </div>
          <div className="p-7 pt-2 max-sm:h-[500px] flex max-sm:items-center gap-7 max-sm:flex-col max-sm:gap-7 max-sm:pt-0">
            <TimeWeather forecast={forecast} />
            <DayWeather forecast={forecast} />
          </div>
        </div>
      ) : (
        <div className="absolute top-0 left-0 w-full h-screen text-white flex items-center justify-center">
          <div className="text-[50px] max-sm:text-[30px] font-thin opacity-80 tracking-[50px] max-sm:tracking-[20px]">
            Loading
          </div>
        </div>
      )}
    </div>
  );
}
