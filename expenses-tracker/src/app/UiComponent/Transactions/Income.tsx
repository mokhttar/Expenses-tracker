import React from "react";
import { FormEvent } from "react";
import { ChangeEvent } from "react";
//TODO remove the arrows from the  number input

export interface PropsInterface {
  Amount: number;
  setAmount: (value: number) => void;
  Description: string;
  setDescription: (value: string) => void;
  Categorie: string;
  setCategorie: (value: string) => void;
  Date: string;
  setDate: (value: string) => void;
  SendData: any;
}
function Income({
  Amount,
  setAmount,
  Description,
  setDescription,
  Categorie,
  setCategorie,
  Date,
  setDate,
  SendData,
}: PropsInterface) {
  function handleChangeAmount(event: React.ChangeEvent<HTMLInputElement>) {
    setAmount(parseInt(event.target.value));
  }
  function handleDescription(event: React.ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }
  function handleCategorie(event: React.ChangeEvent<HTMLSelectElement>) {
    setCategorie(event.target.value);
  }
  function handleDate(event: React.ChangeEvent<HTMLInputElement>) {
    setDate(event.target.value);
  }

  return (
    <>
      <div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label
                htmlFor="Amount"
                className="text-sm text-gray-400 font-medium"
              >
                Amount
              </label>
              <br />
              <input
                type="number"
                name="Amount"
                size={10}
                className="border rounded-md w-full py-1 "
                onChange={handleChangeAmount}
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="Amount"
                className="text-sm text-gray-400 font-medium"
              >
                Description
              </label>
              <br />
              <input
                type="text"
                name="Amount"
                size={10}
                className="border rounded-md w-full py-1"
                onChange={handleDescription}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="categorie"
              className="text-sm text-gray-400 font-medium"
            >
              Categorie
            </label>
            <br />
            <select
              name="categorie"
              className="w-full py-2 px-2 rounded-md mt-2"
              onChange={handleCategorie}
            >
              <option value="Choose your Option" defaultValue={"Options"}>
                Options
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="Date" className="text-sm text-gray-400 font-medium">
              Choose your Date
            </label>
            <br />
            <input
              type="date"
              name="Date"
              id=""
              className="w-full border py-2 px-2 rounded-md"
              onChange={handleDate}
            />
          </div>
          <div>
            <button className="w-full border bg-green-500 text-white font-semibold py-2 text-center rounded-full mt-5" onClick={SendData}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Income;
