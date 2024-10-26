import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const RoomsPreviewCard = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-5 border p-5 rounded-md">
      <Image
        src={"/room.svg"}
        width={200}
        height={100}
        alt="rooms"
        className="w-full"
      />
      <p className="font-medium">
        Room No: <span>101</span>
      </p>
      <Link href={"/admin/floors/rooms/101"}>
        <Button className="w-full bg-brandPrimary hover:bg-brandPrimary-dark">
          View Detail
        </Button>
      </Link>
    </div>
  );
};

export default RoomsPreviewCard;
