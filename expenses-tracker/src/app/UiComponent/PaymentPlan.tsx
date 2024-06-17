"use client";
import React, { useState, FormEvent } from "react";
import PaymentOffers from "./PaymentOffers";

enum Categorie {
  MONTHLY,
  YEARLY,
}
enum Rank {
  Normal,
  Premium,
}

export interface Offer {
  id: number;
  title: string;
  description: string;
  discountAmount: number ;
  originalPrice: number;
  categorie: Categorie;
  rank: Rank;
}

const monthlyOffers: Offer[] = [
  {
    id: 1,
    title: "Simple Start",
    description: "Best For small individuals",
    originalPrice: 20,
    discountAmount: 0,
    categorie: Categorie.MONTHLY,
    rank: Rank.Normal,
  },
  {
    id: 2,
    title: "Essentials",
    description: "Best For Group Members",
    originalPrice: 40,
    discountAmount: 5,
    categorie: Categorie.MONTHLY,
    rank: Rank.Premium,
  },
];

const yearlyOffers: Offer[] = [
  {
    id: 3, 
    title: "Simple Start",
    description: "Best For small individuals",
    originalPrice: 220,
    discountAmount: 20,
    categorie: Categorie.YEARLY,
    rank: Rank.Normal,
  },
  {
    id: 4, 
    title: "Essentials",
    description: "Best For Group Members",
    originalPrice: 600,
    discountAmount: 30,
    categorie: Categorie.YEARLY,
    rank: Rank.Premium,
  },
];

function PaymentPlan() {
  const [toggleValue, setToggleValue] = useState(true);

  const handleToggle = (event: FormEvent<HTMLInputElement>) => {
    setToggleValue(!toggleValue);
    console.log("hi you clicked me", toggleValue);
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <div className="flex flex-col text-center text-2xl font-semibold text-black">
        <h1>Choose The Right Plan For</h1>
        <h1>Your Business</h1>
      </div>
      <div className="py-5">
        <div className="flex gap-2">
          <p className="text-black font-semibold">Monthly</p>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onClickCapture={handleToggle}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-green-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-400"></div>
          </label>
          <p className="text-gray-400">Yearly</p>
          <p className="bg-red-500 text-white px-4 rounded-md">20% Save</p>
        </div>
      </div>
      <div className="mt-20">
        <PaymentOffers
          toggleValue={toggleValue}
          monthlyOffers={monthlyOffers}
          yearlyOffers={yearlyOffers}
        />
      </div>
    </div>
  );
}

export default PaymentPlan;
