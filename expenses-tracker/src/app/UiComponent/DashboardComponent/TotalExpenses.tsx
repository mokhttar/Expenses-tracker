import React from "react";

function TotalExpenses() {
  return (
    <div>
      {" "}
      <div className="w-1/3">
        <p className="text-xl  py-2">Total Expenses</p>
        <p className="text-2xl  font-semibold ">$546400</p>
        <p className=" text-sm   text-red-600">+25%</p>
      </div>
    </div>
  );
}

export default TotalExpenses;
