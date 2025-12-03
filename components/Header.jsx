"use client";

import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/navigation";
import { RiArrowRightUpLine } from "react-icons/ri";
import Logo from "./Logo";
import NavMobile from "./NavMobile";

const links = [
  { name: "Home", path: "home", type: "scroll" },
  { name: "About", path: "about", type: "scroll" },
  { name: "Services", path: "services", type: "scroll" },
  { name: "Products", path: "/products", type: "route" },
  { name: "Projects", path: "projects", type: "scroll" },
  { name: "Contact", path: "contact", type: "scroll" },
];

const Header = () => {
  const router = useRouter();

  const handleNavClick = (link) => {
    if (link.type === "route") {
      router.push(link.path);
    }
  };

  return (
    <header className="bg-primary py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo  */}
          <Logo />

          {/* nav  */}
          <nav className="hidden xl:flex items-center gap-12">
            <ul className="flex">
              {links.map((link, index) => (
                <li
                  key={link.name}
                  className="text-white text-sm uppercase font-primary font-medium tracking-[1.2px] after:content-['/'] after:mx-4 last:after:content-none after:text-accent"
                >
                  {link.type === "scroll" ? (
                    <ScrollLink
                      to={link.path}
                      smooth
                      spy
                      className="cursor-pointer"
                      activeClass="text-accent"
                    >
                      {link.name}
                    </ScrollLink>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleNavClick(link)}
                      className="cursor-pointer"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
            {/* Button  */}
            <button className="w-[200px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px] bg-white group">
              <div className="flex-1 text-center text-primary text-sm uppercase">
                Get A Quote
              </div>
              <div className="w-11 h-11 bg-primary flex items-center justify-center">
                <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200" />
              </div>
            </button>
          </nav>

          {/* mobile nav  */}
          <div className="xl:hidden">
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
