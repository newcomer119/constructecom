import React from "react";
import Pretitle from "./Pretitle";
import Image from "next/image";
import Signature from "../public/assets/img/about/signature.svg";
import Button from "./Button";
import img from "../public/assets/img/about/img.jpg";

const About = () => {
  return (
    <section className="py-20 xl:py-32" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {/* text  */}
          <div className="flex-1">
            <div className="max-w-[540px]">
              {/* Pretitle  */}
              <div>
                <Pretitle text="About Us" center={false} />
                <h2 className="h2 mb-6">
                  Focused On Excellence in Every Project
                </h2>
                <p className="mb-11 text-secondary">
                  Our unwavering commitment to excellence drives every project
                  we undertake. From concept to completion, we meticulously
                  craft solutions that embody quality, precision, and
                  innovation.
                </p>
                <div className="w-max flex flex-col text-right mb-10">
                  <Image
                    src={Signature}
                    alt="Company signature"
                    width={154}
                    height={38}
                  />
                  <p className="text-secondary mt-2">Company CEO</p>
                </div>
                {/* btn */}
                <Button text="Contact Us" />
              </div>
            </div>
          </div>
          {/* img */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-[444px] h-[400px] xl:h-[493px] relative">
              {/* bg accent box */}
              <div className="hidden xl:block w-[444px] h-[493px] bg-accent absolute -top-4 -left-4 -z-10"></div>
              {/* image */}
              <div className="relative w-full h-full z-10">
                <Image
                  src={img}
                  alt="Construction team working on a project"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
