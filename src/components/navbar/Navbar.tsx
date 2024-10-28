"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BellIcon, LogOut, Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { NavbarProps } from "@/@types/Navbar";

const Navbar = ({ navbars }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (ev: MouseEvent) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(ev.target as Node)
      ) {
        setIsOpen((prev) => !prev);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className="w-full h-[85px] px-8 py-2 flex-nowrap  flex justify-between items-center border-b-2 relative select-none z-50">
      <div className="flex justify-start items-center gap-8 flex-nowrap ">
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
        <Image
          alt="logo"
          src={"/logo_black.png"}
          aria-hidden
          width={100}
          height={100}
          className="flex flex-nowrap justify-center items-center h-[70px] w-[120px]"
        />
        <div className="lg:flex gap-5 items-center justify-start text-sm text-copy font-light hidden ">
          {navbars?.map((item, index) => (
            <Link
              href={"/" + item.link}
              key={index}
              className={
                "hover:text-primary-light cursor-pointer" + ` ${item.classname}`
              }
            >
              {item.name}
            </Link>
          ))}
        </div>
        {isOpen && (
          <div
            className="lg:hidden  fixed top-[85px] left-0 px-5 py-10 w-[250px] flex flex-col items-start gap-10 justify-around flex-grow min-h-[calc(100vh-85px)] border-r-2 border-border bg-background z-10"
            ref={navRef}
          >
            <div className="flex flex-col justify-start items-start gap-20">
              <div className="flex justify-start items-center gap-5">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User avatar"
                    width={70}
                  />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-center items-start flex-nowrap">
                  <p className="font-medium flex-nowrap text-sm">
                    Aayush Lamichhane
                  </p>
                  <p className="font-light text-[14px]">9813425299</p>
                </div>
              </div>
              <div className="flex flex-col gap-10 justify-center items-start flex-grow font-light">
                {navbars.map((item, index) => (
                  <Link
                    href={"/" + item.link}
                    key={index}
                    className={
                      "hover:text-primary-light cursor-pointer hover:underline flex gap-3 justify-center items-center" +
                      ` ${item.classname}`
                    }
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="text-black justify-center items-center gap-5 flex cursor-pointer">
              <LogOut />
              <p className="font-light">LogOut</p>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center gap-5 font-light">
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

/*
          
*/
