"use client";
import React from "react";
import BoilerPlate from "../BoilerPlate";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
          <h4 className="font-light tracking-wider text-xl">
            Select a floor:{" "}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between">
            <Link
              href={"/admin/floors/ground"}
              className="border px-5 py-8 rounded-lg w-full flex flex-grow relative "
            >
              <Image
                src={"/ground_floor.png"}
                alt="ground floor"
                className="w-full h-full flex flex-grow items-center z-[-1]"
                width={"500"}
                height={"300"}
              />
              <p className="text-5xl text-nowrap flex flex-col gap-3 font-extrabold pl-5 pr-9 absolute top-0 left-0 rounded-lg w-full h-full bg-[#0c0b0b57] justify-center items-center text-brandPrimary-content z-10 tracking-wider">
                Ground Floor
                <span className="font-light text-lg">Total rooms: 4</span>
              </p>
            </Link>
            <Link
              href={"/admin/floors/first"}
              className="border px-5 py-8 rounded-lg w-full flex flex-grow relative "
            >
              <Image
                src={"/first_floor.png"}
                alt="ground floor"
                className="w-full h-full flex flex-grow items-center z-[-1]"
                width={"500"}
                height={"300"}
              />
              <p className="text-5xl text-nowrap flex flex-col gap-3 font-extrabold pl-5 pr-9 absolute top-0 left-0 rounded-lg w-full h-full bg-[#0c0b0b57] justify-center items-center text-brandPrimary-content z-10 tracking-wider">
                First Floor
                <span className="font-light text-lg">Total rooms: 5</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </BoilerPlate>
  );
};

export default Page;
