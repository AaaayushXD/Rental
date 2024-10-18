"use client";
import Image from "next/image";
import React, { useState } from "react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const LandingNavbar = () => {
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
          <Link href={"/"} className="hover:text-primary-light cursor-pointer">
            Home
          </Link>
          <Link
            href={"#about"}
            className="hover:text-primary-light cursor-pointer"
          >
            About Us
          </Link>
          <Link
            href={"#pricing"}
            className="hover:text-primary-light cursor-pointer"
          >
            Pricing
          </Link>
          <Link
            href={"#contact"}
            className="hover:text-primary-light cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
        {isOpen && (
          <div className="absolute bottom-[-150px] bg-gray-50 left-0 p-5 w-full text-center text-sm font-light flex flex-col gap-3 lg:hidden">
            <Link
              href={"/"}
              className="hover:text-primary-light cursor-pointer hover:underline"
            >
              Home
            </Link>
            <Link
              href={"#about"}
              className="hover:text-primary-light cursor-pointer hover:underline"
            >
              About Us
            </Link>
            <Link
              href={"#pricing"}
              className="hover:text-primary-light cursor-pointer hover:underline"
            >
              Pricing
            </Link>
            <Link
              href={"#contact"}
              className="hover:text-primary-light cursor-pointer hover:underline"
            >
              Contact Us
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
        <Link
          href={"#contact"}
          className={buttonVariants({
            variant: "outline",
          })}
        >
          Contact Us
        </Link>
        <Link
          href={"/sign-in"}
          className={buttonVariants({
            variant: "secondary",
          })}
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default LandingNavbar;
