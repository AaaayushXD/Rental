"use client";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BellIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full h-[85px] px-8 py-2  flex justify-between items-center border-b-2 text-copy font-light ">
      <div className="flex justify-start items-center gap-8 ">
        <Image
          alt="logo"
          src={"/logo_black.png"}
          aria-hidden
          width={80}
          height={70}
        />
        <div className="flex gap-5 items-center justify-start text-sm">
          <div className="hover:text-primary-light cursor-pointer">Home</div>
          <div className="hover:text-primary-light cursor-pointer">
            Dashboard
          </div>
          <div className="hover:text-primary-light cursor-pointer">
            Payments
          </div>
          <div className="hover:text-primary-light cursor-pointer">
            Complaints
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start gap-5">
        <BellIcon />
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="User avatar"
            width={50}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
