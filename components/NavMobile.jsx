"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "./Logo";
import Socials from "./Socials";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

const links = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Services", path: "services" },
  { name: "Projects", path: "projects" },
  { name: "Contact", path: "contact" },
];

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="text-white flex items-center justify-center text-3xl"
        onClick={() => setIsOpen(true)}
      >
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent className="bg-primary border-none text-white flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-center">
            <Logo />
          </SheetTitle>
          <SheetDescription className="sr-only">
            Navigation Menu
          </SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col gap-4 mt-8 items-center">
          {links.map((link, index) => (
            <SheetClose key={index} asChild>
              <ScrollLink
                to={link.path}
                smooth
                spy
                onClick={handleLinkClick}
                className="text-white hover:text-accent transition-colors cursor-pointer text-lg font-medium py-2 text-center"
                activeClass="text-accent"
              >
                {link.name}
              </ScrollLink>
            </SheetClose>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-white/20">
          <div className="flex flex-col items-center gap-4 pt-6">
            <Socials
              containerStyles="flex items-center justify-center gap-4"
              iconStyles="text-white hover:text-accent transition-colors text-2xl"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
