"use client";
import React from "react";

const TicketCard = () => {
  return (
    <div className="border rounded-md p-3 flex w-full">
      <div className="flex flex-col justify-start items-start w-full">
        <div className="flex justify-between w-full  items-center gap-2 pb-3">
          <h4 className="font-medium tracking-wide">Water Shortage</h4>
          <p className="text-xs text-brandCopy-lighter">
            Severity: <span className="text-destructive">High</span>
          </p>
        </div>
        <p className="text-sm text-brandCopy-light text-wrap">
          There is problem in water tap in second floor. The tap is broken from
          the top
        </p>
        <p className="pt-3 text-xs text-brandCopy-lighter">12:08 PM</p>
      </div>
    </div>
  );
};

export default TicketCard;
