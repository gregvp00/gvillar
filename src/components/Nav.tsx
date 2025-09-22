"use client";

import React, { useEffect, useRef, useState } from "react";
import { Languages } from "lucide-react";
import { IconPaint, IconTimezone } from "@tabler/icons-react";
import { navLeft } from "@/data/navData";
import {
  IconBrandGithub,
  IconSettings,
  IconFileSearch,
} from "@tabler/icons-react";
import Link from "next/link";

interface Language {
  code: string;
  label: string;
}

interface Props {
  initialLanguage?: string;
  languages?: Language[];
  onLanguageChange?: (code: string) => void;
}

export default function NavWithClockAndSettings({
  initialLanguage = typeof navigator !== "undefined"
    ? navigator.language
    : "en-US",
  languages = [
    { code: "en-US", label: "English" },
    { code: "es-ES", label: "Español" },
    { code: "de-DE", label: "Deutsch" },
  ],
  onLanguageChange,
}: Props) {
  const [now, setNow] = useState(new Date());
  const [locale, setLocale] = useState(initialLanguage);
  const [showSettings, setShowSettings] = useState(false);
  const [items, setItems] = useState<string[]>(["Ejemplo: tema claro/oscuro"]);

  // For OS-like window position/draggable
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const draggingRef = useRef(false);
  const startRef = useRef<{ x: number; y: number } | null>(null);
  const winRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (onLanguageChange) onLanguageChange(locale);
  }, [locale, onLanguageChange]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setShowSettings(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Pointer-based dragging handlers
  useEffect(() => {
    function onPointerMove(e: PointerEvent) {
      if (!draggingRef.current || !startRef.current) return;
      const dx = e.clientX - startRef.current.x;
      const dy = e.clientY - startRef.current.y;
      setPos((p) => ({ x: p.x + dx, y: p.y + dy }));
      startRef.current = { x: e.clientX, y: e.clientY };
    }
    function onPointerUp() {
      draggingRef.current = false;
      startRef.current = null;
      document.body.style.userSelect = "";
    }
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  const startDrag = (e: React.PointerEvent) => {
    draggingRef.current = true;
    startRef.current = { x: e.clientX, y: e.clientY };
    // prevent selecting text while dragging
    document.body.style.userSelect = "none";
    // capture pointer to ensure we keep receiving events
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };

  const timeZone =
    typeof Intl !== "undefined"
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : "UTC";
  const formatted = new Intl.DateTimeFormat(locale, {
    dateStyle: "full",
    timeStyle: "medium",
    timeZone,
  }).format(now);

  const addSettingPlaceholder = () => {
    setItems((s) => [...s, `Nueva opción ${s.length + 1}`]);
  };

  return (
    <>
      <nav className="z-40 fixed w-full nav-background border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-10 flex items-center justify-between">
            <div className="flex-1" aria-hidden>
              <ul className="z-50 flex items-center col-span-4 h-full text-sm">
                {navLeft.map((nav) => (
                  <li key={nav.id}>
                    <Link
                      href={nav.href}
                      className=" flex gap-2 px-3 py-1.5 rounded-sm hover:bg-gray-800 hover:text-white items-center"
                    >
                      {nav.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="#" className="flex-1 flex items-center justify-center">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-200 select-none">
                {formatted}
              </div>
            </Link>

            <div className="flex-1 flex items-center justify-end">
              <Link
                href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:ad63d264-d78b-432d-ac1f-ebe272684569"
                title="CV"
                className="inline-flex items-center hover:text-white gap-2 px-3.25 py-1.75 rounded-sm hover:bg-gray-800"
              >
                <IconFileSearch className="" size={18} />
              </Link>
              <Link
                href="https://github.com/gregvp00"
                title="Github"
                className="inline-flex items-center hover:text-white gap-2 px-3.25 py-1.75 rounded-sm hover:bg-gray-800"
              >
                <IconBrandGithub className="" size={18} />
              </Link>
              <button
                aria-haspopup="dialog"
                aria-expanded={showSettings}
                aria-controls="settings-window"
                onClick={() => setShowSettings((s) => !s)}
                className="inline-flex items-center hover:text-white gap-2 px-3.25 py-1.75 rounded-sm hover:bg-gray-800 hover:cursor-pointer"
              >
                <IconSettings className="" size={18} />
                <span className="sr-only">Ajustes</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Settings "window" popup */}
      {showSettings && (
        <div
          role="dialog"
          id="settings-window"
          aria-label="Ajustes"
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
        >
          {/* dim background */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setShowSettings(false)}
          />

          <div
            ref={winRef}
            className="pointer-events-auto w-[540px] max-w-full shadow-2xl rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden"
            style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
          >
            {/* titlebar - draggable */}
            <div
              className="flex items-center justify-between px-3 h-10 bg-gradient-to-b from-gray-100 to-transparent dark:from-gray-800 cursor-grab"
              onPointerDown={startDrag}
              role="toolbar"
              aria-label="Barra de la ventana de ajustes (arrastrable)"
            >
              <div className="flex items-center gap-2">
                <IconSettings className="" size={16} />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-200 select-none">
                  Settings
                </span>
              </div>
            </div>

            <div className="p-4">
              <div className="space-y-4">
                <div>
                  <label className="inline-flex text-sm font-medium text-gray-700 dark:text-gray-200">
                    <Languages className="mr-1" size={18} />
                    Language
                  </label>
                  <select
                    disabled
                    value={locale}
                    onChange={(e) => setLocale(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {languages.map((l) => (
                      <option key={l.code} value={l.code}>
                        {l.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="inline-flex text-sm font-medium text-gray-700 dark:text-gray-200">
                    <IconTimezone className="mr-1" size={18} />
                    Detected time zone
                  </label>
                  <div className="mt-1 text-sm text-gray-600 dark:text-gray-300 select-all">
                    {timeZone}
                  </div>
                </div>

                <div>
                  <label className="inline-flex text-sm font-medium text-gray-700 dark:text-gray-200">
                    <IconPaint className="mr-1" size={18} />
                    Theme
                  </label>
                  <select
                    disabled
                    value={locale}
                    onChange={(e) => setLocale(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option selected>Default</option>
                  </select>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    onClick={() => setShowSettings(false)}
                    className="px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
