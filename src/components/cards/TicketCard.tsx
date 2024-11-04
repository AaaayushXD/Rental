"use client";
import { TicketCardProps } from "@/@types/Cards";
import React from "react";

const TicketCard = ({ tickets }: TicketCardProps) => {
  return (
    <div className="border rounded-md p-3 flex w-full">
      <div className="flex flex-col justify-start items-start w-full">
        <div className="flex justify-between w-full  items-center gap-2 pb-2">
          <h4 className="font-medium tracking-wide">{tickets.title}</h4>
          <p className="text-xs text-brandCopy-lighter">
            Severity:{" "}
            <span className="text-destructive">{tickets.severity}</span>
          </p>
        </div>
        <p className="text-sm text-brandCopy-light text-wrap flex  flex-col gap-1">
          {tickets.description}
          <span className="text-brandCopy-lighter text-xs pt-2">
            {tickets.username && "-By: " + tickets.username}
          </span>
        </p>
        <p className="pt-2 text-xs text-brandCopy-lighter">{tickets.time}</p>
      </div>
    </div>
  );
};

export default TicketCard;
