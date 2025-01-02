export default function CalcAppUi({
  page,
  setPage,
}: {
  page: any;
  setPage: any;
}) {
  return (
    <div className="mt-2 px-2 w-4/5 h-[40px] absolute left-1/2 transform -translate-x-1/2  ">
      <div className="flex">
        <button className="w-1/2 text-center " onClick={() => setPage("calc")}>
          calc
        </button>
        <button
          className="w-1/2 text-center text-gray-400"
          onClick={() => setPage("etc")}
        >
          etc
        </button>
      </div>
      <div className="bg-gray-400 w-full h-[2px] mt-1 relative">
        <div
          className={`absolute w-1/2 h-full bg-gray-200 transition duration-300 ${
            page === "calc" ? "" : "translate-x-full"
          }`}
        ></div>
      </div>
    </div>
  );
}
