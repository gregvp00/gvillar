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
        <div className="flex  items-center justify-center  p-48 h-screen"></div>
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
