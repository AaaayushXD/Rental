import React from "react";
import BoilerPlate from "../BoilerPlate";
import { PlusCircle } from "lucide-react";
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
const tableHeader = [
  "Name",
  "Phone",
  "Total People",
  "Married",
  "Rent",
  "Joined",
];
const tableData = [
  {
    name: "Aayush Lamichhane",
    phone: "9813425299",
    totalPeople: 2,
    married: true,
    rent: 50000,
    joined: "2022-01-01",
  },
  {
    name: "John Doe",
    phone: "9847697816",
    totalPeople: 6,
    married: false,
    rent: 8000,
    joined: "2024-01-10",
  },
];
const Page = () => {
  return (
    <BoilerPlate>
      <div className="w-full max-w-[1500px] flex flex-col justify-start items-start gap-10 font-light">
        <div className="w-full flex justify-between px-5 pt-10 items-center">
          <h2 className="text-2xl font-extrabold tracking-wide">Users</h2>
          <p className="flex  gap-1 items-center justify-start p-2 text-sm hover:bg-brandPrimary-dark cursor-pointer bg-brandPrimary text-brandPrimary-content rounded">
            <PlusCircle size={20} />
            <span>Add</span>
          </p>
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
                  <TableCell className="text-center">
                    {data.totalPeople}
                  </TableCell>
                  <TableCell className="text-center">
                    {data.married ? "Yes" : "No"}
                  </TableCell>
                  <TableCell>Rs {data.rent}</TableCell>
                  <TableCell>{data.joined}</TableCell>
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
