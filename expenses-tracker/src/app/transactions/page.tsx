"use client";
import MainTransactions from "../UiComponent/Transactions/MainTransactions";
import NavBare from "../UiComponent/DashboardComponent/NavBare";
import LimitsByCategorie from "../UiComponent/Transactions/CustomOptions/LimitsByCategorie";

function Transaction() {
  return (
    <div className="flex  w-full">
      <div className=" h-full w-1/5">
        <section className="h-full">
          <NavBare />
        </section>
      </div>
      <div className="w-full ml-[8%]">
        <MainTransactions />
      </div>

      <div className="w-3/5">
        <LimitsByCategorie />
      </div>
    </div>
  );
}

export default Transaction;
