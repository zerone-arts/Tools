import type { Metadata } from "next";
import "./globals.css";
import BgImage from "@/components/layout/BgImage";
import Ui from "@/components/layout/Ui";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    template: "%s | Tools",
    default: "Tools",
  },
  description:
    "Tools은 일상에서 활용도가 높은 다양한 도구를 통합한 스마트 플랫폼입니다.",
  icons: {
    icon: "/assets/image/icon/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <Script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API}&autoload=false&libraries=services`}
      ></Script>
      <body className=" bg-black relative w-full h-screen overflow-hidden">
        <ThemeProvider attribute="class">
          <div className="relative flex">
            <Ui />
            {children}
          </div>
          <BgImage />
        </ThemeProvider>
      </body>
    </html>
  );
}
