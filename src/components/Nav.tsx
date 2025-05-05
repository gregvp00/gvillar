"use client";

import { motion, useScroll } from "motion/react";
import Link from "next/link";
import { navLeft } from "../data/navData.js";
import { MessageSquareText } from "lucide-react";
import { UserRound } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { Languages } from "lucide-react";

export default function Nav() {
  const { scrollYProgress } = useScroll();

  const listItems = navLeft.map((nav) => (
    <li key={nav.id} className="full-height-center">
      <Link
        href={nav.href}
        className="hover:text-[var(--nav-foreground-hover)] px-1 full-height-center"
      >
        {nav.title}
      </Link>
    </li>
  ));
  return (
    <nav className="z-50 fixed top-0 flex items-center justify-between w-full h-12 px-10 nav-background backdrop-blur-md shadow-sm text-[var(--nav-foreground)] text-sm">
      <div className="flex items-center space-x-4 full-height-center">
        <Link href="/" className="text-lg font-bold full-height-center">
          Logo
        </Link>
        <ul className="flex text-md full-height-center">{listItems}</ul>
      </div>
      <div className="flex items-center space-x-4 h-full">
        <li className="full-height-center">
          {" "}
          <Languages className="color-[var(--nav-foreground)] mr-1" size={16} />
          ENGLISH
        </li>
        <Link
          href="/contact"
          title="Send message"
          className="full-height-center"
        >
          <MessageSquareText
            className="color-[var(--nav-foreground)]"
            size={16}
          />
        </Link>
        <Link
          href="https://github.com/gregvp00"
          title="Github"
          className="full-height-center"
        >
          <IconBrandGithub
            className="color-[var(--nav-foreground)]"
            size={16}
          />
        </Link>
        <Link href="/account" title="Login" className="full-height-center">
          <UserRound className="color-[var(--nav-foreground)]" size={16} />
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
  );
}
