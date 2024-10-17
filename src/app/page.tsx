import LandingNavbar from "@/components/navbar/Landing-Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList } from "@/components/ui/tabs";
import { TabsContent, TabsTrigger } from "@radix-ui/react-tabs";
import {
  AlertOctagon,
  Banknote,
  ChartAreaIcon,
  CheckCircle,
  MailOpen,
  MessageCircle,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full min-w-screen min-h-screen overflow-x-hidden text-copy ">
      <LandingNavbar />
      <div className="p-5 max-w-[1500px] min-h-[80vh] lg:min-h-[70vh] flex justify-center items-center mx-auto ">
        <div className="w-full h-full flex justify-center items-center gap-14 ">
          {/* landing page */}
          <div className="max-w-[600px] flex flex-col gap-5">
            <h1 className="text-[48px] font-extrabold flex flex-wrap tracking-wider">
              Smart Tools for Smarter Property Management
            </h1>
            <p className="text-[21px] text-copy-light tracking-wide font-light">
              Manage your rentals effortlessly with our all-in-one platform.
              Streamline tenant tracking, payments, and more, all in one place.
            </p>
          </div>
          <Image
            src={"/landing_house.jpg"}
            alt="House"
            width={600}
            height={600}
            className="lg:w-[600px] lg:h-[600px] min-w-[400px] lg:block rounded-lg hidden"
          />
        </div>
      </div>
      <div className="p-5 max-w-[1500px] flex lg:justify-around items-center gap-4 mx-auto flex-col justify-center lg:flex-row">
        <Image
          src={"/3d_house.png"}
          width={300}
          height={300}
          alt="3D house"
          className="w-[400px]"
        />
        <div className="flex flex-col justify-start items-center py-8 gap-5">
          <h4 className="text-[26px] font-medium">What we do</h4>
          <Tabs defaultValue="tenant" className="min-w-[400px] max-w-[600px]">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="tenant">For Tenants</TabsTrigger>
              <TabsTrigger value="landlords">For Landlords</TabsTrigger>
            </TabsList>
            <TabsContent value="tenant">
              <div className="px-3 py-5 flex justify-start items-start gap-8 flex-col">
                <div className="flex gap-4 justify-start items-center flex-nowrap font-light">
                  <Banknote />
                  <p className="text-wrap">
                    Access a detailed breakdown of past rents paid and any
                    outstanding amounts.
                  </p>
                </div>
                <div className="flex gap-4 justify-start items-center flex-nowrap font-light">
                  <AlertOctagon />
                  <p className="text-wrap">
                    Easily submit and track complaints or maintenance requests
                    to the landlord.
                  </p>
                </div>
                <div className="flex gap-4 justify-start items-center flex-nowrap font-light">
                  <MessageCircle />
                  <p className="text-wrap">
                    Send messages and stay updated on important property
                    announcements.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="landlords">
              <div className="px-3 py-5 flex justify-start items-start gap-8 flex-col">
                <div className="flex gap-4 justify-start items-center flex-nowrap font-light">
                  <Users />
                  <p className="text-wrap">
                    Automatically record and monitor rent payments to stay on
                    top of tenant balances.
                  </p>
                </div>
                <div className="flex gap-4 justify-start items-center flex-nowrap font-light">
                  <ChartAreaIcon />
                  <p className="text-wrap">
                    Generate reports to get insights into property performance,
                    payments, and tenant activities.
                  </p>
                </div>
                <div className="flex gap-4 justify-start items-center flex-nowrap font-light">
                  <MailOpen />
                  <p className="text-wrap">
                    Easily communicate with tenants for any issues and send
                    announcements or reminders.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="p-5 max-w-[1500px] min-h-[80vh] lg:min-h-[70vh] flex flex-col gap-20 justify-center items-center mx-auto relative">
        <div className="flex flex-col gap-5 items-center justify-center ">
          <h2 className="text-[32px] font-medium tracking-wide">
            Plans and Pricing
          </h2>
          <p className="text-[18px] font-light">
            Get 2 month free when you pay yearly, and save on your plans.
          </p>
        </div>
        <Tabs defaultValue="montly" className="min-w-[400px] max-w-[900px] ">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="montly">Montly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent value="montly">
            <div className="flex gap-8 px-5 py-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-medium tracking-wide">
                    Basic
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="text-[32px] font-extrabold tracking-wider">
                      Rs 999 /-
                    </p>
                    <p className="font-light">per month</p>
                  </div>
                  <div className="py-5 flex justify-start items-start gap-3 flex-col">
                    <p className="text-[16px]">For single house</p>
                    <div className="font-light flex justify-start items-start gap-5 flex-col">
                      <div className="flex gap-3 justify-start items-center">
                        <CheckCircle />
                        <p>Get free email alerts.</p>
                      </div>
                      <div className="flex gap-3 justify-start items-center">
                        <CheckCircle />
                        <p>Up to 15 users.</p>
                      </div>
                      <div className="flex gap-3 justify-start items-center">
                        <CheckCircle />
                        <p>Financial Analysis.</p>
                      </div>
                      <div className="flex gap-3 justify-start items-center">
                        <CheckCircle />
                        <p>Dashboard Access.</p>
                      </div>
                      <div className="flex gap-3 justify-start items-center">
                        <CheckCircle />
                        <p>24/7 Customer Support.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-medium tracking-wide">
                    Pro
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="text-[32px] font-extrabold tracking-wider">
                      Rs 1,999 /-
                    </p>
                    <p className="font-light">per month</p>
                  </div>
                  <div className="py-5 flex justify-start items-start gap-3 flex-col">
                    <p className="text-[16px]">For multiple houses</p>
                    <div className="font-light flex justify-start items-start gap-5 flex-col">
                      <div className="flex gap-3 justify-start items-center">
                        <CheckCircle />
                        <p>Get free email alerts.</p>
                      </div>
                      <div className="flex gap-3 justify-start items-center">
                        <CheckCircle />
                        <p>Up to 50 users.</p>
                      </div>
                      <div className="flex gap-3 justify-start items-center">
                        <CheckCircle />
                        <p>Financial Analysis.</p>
                      </div>
                      <div className="flex gap-3 justify-start items-center">
                        <CheckCircle />
                        <p>Dashboard Access.</p>
                      </div>
                      <div className="flex gap-3 justify-start items-center">
                        <CheckCircle />
                        <p>24/7 Customer Support.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="yearly"></TabsContent>
        </Tabs>
        <Image
          alt="background pattern"
          src={"/squigly.svg"}
          width={100}
          height={100}
          className="z-[-1]  w-full h-full opacity-15 absolute top-0"
        />
      </div>
      <div className="flex justify-center items-center gap-3 p-5">
        <div>Contact For more inquiries: </div>
        <div>
        </div>
      </div>
    </div>
  );
}
