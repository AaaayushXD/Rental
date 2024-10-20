"use client";
import React from "react";

const RentCard = () => {
  return (
    <div className="bg-brandForeground p-3 rounded-md flex flex-col items-start justify-start text-brandCopy">
      <p className="flex justify-between items-center w-full font-medium tracking-wide pb-3">
        Rent Paid
        <span className="text-xs font-light text-brandCopy-lighter">
          12:15 AM
        </span>
      </p>
      <p className="text-sm text-brandCopy-light text-wrap">
        You have paid your rent of Rs <span>8000</span>
      </p>
      <p className="text-sm font-medium text-brandCopy-light flex items-center justify-start gap-1">
        Month: <span className="font-light">August</span>
      </p>
      <p className="text-sm font-medium text-brandCopy-light flex items-center justify-start gap-1">
        Paid on: <span className="font-light">2024-08-10</span>
      </p>
    </div>
  );
};

export default RentCard;
