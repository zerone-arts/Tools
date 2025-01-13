export default function ThemeButtonText({
  setHover,
  themeMode,
  setThemeMode,
}: {
  setHover: any;
  themeMode: any;
  setThemeMode: any;
}) {
  return (
    <button
      className={`w-[100px] h-9 flex items-center rounded-sm duration-300 text-gray-200 `}
      onMouseOver={() => setHover("/theme")}
      onMouseLeave={() => setHover("")}
      onClick={() => setThemeMode(themeMode === "" ? "dark" : "")}
    >
      {themeMode === "" ? <div>Dark</div> : <div>Light</div>}
    </button>
  );
}
