import React from "react";
import Button from "./Button";
import Image from "next/image";
import Test1 from "../public/assets/img/testimonials/img.jpg";
import Pretitle from "./Pretitle";

const Testimonial = () => {
  return (
    <section className="py-12 sm:py-16 xl:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col xl:flex-row items-center gap-8 sm:gap-12 xl:gap-16 relative">
          {/* text */}
          <div className="flex-1 max-w-[520px] xl:pt-[40px] mb-8 sm:mb-12 xl:mb-0 w-full">
            <Pretitle text="Testimonials" center={false} className="xl:!text-left"/>
            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6">
              Built On Trust,
              <span className="text-amber-600"> Proven By Results</span>
            </h2>
            <p className="mb-6 sm:mb-10 max-w-[440px] text-sm sm:text-base text-slate-600 leading-relaxed">
              From home to commercial spaces our clients share their experiences
              of working with us. See how we have helped them bring their dreams
              to live with expert craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-0">
              <div className="w-full sm:w-auto">
                <Button text="Work With Us" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-semibold text-slate-900">
                  120+ projects
                </span>
                <span className="text-xs sm:text-sm text-slate-500">
                  Delivered on time and on budget
                </span>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 flex gap-6 sm:gap-8 text-xs sm:text-sm text-slate-500">
              <div>
                <p className="text-xl sm:text-2xl font-semibold text-slate-900">4.9</p>
                <p>Average client rating</p>
              </div>
              <div className="h-10 w-px bg-slate-300" />
              <div>
                <p className="text-xl sm:text-2xl font-semibold text-slate-900">10+</p>
                <p>Years of experience</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full xl:w-auto">
            <div className="relative w-full h-[300px] sm:h-[400px] xl:w-[520px] xl:h-[560px] mb-6 xl:mb-0">
              <Image
                src={Test1}
                alt="Testimonial Image"
                fill
                className="object-cover rounded-lg xl:rounded-none"
                quality={100}
              />
            </div>
            {/* testimonial card */}
            <div className="xl:absolute xl:bottom-10 xl:right-[80px] relative max-w-[360px] mx-auto xl:mx-0 bg-white shadow-xl rounded-2xl p-5 sm:p-6 lg:p-7">
              <div className="mb-3 sm:mb-4 flex items-center gap-2 text-amber-500">
                <span className="text-base sm:text-lg">★★★★★</span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Client Review
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 mb-4 leading-relaxed">
                "Working with ConstructEcom was seamless from start to finish.
                The team understood our vision and delivered a space that feels
                both functional and beautifully crafted."
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <div>
                  <p className="text-sm sm:text-base font-semibold text-slate-900">
                    Sarah Johnson
                  </p>
                  <p className="text-xs text-slate-500">
                    Home Renovation Client
                  </p>
                </div>
                <div className="text-left sm:text-right text-xs text-slate-400">
                  <p>Completed in 2024</p>
                  <p>Toronto, Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
