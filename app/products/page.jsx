"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { products, categories, getProductsByCategory } from "@/lib/products";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";

const ProductsPage = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setFilteredProducts(getProductsByCategory(value));
  };

  const handleProductClick = (productId) => {
    router.push(`/products/${productId}`);
  };

  return (
    <div>
      <TopBar />
      <Header />
      <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Products</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Filter</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product category
                </label>
                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setFilteredProducts(products);
                }}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors uppercase tracking-wide"
              >
                SHOW RESULTS
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square bg-gray-100 relative overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-400"><span class="text-sm">${product.name}</span></div>`;
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
                    <p className="text-lg font-bold">${product.price.toFixed(2)} USD</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
};

export default ProductsPage;




