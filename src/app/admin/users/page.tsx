"use client";
import React, { useEffect, useState } from "react";
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
import { getUsersDetailService } from "@/service/UserService";
import { TenantRent, UserDetail } from "@/@types/User";
import { useToast } from "@/hooks/use-toast";
import { formatDate } from "@/helpers/DateFormatter";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getTenantInfoBasedOnUidService } from "@/service/TenantService";
import { TenantDetail } from "@/@types/Tenant";
import { getRentDetailService } from "@/service/RentService";
import { RentDetail } from "@/@types/Rent";
const tableHeader = [
  "Name",
  "Phone",
  "Total People",
  "Married",
  "Rent",
  "Joined",
];
const Page = () => {
  const [users, setUsers] = useState<UserDetail[]>([]);
  const [tenants, setTenant] = useState<TenantRent[]>([]);

  const { toast } = useToast();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUsersDetailService();
        if (response && "data" in response) {
          const userData = response.data.data as UserDetail[];
          if (!userData) return;
          setUsers(userData);
          userData.forEach(async (user) => {
            const tenantResponse = await getTenantInfoBasedOnUidService(
              user._id
            );
            if (tenantResponse && "data" in tenantResponse) {
              const tenantInfo = tenantResponse.data.data as TenantDetail[];
              tenantInfo.forEach(async (tenant) => {
                if (!tenant) return;
                const rentResponse = await getRentDetailService(tenant.roomId);
                if (rentResponse && "data" in rentResponse) {
                  const rentData = rentResponse.data.data as RentDetail;
                  if (!rentData) return;
                  const tenantRent: TenantRent = {
                    uid: user._id,
                    rent: rentData.price,
                    roomId: tenant.roomId,
                  };
                  setTenant((prev) => [...prev, tenantRent]);
                }
              });
            }
          });
        }
        console.log({ tenants });
      } catch (error) {
        toast({
          title: "Something went wrong.",
          description: "Error fetching user data." + error,
          variant: "destructive",
        });
      }
    };

    fetchUser();
  }, []);
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
          <ScrollArea className="w-full">
            <Table>
              <TableHeader>
                <TableRow>
                  {tableHeader.map((head, index) => (
                    <TableHead key={index}>{head}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((data) => (
                  <TableRow key={data._id}>
                    <TableCell>{`${data.firstName} ${data.lastName}`}</TableCell>
                    <TableCell>{data.phone}</TableCell>
                    <TableCell>{data.totalPeople}</TableCell>
                    <TableCell>{data.married ? "Yes" : "No"}</TableCell>
                    <TableCell>Rs {}</TableCell>
                    <TableCell>{formatDate(new Date(data.joined))}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
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
