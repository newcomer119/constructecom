import React from "react";
import Button from "./Button";
import Image from "next/image";
import Test1 from "../public/assets/img/testimonials/img.jpg";
import Pretitle from "./Pretitle";

const Testimonial = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-16 relative">
          {/* text */}
          <div className="flex-1 max-w-[520px] xl:pt-[40px] mb-12 xl:mb-0">
            <Pretitle text="Testimonials" center/>
            <h2 className="h2 mb-6">
              Built On Trust,
              <span className="text-amber-600"> Proven By Results</span>
            </h2>
            <p className="mb-10 max-w-[440px] text-slate-600">
              From home to commercial spaces our clients share their experiences
              of working with us. See how we have helped them bring their dreams
              to live with expert craftsmanship.
            </p>
            <div className="flex items-center gap-6">
              <Button text="Work With Us" />
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-slate-900">
                  120+ projects
                </span>
                <span className="text-sm text-slate-500">
                  Delivered on time and on budget
                </span>
              </div>
            </div>
            <div className="mt-8 flex gap-8 text-sm text-slate-500">
              <div>
                <p className="text-2xl font-semibold text-slate-900">4.9</p>
                <p>Average client rating</p>
              </div>
              <div className="h-10 w-px bg-slate-300" />
              <div>
                <p className="text-2xl font-semibold text-slate-900">10+</p>
                <p>Years of experience</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative hidden xl:flex xl:w-[520px] xl:h-[560px]">
              <Image
                src={Test1}
                alt="Testimonial Image"
                fill
                className="object-cover"
                quality={100}
              />
            </div>
            {/* testimonial card */}
            <div className="xl:absolute xl:bottom-10 xl:right-[80px] relative max-w-[360px] bg-white shadow-xl rounded-2xl p-6 sm:p-7">
              <div className="mb-4 flex items-center gap-2 text-amber-500">
                <span className="text-lg">★★★★★</span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Client Review
                </span>
              </div>
              <p className="text-slate-700 mb-4">
                “Working with ConstructEcom was seamless from start to finish.
                The team understood our vision and delivered a space that feels
                both functional and beautifully crafted.”
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900">
                    Sarah Johnson
                  </p>
                  <p className="text-xs text-slate-500">
                    Home Renovation Client
                  </p>
                </div>
                <div className="text-right text-xs text-slate-400">
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
