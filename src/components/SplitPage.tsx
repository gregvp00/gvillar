"use client";

import React, { useState } from "react";

export default function SplitPage() {
  const [leftWidth, setLeftWidth] = useState("100%");
  const [rightWidth, setRightWidth] = useState("0%");

  const handleLeftPaneClick = () => {
    setLeftWidth("0%");
    setRightWidth("100%");
  };

  const handleRightPaneClick = () => {
    setLeftWidth("100%");
    setRightWidth("0%");
  };
  return (
    <div className="flex h-screen relative overflow-hidden">
      <div
        id="leftPane"
        className=" w-1/2 bg-black text-white text-center relative"
        style={{ width: leftWidth, transition: "width 1s ease" }}
      >
        <div className="absolute flex items-center h-screen right-0 w-48">
          <div
            id="leftPaneButton"
            className=" z-10 w-full h-48  flex items-center cursor-pointer transition duration-500 hover:bg-gray-300 bg-white text-black justify-center"
            onClick={handleLeftPaneClick}
          >
            links
          </div>
        </div>
        <div className="flex  items-center justify-center  p-48 h-screen">
          <div className="flex w-full h-screen bg-gray-900 text-white">
            {/* Sidebar */}
            <div className="w-16 bg-gray-800 flex flex-col justify-between p-4">
              <div className="flex flex-col items-center space-y-4">
                {/* Iconos de la barra lateral */}
                <div className="bg-gray-700 rounded p-2 hover:bg-gray-600 cursor-pointer">
                  <i className="fas fa-code"></i>{" "}
                  {/* Puedes poner iconos con Font Awesome */}
                </div>
                <div className="bg-gray-700 rounded p-2 hover:bg-gray-600 cursor-pointer">
                  <i className="fas fa-file-explorer"></i>
                </div>
                <div className="bg-gray-700 rounded p-2 hover:bg-gray-600 cursor-pointer">
                  <i className="fas fa-cogs"></i>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 bg-gray-900">
              {/* Barra de título */}
              <div className="bg-gray-800 p-4 text-lg">Editor de Código</div>

              {/* Editor de código */}
              <div className="p-6 h-[calc(100vh-120px)] overflow-auto bg-gray-800 rounded-lg m-4">
                <div className="text-xs text-gray-400">
                  {/* Código simulado */}
                  <pre className="whitespace-pre-wrap">
                    <code>{`const greeting = "Hello, World!";\nconsole.log(greeting);`}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Barra de estado */}
            <div className="w-full bg-gray-800 p-2 text-sm flex justify-between items-center text-gray-500">
              <div>Ln 1, Col 1</div>
              <div>JavaScript - Untitled</div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="rightPane"
        className=" w-1/2 bg-white text-black text-center relative "
        style={{ width: rightWidth, transition: "width 1s ease" }}
      >
        <div className="absolute flex items-center h-screen left-0 w-48">
          <div
            id="rightPaneButton"
            className=" z-10 w-full h-48  flex items-center cursor-pointer transition duration-500 hover:bg-gray-700 bg-black text-white justify-center"
            onClick={handleRightPaneClick}
          >
            rechts
          </div>
        </div>
        <div className="flex items-center justify-center  p-48 text-center h-screen">
          LOREM IPSUM DOLOR
        </div>
      </div>
    </div>
  );
}
