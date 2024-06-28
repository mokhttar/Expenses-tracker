import React from "react";

function Expenses() {
  return (
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
              type="text"
              name="Amount"
              size={10}
              className="border rounded-md w-full py-1"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="Amount"
              className="text-sm text-gray-400 font-medium"
            >
              Amount
            </label>
            <br />
            <input
              type="text"
              name="Amount"
              size={10}
              className="border rounded-md w-full py-1"
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
          <select name="categorie" className="w-full py-2 px-2 rounded-md mt-2">
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
          />
        </div>
        <div>
          <button className="w-full border bg-green-500 text-white font-semibold py-2 text-center rounded-full mt-5">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Expenses;
