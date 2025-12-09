"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getProductById } from "@/lib/products";
import TilesViewEmbed from "@/components/TilesViewEmbed";
import { RiCameraLine, RiEyeLine, RiBox3Line } from "react-icons/ri";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";

const ProductDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const product = getProductById(params.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isVisualizerOpen, setIsVisualizerOpen] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <button
            onClick={() => router.push("/products")}
            className="text-blue-600 hover:underline"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <>
      <TopBar />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Product Images */}
            <div>
              {/* Main Image */}
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={`${product.name} - Image ${selectedImage + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = e.target.parentElement;
                    if (!fallback.querySelector('.fallback')) {
                      fallback.innerHTML = `<div class="fallback w-full h-full flex items-center justify-center text-gray-400"><div class="text-center"><p class="text-sm mb-2">${product.name}</p><p class="text-xs">Image ${selectedImage + 1}</p></div></div>`;
                    }
                  }}
                />
              </div>

              {/* Thumbnail Images */}
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden ${
                      selectedImage === index
                        ? "border-red-600"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gray-100 flex items-center justify-center"><span class="text-xs text-gray-400">${index + 1}</span></div>`;
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Product Information */}
            <div>
              <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-2xl font-bold mb-6">
                ${product.price.toFixed(2)} USD
              </p>

              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {showFullDescription
                    ? product.fullDescription || product.description
                    : product.description.length > 200
                    ? `${product.description.substring(0, 200)}...`
                    : product.description}
                </p>
                {product.description.length > 200 && (
                  <button
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="text-blue-600 hover:underline mt-2 text-sm"
                  >
                    {showFullDescription ? "Read Less" : "Read More..."}
                  </button>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-20 h-10 text-center border border-gray-300 rounded"
                    min="1"
                  />
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-lg mb-6 transition-colors uppercase tracking-wide">
                ADD TO CART
              </button>

              {/* Interactive Options */}
              <div className="flex flex-col gap-3 mb-8">
                <button
                  onClick={() => setIsVisualizerOpen(true)}
                  className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <RiCameraLine className="text-xl" />
                  <span>Visualizer</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <RiEyeLine className="text-xl" />
                  <span>Interactive Panorama</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <RiBox3Line className="text-xl" />
                  <span>Interactive 3D Product model</span>
                </button>
              </div>

              {/* Style Tags */}
              {product.styles && product.styles.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-2">Style</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.styles.map((style, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm"
                      >
                        {style}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Tags */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold mb-2">Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* TilesView Visualizer Modal */}
      <TilesViewEmbed
        isOpen={isVisualizerOpen}
        onClose={() => setIsVisualizerOpen(false)}
        productName={product.name}
      />
    </>
  );
};

export default ProductDetailPage;

