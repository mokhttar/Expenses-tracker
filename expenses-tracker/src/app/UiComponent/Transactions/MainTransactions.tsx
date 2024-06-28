import React, { useState, FormEvent } from "react";
import { Users } from "../DashboardComponent/DataTest/Users";
import AddTransactions from "./AddTransactions";

function MainTransactions() {
  const [isClicked, setIsClicked] = useState(false);

  function handleAddTransaction(event: FormEvent) {
    event.preventDefault();
    setIsClicked(!isClicked);
    console.log("Add Transaction Event", isClicked);
  }

  return (
    <div className="px-10 flex flex-col gap-4 ">
      <div>
        <h1 className="text-xl py-10 font-semibold">
          Welcome back {Users[0].surname + " " + Users[0].name}
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold">Transactions</p>
        </div>
        <div>
          <button
            className="px-3 py-1 rounded-md bg-green-500 text-white font-semibold"
            onClick={handleAddTransaction}
          >
            Add Transaction
          </button>
        </div>
      </div>

      {isClicked && (
        <AddTransactions isClicked={isClicked} setIsClicked={setIsClicked} />
      )}
    </div>
  );
}

export default MainTransactions;
