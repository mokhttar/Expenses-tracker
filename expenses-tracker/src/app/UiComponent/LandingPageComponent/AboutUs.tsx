import React from "react";
import { Poppins } from "next/font/google";
import AboutUsCard from "./AboutUsCard";

const PopinsFont = Poppins({ subsets: ["latin"], weight: "900" });
export interface CardType {
  id: number;
  title: string;
  description: string;
  img: string;
}
function AboutUs() {
  const DataArray: CardType[] = [
    {
      id: 1,
      title: "Spend Smarter",
      description:
        "ips and strategies to help you make more informed and efficient spending decisions, maximizing your savings and getting the most value for your money.",
      img: "Card1.svg",
    },
    {
      id: 2,
      title: "Spend Smarter",
      description:
        "A tool to help you track and manage your income and expenses, ensuring you stay on top of your finances and achieve your financial goals efficiently.",
      img: "Card2.svg",
    },
    {
      id: 3,
      title: "Financial Insights",
      description:
        "Gain a deeper understanding of your spending habits and financial health with detailed reports and analytics, empowering you to make better financial decisions",
      img: "Card3.svg",
    },
  ];

  return (
    <div className="flex flex-col  bg-green-600 py-10">
      <div className={`${PopinsFont.className} text-4xl`}>
        <h1 className={`  text-center text-white   mt-5  break-words`}>
          PennyPilot is Loaded With
        </h1>
        <p className={`   text-center text-white font-bold   break-words`}>
          {" "}
          Free Features
        </p>
      </div>
      <section className="flex flex-wrap ">
        <AboutUsCard DataArray={DataArray} />
      </section>
    </div>
  );
}

export default AboutUs;
