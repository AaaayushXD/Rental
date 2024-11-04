"use client";
import React, { useEffect } from "react";
import RecentPayment from "@/components/cards/RecentPayment";
import { RecentPayments } from "@/@types/Cards";

const RecentPaymentData: RecentPayments = {
  amount: 8000,
  avatar: "https://avatars.githubusercontent.com/u/124599?v=4",
  date: "2024-08-19",
  name: "Aayush Lamichhane",
  phone: "9813425299",
};

const Payments = () => {
  useEffect(() => {
    //get all payments of the current month only
  }, []);
  return (
    <div className="w-full flex justify-start items-start flex-col gap-2 px-7 py-5 border rounded-xl flex-grow">
      <div className="flex flex-col gap-2 justify-start items-start w-full">
        <p className="font-medium tracking-wide flex justify-between w-full">
          Recent Payments
          <span className="text-xs p-2 bg-brandSecondary-light text-brandPrimary-content rounded-md">
            AUG
          </span>
        </p>
        <p className="text-sm text-brandCopy-light">
          7 rooms have already paid their rent this month.
        </p>
      </div>
      <div className="w-full py-8 flex flex-col gap-4 justify-start items-start ">
        <RecentPayment payments={RecentPaymentData} />
        <RecentPayment payments={RecentPaymentData} />
        <RecentPayment payments={RecentPaymentData} />
      </div>
    </div>
  );
};

export default Payments;
