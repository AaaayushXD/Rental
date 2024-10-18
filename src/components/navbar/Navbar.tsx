"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { BellIcon, Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="w-full h-[85px] px-8 py-2 flex-nowrap  flex justify-between items-center border-b-2 relative select-none">
      <div className="flex justify-start items-center gap-8 flex-nowrap ">
        <Image
          alt="logo"
          src={"/logo_black.png"}
          aria-hidden
          width={100}
          height={100}
          className="flex flex-nowrap justify-center items-center h-[70px] w-[120px]"
        />
        <div className="lg:flex gap-5 items-center justify-start text-sm text-copy font-light hidden ">
          <Link
            href={"/dashboard"}
            className="hover:text-primary-light cursor-pointer"
          >
            Dashboard
          </Link>
          <Link
            href={"/rents"}
            className="hover:text-primary-light cursor-pointer"
          >
            Rents
          </Link>
          <Link
            href={"/tickets"}
            className="hover:text-primary-light cursor-pointer"
          >
            Complaints
          </Link>
          <Link
            href={"/message"}
            className="hover:text-primary-light cursor-pointer"
          >
            Message
          </Link>
        </div>
        {isOpen && (
          <div className="absolute bottom-[-150px] bg-gray-50 left-0 p-5 w-full text-center text-sm font-light flex flex-col gap-3 lg:hidden">
            <Link
              href={"/dashboard"}
              className="hover:text-primary-light cursor-pointer hover:underline"
            >
              Dashboard
            </Link>
            <Link
              href={"/rents"}
              className="hover:text-primary-light cursor-pointer hover:underline"
            >
              Rents
            </Link>
            <Link
              href={"/tickets"}
              className="hover:text-primary-light cursor-pointer hover:underline"
            >
              Complaints
            </Link>
            <Link
              href={"/message"}
              className="hover:text-primary-light cursor-pointer hover:underline"
            >
              Messages
            </Link>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center gap-5 font-light">
        {isOpen ? (
          <X
            size={"32px"}
            className="hover:scale-110 cursor-pointer lg:hidden"
            color="red"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <Menu
            size={"32px"}
            className="hover:scale-110 cursor-pointer lg:hidden"
            onClick={() => setIsOpen(true)}
          />
        )}
        <BellIcon />
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="User avatar"
            width={50}
          />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
