import React from "react";
import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";
import HeroImage from "/public/assets/HeroSection.jpg";
import Image from "next/image";

const montserratFont = Montserrat({ subsets: ["cyrillic"], weight: "900" });
const PoppinsFont = Poppins({ subsets: ["latin"], weight: "800" });
//TODO  change hero seciton image it sucks
//TODO  make it responsive
function HeroSection() {
  return (
    <div className="w-full mt-20 flex flex-wrap flex-col  md:flex-row  px-20">
      <div className="md:w-2/3 flex  px-10 gap-4 flex-col  text-start justify-center">
        <div className={PoppinsFont.className}>
          <h1 className="md:text-6xl  text-4xl px-5     ">
            Experience a Freshway to{" "}
            <span className="text-green-500">Manage Money</span>
          </h1>
        </div>
        <div>
          <p className="mt-10 w-2/3 px-5 pb-5 text-gray-500 font-medium">
            Take control of your finances with our intuitive platform. Get
            personalized insights tailored to your spending habits, create
            custom budgets that work for you, track your expenses effortlessly,
            and enjoy the convenience of managing subscriptions—all for free.
            Start your journey towards financial freedom today!
          </p>
        </div>

        <div className="px-5 ">
          <button className="py-2 border w-32  rounded-md text-white bg-gradient-to-t font-semibold from-green-600   to-green-400">
            Get Started
          </button>
        </div>
      </div>
      <div className="md:w-1/3  flex items-center justify-center bg-cover">
        <Image
          src={HeroImage}
          width={500}
          alt="hero-section-img"
          className="mt-5 rounded-[40px]"
        />
      </div>
    </div>
  );
}

export default HeroSection;
