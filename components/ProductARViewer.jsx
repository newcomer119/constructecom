"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { ARButton, XR, Controllers, Hands } from "@react-three/xr";
import { OrbitControls, Environment, useGLTF, Html } from "@react-three/drei";
import { RiCloseLine } from "react-icons/ri";

const Model = () => {
  const gltf = useGLTF("/base_basic_shaded.glb");
  return <primitive object={gltf.scene} scale={[1, 1, 1]} />;
};

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

    // Check if WebXR is supported
    const checkARSupport = async () => {
      if (navigator.xr) {
        const supported = await navigator.xr.isSessionSupported("immersive-ar");
        setIsARSupported(supported);
      } else {
        setIsARSupported(false);
      }
    };

    setIsMobile(checkMobile());
    checkARSupport();
  }, []);

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
          {!isARSupported ? (
            <p className="text-sm text-yellow-300">
              AR is not supported on this device. Please use a mobile device with
              AR support (iOS Safari or Android Chrome).
            </p>
          ) : (
            <div className="text-sm space-y-1">
              <p>1. Click "Enter AR" below</p>
              <p>2. Allow camera access</p>
              <p>3. Point camera at a flat surface</p>
              <p>4. Tap to place the {productName}</p>
            </div>
          )}
        </div>

        {/* AR Canvas */}
        <div className="flex-1 w-full h-full">
          <Canvas
            camera={{ position: [0, 1.6, 0], fov: 50 }}
            gl={{ preserveDrawingBuffer: true }}
          >
            <XR>
              <Controllers />
              <Hands />
              <ambientLight intensity={0.6} />
              <directionalLight
                intensity={1.2}
                position={[4, 6, 4]}
                castShadow
              />
              <Suspense
                fallback={
                  <Html center>
                    <div className="text-white">Loading model...</div>
                  </Html>
                }
              >
                <Model />
                <Environment preset="sunset" />
              </Suspense>
              <OrbitControls
                enablePan
                enableZoom
                enableRotate
                maxDistance={10}
                minDistance={1.5}
              />
            </XR>
          </Canvas>
        </div>

        {/* AR Button */}
        {isARSupported && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <ARButton
              sessionInit={{
                requiredFeatures: ["local-floor"],
                optionalFeatures: ["bounded-floor", "hand-tracking"],
              }}
              className="px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors uppercase tracking-wide"
            >
              Enter AR
            </ARButton>
          </div>
        )}

        {/* Fallback message for non-AR devices */}
        {!isARSupported && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-sm text-white p-4 rounded-lg text-center max-w-md">
            <p className="text-sm mb-2">
              AR requires a mobile device with WebXR support.
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

