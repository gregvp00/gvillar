"use client";

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
}