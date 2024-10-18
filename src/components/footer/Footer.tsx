import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="w-full  flex font-light flex-col items-center justify-center">
      <footer className="w-full mt-16  rounded-t  bg-[var(--primary-color)]  font-light place-items-center grid px-5">
        <div className="flex flex-col items-center justify-between w-full gap-5 p-3 border-b-4 border-b-gray-300 sm:flex-row">
          <div className="px-5 py-3 bg-[white] rounded">
            <Image
              src={"/logo_black.png"}
              alt="brand logo"
              width={100}
              height={100}
              className="max-h-[60px] "
            />
          </div>
          <div className="flex items-center justify-center gap-3">
            <p className="font-bold tracking-wide ext-lg ">Follow us: </p>
            <div></div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 py-4 md:grid-cols-2 place-items-center md:place-items-start">
          <div className="flex flex-col gap-6 p-5">
            <p className="font-bold tracking-wider">Quick Contact</p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 text-sm">
                <div className="p-2 bg-[var(--light-foreground)] rounded-full text-[var(--dark-secondary-text)] flex items-center justify-center">
                  <MapPin />
                </div>
                <div>
                  <p>Pinglasthan, Gaushala</p>
                  <p>Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="p-2 bg-[var(--light-foreground)] rounded-full text-[var(--dark-secondary-text)] flex items-center justify-center flex-wrap">
                  <Phone />
                </div>
                <div>
                  <p>9847697816 / 9813425299</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="p-2 bg-[var(--light-foreground)] rounded-full text-[var(--dark-secondary-text)] flex items-center justify-center">
                  <Mail />
                </div>
                <div>
                  <a href="mailto:inquiry@texascollege.edu.np">
                    aayushlamichhane2911@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="p-2 bg-[var(--light-foreground)] rounded-full text-[var(--dark-secondary-text)] flex items-center justify-center">
                  <Clock />
                </div>
                <div>
                  <p>Opening Hour</p>
                  <p>06:00 AM - 06:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full gap-6 px-5 py-6 ">
            <div className="flex flex-col gap-5">
              <p className="font-bold tracking-wider">Links</p>
              <div className="flex flex-col gap-3 text-sm  font-light ">
                <Link
                  href="/"
                  className="cursor-pointer hover:underline hover:text-[var(--secondary-color)]"
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="cursor-pointer hover:underline hover:text-[var(--secondary-color)]"
                >
                  About Us
                </Link>
                <Link
                  href="#pricing"
                  className="cursor-pointer hover:underline hover:text-[var(--secondary-color)]"
                >
                  Pricing
                </Link>
                <Link
                  href="#contact"
                  className="cursor-pointer hover:underline hover:text-[var(--secondary-color)]"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold tracking-wider">Resources</p>
              <div className="flex flex-col gap-3 text-sm  font-light">
                <a
                  href="/"
                  target="_blank"
                  className="cursor-pointer hover:underline  hover:text-[var(--secondary-color)]"
                >
                  Terms & Condition
                </a>
                <a
                  target="_blank"
                  href="/"
                  className="cursor-pointer hover:underline  hover:text-[var(--secondary-color)]"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full flex items-center justify-between flex-col md:flex-row py-4 px-5 text-sm text-[var(--dark-secondary-text)] gap-3">
        <p>Copyright © 2024 All Rights Reserved.</p>
        <p className="cursor-pointer">
          Developed By:{" "}
          <a
            href="https://aayush-al.web.app/"
            target="_blank"
            className="hover:text-[var(--primary-color)]  hover:underline"
          >
            Aayush Lamichhane.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
