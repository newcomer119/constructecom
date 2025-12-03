"use client";
import React from "react";
import { useState } from "react";
import {
  PiWallFill,
  PiPaintRollerFill,
  PiBrickWallFill,
  PiUserGearFill,
  PiWrenchFill,
} from "react-icons/pi";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";
import Pretitle from "./Pretitle";
import Button from "./Button";

const serviceData = [
  {
    name: "construction",
    icon: <PiWallFill />,
    title: "Construction Services",
    description:
      "We build with precision and innovation, ensuring that every structure is strong,reliable and built to last. From foundations to finishing touches our expertise transform ideas into reality ",
    servicesList: [
      "Residential Builds",
      "Structural Design",
      "Site Prep",
      "Concrete Work",
      "Farming & Roofing",
      "Interior Finish",
    ],
    thumbs: [
      {
        url: "/assets/img/services/thumb-1.jpg",
        alt: "Construction Services",
        width: 140,
        height: 100,
      },
      {
        url: "/assets/img/services/thumb-2.jpg",
        alt: "Construction Services",
        width: 140,
        height: 100,
      },
    ],
  },
  {
    name: "renovation",
    icon: <PiPaintRollerFill />,
    title: "Renovation Services",
    description:
      "We build with precision and innovation, ensuring that every structure is strong,reliable and built to last. From foundations to finishing touches our expertise transform ideas into reality ",
    servicesList: [
      "Kitchen Remodel",
      "Basement Finish",
      "Flooring",
      "Energy Upgrades",
      "Painting",
      "Carpentry",
    ],
    thumbs: [
      {
        url: "/assets/img/services/thumb-3.jpg",
        alt: "Renovation Services",
        width: 140,
        height: 100,
      },
      {
        url: "/assets/img/services/thumb-4.jpg",
        alt: "Renovation Services",
        width: 140,
        height: 100,
      },
    ],
  },
  {
    name: "consulting",
    icon: <PiUserGearFill />,
    title: "Consulting Services",
    description:
      "Bringing damaged or aging structure back to life. We specialize in restoring buildings to their former glory while incorporating modern techniques and materials to ensure longevity and safety.",
    servicesList: [
      "Project Plans",
      "Costing",
      "Site Management",
      "Quality Control",
      "Safety Compliance",
      "Project Management",
    ],
    thumbs: [
      {
        url: "/assets/img/services/thumb-1.jpg",
        alt: "Consulting Services",
        width: 140,
        height: 100,
      },
      {
        url: "/assets/img/services/thumb-3.jpg",
        alt: "Consulting Services",
        width: 140,
        height: 100,
      },
    ],
  },
  {
    name: "restoration",
    icon: <PiWrenchFill />,
    title: "Restoration Services",
    description:
      "Bringing damaged or aging structure back to life. We specialize in restoring buildings to their former glory while incorporating modern techniques and materials to ensure longevity and safety.",
    servicesList: [
      "Historic Restore",
      "Water Damage",
      "Fire Repair",
      "Structural Fix",
      "Hold Removal",
      "Mold Remediation",
    ],
    thumbs: [
      {
        url: "/assets/img/services/thumb-5.jpg",
        alt: "Restoration Services",
        width: 140,
        height: 100,
      },
      {
        url: "/assets/img/services/thumb-6.jpg",
        alt: "Restoration Services",
        width: 140,
        height: 100,
      },
    ],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("construction");
  return (
    <section className="pt-12 sm:pt-16 xl:pt-32 px-4 sm:px-0" id="services">
      <div className="container mx-auto">
        <div className="max-w-[900px] mx-auto mb-8 sm:mb-12 xl:mb-16">
          <div className="text-center max-w-[540px] mx-auto">
            <Pretitle text="Our Services" center />
            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold mb-3">Solutions We Provide</h2>
            <p className="text-sm sm:text-base xl:text-base mx-auto px-4 sm:px-0">
              Offering tailored construction solutions, from planning to
              completion, with a focus on quality and innovation.
            </p>
          </div>
        </div>

        {/* tabs */}
        <Tabs
          defaultValue="construction"
          className="w-full"
          onValueChange={(value) => setActiveTab(value)}
        >
          <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 xl:gap-[30px]">
            {/* Tab List */}
            <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4 sm:gap-5 xl:gap-6 w-full xl:flex-1 rounded-none p-0 bg-transparent">
              {serviceData.map((item) => {
                return (
                  <TabsTrigger
                    key={item.name}
                    value={item.name}
                    className="rounded-lg md:rounded-none h-auto min-h-[70px] sm:min-h-[85px] md:h-[90px] xl:h-[100px] flex items-center relative shadow-custom p-3 sm:p-4 md:p-6 xl:p-8 outline-none pl-[70px] sm:pl-[85px] md:pl-[100px] xl:pl-[120px] pr-3 sm:pr-4 text-left md:text-center overflow-visible hover:shadow-lg transition-shadow"
                  >
                    <div
                      className={`w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] md:w-[90px] md:h-[90px] xl:w-[100px] xl:h-[100px] flex items-center justify-center absolute left-0 top-0 text-xl sm:text-2xl md:text-3xl rounded-l-lg md:rounded-none ${
                        activeTab === item.name
                          ? "bg-primary text-white"
                          : "bg-accent text-primary"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div className="uppercase font-primary text-[11px] sm:text-xs md:text-xs xl:text-sm font-semibold tracking-[.6px] ml-3 sm:ml-4 flex-1 min-w-0 wrap-break-word leading-tight">
                      {item.title}
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {/* Tabs Content  */}
            <div className="flex-1 bg-white shadow-custom rounded-lg md:rounded-none min-h-[300px] sm:min-h-[350px] md:min-h-[400px] xl:h-[490px] xl:flex-1 p-5 sm:p-6 md:p-8 xl:p-[30px]">
              {serviceData.map((item) => (
                <TabsContent
                  key={item.name}
                  value={item.name}
                  className="h-full mt-0"
                >
                  <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 xl:gap-10 h-full">
                    {/* Images Section - Hidden on mobile and tablet, visible on desktop */}
                    <div className="hidden lg:flex flex-col gap-4 shrink-0 justify-start items-start w-auto">
                      {item.thumbs.map((thumb, index) => (
                        <div
                          key={index}
                          className="relative w-[140px] h-[140px] xl:w-[150px] xl:h-[150px] rounded-lg overflow-hidden shadow-md"
                        >
                          <Image
                            src={thumb.url}
                            fill
                            alt={thumb.alt || item.title}
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Service List - Hidden on mobile and tablet, visible on desktop */}
                    <div className="hidden lg:flex flex-1 flex-col">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 xl:gap-4">
                        {item.servicesList.map((service, index) => (
                          <li key={index} className="flex items-start gap-2 sm:gap-3">
                            <div className="w-[6px] h-[6px] rounded-full bg-primary shrink-0 mt-2" />
                            <span className="text-sm sm:text-base xl:text-base font-medium text-primary capitalize leading-relaxed">
                              {service}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
