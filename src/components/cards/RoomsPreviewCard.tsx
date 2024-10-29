import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { RoomData } from "@/@types/Room";

interface RoomsPreviewProps {
  room: RoomData;
}
const RoomsPreviewCard = (props: RoomsPreviewProps) => {
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
        Room No: <span>{props.room.roomNo}</span>
      </p>
      <Link href={`/admin/floors/rooms/${props.room._id}`}>
        <Button className="w-full bg-brandPrimary hover:bg-brandPrimary-dark">
          View Detail
        </Button>
      </Link>
    </div>
  );
};

export default RoomsPreviewCard;
