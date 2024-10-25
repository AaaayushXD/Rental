import React from "react";
import MessagePreviewCard from "@/components/cards/MessagePreviewCard";
import {
  ChevronLeft,
  Images,
  MoreVertical,
  Phone,
  Send,
  Video,
} from "lucide-react";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import MessageCard from "@/components/cards/MessageCard";
import BoilerPlate from "../BoilerPlate";

const Page = () => {
  return (
    <BoilerPlate>
      <div className="flex w-full h-full justify-center items-start p-5 bg-brandForeground overflow-x-hidden">
        <div className="max-w-[1800px] flex justify-start items-start gap-8 w-full overflow-x-hidden">
          <div className="w-full lg:max-w-[600px] flex flex-col font-light gap-10 pt-5 h-full ">
            <h3 className="text-xl tracking-wider font-extrabold pl-3">
              Messages
            </h3>
            <div className="px-3 flex flex-col gap-2 justify-start w-full max-h-screen overflow-y-auto">
              <MessagePreviewCard />
              <MessagePreviewCard />
              <MessagePreviewCard />
            </div>
          </div>
          <div className="max-w-[1800px] max-h-screen lg:flex flex-col w-full font-light gap-5 pt-5 hidden overflow-x-hidden">
            <div className="flex w-full justify-between items-center">
              <div className="flex justify-start items-center gap-2">
                <ChevronLeft />
                <Avatar className="size-[40px] flex justify-center items-center">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    className="rounded-full"
                  />
                </Avatar>
                <p className="text-sm font-medium">Aayush Lamichhane</p>
              </div>
              <div className="flex justify-start items-center gap-3">
                <Phone />
                <Video />
                <MoreVertical />
              </div>
            </div>
            <Separator />
            <div className="w-full min-h-[60vh] h-full overflow-y-auto flex flex-col gap-1">
              <MessageCard />
              <MessageCard />
            </div>
            <Separator />
            <div className="flex w-full gap-3 justify-center items-center">
              <Images />
              <input
                placeholder="Send message"
                type="text"
                className="bg-transparent border py-2 px-4 rounded-xl flex-grow text-sm"
              />
              <Send />
            </div>
          </div>
        </div>
      </div>
    </BoilerPlate>
  );
};

export default Page;
