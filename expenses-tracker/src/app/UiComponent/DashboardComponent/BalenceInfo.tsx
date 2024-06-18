"use client";

import React from "react";
import Image from "next/image";
import BalanceIcon from "./Lottie/Balance.json";
import Lottie from "lottie-react";
import incomIcon from "./Lottie/Income.json";
import ExpensesIcon from "./Lottie/expenses.json";

function BalenceInfo() {
  return (
    <div className="w-full flex gap-3 py-3">
      <div className="w-1/3  bg-green-100  bg-opacity-70 flex  justify-center items-center gap-3  rounded-md">
        <div className="w-1/3">
          <p className="text-xl text-gray-400 py-2">Current Balnece</p>
          <p className="text-2xl  font-semibold ">$546400</p>
          <p className=" text-sm   text-green-600">+19%</p>
        </div>
        <div className="w-1/3 ">
          <Lottie animationData={BalanceIcon} className="" />
        </div>
      </div>
      <div className="w-1/3  bg-[#a78bfa]  bg-opacity-70 flex  justify-center items-center gap-2  rounded-md">
        <div className="w-1/3">
          <p className="text-xl  py-2">Total Income</p>
          <p className="text-2xl  font-semibold ">$546400</p>
          <p className=" text-sm    text-purple-600 ">+7%</p>
        </div>
        <div className="w-1/4 ">
          <Lottie animationData={incomIcon} className="ml-3" />
        </div>
      </div>
      <div className="w-1/3  bg-red-400  bg-opacity-70 flex  justify-center items-center gap-2  rounded-md">
        <div className="w-1/3">
          <p className="text-xl  py-2">Total Expenses</p>
          <p className="text-2xl  font-semibold ">$546400</p>
          <p className=" text-sm   text-red-600">+25%</p>
        </div>
        <div className="w-1/4 ">
          <Lottie animationData={ExpensesIcon} className="ml-3" />
        </div>
      </div>
    </div>
  );
}

export default BalenceInfo;
