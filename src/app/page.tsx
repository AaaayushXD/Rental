import { PricingCardDetail } from "@/@types/PricingCard";
import Footer from "@/components/footer/Footer";
import ContactForm from "@/components/landing-page/ContactForm";
import PricingCard from "@/components/landing-page/PricingCard";
import LandingNavbar from "@/components/navbar/Landing-Navbar";
import { Tabs, TabsList } from "@/components/ui/tabs";
import { TabsContent, TabsTrigger } from "@radix-ui/react-tabs";
import {
  AlertOctagon,
  Banknote,
  ChartAreaIcon,
  CheckCircle,
  Facebook,
  Instagram,
  MailOpen,
  MessageCircle,
  Twitter,
  Users,
} from "lucide-react";
import Image from "next/image";

const montlyPricing: PricingCardDetail[] = [
  {
    title: "Basic",
    subTitle: "per month.",
    price: 999,
    features: {
      title: "For single house",
      points: [
        {
          icon: <CheckCircle />,
          title: "Get Free email alerts.",
        },
        {
          icon: <CheckCircle />,
          title: "Up to 15 users.",
        },
        {
          icon: <CheckCircle />,
          title: "Financial Analysis.",
        },
        {
          icon: <CheckCircle />,
          title: "Get dashboard access.",
        },
        {
          icon: <CheckCircle />,
          title: "24/7 Customer access.",
        },
      ],
    },
  },
  {
    title: "Pro",
    subTitle: "per month.",
    price: 2999,
    features: {
      title: "For multiple house",
      points: [
        {
          icon: <CheckCircle />,
          title: "Get Free email alerts.",
        },
        {
          icon: <CheckCircle />,
          title: "Up to 25 users.",
        },
        {
          icon: <CheckCircle />,
          title: "Get custom dashboard access.",
        },
        {
          icon: <CheckCircle />,
          title: "24/7 Customer access.",
        },
        {
          icon: <CheckCircle />,
          title: "Montly financial reports.",
        },
        {
          icon: <CheckCircle />,
          title: "Montly regular updates.",
        },
      ],
    },
  },
];
const annualPricing: PricingCardDetail[] = [
  {
    title: "Basic",
    subTitle: "per year. (2 months free)",
    price: 9999,
    features: {
      title: "For single house",
      points: [
        {
          icon: <CheckCircle />,
          title: "Get Free email alerts.",
        },
        {
          icon: <CheckCircle />,
          title: "Up to 15 users.",
        },
        {
          icon: <CheckCircle />,
          title: "Financial Analysis.",
        },
        {
          icon: <CheckCircle />,
          title: "Get dashboard access.",
        },
        {
          icon: <CheckCircle />,
          title: "24/7 Customer access.",
        },
      ],
    },
  },
  {
    title: "Pro",
    subTitle: "per year. (2 months free)",
    price: 11988,
    features: {
      title: "For multiple house",
      points: [
        {
          icon: <CheckCircle />,
          title: "Get Free email alerts.",
        },
        {
          icon: <CheckCircle />,
          title: "Up to 50 users.",
        },
        {
          icon: <CheckCircle />,
          title: "Get custom dashboard access.",
        },
        {
          icon: <CheckCircle />,
          title: "24/7 Customer access.",
        },
        {
          icon: <CheckCircle />,
          title: "Montly financial reports.",
        },
        {
          icon: <CheckCircle />,
          title: "Montly regular updates.",
        },
      ],
    },
  },
];

export default function Home() {
  return (
    <div className="w-full h-full min-w-screen min-h-screen overflow-x-hidden text-copy">
      <LandingNavbar />
      <div className="p-5 max-w-[1500px] min-h-[80vh] lg:min-h-[70vh] flex justify-center items-center mx-auto ">
        {/* Landing */}
        <div className="w-full h-full flex justify-center items-center gap-14 lg:mb-28">
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
      {/* About */}
      <div className="p-5 max-w-[1500px] flex lg:justify-around items-center gap-4 mx-auto flex-col justify-center lg:flex-row mb-32">
        <Image
          src={"/3d_house.png"}
          width={300}
          height={300}
          alt="3D house"
          className="w-[400px]"
        />
        <div
          className="flex flex-col justify-start items-center py-8 gap-5"
          id="about"
        >
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
      {/* Pricing */}
      <div
        className="p-5 max-w-[1500px] min-h-[80vh] lg:min-h-[70vh] flex flex-col gap-20 justify-center items-center mx-auto relative mb-32"
        id="pricing"
      >
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
              {montlyPricing.map((price, index) => (
                <PricingCard cardDetail={price} key={index} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="yearly">
            <div className="flex gap-8 px-5 py-8">
              {annualPricing.map((price, index) => (
                <PricingCard cardDetail={price} key={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <Image
          alt="background pattern"
          src={"/squigly.svg"}
          width={100}
          height={100}
          className="z-[-1]  w-full h-full opacity-10 absolute top-20"
        />
      </div>
      {/* Contact */}
      <div
        className="flex relative lg:flex-row flex-col justify-around items-center gap-8 p-5 bg-gray-50 overflow-hidden"
        id="contact"
      >
        <div className=" flex justify-center items-center gap-8">
          <Image
            src={"/plane.png"}
            alt="plane"
            width={100}
            height={100}
            className="min-w-[50px] max-w-[150px] xl:scale-150 opacity-30 hidden lg:block"
          />
          <div className="flex flex-col gap-5 items-center justify-center">
            <p className="font-medium text-[24px] flex-wrap">
              Contact for any inquiries:
            </p>
            <p className="font-light flex-wrap">
              Message us directly or through social media for any inquiries. We
              will be happy to serve 24/7. Thank you
            </p>
            <div className="flex gap-6 items-center justify-center">
              <Facebook className="cursor-pointer hover:scale-110" />
              <Instagram className="cursor-pointer hover:scale-110" />
              <Twitter className="cursor-pointer hover:scale-110" />
            </div>
          </div>
        </div>
        <div className="max-w-[900px]">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
