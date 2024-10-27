"use client"
import BoilerPlate from "@/app/admin/BoilerPlate";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <BoilerPlate>
      <div className="w-full max-w-[1500px] flex flex-col justify-start items-start p-5 font-light ">
        <h2 className="text-xl tracking-wider font-extrabold px-5 py-8">
          Room no 101
        </h2>
        <div className="px-5 grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center place-items-center">
          <Image
            src={"/room.svg"}
            alt="Room"
            width={200}
            height={100}
            className="w-full"
          />
          <div className="flex flex-col justify-start items-start gap-2 px-5">
            <div className="flex flex-col gap-2 text-sm tracking-wide">
              <p>
                Floor:
                <span className="font-medium text-lg"> Ground</span>
              </p>
              <p>
                Room No: <span className="font-medium text-lg">101</span>
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm tracking-wide">
              <p>
                Tenant Name:
                <span className="font-medium text-lg"> Aayush Lamichhane</span>
              </p>
              <p>
                Total People: <span className="font-medium text-lg">10</span>
              </p>
            </div>
            <div className="text-lg font-medium ">
              <p>Size</p>
              <p className="font-light text-sm">
                Width: <span className="text-lg font-medium">200x200</span>{" "}
                <span className="text-brandCopy-light">cm</span>
              </p>
              <p className="font-light text-sm">
                Height: <span className="text-lg font-medium">200x200</span>{" "}
                <span className="text-brandCopy-light">cm</span>
              </p>
            </div>
            <p className="text-sm tracking-wide ">
              Rent: Rs <span className="text-lg font-medium">8000</span>
            </p>
          </div>
        </div>
      </div>
    </BoilerPlate>
  );
};

export default Page;
