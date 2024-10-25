"use client";
import React from "react";
import BoilerPlate from "../BoilerPlate";
import { DollarSign, PlusCircle } from "lucide-react";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart } from "recharts";
import RecentPayment from "@/components/cards/RecentPayment";
import TicketCard from "@/components/cards/TicketCard";
import AnnoucementCard from "@/components/cards/AnnoucementCard";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
const page = () => {
  return (
    <BoilerPlate>
      <div className="flex w-full h-full justify-center items-center p-5 bg-brandForeground font-light">
        <div className="flex w-full max-w-[1800px] h-full flex-col justify-start items-start gap-10">
          <h2 className="text-2xl tracking-wide font-extrabold pt-8">
            Dashboard
          </h2>
          <div className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col justify-start items-start border px-7 py-6 flex-grow rounded-xl">
              <div className="flex items-center w-full justify-between gap-2 pb-4 text-sm">
                <p>Total Revenue</p>
                <DollarSign size={20} />
              </div>
              <p
                className="text-xl font-extrabold tracking-wide pb-1
              "
              >
                Rs <span>20000</span>
              </p>
              <p className="text-xs text-brandCopy-light">
                <span>+ 19</span>% from last month
              </p>
            </div>
            <div className="flex flex-col justify-start items-start border px-7 py-6 flex-grow rounded-xl">
              <div className="flex items-center w-full justify-between gap-2 pb-2 text-sm">
                <p>Total Revenue</p>
                <DollarSign size={20} />
              </div>
              <p
                className="text-xl font-extrabold tracking-wide pb-1
              "
              >
                Rs <span>20000</span>
              </p>
              <p className="text-xs text-brandCopy-light">
                <span>+ 19</span>% from last month
              </p>
            </div>
            <div className="flex flex-col justify-start items-start border px-7 py-6 flex-grow rounded-xl">
              <div className="flex items-center w-full justify-between gap-2 pb-2 text-sm">
                <p>Total Revenue</p>
                <DollarSign size={20} />
              </div>
              <p
                className="text-xl font-extrabold tracking-wide pb-1
              "
              >
                Rs <span>20000</span>
              </p>
              <p className="text-xs text-brandCopy-light">
                <span>+ 19</span>% from last month
              </p>
            </div>
            <div className="flex flex-col justify-start items-start border px-7 py-6 flex-grow rounded-xl">
              <div className="flex items-center w-full justify-between gap-2 pb-2 text-sm">
                <p>Total Revenue</p>
                <DollarSign size={20} />
              </div>
              <p
                className="text-xl font-extrabold tracking-wide pb-1
              "
              >
                Rs <span>20000</span>
              </p>
              <p className="text-xs text-brandCopy-light">
                <span>+ 19</span>% from last month
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 w-full">
            <div className="border px-5 py-2 w-full rounded-xl">
              <ChartContainer
                config={chartConfig}
                className="min-h-[400px] w-full"
              >
                <BarChart accessibilityLayer data={chartData}>
                  <Bar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    radius={4}
                  />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
            </div>
            <div className="w-full flex justify-start items-start flex-col gap-2 px-7 py-5 border rounded-xl flex-grow">
              <div className="flex flex-col gap-2 justify-start items-start w-full">
                <p className="font-medium tracking-wide flex justify-between w-full">
                  Recent Payments
                  <span className="text-xs p-2 bg-brandSecondary-light text-brandPrimary-content rounded-md">
                    AUG
                  </span>
                </p>
                <p className="text-sm text-brandCopy-light">
                  7 rooms have already paid their rent this month.
                </p>
              </div>
              <div className="w-full py-8 flex flex-col gap-4 justify-start items-start ">
                <RecentPayment />
                <RecentPayment />
                <RecentPayment />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-5 justify-start items-start w-full">
            <div className="border p-3 rounded-lg flex flex-col gap-5 w-full  flex-grow">
              <div className="flex justify-between items-center gap-2">
                <h4 className="font-medium text-xl tracking-wide pl-3">
                  Complaints or Feedback
                </h4>
              </div>
              <div className="flex flex-col justify-start w-full gap-2 max-h-[600px] overflow-y-auto ">
                <TicketCard />
                <TicketCard />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-5 border p-3 rounded-lg  w-ful flex-grow">
              <div className="w-full flex justify-between items-center gap-2">
                <h3 className="font-medium text-xl tracking-wider pl-3">
                  Annoucement
                </h3>

                <p className="text-xs flex gap-1 justify-center items-center p-2 bg-brandPrimary rounded text-brandPrimary-content font-medium hover:bg-brandPrimary-dark cursor-pointer">
                  Create
                  <PlusCircle size={15} />
                </p>
              </div>
              <div className="flex flex-col gap-2 justify-start items-start max-h-[800px] overflow-y-auto">
                <AnnoucementCard />
                <AnnoucementCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BoilerPlate>
  );
};

export default page;
