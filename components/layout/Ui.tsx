"use client";

import { useEffect, useState } from "react";
import profileImg from "@/public/assets/image/bg/Spiderman.jpeg";
import Image from "next/image";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import ThemeButton from "./ThemeButton";
import ThemeButtonText from "./ThemeButtonText";

const category = [
  "/",
  "/note",
  "/calendar",
  "/weather",
  "/calculator",
  "/theme",
  "/setting",
];

export default function Ui() {
  const [hover, setHover] = useState("");
  const [themeMode, setThemeMode] = useState("");
  const path = usePathname();

  useEffect(() => {}, [path]);

  return (
    <div
      className={`z-10 relative  group p-1 w-[80px] sm:hover:w-[200px] h-screen  duration-500 ease-out flex  item-center flex-shrink-0 `}
    >
      <div className="absolute h-screen -ml-3">
        <div className="mt-3 flex ml-[14px] ">
          <div
            className={`w-[2px] h-9 flex justify-center items-center rounded-sm font-bold duration-300  ${
              path === "/" ? " opacity-100" : "opacity-0"
            } `}
          >
            <div className="bg-white w-[2px] h-7 rounded-sm"></div>
          </div>
        </div>

        <ul className="mt-5  ml-[14px] flex flex-col  justify-center gap-5 ">
          <li
            className={`w-[2px] h-9 flex justify-center items-center rounded-sm font-bold duration-300  ${
              path === "/note" ? " opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-white w-[2px] h-7 rounded-sm"></div>
          </li>
          <li
            className={`w-[2px] h-9 flex justify-center items-center rounded-sm font-bold duration-300  ${
              path === "/calendar" ? " opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-white w-[2px] h-7 rounded-sm"></div>
          </li>
          <li
            className={`w-[2px] h-9 flex justify-center items-center rounded-sm font-bold duration-300  ${
              path === "/weather" ? " opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-white w-[2px] h-7 rounded-sm"></div>
          </li>
          <li
            className={`w-[2px] h-9 flex justify-center items-center rounded-sm font-bold duration-300  ${
              path === "/calculator" ? " opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-white w-[2px] h-7 rounded-sm"></div>
          </li>
        </ul>

        <div className="absolute  ml-[14px] bottom-[112px] w-full flex flex-col gap-3 ">
          <div
            className={`w-[2px] h-9 flex justify-center items-center rounded-sm font-bold duration-300  ${
              path === "/setting" ? " opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-white w-[2px] h-7 rounded-sm"></div>
          </div>
        </div>
      </div>
      <div className="h-screen">
        <div className="mt-3 flex ml-[14px] ">
          <div
            className={`w-9 h-9 flex justify-center items-center rounded-sm font-bold duration-300  ${
              path === "/" || hover === "/"
                ? "text-black bg-white "
                : "text-white"
            } `}
            onMouseOver={() => setHover("/")}
            onMouseLeave={() => setHover("")}
          >
            <Link href="/">R</Link>
          </div>
        </div>

        <ul className="mt-5  ml-[14px] flex flex-col  justify-center gap-5 ">
          <li
            className={`w-9 h-9 flex justify-center items-center rounded-sm duration-300  ${
              path === "/note" || hover === "/note"
                ? "text-black bg-white"
                : "text-white"
            }
            
            `}
            onMouseOver={() => setHover("/note")}
            onMouseLeave={() => setHover("")}
          >
            <Link href="/note">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                  />
                </svg>
              </span>
            </Link>
          </li>
          <li
            className={`w-9 h-9 flex justify-center items-center rounded-sm duration-300   ${
              path === "/calendar" || hover === "/calendar"
                ? "bg-white text-black"
                : "text-white"
            } `}
            onMouseOver={() => setHover("/calendar")}
            onMouseLeave={() => setHover("")}
          >
            <Link href="/calendar">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </span>
            </Link>
          </li>
          <li
            className={`w-9 h-9 flex justify-center items-center rounded-sm duration-300   ${
              path === "/weather" || hover === "/weather"
                ? "bg-white text-black"
                : "text-white"
            } `}
            onMouseOver={() => setHover("/weather")}
            onMouseLeave={() => setHover("")}
          >
            <Link href="/weather">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                  />
                </svg>
              </span>
            </Link>
          </li>
          <li
            className={`w-9 h-9 flex justify-center items-center rounded-sm duration-300  ${
              path === "/calculator" || hover === "/calculator"
                ? "bg-white text-black"
                : "text-white"
            } `}
            onMouseOver={() => setHover("/calculator")}
            onMouseLeave={() => setHover("")}
          >
            <Link href="/calculator">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
                  />
                </svg>
              </span>
            </Link>
          </li>
        </ul>

        <div className="absolute  ml-[14px] bottom-4 w-full flex flex-col gap-3 ">
          <div
            className={`w-9 h-9 flex justify-center items-center rounded-sm duration-300  ${
              path === "/setting" || hover === "/setting"
                ? "bg-white text-black "
                : "text-white"
            } `}
            onMouseOver={() => setHover("/setting")}
            onMouseLeave={() => setHover("")}
          >
            <Link href="/setting">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </span>
            </Link>
          </div>
          <ThemeButton
            hover={hover}
            setHover={setHover}
            themeMode={themeMode}
            setThemeMode={setThemeMode}
          />

          <div className="w-8 h-8 flex justify-center items-center rounded-full duration-300 text-white overflow-hidden">
            <Image
              src={profileImg}
              alt="임시"
              width={36}
              height={36}
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute ml-[50px] h-screen opacity-0 pointer-events-none sm:group-hover:opacity-100 group-hover:pointer-events-auto duration-300 text-sm font-light">
        <div className="mt-3 flex ml-[14px] ">
          <div
            className={`w-[100px] h-9 flex items-center rounded-sm  duration-300 text-gray-200 `}
            onMouseOver={() => setHover("/")}
            onMouseLeave={() => setHover("")}
          >
            <Link href="/">Rotion</Link>
          </div>
        </div>

        <ul className="mt-5  ml-[14px] flex flex-col  justify-center gap-5 ">
          <li
            className={`w-[100px] h-9 flex  items-center rounded-sm duration-300 text-gray-200 `}
            onMouseOver={() => setHover("/note")}
            onMouseLeave={() => setHover("")}
          >
            <Link href="/note">Note</Link>
          </li>
          <li
            className={`w-[100px] h-9 flex  items-center rounded-sm duration-300 text-gray-200`}
            onMouseOver={() => setHover("/calendar")}
            onMouseLeave={() => setHover("")}
          >
            <Link href="/calendar">Calendar</Link>
          </li>
          <li
            className={`w-[100px] h-9 flex  items-center rounded-sm duration-300 text-gray-200 `}
            onMouseOver={() => setHover("/weather")}
            onMouseLeave={() => setHover("")}
          >
            <Link href="/weather">Weather</Link>
          </li>
          <li
            className={`w-[100px] h-9 flex items-center rounded-sm duration-300 text-gray-200  `}
            onMouseOver={() => setHover("/calculator")}
            onMouseLeave={() => setHover("")}
          >
            <Link href="/calculator">Calculator</Link>
          </li>
        </ul>

        <div className="absolute  ml-[14px] bottom-[17px] w-full flex flex-col gap-3 ">
          <div
            className={`w-[100px] h-9 flex items-center rounded-sm duration-300 text-gray-200 `}
            onMouseOver={() => setHover("/setting")}
            onMouseLeave={() => setHover("")}
          >
            <Link href="setting">Setting</Link>
          </div>

          <ThemeButtonText
            setHover={setHover}
            themeMode={themeMode}
            setThemeMode={setThemeMode}
          />

          <div className="w-[100px] h-9 flex  items-center  duration-300 text-gray-200">
            ZERONE
          </div>
        </div>
      </div>
    </div>
  );
}
