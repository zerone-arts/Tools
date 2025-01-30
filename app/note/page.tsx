import NotePage from "@/components/note/NotePage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Note",
};
export default function Page() {
  return (
    <div className="w-full h-screen relative max-sm:absolute left-0">
      <NotePage />
    </div>
  );
}
