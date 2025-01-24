import WeatherPage from "@/components/weather/WeatherPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Weather",
};
export default function Page({}) {
  return (
    <div className="w-full h-screen">
      <WeatherPage />
    </div>
  );
}
