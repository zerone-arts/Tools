import SettingUi from "@/components/setting/SettingUi";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="text-white w-full h-screen flex flex-col items-center absolute">
      {children} <SettingUi />
    </div>
  );
}
