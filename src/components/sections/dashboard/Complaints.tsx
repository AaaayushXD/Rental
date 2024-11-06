"use client";
import React, { useEffect, useState } from "react";
import TicketCard from "@/components/cards/TicketCard";
import { TicketDetail } from "@/@types/Cards";
import { useToast } from "@/hooks/use-toast";
import { getRecentTicket } from "@/service/ComplaintService";

const Complaints = () => {
  const [tickets, setTickets] = useState<TicketDetail[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  useEffect(() => {
    const fetchTikcets = async () => {
      setIsLoading(true);
      try {
        const response = await getRecentTicket();
        if (
          response.status > 299 ||
          response.data.statusCode > 299 ||
          !response.data.success
        ) {
          throw new Error("Something went wrong.");
        }
        const ticketData = response.data.data as TicketDetail[];
        setTickets(ticketData);
      } catch (error) {
        toast({
          title: "Error",
          description: "Something went wrong." + error,
          variant: "destructive",
          draggable: true,
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchTikcets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="border p-3 rounded-lg flex flex-col gap-5 w-full  flex-grow">
      <div className="flex justify-between items-center gap-2">
        <h4 className="font-medium text-xl tracking-wide pl-3">
          Complaints or Feedback
        </h4>
      </div>
      <div className="flex flex-col justify-start w-full gap-2 max-h-[600px] overflow-y-auto ">
        {tickets.length < 1 ? (
          <p className="tracking-wide flex w-full justify-center items-center text-xl min-w-[300px] min-h-[300px]">
            No tickets available !!
          </p>
        ) : (
          <>
            {!isLoading &&
              tickets.map((ticket) => (
                <TicketCard tickets={ticket} key={ticket._id} />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Complaints;
