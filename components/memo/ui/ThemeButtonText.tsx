export default function ThemeButtonText({ setHover }: { setHover: any }) {
  return (
    <button
      className={`w-[100px] h-9 flex items-center rounded-sm duration-300 text-gray-200 `}
      onMouseOver={() => setHover("/theme")}
      onMouseLeave={() => setHover("")}
    >
      <div>Light</div>
    </button>
  );
}
