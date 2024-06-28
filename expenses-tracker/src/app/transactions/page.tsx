"use client"
import MainTransactions from "../UiComponent/Transactions/MainTransactions";
import NavBare from "../UiComponent/DashboardComponent/NavBare";

function Transaction() {
  return (
    <div className="flex  w-full">
      <div className=" h-full w-1/7">
        <section className="h-full">
          <NavBare />
        </section>
      </div>
      <div className="w-full">
        <MainTransactions />
      </div>
    </div>
  );
}

export default Transaction;
