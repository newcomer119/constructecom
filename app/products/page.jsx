import React from "react";
import Pretitle from "@/components/Pretitle";
import Button from "@/components/Button";

const productCategories = [
  {
    id: "tiles",
    name: "Tiles",
    description:
      "Durable, stylish tiles for floors and walls, perfect for bathrooms, kitchens, and living spaces.",
    products: [
      {
        name: "Urban Stone Grey",
        subtitle: "60x60 cm Porcelain Floor Tile",
        badge: "Best Seller",
      },
      {
        name: "Marble Luxe White",
        subtitle: "30x60 cm Wall & Floor Tile",
        badge: "Premium",
      },
    ],
  },
  {
    id: "wooden-flooring",
    name: "Wooden Flooring",
    description:
      "Warm, natural wooden flooring that adds character and comfort to any room.",
    products: [
      {
        name: "Oak Natural Plank",
        subtitle: "Engineered Wood, Matte Finish",
        badge: "New",
      },
      {
        name: "Walnut Deep Brown",
        subtitle: "Laminate, High Durability",
        badge: "Popular",
      },
    ],
  },
  {
    id: "vanities",
    name: "Vanities",
    description:
      "Modern vanities combining smart storage with elegant design for bathrooms of any size.",
    products: [
      {
        name: "Siena Wall Vanity",
        subtitle: "900 mm, Matte White with Oak",
        badge: "Featured",
      },
      {
        name: "Linea Compact",
        subtitle: "600 mm, Ideal for small bathrooms",
        badge: "Space Saver",
      },
    ],
  },
  {
    id: "mirrors",
    name: "Mirrors",
    description:
      "LED and framed mirrors that enhance light and add a refined touch to your space.",
    products: [
      {
        name: "Aura LED Mirror",
        subtitle: "Backlit, Anti-fog, 800 mm",
        badge: "LED",
      },
      {
        name: "Frame Classic",
        subtitle: "Bronze metal frame, 700x900 mm",
        badge: "Classic",
      },
    ],
  },
  {
    id: "faucets",
    name: "Faucets",
    description:
      "Precision-engineered faucets with smooth flow, long life, and a premium finish.",
    products: [
      {
        name: "Arc Mono Basin Mixer",
        subtitle: "Chrome, Single Lever",
        badge: "Best Seller",
      },
      {
        name: "Rainfall Shower Set",
        subtitle: "Wall mounted, Brushed Nickel",
        badge: "Premium",
      },
    ],
  },
];

const ProductsPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <section className="pt-24 xl:pt-28">
        <div className="container mx-auto">
          <div className="max-w-[620px] mx-auto text-center mb-12 xl:mb-16">
            <Pretitle text="Products" center />
            <h1 className="h2 mb-3">Explore Our Key Categories</h1>
            <p className="text-sm xl:text-base text-secondary">
              Browse our core product ranges that bring your spaces to life.{" "}
              From tiles and wooden flooring to vanities, mirrors, and faucets,
              each category is curated for design and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10">
            {productCategories.map((category) => (
              <div
                key={category.id}
                id={category.id}
                className="bg-white shadow-custom rounded-xl p-6 md:p-7 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="h3 mb-1">{category.name}</h2>
                    <p className="text-sm text-secondary max-w-[420px]">
                      {category.description}
                    </p>
                  </div>
                  <span className="hidden md:inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold uppercase tracking-[0.18em]">
                    Key Category
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3 mt-2">
                  {category.products.map((product) => (
                    <div
                      key={product.name}
                      className="border border-slate-100 rounded-lg px-4 py-3 flex items-start justify-between gap-4"
                    >
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {product.name}
                        </p>
                        <p className="text-xs text-slate-500">
                          {product.subtitle}
                        </p>
                      </div>
                      {product.badge && (
                        <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[11px] font-medium text-slate-700">
                          {product.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Button text="View in Room (Coming Soon)" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;


