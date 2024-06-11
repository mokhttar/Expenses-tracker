import React from "react";
import { CardType } from "./AboutUs";
import { Poppins } from "next/font/google";

interface AboutUsCardProps {
  DataArray: CardType[];
}
// const PopinsFont = Poppins({subsets:['latin'],weight:"400"})
//TODO fix the design it broken 
function AboutUsCard({ DataArray }: AboutUsCardProps) {
  return (
    <div className="flex w-full gap-10 flex-wra py-10 items-center justify-center  pb-20 flex-wrap sm:flex-nowrap  px-5 overflow-hidden">
      {DataArray.map((Element: CardType, index: number) => {
        return (
          <div
            key={Element.id}
            className="flex   px-2  gap-2 justify-center items-center  "
          >
            <div className="  w-1/3  size-14 rounded-md items-center flex  justify-center   ">
              <div className="bg-white px-2 py-2 rounded-md">
                <img
                  src={`/assets/${Element.img}`}
                  alt="card-image"
                  className="rounded-md  w-fit "
                />
              </div>
            </div>
            <div className="flex  text-white flex-col   break-words">
              <h3 className="font-bold text-2xl py-1">{Element.title}</h3>
              <p className="text-gray-200  font-semibold">
                {Element.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AboutUsCard;
