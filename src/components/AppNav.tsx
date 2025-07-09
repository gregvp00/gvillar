"use client";

import {
  IconMenu2,
  IconInbox,
  IconSettings,
  IconWallet,
  IconCash,
  IconStarFilled,
} from "@tabler/icons-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MENU_WIDTH = 256;

export default function AppNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -MENU_WIDTH / 2) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const navItems = [
    { name: "Inbox", icon: <IconInbox size={20} /> },
    { name: "Earnings", icon: <IconCash size={20} /> },
    { name: "Wallet", icon: <IconWallet size={20} /> },
    { name: "Account", icon: <IconSettings size={20} /> },
  ];

  return (
    <>
      <nav className="absolute top-4 left-4 z-20">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full bg-gray-900/70 text-white backdrop-blur-sm hover:bg-gray-800/70 transition-colors"
          aria-label="Abrir menú"
        >
          <IconMenu2 size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            drag="x"
            onDragEnd={handleDragEnd}
            dragConstraints={{ left: -MENU_WIDTH, right: 0 }}
            dragElastic={{ left: 0.1, right: 0 }}
            initial={{ x: -MENU_WIDTH }}
            animate={{ x: 0 }}
            exit={{ x: -MENU_WIDTH }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
            className="absolute inset-0 z-40 cursor-grab active:cursor-grabbing"
          >
            <div onClick={toggleMenu} className="absolute inset-0" />

            <div
              className="absolute top-0 left-0 h-full w-64 bg-gray-800 text-white py-6 px-4 z-50 shadow-2xl"
              style={{ width: MENU_WIDTH }}
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    alt="Avatar de usuario"
                    className="w-8 h-8 rounded-full border-1 border-white object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-white">
                      Lorem Ipsum
                    </span>
                    <span className="text-xs text-gray-400 inline-flex items-center gap-0.5">
                      <IconStarFilled size={10} />
                      4.99
                    </span>
                  </div>
                </div>
              </div>
              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a href="#" className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
