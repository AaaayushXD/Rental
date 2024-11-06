"use client";
import React, { useEffect, useState } from "react";
import { TicketCardProps } from "@/@types/Cards";
import { formatDate } from "@/helpers/DateFormatter";
import { useToast } from "@/hooks/use-toast";
import { getUserOnIdService } from "@/service/UserService";
import { UserDetail } from "@/@types/User";

const TicketCard = ({ tickets }: TicketCardProps) => {
  const [username, setUsername] = useState<string>("");
  const { toast } = useToast();
  const severityColor = () => {
    const severity = tickets.severity.toLowerCase().trim();
    if (severity === "high") {
      return "text-destructive";
    } else if (severity === "low") {
      return "text-yellow-600";
    } else if (severity === "medium") {
      return "text-green-600";
    } else {
      return "";
    }
  };
  useEffect(() => {
    const fetchUsername = async () => {
      try {
        if (!tickets.username) return;
        const response = await getUserOnIdService(tickets.username);
        if (
          response.status > 299 ||
          response.data.statusCode > 299 ||
          !response.data.success
        ) {
          throw new Error("Something went wrong.");
        }
        const userData = response.data.data as UserDetail;
        setUsername(`${userData.firstName} ${userData.lastName}`);
      } catch (error) {
        toast({
          title: "Error fetching user.",
          description: `${error}`,
          variant: "destructive",
          draggable: true,
        });
      }
    };

    fetchUsername();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="border rounded-md p-3 flex w-full">
      <div className="flex flex-col justify-start items-start w-full">
        <div className="flex justify-between w-full  items-center gap-2 pb-2">
          <h4 className="font-medium tracking-wide">{tickets.title}</h4>
          <p className="text-xs text-brandCopy-lighter">
            Severity:{" "}
            <span className={severityColor()}>{tickets.severity}</span>
          </p>
        </div>
        <p className="text-sm text-brandCopy-light text-wrap flex  flex-col gap-1">
          {tickets.description}
          <span className="text-brandCopy-lighter text-xs pt-2">
            {tickets.username && "-By: " + username}
          </span>
        </p>
        <p className="pt-2 text-xs text-brandCopy-lighter">
          {formatDate(new Date(tickets.time))}
        </p>
      </div>
    </div>
  );
};

export default TicketCard;
