import React from "react";
import Pretitle from "./Pretitle";
import Button from "./Button";
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiTimeLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section className="py-20 xl:py-32 bg-slate-50" id="contact">
      <div className="container mx-auto">
        {/* Header text */}
        <div className="text-center max-w-[540px] mx-auto mb-12 xl:mb-16">
          <Pretitle text="Contact Us" center />
          <h2 className="h2 mb-3">Let&apos;s Build Something Great Together</h2>
          <p className="text-sm xl:text-base text-secondary mx-auto">
            Share your project details, timeline, or questions and our team
            will get back to you with tailored solutions for your space.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 xl:gap-16">
          {/* Form */}
          <div className="bg-white shadow-custom rounded-xl p-6 md:p-8">
            <h3 className="h3 mb-6">Tell Us About Your Project</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="h-11 px-3 border border-slate-200 rounded-md text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="h-11 px-3 border border-slate-200 rounded-md text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="h-11 px-3 border border-slate-200 rounded-md text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700">
                    Project Type
                  </label>
                  <select
                    className="h-11 px-3 border border-slate-200 rounded-md text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white transition"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    <option value="construction">New Construction</option>
                    <option value="renovation">Renovation</option>
                    <option value="restoration">Restoration</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">
                  Project Location
                </label>
                <input
                  type="text"
                  placeholder="City, Country"
                  className="h-11 px-3 border border-slate-200 rounded-md text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Share your vision, scope, timeline, and budget..."
                  className="px-3 py-2 border border-slate-200 rounded-md text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                <Button text="Send Message" />
                <p className="text-xs text-slate-500 max-w-[260px]">
                  We aim to respond within 1–2 business days with the next steps
                  for your project.
                </p>
              </div>
            </form>
          </div>

          {/* Contact info / details */}
          <div className="flex flex-col gap-6">
            <div className="bg-primary text-white rounded-xl p-6 md:p-7 space-y-5">
              <h3 className="h3 mb-2">Contact Details</h3>
              <p className="text-sm text-white/80 max-w-[340px]">
                Prefer speaking directly? Reach out using the details below and
                our team will be happy to assist you.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-[2px]">
                    <RiMailLine className="text-xl" />
                  </span>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-white/80">info@constructecom.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[2px]">
                    <RiPhoneLine className="text-xl" />
                  </span>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-white/80">+1 (555) 123-4567</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[2px]">
                    <RiMapPinLine className="text-xl" />
                  </span>
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-white/80">
                      123 Builder&apos;s Avenue, Toronto, Canada
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[2px]">
                    <RiTimeLine className="text-xl" />
                  </span>
                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p className="text-white/80">Mon – Sat, 9:00 AM – 6:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-custom rounded-xl p-5 md:p-6">
              <h4 className="h4 mb-3">Why Clients Trust Us</h4>
              <p className="text-sm text-secondary mb-4">
                Transparent communication, on-time delivery, and craftsmanship
                that stands the test of time—every project is managed with care
                and precision.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-slate-600">
                <span className="px-3 py-1 rounded-full bg-slate-100">
                  Free initial consultation
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100">
                  Detailed project estimates
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100">
                  Dedicated project manager
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
