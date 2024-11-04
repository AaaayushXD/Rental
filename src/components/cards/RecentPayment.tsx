"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { RecentPaymentProps } from "@/@types/Cards";

const RecentPayment = ({ payments }: RecentPaymentProps) => {
  return (
    <div className="flex justify-between w-full py-2 flex-nowrap">
      <div className="flex  items-center justify-start gap-7 ">
        <Avatar>
          <AvatarImage src={payments.avatar} alt={payments.name} width={60} />
          <AvatarFallback>
            {payments.name
              .split(" ")
              .map((word) => word.slice(0, 1))
              .join("")
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start justify-start">
          <p className="font-medium tracking-wide pb-1">{payments.name}</p>
          <p className="text-sm text-brandCopy-light">{payments.phone}</p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start">
        <p className="text-xs text-brandCopy-light pb-2">{payments.date}</p>
        <p className="text-xl font-extrabold tracking-wider">
          Rs {payments.amount}
        </p>
      </div>
    </div>
  );
};

export default RecentPayment;
