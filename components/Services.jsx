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
    <section className="pt-16 xl:pt-32" id="services">
      <div className="container mx-auto">
        <div className="max-w-[900px] mx-auto mb-12 xl:mb-16">
          <div className="text-center max-w-[540px] mx-auto">
            <Pretitle text="Our Services" center />
            <h2 className="h2 mb-3">Solutions We Provide</h2>
            <p className="text-sm xl:text-base mx-auto">
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
          <div className="flex flex-col xl:flex-row gap-6 xl:gap-[30px]">
            {/* Tab List */}
            <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4 xl:gap-6 w-full xl:flex-1 rounded-none p-4 xl:p-6 bg-transparent">
              {serviceData.map((item) => {
                return (
                  <TabsTrigger
                    key={item.name}
                    value={item.name}
                    className="rounded-none h-[100px] flex items-center relative shadow-custom p-6 xl:p-8 outline-none pl-[120px] pr-4 text-center overflow-visible"
                  >
                    <div
                      className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 top-0 text-3xl ${
                        activeTab === item.name
                          ? "bg-primary text-white"
                          : "bg-accent text-primary"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div className="uppercase font-primary text-xs xl:text-sm font-semibold tracking-[.6px] ml-4 flex-1 min-w-0 break-words">
                      {item.title}
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {/* Tabs Content  */}
            <div className="flex-1 bg-white shadow-custom min-h-[490px] xl:h-[490px] xl:flex-1 p-6 xl:p-[30px]">
              {serviceData.map((item) => (
                <TabsContent
                  key={item.name}
                  value={item.name}
                  className="h-full mt-0"
                >
                  <div className="flex flex-col lg:flex-row gap-6 xl:gap-10 h-full">
                    {/* Images Section */}
                    <div className="flex flex-row lg:flex-col gap-3 xl:gap-4 shrink-0">
                      {item.thumbs.map((thumb, index) => (
                        <div
                          key={index}
                          className="relative w-[110px] h-[110px] xl:w-[150px] xl:h-[150px] rounded-md overflow-hidden"
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

                    {/* Text Content Section */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="h3 mb-4 xl:mb-6 capitalize">
                        {item.title}
                      </h3>
                      <p className="text-sm xl:text-base text-muted-foreground mb-6 xl:mb-8 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Service List */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 xl:gap-4 mb-6 xl:mb-8">
                        {item.servicesList.map((service, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-[6px] h-[6px] rounded-full bg-primary shrink-0" />
                            <span className="text-sm xl:text-base font-medium text-primary capitalize">
                              {service}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Button */}
                      <div className="mt-auto">
                        <Button text="Read More" />
                      </div>
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
