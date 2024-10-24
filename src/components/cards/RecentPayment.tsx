"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const RecentPayment = () => {
  return (
    <div className="flex justify-between w-full py-2 flex-nowrap">
      <div className="flex  items-center justify-start gap-7 ">
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="User avatar"
            width={60}
          />
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start justify-start">
          <p className="font-medium tracking-wide pb-1">Aayush Lamichhane</p>
          <p className="text-sm text-brandCopy-light">9841210666</p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start">
        <p className="text-xs text-brandCopy-light pb-2">2nd October, 2024</p>
        <p className="text-xl font-extrabold tracking-wider">Rs 8000</p>
      </div>
    </div>
  );
};

export default RecentPayment;
