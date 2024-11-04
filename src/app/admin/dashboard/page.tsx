"use client";
import React from "react";
import BoilerPlate from "../BoilerPlate";
import { DollarSign } from "lucide-react";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart } from "recharts";
import Annoucement from "@/components/sections/dashboard/Annoucement";
import Complaints from "@/components/sections/dashboard/Complaints";
import Payments from "@/components/sections/dashboard/Payments";

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
            <Payments />
          </div>
          <Complaints />
          <Annoucement />
        </div>
      </div>
    </BoilerPlate>
  );
};

export default page;
