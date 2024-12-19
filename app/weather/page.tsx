import DayWeather from "@/components/weather/DayWeather";
import PresentWeather from "@/components/weather/PresentWeather";
import TimeWeather from "@/components/weather/TimeWeather";
import WeatherUi from "@/components/weather/WeatherUi";

export type WeathersTodayType = {
  id: number;
  time: number;
  temp: number;
  weather: string;
};

export type WeathersDayType = {
  id: number;
  day: string;
  highTemp: number;
  lowTemp: number;
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
export const WeathersDay = [
  { id: 2, day: "12월 20일", highTemp: 4, lowTemp: 2, weather: "sun" },
  { id: 1, day: "12월 19일", highTemp: 4, lowTemp: 2, weather: "cloud" },
  { id: 3, day: "12월 21일", highTemp: 4, lowTemp: 2, weather: "night" },
  { id: 4, day: "12월 22일", highTemp: 4, lowTemp: 2, weather: "snow" },
  { id: 5, day: "12월 23일", highTemp: 4, lowTemp: 2, weather: "sunset" },
  { id: 6, day: "12월 24일", highTemp: 4, lowTemp: 2, weather: "sunrise" },
  { id: 7, day: "12월 25일", highTemp: 4, lowTemp: 2, weather: "wind" },
];

export const WEATHERICON = [
  {
    name: "cloud",
    icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
  },
  {
    name: "rain",
    icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-rain"><line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>`,
  },
  {
    name: "snow",
    icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-snow"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line></svg>`,
  },
  {
    name: "sun",
    icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  },
  {
    name: "night",
    icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
  },
  {
    name: "sunrise",
    icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunrise"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline></svg>`,
  },
  {
    name: "sunset",
    icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunset"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline></svg>`,
  },
  {
    name: "wind",
    icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wind"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>`,
  },
];
export const weatherIconHandle = (weather: string) => {
  let weatherIcon = WEATHERICON.find((item) => item.name === weather);

  return weatherIcon?.icon;
};

export default function WeatherPage() {
  return (
    <div className="w-full bg-white dark:dark:bg-black/40 dark:text-gray-100">
      <WeatherUi />
      <div className="p-7 flex gap-7">
        <PresentWeather />
        <TimeWeather WeathersToday={WeathersToday} />
      </div>
      <div className="pl-7 pt-2">
        <DayWeather WeathersDay={WeathersDay} />
      </div>
    </div>
  );
}
