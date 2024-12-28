import WeatherUi from "@/components/weather/WeatherUi";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative w-full dark:dark:bg-black/40 dark:text-gray-100 max-sm:h-screen max-sm:overflow-scroll">
      <WeatherUi />
      {children}
    </div>
  );
}
