"use client";

import { useState } from "react";
import CalcAppUi from "./calcApp/AppUi";
import AppCalc from "./calcApp/AppCalc";
import AppEtc from "./calcApp/AppEtc";

export default function CalculatorAppPage({}) {
  const [page, setPage] = useState("calc");
  return (
    <div className=" h-full max-sm:flex border  p-5 items-center justify-center ">
      <div className="w-[300px] h-[500px] border relative group overflow-hidden">
        <div
          className={`absolute bg-gray-700 h-full w-[600px] flex ${
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
