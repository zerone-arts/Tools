import {
  WEATHERICON,
  weatherIconHandle,
  WeathersTodayType,
} from "@/app/weather/page";

export default function TimeWeather({
  WeathersToday,
}: {
  WeathersToday: WeathersTodayType[];
}) {
  return (
    <div className=" w-[250px] h-[230px] rounded-xl flex-grow flex-col b  dark:bg-zinc-900 flex p-2 justify-center max-sm:flex-grow-0 text-gray-200 max-sm:border border-white/50 dark:border-none">
      <div className="w-full overflow-scroll flex flex-col gap-[6px] ">
        <div className="pl-2">
          <h1 className="font-semibold">Today</h1>
        </div>
        <ul className="flex gap-[10px] h-[90px] w-full pl-2  pt-1 mt-1">
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
        <ul className="w-full h-[60px]  p-2 t-0 flex ">
          {WeathersToday.map((item, index) => {
            return (
              <li
                key={item.id}
                className={` w-[77px] border flex-shrink-0 flex  justify-center items-center`}
              >
                {item.temp}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
