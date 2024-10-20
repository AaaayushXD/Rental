"use client";
import React from "react";

const AnnoucementCard = () => {
  return (
    <div className="w-full flex flex-col flex-wrap gap-4 justify-start items-start bg-background p-3  rounded-md">
      <div className="font-medium flex justify-between w-full items-center">
        <p> No water till 3 PM</p>
        <p className="font-light text-xs text-brandCopy-lighter flex flex-col justify-start items-start">
          <span>08:00 AM</span>
          <span>21st Oct, 2024</span>
        </p>
      </div>
      <p className="text-sm text-brandCopy-light text-wrap">
        There won{"'"}t be any water available in all taps from 12 PM to 3 PM on
        21st October, 2024. As we are cleaning the tanks, water in taps will be
        turned off.{" "}
      </p>
    </div>
  );
};

export default AnnoucementCard;
