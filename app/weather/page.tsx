import DayWeather from "@/components/weather/DayWeather";
import PresentWeather from "@/components/weather/PresentWeather";
import TimeWeather from "@/components/weather/TimeWeather";
import WeatherUi from "@/components/weather/WeatherUi";
import { getForecast, getWeather } from "../api/weather/route";

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

export type WeathersTodayType = {
  id: number;
  time: number;
  temp: number;
  weather: string;
};

export const WeathersToday = [
  { id: 1, time: 1, temp: 4, weather: "cloud" },
  { id: 2, time: 2, temp: 4, weather: "sun" },
  { id: 3, time: 3, temp: 4, weather: "night" },
  { id: 4, time: 4, temp: 4, weather: "snow" },
  { id: 5, time: 5, temp: 4, weather: "sunset" },
  { id: 6, time: 6, temp: 4, weather: "sunrise" },
  { id: 7, time: 7, temp: 4, weather: "wind" },
  { id: 8, time: 8, temp: 4, weather: "cloud" },
  { id: 9, time: 9, temp: 4, weather: "cloud" },
  { id: 10, time: 10, temp: 4, weather: "cloud" },
  { id: 11, time: 11, temp: 4, weather: "cloud" },
  { id: 12, time: 12, temp: 4, weather: "cloud" },
  { id: 13, time: 13, temp: 4, weather: "cloud" },
  { id: 14, time: 14, temp: 4, weather: "cloud" },
  { id: 15, time: 15, temp: 4, weather: "cloud" },
  { id: 16, time: 16, temp: 4, weather: "cloud" },
  { id: 17, time: 17, temp: 4, weather: "cloud" },
  { id: 18, time: 18, temp: 4, weather: "cloud" },
  { id: 19, time: 19, temp: 4, weather: "cloud" },
  { id: 20, time: 20, temp: 4, weather: "cloud" },
  { id: 21, time: 21, temp: 4, weather: "cloud" },
  { id: 22, time: 22, temp: 4, weather: "cloud" },
  { id: 23, time: 23, temp: 4, weather: "cloud" },
  { id: 24, time: 24, temp: 4, weather: "cloud" },
];

export default async function WeatherPage({ props }: { props: any }) {
  const weathers = await getWeather();
  const forecast = await getForecast();
  const filteredForecast = forecast.list?.filter(
    (_: any, index: any) => index % 8 === 7
  );

  return (
    <div className="">
      <div className="h-full max-sm:mt-[40px]">
        <div className=" p-7  flex gap-7  max-sm:justify-center">
          <PresentWeather weathers={weathers} />
        </div>
        <div className="p-7 pt-2 max-sm:h-[500px] flex max-sm:items-center gap-7 max-sm:flex-col max-sm:gap-7 max-sm:pt-0">
          <TimeWeather WeathersToday={WeathersToday} />
          <DayWeather filteredForecast={filteredForecast} />
        </div>
      </div>
    </div>
  );
}
