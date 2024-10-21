"use client";
import TicketCard from "@/components/cards/TicketCard";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
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
import { PlusCircle } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="min-w-[100vw] w-full h-full min-h-screen text-brandCopy">
      <Navbar />
      <div className="flex w-full h-full justify-center items-center p-5 bg-brandForeground">
        <div className="max-w-[1800px] w-full flex flex-col justify-start items-start gap-10 pt-8">
          <div className="flex w-full justify-between items-center gap-5">
            <h3 className="text-xl tracking-wider font-extrabold">Tickets</h3>
            <Button className="text-xs flex gap-1 justify-center items-center p-2 bg-brandPrimary rounded text-brandPrimary-content font-medium hover:bg-brandPrimary-dark cursor-pointer">
              Create
              <PlusCircle size={15} />
            </Button>
          </div>
          <div className="w-full flex flex-col gap-5 justify-start items-start">
            <Tabs defaultValue="pending" className="w-full">
              <TabsList className="w-full flex-grow flex gap-5 justify-evenly">
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="processing">Processing</TabsTrigger>
                <TabsTrigger value="resolved">Resolved</TabsTrigger>
                <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
              </TabsList>
              <TabsContent
                value="pending"
                className="flex flex-col gap-3 justify-start items-start"
              >
                <TicketCard />
                <TicketCard />
                <TicketCard />
              </TabsContent>
              <TabsContent
                value="processing"
                className="flex flex-col gap-3 justify-start items-start"
              >
                <TicketCard />
                <TicketCard />
              </TabsContent>
              <TabsContent
                value="resolved"
                className="flex flex-col gap-3 justify-start items-start"
              >
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
              </TabsContent>
              <TabsContent
                value="cancelled"
                className="flex flex-col gap-3 justify-start items-start"
              >
                <TicketCard />
                <TicketCard />
              </TabsContent>
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
      <Footer />
    </div>
  );
};

export default Page;
