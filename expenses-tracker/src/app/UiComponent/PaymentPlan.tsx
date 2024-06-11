"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FormEvent } from "react";

const MONTHLY: string = "Monthly";
const YEARLY: string = "Yearly";

enum Categorie {
  MONTHLY,
  YEARLY,
}

interface discount {
  id: number;
  amount: number;
  categorie: Categorie;
}

//TODO make the discount  static for now  and  when you starting working wiith the backend   add  the logic of it

// const discount: discount[] = [];

function PaymentPlan() {
  // default value  is false
  //false ==> monthly offers
  const [togleValue, settogleValue] = useState(false);
  const handleTogle = (event: FormEvent<HTMLInputElement>) => {
    settogleValue(!togleValue); // Toggle the state
    console.log("hi you clicked me", togleValue); // Log the updated state value
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <div className="flex  flex-col text-center text-2xl font-semibold text-black">
        <h1>Choose The Right Plan For</h1>
        <h1>Your Buisiness</h1>
      </div>
      <div className="py-5">
        {/* togle button  i didnt creat it my self i was dizzy */}
        <div className="flex gap-2">
          <p className="text-black font-semibold">Monthly</p>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onClickCapture={handleTogle}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-green-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-red-400"></div>
          </label>
          <p className="text-gray-400">Yearly</p>
          <p className="bg-red-500     text-white   px-4 rounded-md ">
            20% Save
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentPlan;
