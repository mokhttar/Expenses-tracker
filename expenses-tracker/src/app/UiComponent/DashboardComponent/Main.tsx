import React from "react";
import { Users } from "./DataTest/Users";
import SearchBare from "../Transactions/SearchBare";
import BalenceInfo from "./BalenceInfo";
import LatestTransaction from "./LatestTransaction";
import NavBare from "./NavBare";
import UserLatest from "./UserLatest";

//TODO  use the name and the username fo the login persone
//TODO send the value  of the serch bare to the back

function Main() {
  return (
    <div className="flex">
      <div className="  px-10">
        {/* back status Section */}
        <div className="flex  justify-between  mt-10   ">
          <div>
            <h1 className="font-semibold text-2xl py-2">
              {/* only test  */}
              Hello {Users[0].name + " " + Users[0].surname + " " + "!!"}
            </h1>
            <p className="text-gray-400">Welcome Back !</p>
          </div>
          {/* SearchBare */}
          <div>
            <SearchBare />
          </div>
        </div>
        <div className="mt-5">
          <BalenceInfo />
        </div>
        {/* Chart Section */}
        <div className=" relative border py-5  px-2 rounded-md ">
          <div className="flex items-center justify-between px-2">
            <div>
              <h1 className="px-10 text-xl font-semibold mb-5">
                Latest Transaction{" "}
              </h1>
            </div>
            <div className="flex gap-1 ">
              <div className="flex items-center justify-center gap-1">
                <div className="  size-3  bg-green-500 text-green-400 rounded-full"></div>
                <p>Income</p>
              </div>

              <div className="flex items-center justify-center gap-1">
                <div className="  size-3 bg-red-400 text-red-400 rounded-full"></div>
                <p>Expenses</p>
              </div>
            </div>
          </div>
          <LatestTransaction />
        </div>
        {/* LatestTransaction Users Section */}
        <UserLatest />
      </div>
    </div>
  );
}

export default Main;
