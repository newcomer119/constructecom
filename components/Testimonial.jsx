import React from "react";
import Button from "./Button";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative">
          {/* text */}
          <div className="flex-1 max-w-[484px] xl:pt-[54px] mb-12 xl:mb-0">
            <h2 className="h2 mb-6">Built On Trust,Proven By Results</h2>
            <p className="mb-10 max-w-[420px]">
              From home to commercial spaces our clients share their experiences
              of working with us. See how we have helped them bring their dreams
              to live with expert craftsmanship.
            </p>
            <Button text="Work With Us" />
          </div>
          <div className="flex-1">
            <div>
              <Image/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
