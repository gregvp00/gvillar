"use client";

import React, { useState, useEffect } from "react";
import { codeToHtml } from "shiki";

export default function CodeEditor() {
  // --- CÓDIGO FUENTE SEPARADO ---

  const [appPreviewCode] =
    useState(`import AppBottomDrawer from "@/components/AppBottomDrawer";
import AppNav from "@/components/AppNav";
import Image from "next/image";

export default function AppPreview() {
  return (
    <div className="w-full flex justify-center">
      <main
        className="relative w-full h-[70vh] bg-black overflow-hidden"
        style={{ position: "relative" }}
      >
        <Image
          src="/appPreview.webp"
          alt="App Preview"
          fill
          sizes="(max-width: 768px) 80vw, 450px"
          priority
          className="z-0 pointer-events-none object-cover"
        />
        <AppNav />
        <AppBottomDrawer />
      </main>
    </div>
  );
}
`);

  const [appNavCode] = useState(`"use client";

import { IconMenu2, IconX, IconInbox, IconSettings, IconWallet, IconCash, IconStarFilled } from "@tabler/icons-react";
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
            <div
              onClick={toggleMenu}
              className="absolute inset-0"
            />

            <div
              className="absolute top-0 left-0 h-full w-64 bg-gray-800 text-white py-6 px-4 z-50 shadow-2xl"
              style={{ width: MENU_WIDTH }}
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    alt="Avatar de usuario"
                    className="w-8 h-8 rounded-full border border-white object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-white">Lorem Ipsum</span>
                    <span className="text-xs text-gray-400 inline-flex items-center gap-0.5"><IconStarFilled size={10} />4.99</span>
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
}`);

  const [appBottomDrawerCode] = useState(`"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { IconChevronRight, IconAdjustmentsHorizontal, IconChartInfographic } from "@tabler/icons-react";

const DRAWER_PEEK_HEIGHT = 80;

export default function AppBottomDrawer() {
  const [isOpen, setIsOpen] = useState(true);
  const [drawerHeight, setDrawerHeight] = useState(0);

  const controls = useAnimation();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (drawerRef.current) {
      setDrawerHeight(drawerRef.current.offsetHeight);
    }
  }, []);

  const toggleDrawer = (open: boolean) => {
    setIsOpen(open);
    if (drawerHeight > 0) {
      controls.start({
        y: open ? 0 : drawerHeight - DRAWER_PEEK_HEIGHT,
      });
    }
  };

  const handleDragEnd = (event: any, info: any) => {
    const dragThreshold = 50;
    if (info.offset.y < -dragThreshold) {
      toggleDrawer(true);
    } else if (info.offset.y > dragThreshold) {
      toggleDrawer(false);
    } else {
      toggleDrawer(isOpen);
    }
  };

  useEffect(() => {
    if (drawerHeight > 0) {
      toggleDrawer(isOpen);
    }
  }, [drawerHeight, isOpen]);

  return (
    <motion.div
      ref={drawerRef}
      drag="y"
      dragElastic={0}
      onDragEnd={handleDragEnd}
      initial={{ y: 0 }}
      animate={controls}
      transition={{ type: "spring", stiffness: 400, damping: 40 }}
      dragConstraints={{
        top: 0,
        bottom: drawerHeight > 0 ? drawerHeight - DRAWER_PEEK_HEIGHT : 0,
      }}
      className="absolute bottom-0 left-0 w-full h-2/5 bg-gray-900/70 backdrop-blur-lg rounded-t-2xl z-10 cursor-grab active:cursor-grabbing"
    >
      <div className="w-16 h-1.5 bg-gray-500 rounded-xl mx-auto mt-3" />

      <div className="overflow-y-auto h-full flex flex-col">
        <div className="flex w-full justify-between items-center px-4 py-2">
          <IconAdjustmentsHorizontal size={24} stroke={2} className="text-gray-400 hover:text-gray-200 transition-all" />
          <h1 className="text-lg font-bold text-white">You're offline</h1>
          <IconChartInfographic size={24} stroke={2} className="text-gray-400 hover:text-gray-200 transition-all" />
        </div>
        
        <div className="p-4 bg-red-950/50 mx-2 my-4 rounded-lg">
          <p className="text-md font-semibold text-red-100">Required actions</p>
          <p className="text-xs text-red-200">Go online when resolved</p>
          <a className="text-sm mt-6 flex items-center justify-between text-white hover:underline">
            <span>Select an eligible vehicle</span>
            <IconChevronRight size={20} stroke={2} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}`);

  // --- ESTADOS PARA EL HTML RESALTADO ---
  const [highlightedAppPreview, setHighlightedAppPreview] = useState("");
  const [highlightedAppNav, setHighlightedAppNav] = useState("");
  const [highlightedAppBottomDrawer, setHighlightedAppBottomDrawer] =
    useState("");

  useEffect(() => {
    const highlightAll = async () => {
      try {
        // Resalta cada bloque de código
        const htmlPreview = await codeToHtml(appPreviewCode, {
          lang: "tsx",
          theme: "vitesse-dark",
        });
        const htmlNav = await codeToHtml(appNavCode, {
          lang: "tsx",
          theme: "vitesse-dark",
        });
        const htmlDrawer = await codeToHtml(appBottomDrawerCode, {
          lang: "tsx",
          theme: "vitesse-dark",
        });

        // Actualiza los estados correspondientes
        setHighlightedAppPreview(htmlPreview);
        setHighlightedAppNav(htmlNav);
        setHighlightedAppBottomDrawer(htmlDrawer);
      } catch (error) {
        console.error("Error highlighting code:", error);
      }
    };

    highlightAll();
  }, [appPreviewCode, appNavCode, appBottomDrawerCode]);

  return (
    <div className="text-left text-sm [&_pre]:whitespace-pre-wrap [&_pre]:break-words h-[70vh] overflow-y-auto rounded-lg border border-gray-700">
      {/* Bloque para AppPreview.tsx */}
      <div>
        <div className="sticky top-0 px-4 py-2 bg-gray-800 text-gray-300 font-mono z-10">
          AppPreview.tsx
        </div>
        <div
          className="p-4 bg-[#121212]"
          dangerouslySetInnerHTML={{ __html: highlightedAppPreview }}
        />
      </div>

      {/* Bloque para AppNav.tsx */}
      <div>
        <div className="sticky top-0 px-4 py-2 bg-gray-800 text-gray-300 font-mono z-10">
          AppNav.tsx
        </div>
        <div
          className="p-4 bg-[#121212]"
          dangerouslySetInnerHTML={{ __html: highlightedAppNav }}
        />
      </div>

      {/* Bloque para AppBottomDrawer.tsx */}
      <div>
        <div className="sticky top-0 px-4 py-2 bg-gray-800 text-gray-300 font-mono z-10">
          AppBottomDrawer.tsx
        </div>
        <div
          className="p-4 bg-[#121212]"
          dangerouslySetInnerHTML={{ __html: highlightedAppBottomDrawer }}
        />
      </div>
    </div>
  );
}
