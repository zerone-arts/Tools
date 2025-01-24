import CalendarPage from "@/components/calendar/CalendarPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Calendar",
};
export default function Page() {
  return (
    <div className="w-full h-screen absolute">
      <CalendarPage />
    </div>
  );
}
