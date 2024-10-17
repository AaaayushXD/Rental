"use client";
import Image from "next/image";
import React from "react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

const LandingNavbar = () => {
  return (
    <div className="w-full h-[85px] px-8 py-2  flex justify-between items-center border-b-2 ">
      <div className="flex justify-start items-center gap-8 ">
        <Image
          alt="logo"
          src={"/logo_black.png"}
          aria-hidden
          width={80}
          height={70}
        />
        <div className="flex gap-5 items-center justify-start text-sm text-copy font-light">
          <div className="hover:text-primary-light cursor-pointer">Home</div>
          <div className="hover:text-primary-light cursor-pointer">
            About Us
          </div>
          <div className="hover:text-primary-light cursor-pointer">Pricing</div>
          <div className="hover:text-primary-light cursor-pointer">
            Contact Us
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <Link
          href={"/contact"}
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
