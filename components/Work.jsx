"use client";

import React from "react";

import { RiCheckboxCircleFill, RiArrowRightUpLine } from "react-icons/ri";
import Pretitle from "./Pretitle";
import Image from "next/image";
import work1 from "../public/assets/img/work/restoration.jpg";
import work2 from "../public/assets/img/work/construction.jpg";
import work3 from "../public/assets/img/work/renovation.jpg";
import work4 from "../public/assets/img/work/consulting.jpg";

const workData = [
  {
    img: work1,
    name: "Restoration",
    description:
      "Bringing damaged or aging structures back to life. We restore buildings to their former glory while using modern techniques and materials to ensure longevity and safety.",
    href: "",
  },
  {
    img: work2,
    name: "Construction",
    description:
      "From foundations to finishing touches, we manage complete construction projects with a focus on safety, quality, and on‑time delivery.",
    href: "",
  },
  {
    img: work3,
    name: "Renovation",
    description:
      "Upgrading existing spaces to match modern standards, improve functionality, and increase property value without compromising structural integrity.",
    href: "",
  },
  {
    img: work4,
    name: "Consulting",
    description:
      "Expert guidance on planning, budgeting, and executing construction projects so you can make confident, informed decisions at every stage.",
    href: "",
  },
];

const Work = () => {
  return (
    <div className="pt-16 xl:pt-32" id="projects">
      <div className="container mx-auto">
        <div className="text-center max-w-[540px] mx-auto">
          <Pretitle text="Our Work" center />
          <h2 className="h2">Discover Our Projects</h2>
          <p>
            We deliver high–quality construction solutions, combining innovation,
            craftsmanship, and safety in every project we undertake.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-10">
        {workData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full h-[492px] flex-1 relative overflow-hidden group flex justify-center rounded-3xl"
            >
              <Image
                src={item.img}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                alt={item.name}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-x-6 bottom-8 text-white space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold capitalize">
                    {item.name}
                  </h3>
                  <button
                    type="button"
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/30 flex items-center justify-center group-hover:bg-white/20 transition-colors"
                    aria-label={`View more about ${item.name}`}
                  >
                    <RiArrowRightUpLine className="text-xl" />
                  </button>
                </div>
                <p className="text-sm text-white/80 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <RiCheckboxCircleFill className="text-emerald-400" />
                  <span>Quality–driven project delivery</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
