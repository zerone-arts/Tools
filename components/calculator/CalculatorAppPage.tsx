"use client";

import { useState } from "react";
import CalcAppUi from "./calcApp/AppUi";
import AppCalc from "./calcApp/AppCalc";
import AppEtc from "./calcApp/AppEtc";

export default function CalculatorAppPage({}) {
  const [page, setPage] = useState("calc");
  return (
    <div className=" h-full max-lg:flex hidden border  p-5 items-center justify-center text-gray-100">
      <div className="w-[300px] h-[500px]  relative group overflow-hidden rounded-2xl shadow-2xl border dark:border-none bg-zinc-900/50 dark:bg-zinc-900 ">
        <div
          className="absolute w-[370px] h-full bg-black/0
  dark:bg-gradient-to-tr from-zinc-900 via-zinc-700 to-zinc-900 opacity-60"
        ></div>
        <div
          className={`absolute  h-full w-[600px] flex ${
            page === "etc" ? "-translate-x-1/2" : "translate-x-0"
          } duration-300`}
        >
          <AppCalc />
          <AppEtc />
        </div>
        <CalcAppUi page={page} setPage={setPage} />
      </div>
    </div>
  );
}
