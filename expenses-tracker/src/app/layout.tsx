import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbare from "./UiComponent/Navbare";



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
    <html lang="en">
      <body >
        {/* <Navbare /> */}
        {children}
      </body>
    </html>
  );
}
