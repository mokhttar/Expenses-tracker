import React, { FormEvent } from "react";
import CloseIcon from "/public/assets/Cancel.svg";
import Image from "next/image";
import { Categorie } from "./LimitsByCategorie";

interface AddLimitsProps {
  ShowMenu: boolean;
  setShowMenu: (value: boolean) => void;
  handleMenu: (value: FormEvent) => void;
  Categories: Categorie[];
}

const AddLimits = ({
  ShowMenu,
  setShowMenu,
  handleMenu,
  Categories,
}: AddLimitsProps) => {
  const SubmitForm = (event: FormEvent) => {
    event.preventDefault();
    // Add form submission logic here
  };

  // const ToBase64 = (buffer: Buffer) => {
  //   return buffer.toString("base64");
  // };
  console.log(Categories[0].img);
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 w-screen h-screen">
      <img
        // src={`data::image/svg+xml;base64,${Categories[0].img}`}
        src={`data:image/svg+xml;base64,${Categories[0].img}`}
        alt=""
        className="z-10"
      />
      <div className="flex flex-col">
        <div className="p-10 bg-white w-96 rounded-xl relative">
          <Image
            src={CloseIcon}
            alt="close-icon"
            width={20}
            className="absolute top-6 right-6 cursor-pointer"
            onClick={handleMenu}
          />
          <h1 className="text-center text-xl mt-5 text-green-500 font-semibold">
            Add new Limit
          </h1>
          <form onSubmit={SubmitForm} className="mt-5">
            <p className="text-gray-400 text-xs font-light py-2">
              Select Category
            </p>
            {/* problem of displayin find a react component that do this shit  */}
            {/* <select
              name="Select-Categories"
              className="w-full py-2 px-3 rounded"
            >
              {Categories?.map((Element: Categorie, Index: number) => {
                return (
                  <option value="option">
                    <Image
                      src={`data:image/svg+xml;base64,${Element.img}`}
                      alt="image"
                      width={20}
                      height={20}
                    />
                  </option>
                );
              })}
            </select> */}

            <p className="text-xs text-gray-400 py-2 mt-2">
              Enter your Limit Amount
            </p>
            <input
              type="number"
              size={20}
              className="border py-2 rounded w-full px-2"
            />
            <button className="w-full rounded-xl text-center font-semibold text-white bg-green-500 mt-5 py-2">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLimits;
