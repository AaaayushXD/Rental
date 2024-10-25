"use client";
import React from "react";
import BoilerPlate from "../BoilerPlate";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <BoilerPlate>
      <div className="w-full max-w-[1500px] flex flex-col justify-start items-start p-5 font-light ">
        <div className="w-full flex justify-between px-3 pt-10 items-center">
          <h2 className="text-2xl font-extrabold tracking-wide">Floors</h2>
          <p className="flex  gap-1 items-center justify-start p-2 text-sm hover:bg-brandPrimary-dark cursor-pointer bg-brandPrimary text-brandPrimary-content rounded">
            <PlusCircle size={20} />
            <span>Add</span>
          </p>
        </div>
        <div className="flex flex-col justify-start items-start px-3  py-5 gap-8">
          <div className="max-w-[900px] flex relative justify-start items-center flex-grow w-full rounded-xl  py-5 gap-6 ">
            <Image
              src={"/ground_floor.png"}
              alt="ground floor"
              className="w-full h-full flex object-fill flex-grow"
              width={200}
              height={100}
            />
            <p className="text-3xl text-nowrap font-extrabold pl-5 pr-9 ">
              Ground Floor
            </p>
            <div className="absolute w-full h-full top-0 left-0 bg-[#20202013] rounded-md"></div>
          </div>
          <div className="max-w-[900px] flex relative justify-start items-center flex-grow w-full rounded-xl  py-5 gap-6 ">
            <Image
              src={"/ground_floor.png"}
              alt="ground floor"
              className="w-full h-full flex object-fill flex-grow"
              width={200}
              height={100}
            />
            <p className="text-3xl text-nowrap font-extrabold pl-5 pr-9 ">
              First Floor
            </p>
            <div className="absolute w-full h-full top-0 left-0 bg-[#20202013] rounded-md"></div>
          </div>
        </div>
      </div>
    </BoilerPlate>
  );
};

export default Page;
