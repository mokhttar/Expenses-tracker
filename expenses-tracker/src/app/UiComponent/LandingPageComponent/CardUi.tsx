import React from "react";
import { Offer } from "./PaymentPlan";
import { Poppins } from "next/font/google";

interface CardUiInterface {
  offers: Offer[];
}
//TODO change the discount numbers
//TODO add  animations

const PoppinsFont = Poppins({ subsets: ["latin"], weight: "900" });

function CardUi(props: CardUiInterface) {
  const { offers } = props;
  function CalculateDiscount(): number | undefined {
    let FinalPrice: number = 0;
    for (let i = 0; i < offers.length; i++) {
      if (offers[i].discountAmount != 0) {
        FinalPrice = offers[i].originalPrice * (offers[i].discountAmount / 100);
        return FinalPrice;
      }
      FinalPrice = offers[i].originalPrice;
      return FinalPrice;
    }
  }

  return (
    <div className="w-screen  flex md:flex-row flex-col gap-5 md:px-10 px-2">
      <div className="md:w-1/2 flex items-center  shadow-lg  px-3 rounded-xl justify-center py-10  gap-10">
        <div>
          <h1 className={` md:text-3xl  text-2xl font-semibold py-2`}>
            {offers[0].title}
          </h1>
          <p className="text-gray-400">{offers[0].description}</p>
          <div className="py-2">
            <button className="bg-green-600  py-1 md:px-5  px-1  scale-90  md:scale-100 rounded-lg text-white font-semibold">
              Start free Trial
            </button>
          </div>
        </div>

        <div className=" mt-2  h-[90px] border border-gray-200"></div>
        <div>
          <h1 className="text-center text-5xl font-semibold">
            ${offers[0].originalPrice}
          </h1>
          <p className="text-sm text-center text-gray-400">Par Month</p>
        </div>
      </div>

      <div className="md:w-1/2 flex items-center bg-green-500 text-white  shadow-lg  rounded-xl justify-center py-10  gap-10">
        <div>
          <h1 className={` text-3xl  font-semibold py-2`}>{offers[1].title}</h1>
          <p>{offers[1].description}</p>
          <div className="py-2">
            <button className="bg-white   py-1 md:px-5  px-1  scale-90  md:scale-100 rounded-lg text-green-500 font-semibold">
              Start free Trial
            </button>
          </div>
        </div>

        <div className=" mt-2  h-[90px] border border-gray-200"></div>
        <div>
          <h1 className="text-center text-5xl font-semibold">
            <span className="    line-through  text-red-700">
              {" "}
              ${offers[1].originalPrice}
            </span>
            <br />
            <span>${CalculateDiscount()}</span>
          </h1>
          <p className="text-sm text-center ">Par Year</p>
        </div>
      </div>
    </div>
  );
}

export default CardUi;
