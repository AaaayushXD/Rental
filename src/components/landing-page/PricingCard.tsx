"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { PricingCardProps } from "@/@types/PricingCard";

const PricingCard = (props: PricingCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-medium tracking-wide">
          {props.cardDetail.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <p className="text-[32px] font-extrabold tracking-wider">
            Rs {props.cardDetail.price} /-
          </p>
          <p className="font-light">{props.cardDetail.subTitle}</p>
        </div>
        <div className="py-5 flex justify-start items-start gap-3 flex-col">
          <p className="text-[16px]">{props.cardDetail.features.title}</p>

          <div className="font-light flex justify-start items-start gap-5 flex-col">
            {props.cardDetail.features.points.map((point, index) => (
              <div
                className="flex gap-3 justify-start items-center"
                key={index}
              >
                {point.icon}
                <p>{point.title}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
