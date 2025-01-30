import AppCalc from "./calcApp/AppCalc";
import AppEtc from "./calcApp/AppEtc";

export default function CalculatorWebPage() {
  return (
    <div className="flex max-lg:hidden w-full h-full items-center justify-center p-10 ">
      <div className="w-3/4 h-[500px]  relative group overflow-hidden rounded-2xl shadow-2xl border dark:border-none bg-zinc-900/50 dark:bg-zinc-900 flex gap-2 px-10 justify-center items-center scale-125">
        <div
          className="absolute left-0 w-full h-full bg-black/0  z-[1] 
  dark:bg-gradient-to-tr from-zinc-900 via-zinc-700 to-zinc-900 opacity-60 pointer-events-none"
        ></div>
        <div className="h-[450px]  z-50 relative text-gray-100">
          <div className="absolute font-thin left-1/2 transform -translate-x-1/2 mt-5 tracking-wider h-[12.5px] overflow-hidden">
            <span>CALCULATOR</span>
          </div>
          <div className="absolute font-thin left-1/2 transform -translate-x-1/2 mt-[33px] tracking-wider h-[11.5px]  overflow-hidden  flex items-end">
            <span>CALCULATOR</span>
          </div>
          <AppCalc />
        </div>
        <div className="h-[300px] w-[5px]  z-50  flex flex-col gap-2 items-center">
          <div className="h-[140px] w-[1px] bg-gray-400"></div>
          <div className="h-[3px] w-[3px] bg-gray-100 rounded-full"></div>
          <div className="h-[140px] w-[1px] bg-gray-400"></div>
        </div>
        <div className="h-[450px]   z-50 relative overflow-scroll text-gray-100">
          <div className="absolute font-thin left-1/2 transform -translate-x-1/2 mt-5 tracking-wider h-[12.5px] overflow-hidden">
            <span>PERCENT CALC</span>
          </div>
          <div className="absolute font-thin left-1/2 transform -translate-x-1/2 mt-[33px] tracking-wider h-[11.5px]  overflow-hidden  flex items-end">
            <span>PERCENT CALC</span>
          </div>
          <div className="h-[390px]   z-50 relative">
            <AppEtc />
          </div>
        </div>
      </div>
    </div>
  );
}
