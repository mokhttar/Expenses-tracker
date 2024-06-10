import React from "react";

function Navbare() {
  return (
    <div className="w-full flex justify-between  mt-5  px-20">
      <div className="text-green-500">
        <p className="font-semibold text-lg">PennyPilot</p>
      </div>
      <div>
        <div className="flex  font-semibold text-center  gap-5 items-center ">
          <p className="text-gray-600">Home</p>
          <p className="text-gray-600">About</p>
          <p className="text-gray-600">Price</p>
          <p className="text-gray-600">Service</p>
          <button className="py-1 rounded-md px-3 text-green-500  bg-green-100    border border-green-400  ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbare;
