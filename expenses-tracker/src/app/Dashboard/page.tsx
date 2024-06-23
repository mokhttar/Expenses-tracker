"use client";
import React from "react";
import Main from "../UiComponent/DashboardComponent/Main";
import Profile from "../UiComponent/DashboardComponent/Profile";
import NavBare from "../UiComponent/DashboardComponent/NavBare";
import { useRouter } from "next/router";

function Page() {


  return (
    <div className="flex w-full">
      <div className="fixed h-full w-1/7">
        <section className="h-full">
          <NavBare />
        </section>
      </div>

      <div className="ml-[17%] flex w-full">
        <section className="w-3/4">
          <Main />
        </section>
        <section className="w-1/4 ">
          <Profile />
        </section>
      </div>
    </div>
  );
}

export default Page;
