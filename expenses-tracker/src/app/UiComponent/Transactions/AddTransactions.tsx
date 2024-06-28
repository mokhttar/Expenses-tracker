"use client";
import React from "react";
import CancelIcon from "/public/assets/Cancel.svg";
import Image from "next/image";
import { FormEvent } from "react";
import { useState } from "react";
import Expenses from "./Expenses";
import Income from "./Income";

interface AddTransactionsProps {
  isClicked: boolean;
  setIsClicked: (value: boolean) => void;
}

function AddTransactions({ isClicked, setIsClicked }: AddTransactionsProps) {
  function handleCloseForm(event: FormEvent) {
    event.preventDefault();
    setIsClicked(!isClicked);
  }
  function handleSubmit(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();
  }
  if (!isClicked) {
    return null;
  }
  const [ComponentType, setComponentType] = useState<string>("");
  function handleComponent(ComponentType: string, event?: FormEvent) {
    event?.preventDefault();
    setComponentType((preValue) => ComponentType);
  }

  //Only for testing
  //TODO create a  form object  to store all the  information
  const [Amount, setAmount] = useState<number>(0);
  const [Description, setDesciption] = useState<string>("");
  const [Categorie, setCategorie] = useState<string>("");
  const [Date, setDate] = useState<string>("");

  async function SendData(event: FormEvent) {
    event.preventDefault();
    const response = await fetch(
      "http://localhost:3001/transactions/newTransaction",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ Amount, Description, Categorie, Date }),
      }
    );
    if (!response.ok) {
      console.log("Error in the response");
    }
    setAmount(0);
    setDesciption("");
    setCategorie("");
    setDate("");
  }

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 flex justify-center items-center px-4">
      <div className="relative w-full max-w-lg bg-white border rounded-md p-4">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-green-500">Add Transactions</p>
          <Image
            src={CancelIcon}
            alt="cancel-icon"
            width={22}
            height={22}
            onClick={handleCloseForm}
            className="cursor-pointer"
          />
        </div>
        <div className="flex gap-20 items-center justify-center mt-5 border rounded-full py-4">
          <h3
            className="text-gray-500 font-semibold hover:bg-green-500 hover:text-white hover:py-1 hover:rounded-full hover:px-4 cursor-pointer"
            onClick={() => handleComponent("Expenses")}
          >
            Expenses
          </h3>
          <h3
            className="text-gray-500 font-semibold hover:bg-green-500 hover:text-white hover:py-1 hover:rounded-full hover:px-4 cursor-pointer"
            onClick={() => handleComponent("Income")}
          >
            Income
          </h3>
          <h3 className="text-gray-500 font-semibold hover:bg-green-500 hover:text-white hover:py-1 hover:rounded-full hover:px-4 cursor-pointer">
            Transfer
          </h3>
        </div>
        <form className="mt-5">
          {ComponentType === "Expenses" && (
            <Expenses
              Amount={Amount}
              setAmount={setAmount}
              Description={Description}
              setDescription={setDesciption}
              Categorie={Categorie}
              setCategorie={setCategorie}
              Date={Date}
              setDate={setDate}
              SendData={SendData}
            />
          )}
          {ComponentType === "Income" && (
            <Income
              Amount={Amount}
              setAmount={setAmount}
              Description={Description}
              setDescription={setDesciption}
              Categorie={Categorie}
              setCategorie={setCategorie}
              Date={Date}
              setDate={setDate}
              SendData={SendData}
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default AddTransactions;
