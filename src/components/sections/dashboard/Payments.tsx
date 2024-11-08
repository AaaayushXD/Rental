"use client";
import React, { useEffect, useState } from "react";
import RecentPayment from "@/components/cards/RecentPayment";
import { PaymentDetail } from "@/@types/Payment";
import { useToast } from "@/hooks/use-toast";
import { getRecentPayments } from "@/service/PaymentService";
import { ApiError } from "@/helpers/ApiError";


const Payments = () => {
  const [payments, setPayments] = useState<PaymentDetail[]>([]);
  const { toast } = useToast();
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const paymentResponse = await getRecentPayments();
        if (
          paymentResponse.status > 299 ||
          paymentResponse.data.statusCode > 299 ||
          !paymentResponse.data.success
        ) {
          throw new ApiError(400, "Something went Wrong");
        }
        const paymentData = paymentResponse.data.data as PaymentDetail[];
        setPayments(paymentData);
      } catch (error) {
        toast({
          title: "Error fetching recent payments",
          description: `${error}`,
          variant: "destructive",
        });
      }
    };

    fetchPayments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full flex justify-start items-start flex-col gap-2 px-7 py-5 border rounded-xl flex-grow">
      <div className="flex flex-col gap-2 justify-start items-start w-full">
        <p className="font-medium tracking-wide flex justify-between w-full">
          Recent Payments
          <span className="text-xs p-2 bg-brandSecondary-light text-brandPrimary-content rounded-md">
            AUG
          </span>
        </p>
        <p className="text-sm text-brandCopy-light">
          7 rooms have already paid their rent this month.
        </p>
      </div>
      <div className="w-full py-8 flex flex-col gap-4 justify-start items-start ">
        {payments.map((rent) => (
          <RecentPayment payments={rent} key={rent._id} />
        ))}
      </div>
    </div>
  );
};

export default Payments;
