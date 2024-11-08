"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@radix-ui/react-tabs";
import React, { useEffect, useState } from "react";
import BoilerPlate from "../BoilerPlate";
import { useToast } from "@/hooks/use-toast";
import { fetchTickets } from "@/service/ComplaintService";
import { ApiError } from "@/helpers/ApiError";
import { TicketDetail } from "@/@types/Cards";

const Page = () => {
  const [tickets, setTickets] = useState<TicketDetail[]>([]);
  const [currentStatus, setCurrentStatus] = useState<string>("");
  const { toast } = useToast();
  const fetchTicket = async (status: string) => {
    try {
      const ticketResponse = await fetchTickets(status);
      if (
        ticketResponse.status > 299 ||
        ticketResponse.data.statusCode > 299 ||
        !ticketResponse.data.success
      ) {
        throw new ApiError(400, "Something went wrong.");
      }
      const ticketsData = ticketResponse.data.data as TicketDetail[];
      setTickets(ticketsData);
    } catch (error) {
      toast({
        title: "Error fetching tickets.",
        description: `${error}`,
        variant: "destructive",
      });
    }
  };
  useEffect(() => {
    fetchTicket("pending");
  }, []);
  return (
    <BoilerPlate>
      <div className="flex w-full h-full justify-center items-center p-5 bg-brandForeground">
        <div className="max-w-[1800px] w-full flex flex-col justify-start items-start gap-10 pt-8">
          <div className="flex w-full justify-between items-center gap-5">
            <h3 className="text-xl tracking-wider font-extrabold">Tickets</h3>
          </div>
          <div className="w-full flex flex-col gap-5 justify-start items-start">
            <Tabs defaultValue="pending" className="w-full">
              <TabsList className="w-full flex-grow flex gap-5 justify-evenly">
                <TabsTrigger
                  className="transition-colors duration-200 TabsTrigger"
                  value="pending"
                  onClick={() => {
                    if (currentStatus === "pending") return;
                    fetchTicket("pending");
                    setCurrentStatus("pending");
                  }}
                >
                  Pending
                </TabsTrigger>
                <TabsTrigger
                  className="transition-colors duration-200"
                  value="processing"
                  onClick={() => {
                    fetchTicket("processing");
                    setCurrentStatus("processing");
                  }}
                >
                  Processing
                </TabsTrigger>
                <TabsTrigger
                  className="transition-colors duration-200"
                  value="resolved"
                  onClick={() => {
                    fetchTicket("resolved");
                    setCurrentStatus("resolved");
                  }}
                >
                  Resolved
                </TabsTrigger>
                <TabsTrigger
                  className="transition-colors duration-200"
                  value="cancelled"
                  onClick={() => {
                    fetchTicket("cancelled");
                    setCurrentStatus("cancelled");
                  }}
                >
                  Cancelled
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="pending"
                className="flex flex-col gap-3 justify-start items-start"
              ></TabsContent>
              <TabsContent
                value="processing"
                className="flex flex-col gap-3 justify-start items-start"
              ></TabsContent>
              <TabsContent
                value="resolved"
                className="flex flex-col gap-3 justify-start items-start"
              ></TabsContent>
              <TabsContent
                value="cancelled"
                className="flex flex-col gap-3 justify-start items-start"
              ></TabsContent>
            </Tabs>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" className="text-sm font-light" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="text-sm font-light">
                    1
                  </PaginationLink>
                  <PaginationLink href="#" className="text-sm font-light">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis className="text-sm font-light" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" className="text-sm font-light" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </BoilerPlate>
  );
};

export default Page;
