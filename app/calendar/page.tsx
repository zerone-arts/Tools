import PopUp from "@/components/calendar/PopUp";

export default function CalendarPage() {
  return (
    <div className="w-full text-gray-100 flex items-center justify-center">
      <div className="duration-300 border w-[1000px] h-[600px] max-[1100px]:w-[500px] max-sm:w-[300px] max-sm:h-full flex rounded-xl overflow-hidden">
        <div className="relative w-[500px] h-full flex flex-col gap-5">
          <div className="w-full h-[80px] flex flex-col justify-end px-5">
            <div className="font-bold tracking-[2px] text-[20px]">JANUARY</div>
            <div className="text-[10px]">2025</div>
          </div>
          <div className="border w-full h-[350px]"></div>
          {/* <PopUp /> */}
        </div>
        <div
          className={`w-[500px] h-full bg-gray-100/50 max-[1100px]:hidden flex`}
        >
          2
        </div>
      </div>
    </div>
  );
}
