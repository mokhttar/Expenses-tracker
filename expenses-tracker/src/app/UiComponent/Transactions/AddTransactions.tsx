"use client";
import React, { useState, FormEvent } from "react";
import CancelIcon from "/public/assets/Cancel.svg";
import Image from "next/image";
import Expenses from "./Expenses";
import Income from "./Income";
import { CToast, CToastBody, CToastHeader } from "@coreui/react";
import { title } from "process";

interface AddTransactionsProps {
  isClicked: boolean;
  setIsClicked: (value: boolean) => void;
}

function AddOptions(event: FormEvent) {
  event.preventDefault();
}

function AddTransactions({ isClicked, setIsClicked }: AddTransactionsProps) {
  const [Amount, setAmount] = useState<number>(0);
  const [Description, setDescription] = useState<string>("");
  const [Categorie, setCategorie] = useState<string>("Food");
  const [Date, setDate] = useState<string>("");
  const [isValidate, setIsValidate] = useState<boolean>(false);
  const [Errmsg, setErrmsg] = useState<string[]>([]);
  const [ComponentType, setComponentType] = useState<string>("");

  function handleCloseForm(event: FormEvent) {
    event.preventDefault();
    setIsClicked(!isClicked);
  }

  function handleComponent(ComponentType: string, event?: FormEvent) {
    event?.preventDefault();
    setComponentType(ComponentType);
  }

  function ValidationDat() {
    const errors: string[] = [];

    if (Amount <= 0) {
      errors.push("Amount must be a positive number.");
    }

    if (Description.trim() === "") {
      errors.push("Description cannot be empty.");
    }

    if (Categorie.trim() === "") {
      errors.push("Categorie must be selected.");
    }

    if (Date.trim() === "") {
      errors.push("Date cannot be empty.");
    }

    setErrmsg(errors);
    setIsValidate(errors.length === 0);
  }

  async function SendData(event: FormEvent) {
    event.preventDefault();
    ValidationDat();

    if (!isValidate) {
      return;
    }

    const response = await fetch(
      "http://localhost:3001/transactions/newTransaction",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Amount, Description, Categorie, Date }),
      }
    );

    if (!response.ok) {
      console.log("Error in the response");
    }
    window.location.reload();
    setAmount(0);
    setDescription("");
    setCategorie("");
    setDate("");
  }

  if (!isClicked) {
    return null;
  }

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 flex justify-center items-center px-4 z-10">
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
              setDescription={setDescription}
              Categorie={Categorie}
              setCategorie={setCategorie}
              Date={Date}
              setDate={setDate}
              SendData={SendData}
              AddOptions={AddOptions}
            />
          )}
          {ComponentType === "Income" && (
            <Income
              Amount={Amount}
              setAmount={setAmount}
              Description={Description}
              setDescription={setDescription}
              Categorie={Categorie}
              setCategorie={setCategorie}
              Date={Date}
              setDate={setDate}
              SendData={SendData}
              AddOptions={AddOptions}
            />
          )}
        </form>
        {/* only for test TODO fix the design later */}
        {Errmsg.length > 0 && (
          <div className="mt-4 text-red-500">
            <ul>
              {Errmsg.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddTransactions;
