import React, { useState, FormEvent } from "react";
import { Users } from "../DashboardComponent/DataTest/Users";
import AddTransactions from "./AddTransactions";
import History from "./History";
import SearchBare from "./SearchBare";
import newCategorie from "./newCategorie";
import NewCategorie from "./newCategorie";
// import { useToast } from "@/components/use-toast";

function MainTransactions() {
  const [isClicked, setIsClicked] = useState(false);
  const [ShowNewCat, setShowNewCat] = useState<boolean>(false);

  function handleAddTransaction(event: FormEvent) {
    event.preventDefault();
    setIsClicked(!isClicked);
    console.log("Add Transaction Event", isClicked);
  }

  const handleClick = () => {
    setShowNewCat((preValue: any) => !preValue);
    console.log("i was clicked");
    console.log(ShowNewCat);
  };

  return (
    <div className="px-10   flex flex-col gap-4 ">
      <div>
        <h1 className="text-xl py-10 font-semibold">
          Welcome back {Users[0].surname + " " + Users[0].name}
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold">Transactions</p>
        </div>
        <div className="rounded-md">
          <button
            className="px-3 py-1   rounded bg-green-500 text-white font-semibold"
            onClick={handleAddTransaction}
          >
            Add Transaction
          </button>
        </div>
      </div>

      {isClicked && (
        <AddTransactions isClicked={isClicked} setIsClicked={setIsClicked} />
      )}

      <div>
        <div className="flex justify-between mt-5 z-0">
          <SearchBare />
          <button
            className=" py-2 bg-amber-100 px-5 text-semibold  rounded-2xl"
            onClick={handleClick}
          >
            Add Categorie
          </button>
          {ShowNewCat && (
            <NewCategorie
              ShowNewCat={ShowNewCat}
              setShowNewCat={setShowNewCat}
              handleClick={handleClick}
            />
          )}
        </div>
        <History />
      </div>
    </div>
  );
}

export default MainTransactions;
