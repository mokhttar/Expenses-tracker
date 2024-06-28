"use client";
import React from "react";
import CancelIcon from "/public/assets/Cancel.svg";
import Image from "next/image";
import { FormEvent } from "react";
import { useState } from "react";
import { useRef } from "react";
import Expenses from "./Expenses";

interface AddTransactionsProps {
  isClicked: boolean;
  setIsClicked: (value: boolean) => void;
}

function AddTransactions({ isClicked, setIsClicked }: AddTransactionsProps) {
  function handleCloseForm(event: FormEvent) {
    event.preventDefault();
    setIsClicked(!isClicked);
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }
  if (!isClicked) {
    return null;
  }
  const componentref = useRef(null);
  const [ComponentType, setComponentType] = useState("");

  function handleRef(event: FormEvent) {
    event.preventDefault();
    if (componentref.current != null) {
      setComponentType((_preValue) => componentref.current.innerText);
    }
    console.log(ComponentType);
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
            ref={componentref}
            onClick={handleRef}
          >
            Expenses
          </h3>
          <h3 className="text-gray-500 font-semibold hover:bg-green-500 hover:text-white hover:py-1 hover:rounded-full hover:px-4 cursor-pointer">
            Income
          </h3>
          <h3 className="text-gray-500 font-semibold hover:bg-green-500 hover:text-white hover:py-1 hover:rounded-full hover:px-4 cursor-pointer">
            Transfer
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="mt-5">
          {ComponentType === "Expenses" && <Expenses />}
        </form>
      </div>
    </div>
  );
}

export default AddTransactions;
