import type { Metadata } from "next";

import "./globals.css";

import BgImage from "@/components/layout/BgImage";
import Ui from "@/components/layout/Ui";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
