import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="min-h-[60vh] sm:h-[70vh] bg-hero bg-no-repeat bg-cover bg-center relative px-4 sm:px-0">
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10"></div>
      <div className="container mx-auto h-full flex items-center py-12 sm:py-0">
        <div className="z-20 text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start max-w-[600px] px-4 sm:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="text-accent">Building</span> robust lasting
            solutions
          </h1>
          <p className="text-sm sm:text-base mb-6 sm:mb-9 text-white/90 leading-relaxed">
            From Concept to completion, we ensure every details is optimized for
            strength and endurance, creating solutions that inspire confidence
            and stand firm for years
          </p>
          {/* btn  */}
          <div className="w-full sm:w-auto">
            <Button text="See Our Work" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
