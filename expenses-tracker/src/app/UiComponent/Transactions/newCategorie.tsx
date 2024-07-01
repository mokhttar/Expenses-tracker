import React, { FormEvent } from "react";
import InputFiles from "./InputFiles";
import CloseIcon from "/public/assets/Cancel.svg";
import Image from "next/image";
interface NewCategorie {
  ShowNewCat: boolean;
  setShowNewCat: any;
  handleClick: any;
}

function NewCategorie({
  ShowNewCat,
  setShowNewCat,
  handleClick,
}: NewCategorie) {
  return (
    <div className=" fixed  inset-0 backdrop-blur-sm bg-black bg-opacity-50 flex justify-center items-center px-4 z-10">
      <div className="bg-white p-10 rounded-md relative">
        <Image
          src={CloseIcon}
          alt="close-tab-icon"
          width={30}
          className=" absolute top-5 right-10"
          onClick={handleClick}
        />
        <p className="text-3xl font-semibold   text-center text-green-500 ">
          New Categorie
        </p>
        <div className="mt-5">
          <form>
            <label htmlFor="categorieName">Name of The Categorie</label>

            <input
              type="text"
              size={20}
              className="w-full  rounded-full py-2   border"
            />
            <div className="flex items-center justify-center my-2">
              {/* <input
                type="file"
                name="AddFile"
                className="item-center text-center"
                value={"Upload file"}
                onClick={(e:any) => e.target.value = null} 
              /> */}

              <InputFiles />
            </div>
            <br />
            <button className="w-full rounded-md   py-2 text-xl font-semibold bg-green-500 text-white ">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewCategorie;
