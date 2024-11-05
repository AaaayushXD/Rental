"use client";
import React, { useEffect } from "react";
import TicketCard from "@/components/cards/TicketCard";
import { Tickets } from "@/@types/Cards";
const ticketsData: Tickets = {
  title: "Water shortage",
  description:
    "There wont be water supply today from 10 am to 11 am due to maintainance. Please manage it accordingly.",
  severity: "High",
  time: "06:10 Am",
  username: "Aayush Lamichhane",
};

const Complaints = () => {
  useEffect(() => {
    // fetch recent tickets
  }, []);
  return (
    <div className="border p-3 rounded-lg flex flex-col gap-5 w-full  flex-grow">
      <div className="flex justify-between items-center gap-2">
        <h4 className="font-medium text-xl tracking-wide pl-3">
          Complaints or Feedback
        </h4>
      </div>
      <div className="flex flex-col justify-start w-full gap-2 max-h-[600px] overflow-y-auto ">
        <TicketCard tickets={ticketsData} />
        <TicketCard tickets={ticketsData} />
      </div>
    </div>
  );
};

export default Complaints;
