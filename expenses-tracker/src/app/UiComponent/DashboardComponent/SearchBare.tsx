"use client";
import React from "react";
import { useState } from "react";
import { FormEvent } from "react";
import SearchIcon from "/public/assets/Search.svg";
import Image from "next/image";

function SearchBare() {
  const [SearchValue, setSearchValue] = useState(null);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchValue(event.target.value);
    console.log(SearchValue)
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="flex items-center  px-2">
      <form onSubmit={handleSubmit}>
        <div className="relative flex ">
          <input
            type="search"
            className="border placeholder:text-gray-400 px-8    rounded-full py-1 "
            size={20}
            name="search"
            placeholder="Search"
            onChange={handleChange}
          />
          <Image
            src={SearchIcon}
            alt="search-icon"
            width={18}
            className="absolute top-2 left-2   "
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBare;
