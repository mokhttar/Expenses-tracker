"use client";
import React from "react";
import LandingPage from "./UiComponent/LandingPageComponent/LandingPage";
import Navbare from "./UiComponent/LandingPageComponent/Navbare";
import NavBare from "./UiComponent/DashboardComponent/NavBare";
import { usePathname } from "next/navigation";
export default function Home() {
  return (
    <div>
      <Navbare />
      <LandingPage />
    </div>
  );
}
