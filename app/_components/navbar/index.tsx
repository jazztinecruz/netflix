"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import NavMenu from "./menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`px-6 lg:px-10 grid grid-cols-[auto,1fr,auto] gap-4 lg:gap-6 items-center sticky top-0 z-50 ${
        isScrolled ? "bg-black" : "bg-gradient-to-b from-black to-transparent"
      }`}>
      <div className="w-24 h-16 lg:w-28 lg:h-20 relative">
        <Image
          src="/logo/netflix.png"
          alt="Netflix"
          fill
          className="object-center"
        />
      </div>
      <NavMenu />
    </nav>
  );
};

export default Navbar;
