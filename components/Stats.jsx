'use client'
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import CountUp from "react-countup";

const statsData = [
  {
    endCountNum: 99,
    endCountText: "%",
    title: "Satisfaction Rate",
    description: "Satisfied clients who have worked with us",
  },
  {
    endCountNum: 800,
    endCountText: "+",
    text: "Successful Projects",
  },
  {
    endCountNum: 32,
    endCountText: "k",
    text: "Happy Clients",
  },
  {
    endCountNum: 26,
    endCountText: "+",
    text: "Years of Experience",
  },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { treshold: 0.5 });

  return (
    <div ref={ref} className="mt-12 sm:mt-16 xl:mt-32 bg-primary py-8 sm:py-10 w-full px-4 sm:px-0">
      <div className="container mx-auto h-full">
        <div className="text-white grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-6 sm:gap-8 lg:gap-12 text-center">
          {statsData.map((item, index) => {
            return (
              <div className="w-full" key={index}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2">
                  {inView && (
                    <CountUp
                      start={0}
                      end={item.endCountNum}
                      delay={0.5}
                      duration={3}
                    />
                  )}
                  <span>{item.endCountText}</span>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-white/80">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
