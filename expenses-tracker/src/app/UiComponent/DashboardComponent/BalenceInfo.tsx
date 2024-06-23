"use client";

import React from "react";
import BalanceIcon from "./Lottie/Balance.json";
import Lottie from "lottie-react";
import incomIcon from "./Lottie/Income.json";
import ExpensesIcon from "./Lottie/expenses.json";
import CurrentBallence from "./CurrentBallence";
import TotalIncome from "./TotalIncome";
import TotalExpenses from "./TotalExpenses";

function BalenceInfo() {
  return (
    <div className="w-full flex gap-3 py-3">
      <div className="w-1/3  bg-green-100  bg-opacity-70 flex  justify-center items-center gap-3  rounded-md">
        <CurrentBallence />
        <div className="w-1/3 ">
          <Lottie animationData={BalanceIcon} className="" />
        </div>
      </div>
      <div className="w-1/3  bg-[#a78bfa]  bg-opacity-70 flex  justify-center items-center gap-2  rounded-md">
        <TotalIncome />
        <div className="w-1/4 ">
          <Lottie animationData={incomIcon} className="ml-3" />
        </div>
      </div>

      <div className="w-1/3  bg-red-400  bg-opacity-70 flex  justify-center items-center gap-2  rounded-md">
        <TotalExpenses />
        <div className="w-1/4 ">
          <Lottie animationData={ExpensesIcon} className="ml-3" />
        </div>
      </div>
    </div>
  );
}

export default BalenceInfo;
