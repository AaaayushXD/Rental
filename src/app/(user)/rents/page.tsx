"use client";
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
import BoilerPlate from "../BoilerPlate";

const tableHeader = ["Id", "Amount", "Month", "Paid Date", "Reason"];
const payments = [
  {
    id: "UKIHDsa",
    amount: 8000,
    month: "August",
    paidDate: "2022-08-15",
    reason: "Rent",
  },
  {
    id: "SKJGSsas",
    amount: 100,
    month: "August",
    paidDate: "2022-08-15",
    reason: "Electricity",
  },
  {
    id: "SKJGSsas",
    amount: 100,
    month: "September",
    paidDate: "2023-02-01",
    reason: "Water Bill",
  },
];
const Page = () => {
  return (
    <BoilerPlate>
      <div className="flex w-full h-full justify-center items-center p-5 bg-brandForeground">
        <div className="max-w-[1800px] w-full  flex flex-col font-light gap-6 pt-5">
          <h3 className="text-xl font-extrabold tracking-wider pl-3">
            Payment History
          </h3>
          <div className="flex flex-col gap-5 p-3 shadow-sm justify-start items-start ">
            <Table>
              <TableHeader>
                <TableRow>
                  {tableHeader.map((head, index) => (
                    <TableHead key={index} className="text-brandCopy-light">
                      {head}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((invoice, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-xs">{invoice.id}</TableCell>
                    <TableCell>{invoice.amount}</TableCell>
                    <TableCell>{invoice.month}</TableCell>
                    <TableCell>{invoice.paidDate}</TableCell>
                    <TableCell>{invoice.reason}</TableCell>
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
      </div>
    </BoilerPlate>
  );
};

export default Page;
