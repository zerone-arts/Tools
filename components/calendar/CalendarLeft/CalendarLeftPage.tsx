import { MONTHLIST } from "@/app/calendar/page";
import CalendarItem from "../CalendarItem";

export default function CalendarLeftPage({
  month,
  year,
}: {
  month: any;
  year: any;
}) {
  return (
    <div className="relative w-[500px] h-full flex flex-col gap-5 dark:bg-black">
      <div className="w-full h-[80px] flex flex-col justify-end px-5">
        <div className="font-bold tracking-[2px] text-[20px]">
          {MONTHLIST[month].toUpperCase()}
        </div>
        <div className="text-[10px]">{year}</div>
      </div>
      <div className=" w-full h-[450px] flex  justify-center overflow-hidden">
        <CalendarItem month={month} />
      </div>
      {/* <PopUp /> */}
    </div>
  );
}
