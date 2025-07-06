"use client";

import Image from "next/image";
import { motion, useScroll } from "motion/react";
import Link from "next/link";
import { navLeft } from "../data/navData.js";
import { MessageSquareText } from "lucide-react";
import { UserRound } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { Languages } from "lucide-react";

export default function Nav() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <nav className="z-40 grid grid-cols-9 grid-rows-1 place-items-center fixed top-0 items-center w-full h-12 px-80 nav-background backdrop-blur-md shadow-sm text-sm">
        <ul className="z-50 flex items-center space-x-4 col-span-4 h-full">
          {navLeft.map((nav) => (
            <li key={nav.id} className="h-full">
              <Link
                href={nav.href}
                className="h-full flex items-center hover:text-white"
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="#" className="z-50 items-center col-span-1">
          <Image src="/logo.svg" alt="Logo" width={45} height={45}  />
        </Link>
        <div className="z-50 inline-flex items-center space-x-4 h-full col-span-4">
          <div className="list-none inline-flex h-full items-center hover:text-white">
            {" "}
            <Languages className=" mr-1" size={16} />
            ENGLISH
          </div>
          <Link
            href="/contact"
            title="Send message"
            className="h-full flex items-center hover:text-white"
          >
            <MessageSquareText className="" size={16} />
          </Link>
          <Link
            href="https://github.com/gregvp00"
            title="Github"
            className="h-full flex items-center hover:text-white"
          >
            <IconBrandGithub className="" size={16} />
          </Link>
          <Link
            href="/account"
            title="Login"
            className="h-full flex items-center hover:text-white"
          >
            <UserRound className="" size={16} />
          </Link>
        </div>
        <motion.div
          id="scroll-indicator"
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            originX: 0,
            backgroundColor: "#ffffff",
          }}
        />
      </nav>
    </>
  );
}
