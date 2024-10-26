import React from "react";
import BoilerPlate from "../../BoilerPlate";
import { PlusCircle } from "lucide-react";
import RoomsPreview from "@/components/cards/RoomsPreviewCard";

const Page = () => {
  return (
    <BoilerPlate>
      <div className="w-full max-w-[1500px] flex flex-col justify-start items-start p-5 font-light ">
        <div className="w-full flex justify-between px-3 pt-10 items-center">
          <h2 className="text-2xl font-extrabold tracking-wide">Rooms</h2>
          <p className="flex  gap-1 items-center justify-start p-2 text-sm hover:bg-brandPrimary-dark cursor-pointer bg-brandPrimary text-brandPrimary-content rounded">
            <PlusCircle size={20} />
            <span>Add</span>
          </p>
        </div>
        <div className="grid grid-cols-2 w-full lg:grid-cols-4 px-3 py-8 gap-6">
          <RoomsPreview />
          <RoomsPreview />
          <RoomsPreview />
          <RoomsPreview />
        </div>
      </div>
    </BoilerPlate>
  );
};

export default Page;
