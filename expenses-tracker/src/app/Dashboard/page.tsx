"use client";

import React from "react";
import Main from "../UiComponent/DashboardComponent/Main";
import Profile from "../UiComponent/DashboardComponent/Profile";
import NavBare from "../UiComponent/DashboardComponent/NavBare";
import { usePathname } from "next/navigation";
import Transaction from "../transactions/page";

function Page() {
  const pathname = usePathname();
  return (
    <div className="flex w-full">
      <div className="fixed h-full w-1/7">
        <section className="h-full">
          <NavBare />
        </section>
      </div>
      <div className="ml-[20%] flex w-full">
        <section className="w-3/4">
          {/* <Main /> */}
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
