"use client";
import { AnnoucementCardProps } from "@/@types/Cards";
import React from "react";

const AnnoucementCard = ({ cards }: AnnoucementCardProps) => {
  return (
    <div className="w-full flex flex-col flex-wrap gap-4 justify-start items-start bg-background p-3  rounded-md">
      <div className="font-medium flex justify-between w-full items-center">
        <p>{cards.title}</p>
        <p className="font-light text-xs text-brandCopy-lighter flex flex-col justify-start items-start">
          <span>{cards.dateAndTime}</span>
        </p>
      </div>
      <p className="text-sm text-brandCopy-light text-wrap">
        {cards.description}
      </p>
    </div>
  );
};

export default AnnoucementCard;
