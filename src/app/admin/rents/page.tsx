import React from "react";
import BoilerPlate from "../BoilerPlate";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const tableHeader = ["Name", "Phone", "Amount", "Paid Date", "Reason"];
const tableData = [
  {
    name: "Aayush Lamichhane",
    phone: "9813425299",
    amount: 5000,
    paidDate: "2022-01-01",
    reason: "Rent for august.",
  },
  {
    name: "John Doe",
    phone: "9847697816",
    amount: 8000,
    paidDate: "2024-01-10",
    reason: "Rent for september.",
  },
];
const Page = () => {
  return (
    <BoilerPlate>
      <div className="w-full max-w-[1500px] flex flex-col justify-start items-start gap-10 font-light">
        <div className="w-full flex justify-between px-5 pt-10 items-center">
          <h2 className="text-2xl font-extrabold tracking-wide">Rents</h2>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-8 p-3">
          <Table>
            <TableHeader>
              <TableRow>
                {tableHeader.map((head, index) => (
                  <TableHead key={index}>{head}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((data, index) => (
                <TableRow key={index}>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.phone}</TableCell>
                  <TableCell>Rs {data.amount}</TableCell>
                  <TableCell>{data.paidDate}</TableCell>
                  <TableCell>{data.reason}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
    </BoilerPlate>
  );
};

export default Page;
