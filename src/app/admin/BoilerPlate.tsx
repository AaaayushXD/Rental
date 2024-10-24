"use client";
import { Navbar as NavbarProps } from "@/@types/Navbar";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import {
  Banknote,
  Hotel,
  LayoutDashboard,
  MessageCircle,
  Ticket,
  Users,
} from "lucide-react";

interface BoilerProps {
  children: React.ReactNode;
}
const navbar: NavbarProps[] = [
  {
    name: "Dashboard",
    link: "admin/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    name: "Users",
    link: "admin/users",
    icon: <Users />,
  },
  {
    name: "Rooms",
    link: "admin/rooms",
    icon: <Hotel />,
  },
  {
    name: "Rents",
    link: "admin/rents",
    icon: <Banknote />,
  },
  {
    name: "Tickets",
    link: "admin/tickets",
    icon: <Ticket />,
  },
  {
    name: "Messages",
    link: "admin/message",
    icon: <MessageCircle />,
  },
];
const BoilerPlate = ({ children }: BoilerProps) => {
  return (
    <div className="min-w-[90vw] w-full h-full min-h-screen text-brandCopy">
      <Navbar navbars={navbar} />
      {children}
      <Footer />
    </div>
  );
};

export default BoilerPlate;
