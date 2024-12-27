import DayWeather from "@/components/weather/DayWeather";
import PresentWeather from "@/components/weather/PresentWeather";
import TimeWeather from "@/components/weather/TimeWeather";
import WeatherUi from "@/components/weather/WeatherUi";
import { getWeather } from "../api/weather/route";

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
    name: "clouds",
    icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
  },
  {
    name: "rain",
    icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-rain"><line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>`,
  },
  {
    name: "snow",
    icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-snow"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line></svg>`,
  },
  {
    name: "sun",
    icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  },
  {
    name: "moon",
    icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
  },

  {
    name: "mist",
    icon: `
<svg fill="#ffffff" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 217.43 217.43" xml:space="preserve">
<g>
	<path d="M144.797,47.095c0-4.142-3.358-7.5-7.5-7.5H7.5c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h129.797
		C141.439,54.595,144.797,51.237,144.797,47.095z"/>
	<path d="M209.93,70.405H58.632c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5H209.93c4.142,0,7.5-3.358,7.5-7.5
		S214.072,70.405,209.93,70.405z"/>
	<path d="M174.53,116.214c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5H22.446c-4.142,0-7.5,3.358-7.5,7.5
		c0,4.142,3.358,7.5,7.5,7.5H174.53z"/>
	<path d="M199.441,132.024H47.619c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h151.822c4.142,0,7.5-3.358,7.5-7.5
		S203.583,132.024,199.441,132.024z"/>
	<path d="M125.759,162.835H25.068c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h100.69c4.142,0,7.5-3.358,7.5-7.5
		C133.259,166.193,129.901,162.835,125.759,162.835z"/>
</g>
</svg>`,
  },
];

export default async function WeatherPage() {
  const weathers = await getWeather();

  return (
    <div className="relative w-full dark:dark:bg-black/40 dark:text-gray-100 max-sm:h-screen max-sm:overflow-scroll">
      <WeatherUi />
      <div className="h-full max-sm:mt-[40px]">
        <div className=" p-7  flex gap-7  max-sm:justify-center">
          <PresentWeather weathers={weathers} />
        </div>
        <div className="p-7 pt-2 max-sm:h-[500px] flex max-sm:items-center gap-7 max-sm:flex-col max-sm:gap-7 max-sm:pt-0">
          <TimeWeather WeathersToday={WeathersToday} />
          <DayWeather WeathersDay={WeathersDay} />
        </div>
      </div>
    </div>
  );
}
