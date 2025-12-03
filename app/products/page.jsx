"use client";

import React, { useState } from "react";
import Pretitle from "@/components/Pretitle";
import Button from "@/components/Button";
import Product3DViewer from "@/components/Product3DViewer";
import ProductARViewer from "@/components/ProductARViewer";

const ProductsPage = () => {
  const [arViewOpen, setArViewOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState("");

  const handleViewInAR = (productName) => {
    setCurrentProduct(productName);
    setArViewOpen(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Hero / intro */}
      <section className="pt-24 xl:pt-28">
        <div className="container mx-auto">
          <div className="max-w-[620px] mx-auto text-center mb-12 xl:mb-16">
            <Pretitle text="Products" center />
            <h1 className="h2 mb-3">Vanities &amp; Sofa Collection</h1>
            <p className="text-sm xl:text-base text-secondary">
              Explore our first interactive products. Start with a signature
              vanity and a modern sofa, both ready to view in 3D on this page.
            </p>
          </div>

          {/* Product list */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 mb-16">
            {/* Vanity card */}
            <div className="bg-white shadow-custom rounded-xl p-6 md:p-7 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="h3 mb-1">Siena Wall Vanity</h2>
                  <p className="text-sm text-secondary max-w-[420px]">
                    A sleek wall-mounted vanity designed for modern bathrooms,
                    pairing generous storage with a clean, minimal silhouette.
                  </p>
                </div>
                <span className="hidden md:inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold uppercase tracking-[0.18em]">
                  Vanity
                </span>
              </div>

              <ul className="text-xs text-slate-600 space-y-1">
                <li>• 900 mm width, ideal for medium-size bathrooms</li>
                <li>• Matte white finish with warm wood accents</li>
                <li>• Soft-close drawers and integrated basin</li>
              </ul>

              <div className="pt-2">
                <a href="#vanity-detail">
                  <Button text="View Product" />
                </a>
              </div>
            </div>

            {/* Sofa card */}
            <div className="bg-white shadow-custom rounded-xl p-6 md:p-7 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="h3 mb-1">Lounge Sofa</h2>
                  <p className="text-sm text-secondary max-w-[420px]">
                    A contemporary sofa with generous seating depth, perfect for
                    living rooms that balance comfort and style.
                  </p>
                </div>
                <span className="hidden md:inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold uppercase tracking-[0.18em]">
                  Sofa
                </span>
              </div>

              <ul className="text-xs text-slate-600 space-y-1">
                <li>• Low-profile armrests and deep cushions</li>
                <li>• Neutral upholstery to suit most interiors</li>
                <li>• Ideal for 3–4 person seating areas</li>
              </ul>

              <div className="pt-2">
                <a href="#sofa-detail">
                  <Button text="View Product" />
                </a>
              </div>
            </div>
          </div>

          {/* Vanity detail with 3D viewer */}
          <section
            id="vanity-detail"
            className="bg-white shadow-custom rounded-2xl p-6 md:p-8 xl:p-10 mb-10"
          >
            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] gap-8 xl:gap-10 items-start">
              <div>
                <Pretitle text="Vanity" center={false} />
                <h2 className="h2 mb-4">Siena Wall Vanity</h2>
                <p className="text-sm xl:text-base text-secondary mb-4">
                  The Siena Wall Vanity is designed for clean, clutter-free
                  bathrooms. Wall mounting keeps the floor visible, making small
                  spaces feel bigger while still offering generous storage.
                </p>
                <p className="text-sm xl:text-base text-secondary mb-4">
                  Pair it with your preferred faucet and mirror to complete the
                  look. The 3D preview lets you explore proportions and
                  detailing before final selection.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs text-slate-700 mb-6">
                  <div>
                    <p className="font-semibold mb-1">Dimensions</p>
                    <p>900 × 460 × 520 mm</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Finishes</p>
                    <p>Matte white, light oak</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Mounting</p>
                    <p>Wall-mounted</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Best for</p>
                    <p>Modern &amp; minimal bathrooms</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleViewInAR("Siena Wall Vanity")}
                    className="px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors uppercase tracking-wide text-sm"
                  >
                    View in My Room (AR)
                  </button>
                  <Button text="Get a Quote" />
                </div>
              </div>

              <div className="h-[360px] md:h-[420px] xl:h-[460px]">
                <Product3DViewer />
              </div>
            </div>
          </section>

          {/* Sofa detail with 3D viewer (reusing same model for now) */}
          <section
            id="sofa-detail"
            className="bg-white shadow-custom rounded-2xl p-6 md:p-8 xl:p-10"
          >
            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] gap-8 xl:gap-10 items-start">
              <div>
                <Pretitle text="Sofa" center={false} />
                <h2 className="h2 mb-4">Lounge Sofa</h2>
                <p className="text-sm xl:text-base text-secondary mb-4">
                  The Lounge Sofa offers relaxed, deep seating with a simple,
                  architectural silhouette. It works equally well in compact
                  apartments and spacious living rooms.
                </p>
                <p className="text-sm xl:text-base text-secondary mb-4">
                  Use the 3D preview to rotate around the piece and understand
                  its scale in relation to your room layout.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs text-slate-700 mb-6">
                  <div>
                    <p className="font-semibold mb-1">Dimensions</p>
                    <p>2200 × 900 × 780 mm</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Upholstery</p>
                    <p>Textured fabric, warm grey</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Seating</p>
                    <p>Comfortable for 3–4 people</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Best for</p>
                    <p>Living rooms &amp; lounges</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleViewInAR("Lounge Sofa")}
                    className="px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors uppercase tracking-wide text-sm"
                  >
                    View in My Room (AR)
                  </button>
                  <Button text="Get a Quote" />
                </div>
              </div>

              <div className="h-[360px] md:h-[420px] xl:h-[460px]">
                <Product3DViewer />
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* AR Viewer Modal */}
      <ProductARViewer
        isOpen={arViewOpen}
        onClose={() => setArViewOpen(false)}
        productName={currentProduct}
      />
    </main>
  );
};

export default ProductsPage;


