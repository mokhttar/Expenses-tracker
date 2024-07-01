"use client";
import React from "react";
import IncomeIcon from "/public/assets/Income.svg";
import WorkersIcon from "/public/assets/WorkersIcon.svg";
import PizzaIcon from "/public/assets/PizzaIcon.svg";
import Image from "next/image";
import OptionsIcon from "/public/assets/Options.svg";
// Define types
type Transaction = {
  id: number;
  Amount: number;
  Description: string;
  Category: string;
  Date: Date;
  Image?: any;
  Type: string;
};

const transactions: Transaction[] = [
  {
    id: 1,
    Amount: 150.0,
    Description: "Grocery shopping",
    Category: "Groceries",
    Date: new Date("2024-06-30"),
    Image: PizzaIcon,
    Type: "Expense",
  },
  {
    id: 2,
    Amount: 2000.0,
    Description: "Salary",
    Category: "Income",
    Date: new Date("2024-06-23"),
    Image: IncomeIcon,
    Type: "Income",
  },
  {
    id: 2,
    Amount: 2000.0,
    Description: "Salary",
    Category: "Income",
    Date: new Date("2024-06-30"),
    Image: IncomeIcon,
    Type: "Income",
  },
  {
    id: 2,
    Amount: 2000.0,
    Description: "Salary",
    Category: "Income",
    Date: new Date("2024-06-23"),
    Image: WorkersIcon,
    Type: "Income",
  },
  // Add more transactions here...
];

// Function to group transactions by date
function groupTransactionsByDate(transactions: Transaction[]): Transaction[][] {
  const groupedTransactions: Transaction[][] = [];

  // Group transactions by date
  const groups = transactions.reduce((acc, transaction) => {
    const dateKey = transaction.Date.toDateString();
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(transaction);
    return acc;
  }, {} as { [key: string]: Transaction[] });

  // Push groups into groupedTransactions array
  Object.keys(groups).forEach((dateKey) => {
    groupedTransactions.push(groups[dateKey]);
  });

  return groupedTransactions;
}

// Component to display history
const History: React.FC = () => {
  const groupedTransactions = groupTransactionsByDate(transactions);

  return (
    <div>
      {groupedTransactions.map((group, index) => (
        <div key={index} className="flex py-2 flex-col">
          <h2 className="font-semibold text-xl py-2">
            {group[0].Date.toDateString()}
          </h2>
          {group.map((transaction) => (
            <div key={transaction.id} className="flex justify-between">
              <div className="border     flex justify-between rounded-xl p-2 mb-2 w-full items-center py-4">
                <div>
                  <div className="flex gap-5 ">
                    <div>
                      <Image
                        src={transaction.Image}
                        alt="image-icon "
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <h1 className="text-4xl font-semibold">
                        {transaction.Amount}Da
                      </h1>
                      <p>{transaction.Description}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Image src={OptionsIcon} alt="options-icon" width={30} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default History;
