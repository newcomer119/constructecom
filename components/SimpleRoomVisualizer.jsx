"use client";

import React, { useState, useRef, useCallback } from "react";
import { RiCloseLine, RiDownloadLine, RiRefreshLine } from "react-icons/ri";
import Image from "next/image";

const SimpleRoomVisualizer = ({ isOpen, onClose, product, onUploadNewRoom }) => {
  const [roomImage, setRoomImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setRoomImage(event.target.result);
        processRoomImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const processRoomImage = useCallback((imageSrc) => {
    setIsProcessing(true);
    
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw room image
      ctx.drawImage(img, 0, 0);

      // Simple floor detection - assume bottom 30% of image is floor
      const floorHeight = canvas.height * 0.3;
      const floorY = canvas.height - floorHeight;

      // If product has texture, overlay it on floor
      if (product?.textureUrl) {
        const textureImg = new window.Image();
        textureImg.crossOrigin = "anonymous";
        textureImg.onload = () => {
          // Create pattern for tiling
          const pattern = ctx.createPattern(textureImg, "repeat");
          
          // Draw product texture on floor area
          ctx.fillStyle = pattern;
          ctx.fillRect(0, floorY, canvas.width, floorHeight);

          // Add some blending for realism
          ctx.globalCompositeOperation = "multiply";
          ctx.fillStyle = "rgba(200, 200, 200, 0.3)";
          ctx.fillRect(0, floorY, canvas.width, floorHeight);
          ctx.globalCompositeOperation = "source-over";

          // Update preview
          setPreviewUrl(canvas.toDataURL("image/jpeg", 0.9));
          setIsProcessing(false);
        };
        textureImg.src = product.textureUrl;
      } else {
        // If no texture, just show room with product name overlay
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(0, floorY, canvas.width, floorHeight);
        
        ctx.fillStyle = "white";
        ctx.font = "bold 24px Arial";
        ctx.textAlign = "center";
        ctx.fillText(product?.name || "Product", canvas.width / 2, canvas.height - floorHeight / 2);
        
        setPreviewUrl(canvas.toDataURL("image/jpeg", 0.9));
        setIsProcessing(false);
      }
    };
    img.src = imageSrc;
  }, [product]);

  const handleDownload = () => {
    if (previewUrl) {
      const link = document.createElement("a");
      link.href = previewUrl;
      link.download = `${product?.name || "visualization"}-room.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[95vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-primary">
              View {product?.name || "Product"} in Your Room
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Upload a photo of your room to see how it looks
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
          >
            <RiCloseLine className="text-2xl text-slate-600" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {!roomImage ? (
            /* Upload Area */
            <div className="text-center py-12">
              <div className="mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Upload Your Room Photo
                </h3>
                <p className="text-slate-600 mb-6">
                  Upload a clear photo of your room. We'll show how{" "}
                  <strong>{product?.name}</strong> looks in your space.
                </p>
              </div>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Choose Room Photo
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          ) : (
            /* Preview Area */
            <div className="space-y-4">
              {isProcessing ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <svg
                    className="animate-spin h-12 w-12 text-primary mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <p className="text-slate-600">Processing your room...</p>
                </div>
              ) : previewUrl ? (
                <div className="space-y-4">
                  <div className="relative rounded-lg overflow-hidden border-2 border-slate-200">
                    <img
                      src={previewUrl}
                      alt="Room visualization"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setRoomImage(null);
                        setPreviewUrl(null);
                      }}
                      className="flex-1 px-4 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                    >
                      <RiRefreshLine />
                      Try Another Photo
                    </button>
                    <button
                      onClick={handleDownload}
                      className="flex-1 px-4 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                      <RiDownloadLine />
                      Download
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>

        {/* Hidden canvas for processing */}
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
};

export default SimpleRoomVisualizer;

