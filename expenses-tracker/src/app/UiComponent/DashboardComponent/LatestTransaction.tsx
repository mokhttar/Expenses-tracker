import React from "react";
import Chart from "./ChartTransactions";

//TODO: when you finish the dashboard make it responsive for phones !!
//This component need  a chart im gonna use the  Recharts js library for it
//Note: the shart is a simple bare chart wich in each month i  im gonna see  the income and the  expenses

function LatestTransaction() {
  return (
    <div>
      <Chart />
    </div>
  );
}

export default LatestTransaction;
