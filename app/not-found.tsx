import Link from "next/link";

export default function notFound() {
  return (
    <div className="absolute w-full h-full flex flex-col items-center justify-center text-white">
      <div className="w-[250px] h-[280px]  flex items-center justify-center mb-5 tracking-widest">
        <div className="cubeNotFound w-[160px] h-[160px] text-white top-2">
          <div className="face frontNotFound">
            <div className="w-[140px] h-[140px] bg-zinc-400 rounded-lg dark:bg-white"></div>
          </div>

          <div className="face leftNotFound">
            <div className="w-[140px] h-[140px] border-[5px] rounded-lg flex items-center justify-center text-[40px]">
              404
            </div>
          </div>

          <div className="face topNotFound">
            <div className="w-[140px] h-[140px] bg-black rounded-lg dark:bg-cyan-600 "></div>
          </div>
        </div>
      </div>
      <div className="text-[50px]">Page Not Found.</div>
      <div className="text-zinc-500">
        Sorry, we couldn't locate that page. Let’s get you back on track.
      </div>
      <Link
        href="/"
        className="mt-5 border w-[60px] h-[30px] rounded-md text-[12px] hover:tracking-widest duration-100 flex items-center justify-center"
      >
        HOME
      </Link>
    </div>
  );
}
