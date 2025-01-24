import NotePage from "@/components/note/NotePage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Note",
};
export default function Page() {
  return (
    <div className="w-full h-screen relative">
      <NotePage />
    </div>
  );
}
