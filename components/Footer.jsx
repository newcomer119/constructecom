import React from "react";
import { RiFacebookFill, RiInstagramLine, RiLinkedinFill } from "react-icons/ri";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand & Intro */}
          <div className="max-w-[320px] space-y-4">
            <Logo />
            <p className="text-sm text-white/80">
              Crafting durable, functional, and beautiful spaces for homes and
              businesses. From foundations to final finishes, we build with
              precision and care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3 text-sm">
            <h4 className="font-semibold uppercase tracking-[0.18em] text-white/80 text-xs">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-accent transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-accent transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col gap-4 text-sm">
            <div>
              <h4 className="font-semibold uppercase tracking-[0.18em] text-white/80 text-xs mb-2">
                Contact
              </h4>
              <p className="text-white/80">info@constructecom.com</p>
              <p className="text-white/80">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="font-semibold uppercase tracking-[0.18em] text-white/80 text-xs mb-2">
                Follow Us
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
                >
                  <RiFacebookFill />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
                >
                  <RiInstagramLine />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
                >
                  <RiLinkedinFill />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/70">
          <p>
            © {new Date().getFullYear()} ConstructEcom. All rights reserved.
          </p>
          <p>Designed &amp; built with passion for better spaces.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;