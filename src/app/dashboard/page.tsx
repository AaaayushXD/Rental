import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="min-w-[100vw] w-full h-full min-h-screen text-brandCopy">
      <Navbar />
      <div className="flex w-full h-full justify-center items-center p-5 bg-brandForeground ">
        <div className="max-w-[1800px] w-full  flex flex-col font-light gap-20">
          <div className="flex justify-start items-center gap-5 max-w-[600px]">
            <Image
              src={"/welcome.svg"}
              alt="welcome aboard"
              width={120}
              height={100}
            />
            <div className="flex flex-col justify-center items-start">
              <p className="text-sm text-brandPrimary">Welcome back, </p>
              <h3 className="text-xl font-extrabold tracking-wide">
                Aayush Lamichhane
              </h3>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-start gap-8 w-full ">
            <div
              className=" rounded-lg p-5 bg-gradient-to-r from-brandPrimary-dark  to-brandPrimary-light text-brandPrimary-content flex justify-between
              items-center gap-5 flex-grow min-w-[450px] max-w-[900px]"
            >
              <div className="flex flex-col justify-start items-start gap-3">
                <h3 className="font-medium tracking-wider text-lg">
                  Room Detail
                </h3>
                <div className="font-medium flex flex-col justify-start items-start gap-2">
                  <p>
                    Floor: <span className="font-light">Second Floor</span>
                  </p>
                  <p>
                    Room No: <span className="font-light">201</span>
                  </p>
                  <p>
                    Rent: Rs <span className="font-light">8000</span>
                    <span className="font-light text-sm"> /month</span>
                  </p>
                </div>
              </div>
              <Image
                src={"/living-room.svg"}
                alt="living room"
                width={150}
                height={100}
                className="scale-125 opacity-85"
              />
            </div>
            <div className="border border-brandPrimary rounded-lg p-5 flex justify-between items-center gap-5 flex-grow min-w-[450px] max-w-[900px]">
              <div className="flex flex-col justify-start items-start gap-3">
                <h4 className="font-extrabold tracking-wider text-lg">
                  Rent Detail
                </h4>
                <div className="flex items-center w-full justify-start gap-5">
                  <p className="font-medium text-nowrap">Due Date: </p>
                  <p className="text-sm text-brandCopy-light text-wrap">
                    <span>2024-10-12 AD</span> / <span>2081-06-03 BS</span>
                    <span className="text-destructive"> ( 10 days left )</span>
                  </p>
                </div>
                <div className="flex items-center w-full justify-start gap-5">
                  <p className="font-medium text-nowrap">Due Amount: </p>
                  <p className="text-sm text-brandCopy-light">
                    Rs <span>6000</span>
                    <span className="text-brandSecondary">
                      {" "}
                      ( For 20 days ){" "}
                    </span>
                  </p>
                </div>
              </div>
              <Image
                src={"/money.svg"}
                alt="money"
                width={150}
                height={100}
                className="scale-125 opacity-40"
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
