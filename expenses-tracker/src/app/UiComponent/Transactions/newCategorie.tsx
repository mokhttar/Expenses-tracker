import React, { FormEvent, useState } from "react";
import InputFiles from "./InputFiles";
import CloseIcon from "/public/assets/Cancel.svg";
import Image from "next/image";

interface NewCategorieProps {
  ShowNewCat: boolean;
  setShowNewCat: (show: boolean) => void;
  handleClick: () => void;
}

function NewCategorie({
  ShowNewCat,
  setShowNewCat,
  handleClick,
}: NewCategorieProps) {
  const [CategorieName, setCategorieName] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  function handleName(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setCategorieName(event.target.value);
  }

  function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const newFile = event.target.files ? event.target.files[0] : null;
    setFile(newFile);
  }

  async function SendData(event: FormEvent) {
    event.preventDefault();
    ValidationData();

    if (!CategorieName || !file) {
      console.log("Please fill all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("CategorieName", CategorieName);
    formData.append("file", file);

    const response = await fetch("http://localhost:3001/Categorie", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      console.log("Problem adding new Categorie, check the backend.");
    } else {
      console.log("Successfully added new Categorie!");
      window.location.reload();
    }
  }

  function ValidationData() {
    console.log("Validation Data function");
  }

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 flex justify-center items-center px-4 z-10">
      <div className="bg-white p-10 rounded-md relative">
        <Image
          src={CloseIcon}
          alt="close-tab-icon"
          width={30}
          className="absolute top-5 right-10"
          onClick={handleClick}
        />
        <p className="text-3xl font-semibold text-center text-green-500">
          New Categorie
        </p>
        <div className="mt-5">
          <form onSubmit={SendData}>
            <label htmlFor="categorieName">Name of The Categorie</label>
            <input
              type="text"
              size={20}
              className="w-full rounded-full py-2 border"
              onChange={handleName}
              value={CategorieName}
            />
            <div className="flex items-center justify-center my-2">
              <InputFiles handleFile={handleFile} />
            </div>
            <br />
            <button
              type="submit"
              className="w-full rounded-md py-2 text-xl font-semibold bg-green-500 text-white"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewCategorie;
