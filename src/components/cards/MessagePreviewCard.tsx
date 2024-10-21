import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

const MessagePreviewCard = () => {
  return (
    <div className="bg-background p-3 rounded-lg flex justify-between items-center gap-3">
      <div className="flex gap-5 w-full items-center justify-center">
        <Avatar className="size-[60px] flex justify-center items-center">
          <AvatarImage
            src="https://github.com/shadcn.png"
            className="rounded-full"
          />
        </Avatar>
        <div className="flex flex-col gap-0.5 items-start justify-start w-full">
          <p className="font-medium tracking-wide">Aayush Lamichhane</p>
          <div className="text-brandCopy-light flex w-full justify-between items-center">
            <p className="truncate max-w-[250px] text-xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corporis, reprehenderit!
            </p>
            <p className="text-[10px] text-brandCopy-lighter">1 hr ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePreviewCard;
