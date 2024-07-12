import React, { FormEvent } from "react";
import CloseIcon from "/public/assets/Cancel.svg";
import Image from "next/image";
import { Categorie } from "./LimitsByCategorie";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface AddLimitsProps {
  ShowMenu: boolean;
  setShowMenu: (value: boolean) => void;
  handleMenu: (value: FormEvent) => void;
  Categories: Categorie[];
  SelectedCat: any;
  setSelectedCat: any;
  setSelectedamount: (value: number) => void;
  Selectedamount: number;
}  



//TODO fix it later
const AddLimits = ({
  ShowMenu,
  setShowMenu,
  handleMenu,
  Categories,
  SelectedCat,
  setSelectedCat,
  setSelectedamount,
  Selectedamount,
}: AddLimitsProps) => {
  //TODO remove it you dont need it any more
  const ToBase64 = (buffer: Buffer) => {
    return buffer.toString("base64");
  };
  const GetCategorie = (event: any) => {
    event.preventDefault();
    setSelectedCat(event.target.value);
    console.log(SelectedCat);
  };
  const GetAmount = (event: any) => {
    event.preventDefault();
    setSelectedamount(event.target.value);
    console.log(Selectedamount);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 w-screen h-screen">
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
          <form className="mt-5">
            <p className="text-gray-400 text-xs font-light py-2">
              Select Category
            </p>

            <Select onValueChange={GetCategorie}>
              <SelectTrigger className="">
                <SelectValue placeholder="Select Categorie" />
              </SelectTrigger>

              <SelectContent className="z-10 bg-white">
                {Categories?.map((Element: Categorie, Index: number) => {
                  return (
                    <SelectItem
                      key={Index}
                      value={Element.name}
                      className="flex gap-2 bg-green-500"
                    >
                      <div className="flex">
                        <Image
                          src={`data:image/svg+xml;base64,${Element.img}`}
                          alt={`${Element.name}`}
                          width={26}
                          height={20}
                        />
                        <p>{Element.name}</p>
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>

            <p className="text-xs text-gray-400 py-2 mt-2">
              Enter your Limit Amount
            </p>
            <input
              type="number"
              size={20}
              className="border py-2 rounded w-full px-2"
              onChange={GetAmount}
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
