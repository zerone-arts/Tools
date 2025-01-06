export default function CalcAppUi({
  page,
  setPage,
}: {
  page: any;
  setPage: any;
}) {
  return (
    <div className="mt-4 px-2 w-[225px] h-[40px] absolute left-1/2 transform -translate-x-1/2  z-10">
      <div className="flex">
        <button
          className={`w-1/2 text-center text-[9px] tracking-[2px] ${
            page === "calc" ? "text-gray-100" : "text-gray-400"
          } transition duration-200}`}
          onClick={() => setPage("calc")}
        >
          CALCULATOR
        </button>
        <button
          className={`w-1/2 text-center text-[9px] tracking-[2px] ${
            page === "etc" ? "text-gray-100" : "text-gray-400"
          } transition duration-200}`}
          onClick={() => setPage("etc")}
        >
          PERCENT CALC
        </button>
      </div>
      <div className=" w-full h-[2px] mt-1 relative rounded-full flex px-[1px] gap-[2px]">
        <div
          className={`w-full rounded-full ${
            page === "calc" ? "bg-gray-100" : "bg-gray-400"
          } transition duration-200`}
        ></div>
        <div
          className={`w-full  rounded-full ${
            page === "etc" ? "bg-gray-100" : "bg-gray-400"
          } transition duration-200`}
        ></div>
      </div>
    </div>
  );
}
