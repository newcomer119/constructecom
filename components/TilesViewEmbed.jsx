"use client";

import React from "react";
import { RiCloseLine } from "react-icons/ri";

const TILESVIEW_TOKEN = "NTE4MTIzdGlsZXNwcmV2aWV3XzE5OTQ=";
const TILESVIEW_URL = `https://tilesview.ai/app/login.php?login_backend=${TILESVIEW_TOKEN}`;

const TilesViewEmbed = ({ isOpen, onClose, productName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white">
      {/* Header - Fixed at top */}
      <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 bg-white">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-primary">
            View {productName || "Product"} in Your Room
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Visualize tiles and flooring in your space with TilesView
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors ml-4"
          aria-label="Close"
        >
          <RiCloseLine className="text-2xl text-slate-600" />
        </button>
      </div>

      {/* Iframe Container - Full screen */}
      <div className="absolute inset-x-0 top-[100px] bottom-0 overflow-hidden bg-slate-50">
        <iframe
          src={TILESVIEW_URL}
          width="100%"
          height="100%"
          allowFullScreen
          style={{
            border: "none",
            height: "calc(100vh - 100px)",
          }}
          className="w-full h-full"
          title="TilesView Visualizer"
        />
      </div>
    </div>
  );
};

export default TilesViewEmbed;

