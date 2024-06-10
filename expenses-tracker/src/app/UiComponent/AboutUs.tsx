import React from "react";
import { Poppins } from "next/font/google";

const PopinsFont = Poppins({ subsets: ["latin"], weight: "400" });
function AboutUs() {
  return (
    <div className="flex flex-col  bg-green-600">
      <div>
        <h1 className={`${PopinsFont.className} text-2xl`}>
          PennyPilot is Loaded With Free Features
        </h1>
      </div>
      <div className="flex ">
        <div className="flex ">
          <div></div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default AboutUs;
