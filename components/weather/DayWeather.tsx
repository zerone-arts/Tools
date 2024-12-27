import { WEATHERICON, WeathersDayType } from "@/app/weather/page";

export default function DayWeather({
  WeathersDay,
}: {
  WeathersDay: WeathersDayType[];
}) {
  return (
    <div className="w-[250px] h-[230px] rounded-xl dark:bg-zinc-900 p-4 flex flex-col text-gray-200 border border-white/40 dark:border-none">
      <h1 className="font-semibold">Day</h1>
      <div className="p-0 h-full overflow-scroll flex flex-col gap-4 mt-2 ">
        <ul className="flex flex-col pl-3">
          {WeathersDay.map((item) => {
            return (
              <li
                key={item.id}
                className="w-full h-[35px]  flex items-center gap-2"
              >
                <div className="text-sm scale-[0.5]">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: WEATHERICON[0].icon,
                    }}
                  />
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-[10px]">{item.highTemp}˚</p>
                  <p className="text-[9px] text-gray-400">{item.lowTemp}˚</p>
                </div>
                <div>
                  <p className="text-[10px] ml-[50px]">{item.day}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
