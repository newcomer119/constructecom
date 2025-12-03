"use client";

import React, { useState } from "react";
import { RiSubtractFill, RiAddFill } from "react-icons/ri";

const FaqItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full border-b">
      <div className="flex items-center justify-between py-6">
        <h4 className="h4 max-w-[300px] sm:max-w-md md:max-w-max">{title}</h4>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-[44px] h-[44px] bg-accent flex items-center justify-center"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Collapse answer" : "Expand answer"}
        >
          {isOpen ? (
            <RiSubtractFill
              className={`text-primary text-2xl transition-opacity duration-700 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            />
          ) : (
            <RiAddFill
              className={`text-primary text-2xl transition-opacity duration-700 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
          )}
        </button>
      </div>

      {/* Description  */}
      <div
        className={`${
          isOpen
            ? "max-h-[200px] opacity-100 py-2 transition-all duration-700"
            : "max-h-0 opacity-0 overflow-hidden transition-all duration-500"
        } pr-10`}
      >
        <p className="text-secondary text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FaqItem;
