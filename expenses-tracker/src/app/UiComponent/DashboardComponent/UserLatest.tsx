import React from "react";
import UsersUi from "./UsersUi";
function UserLatest() {
  return (
    <div className="border rounded-md  mt-4 px-4">
      <div className="flex justify-between px-3">
        <h1 className="font-semibold text-xl  py-5">Latest Transactions</h1>
        <p className="text-blue-400 font-medium underline py-5 ">view All</p>
      </div>
      <section>
        <UsersUi />
      </section>
    </div>
  );
}

export default UserLatest;
