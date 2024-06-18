import React from "react";
import UserLatestUi from "./UserLatestUi";

function UserLatest() {
  return (
    <div className="border rounded-md  mt-4 px-4">
      <div className="flex justify-between">
        <h1 className="font-semibold text-xl ">Latest Transactions</h1>
        <p className="text-blue-400 font-medium underline ">view All</p>
      </div>
      <section>
        <UserLatestUi/>
      </section>
    </div>
  );
}

export default UserLatest;
