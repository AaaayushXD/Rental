"use client";
import React from "react";
import { AnnoucementCardProps } from "@/@types/Cards";
import { formatDate } from "@/helpers/DateFormatter";

const AnnoucementCard = ({ cards }: AnnoucementCardProps) => {
  return (
    <div className="w-full flex flex-col flex-wrap gap-4 justify-start items-start bg-background p-3  rounded-md">
      <div className="font-medium flex justify-between w-full items-center">
        <p className="flex gap-5 items-center">{cards.title}</p>
        <p className="font-light text-xs text-brandCopy-lighter flex flex-col justify-start items-start">
          <span>{formatDate(new Date(cards.dateAndTime))}</span>
        </p>
      </div>
      <p className="text-sm text-brandCopy-light text-wrap">
        {cards.description}
      </p>
    </div>
  );
};

export default AnnoucementCard;
