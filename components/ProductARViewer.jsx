"use client";

import React, { useState, useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";

const ProductARViewer = ({ isOpen, onClose, productName }) => {
  const [isARSupported, setIsARSupported] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    };

    // Check if WebXR/AR is supported
    const checkARSupport = async () => {
      if (navigator.xr) {
        try {
          const supported = await navigator.xr.isSessionSupported("immersive-ar");
          setIsARSupported(supported);
        } catch (e) {
          setIsARSupported(false);
        }
      } else {
        // Fallback: check if device is likely to support AR
        setIsARSupported(checkMobile());
      }
    };

    setIsMobile(checkMobile());
    checkARSupport();
  }, []);

  useEffect(() => {
    // Load model-viewer script
    if (isOpen && typeof window !== "undefined") {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup script on unmount
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="relative w-full h-full flex flex-col">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
          aria-label="Close AR view"
        >
          <RiCloseLine className="text-2xl" />
        </button>

        {/* Instructions */}
        <div className="absolute top-4 left-4 z-50 bg-black/70 text-white p-4 rounded-lg max-w-xs">
          <h3 className="font-semibold mb-2">AR View Instructions</h3>
          {!isARSupported && !isMobile ? (
            <p className="text-sm text-yellow-300">
              AR works best on mobile devices. Please use iOS Safari or Android Chrome for the best experience.
            </p>
          ) : (
            <div className="text-sm space-y-1">
              <p>1. Click "View in AR" button below</p>
              <p>2. Allow camera access when prompted</p>
              <p>3. Point camera at a flat surface</p>
              <p>4. Tap to place the {productName}</p>
            </div>
          )}
        </div>

        {/* Model Viewer */}
        <div className="flex-1 w-full h-full flex items-center justify-center">
          <model-viewer
            src="/base_basic_shaded.glb"
            alt={productName}
            ar
            ar-modes="webxr scene-viewer quick-look"
            ar-scale="auto"
            ar-placement="floor"
            camera-controls
            tone-mapping="commerce"
            shadow-intensity="1"
            environment-image="neutral"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#020617",
            }}
          >
            <div
              slot="ar-button"
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50"
            >
              <button
                className="px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors uppercase tracking-wide"
                style={{ pointerEvents: "auto" }}
              >
                View in AR
              </button>
            </div>
          </model-viewer>
        </div>

        {/* Fallback message for non-AR devices */}
        {!isARSupported && !isMobile && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-sm text-white p-4 rounded-lg text-center max-w-md pointer-events-none">
            <p className="text-sm mb-2">
              AR requires a mobile device with AR support.
            </p>
            <p className="text-xs text-gray-300">
              Try on iOS Safari or Android Chrome
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductARViewer;
