"use client";
import { Navbar as NavbarProps } from "@/@types/Navbar";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Banknote, LayoutDashboard, MessageCircle, Ticket } from "lucide-react";

interface BoilerProps {
  children: React.ReactNode;
}
const navbar: NavbarProps[] = [
  {
    name: "Dashboard",
    link: "dashboard",
    icon: <LayoutDashboard />,
  },
  {
    name: "Rents",
    link: "rents",
    icon: <Banknote />,
  },
  {
    name: "Tickets",
    link: "tickets",
    icon: <Ticket />,
  },
  {
    name: "Messages",
    link: "message",
    icon: <MessageCircle />,
  },
];
const BoilerPlate = ({ children }: BoilerProps) => {
  return (
    <div className="min-w-[100vw] w-full h-full min-h-screen text-brandCopy">
      <Navbar navbars={navbar} />
      {children}
      <Footer />
    </div>
  );
};

export default BoilerPlate;
