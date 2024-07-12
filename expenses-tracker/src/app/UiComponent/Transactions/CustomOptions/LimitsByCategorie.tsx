"use client";
import React, { FormEvent } from "react";
import TotalExpenses from "../../DashboardComponent/TotalExpenses";
import TotalIncome from "../../DashboardComponent/TotalIncome";
import PlusIcon from "/public/assets/Plus.svg";
import Image from "next/image";
import { useState } from "react";
import AddLimits from "./AddLimits";
import { Buffer } from "buffer";
// import { Progress } from "flowbite-react";
import { Progress } from "@/components/ui/progress";
export type Categorie = {
  id?: number;
  name: string;
  img: Buffer;
};

function LimitsByCategorie() {
  // GetCategories();
  //hmmm do i get all the table or i get only the table name and image ??
  const [ShowMenu, setShowMenu] = useState<boolean>(false);
  const [Categories, setCategories] = useState<Categorie[]>([
    { id: 0, name: "", img: Buffer.alloc(0) },
  ]);

  const [SelectedCat, setSelectedCat] = useState<string>("");
  const [Selectedamount, setSelectedamount] = useState<number>(0);

  async function GetCategories() {
    const response = await fetch(" http://localhost:3001/Categorie/getAll");
    if (!response.ok) {
      throw new Error("Error geting data from the data base !");
    } else {
      const data = await response.json();
      //destruct the data ,
      if (!response.ok) console.log("error getting data from the backend");
      else {
        // const [{ id: number, name: string, img: Buffer }] = data;
        const categoriesData: Categorie[] = data.map((item: any) => ({
          id: item.id,
          name: item.name,
          // img:item.buffer
          img: Buffer.from(item.buffer.data).toString("base64"),
        }));

        setCategories(categoriesData);
      }
    }
  }
  //function to Submit the form of adding new limit
  const handleMenu = (event: FormEvent) => {
    event.preventDefault();
    setShowMenu(!ShowMenu);
    if (!ShowMenu) GetCategories();
  };

  return (
    <div className=" flex flex-col  gap-4   mt-10">
      <div className="flex w-full gap-2 px-5 pr-9 ">
        <div className=" border flex justify-center rounded-xl   p-5  w-1/2">
          <TotalExpenses />
        </div>
        <div className=" border rounded-xl flex justify-center p-5   w-1/2 ">
          <TotalIncome />
        </div>
      </div>
      <div className="px-4 mr-4">
        <div className="border py-4 px-4 rounded-xl       font-semibold bg-opacity-60">
          <div className="flex justify-between items-center   ">
            <p className="text-xl">Limits by Categorie</p>
            <Image src={PlusIcon} alt="plus-icon" width={30} />
          </div>
          <div className="mt-2">
            {Categories?.map((Element: Categorie, Index: number) => {
              return (
                <div key={Element.id} className="px-5  ">
                  <div className="flex items-center gap-3">
                    <Image
                      src={`data:image/svg+xml;base64,${Element.img}`}
                      alt={`${Element.name}`}
                      width={30}
                      height={30}
                      className="py-2"
                    />
                    <p className="">{Element.name}</p>
                  </div>
                  <div>
                    <Progress value={20} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full  text-center   mt-5 py-1  rounded-xl">
            <button
              className=" w-full rounded-xl  py-2  bg-black  text-white"
              onClick={handleMenu}
            >
              {Categories.length === 0 ? (
                <p>No Data yet</p>
              ) : (
                <div>Add new Limit</div>
              )}
            </button>
          </div>
          {/* Add Limits Menu */}
          <div>
            {ShowMenu && (
              <AddLimits
                ShowMenu={ShowMenu}
                setShowMenu={setShowMenu}
                handleMenu={handleMenu}
                Categories={Categories}
                SelectedCat={SelectedCat}
                setSelectedCat={setSelectedCat}
                Selectedamount={Selectedamount}
                setSelectedamount={setSelectedamount}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LimitsByCategorie;
