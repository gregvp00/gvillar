"use client";

import Link from "next/link";
import { Home, Briefcase, User, Mail } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// MobileNav.tsx
export default function MobileNav() {
  const pathname = usePathname();
  const [active, setActive] = useState<string>(pathname ?? "/");

  useEffect(() => {
    setActive(pathname ?? "/");
  }, [pathname]);

  const items = [
    { id: "home", href: "/", label: "Home", icon: Home },
    { id: "projects", href: "#projects", label: "Projects", icon: Briefcase },
    { id: "about", href: "#about", label: "About", icon: User },
    { id: "contact", href: "#contact", label: "Contact", icon: Mail },
    {
      id: "github",
      href: "https://github.com/gregvp00",
      label: "GitHub",
      icon: IconBrandGithub,
      external: true,
    },
  ];

  return (
    <nav className="2xl:hidden fixed bottom-4 w-2/3 max-w-[1000px] left-0 right-0 mx-auto z-50">
      <div className="bg-black/80 backdrop-blur-sm border border-white/6 rounded-md px-3 py-2 shadow-lg flex justify-between items-center">
        {items.map((item) => {
          const Icon = item.icon as any;
          const isActive =
            item.href === active || (item.href === "/" && active === "/");

          return (
            <Link
              key={item.id}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={item.label}
              className={`flex flex-col items-center justify-center text-xs gap-1 px-2 py-1 rounded-lg transition-colors ${
                isActive ? "text-white" : "text-gray-300"
              }`}
            >
              <Icon size={18} />
              <span className="text-[10px] leading-3">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
