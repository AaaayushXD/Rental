"use client";
import React from "react";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
// import MessagePreviewCard from "@/components/cards/MessagePreviewCard";
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

const Page = () => {
  return (
    <div className="min-w-[100vw] w-full h-full min-h-screen text-brandCopy">
      <Navbar />
      <div className="flex w-full h-full justify-center items-center p-5 bg-brandForeground ">
        {/* <div className="max-w-[1800px] w-full  flex flex-col font-light gap-10 pt-5">
          <h3 className="text-xl tracking-wider font-extrabold pl-3">
            Messages
          </h3>
          <div className="px-3 flex flex-col gap-2 justify-start w-full">
            <MessagePreviewCard />
            <MessagePreviewCard />
            <MessagePreviewCard />
          </div>
        </div> */}
        <div className="max-w-[1800px] min-h-screen flex flex-col w-full font-light gap-5 pt-5">
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
          <div className="w-full min-h-[80vh] h-full overflow-y-auto"></div>
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
      <Footer />
    </div>
  );
};

export default Page;
