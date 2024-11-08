"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { RecentPaymentProps } from "@/@types/Cards";
import { useToast } from "@/hooks/use-toast";
import { getUserOnIdService } from "@/service/UserService";
import { ApiError } from "@/helpers/ApiError";
import { UserDetail } from "@/@types/User";
import { formatDate } from "@/helpers/DateFormatter";

const RecentPayment = ({ payments }: RecentPaymentProps) => {
  const [user, setUser] = useState<UserDetail>();
  const [userName, setUsername] = useState<string>("");
  const { toast } = useToast();
  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const userResponse = await getUserOnIdService(payments.uid);
        if (
          userResponse.data.statusCode > 299 ||
          userResponse.status > 299 ||
          !userResponse.data.success
        ) {
          throw new ApiError(400, "Something went wrong.");
        }
        const userData = userResponse.data.data as UserDetail;
        if (!userData) throw new Error("Something went wrong.");
        setUser(userData);
        setUsername(`${userData.firstName} ${userData.lastName}`);
      } catch (error) {
        toast({
          title: "Something went wrong.",
          description: `${error}`,
          variant: "destructive",
        });
      }
    };
    fetchUserDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex justify-between w-full py-2 flex-nowrap">
      <div className="flex  items-center justify-start gap-7 ">
        <Avatar>
          <AvatarImage
            src={"https://avatars.githubusercontent.com/u/124599?v=4"}
            alt={userName ?? userName}
            width={60}
          />
          <AvatarFallback>
            {userName
              .split(" ")
              .map((word) => word.slice(0, 1))
              .join("")
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start justify-start">
          <p className="font-medium tracking-wide pb-1">{userName}</p>
          <p className="text-sm text-brandCopy-light">{user?.phone}</p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start">
        <p className="text-xs text-brandCopy-light pb-2">
          {formatDate(new Date(payments.date))}
        </p>
        <p className="text-xl font-extrabold tracking-wider">
          Rs {payments.amount}
        </p>
      </div>
    </div>
  );
};

export default RecentPayment;
