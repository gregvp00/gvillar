"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Definimos los tipos para las props
type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type AppTabsProps = {
  tabs: Tab[];
  initialTabId?: string;
};

// CAMBIO: El nombre del componente ahora es AppTabs
export default function AppTabs({ tabs, initialTabId }: AppTabsProps) {
  const [activeTab, setActiveTab] = useState(initialTabId || tabs[0].id);
  const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className="w-full h-full flex flex-col">
      {/* Botones de las pestañas */}
      <div className="flex border-b border-gray-700">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 text-sm font-medium transition-colors focus:outline-none ${
              activeTab === tab.id
                ? 'border-b-2 border-white text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Área del Contenido */}
      <div className="flex-grow relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full"
          >
            {activeContent}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}