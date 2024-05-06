"use client";

import { useState } from "react";

const NavMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative lg:hidden w-fit">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 ">
          <span className="text-sm">Browse</span>
          <Triangle direction="down" />
        </button>

        {open && (
          <button
            onMouseLeave={() => setOpen(false)}
            className="absolute -bottom-[370px] inset-x-2/4 -translate-x-2/4 w-72 bg-black/90 border border-gray-300/30 border-t-[3px] border-t-white rounded-t-sm">
            <Triangle />
            <ul className="flex flex-col items-center  justify-center text-center gap-4 text-white">
              {NAVMENUS.map((menu, index) => {
                const isBold = index === 0 ? "font-semibold" : "text-gray-300";
                return (
                  <li
                    key={menu}
                    className={`text-sm ${isBold} w-full py-3 hover:bg-white/10 transition-all duration-300 cursor-pointer`}>
                    {menu}
                  </li>
                );
              })}
            </ul>
          </button>
        )}
      </section>
      <section className="hidden lg:block">
        <ul className=" flex items-center gap-4">
          {NAVMENUS.map((menu, index) => {
            const isBold = index === 0 ? "font-semibold" : "text-gray-300";
            return (
              <li key={menu} className={`text-sm ${isBold}`}>
                {menu}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default NavMenu;

type TriangleProps = {
  direction?: "up" | "down";
};

const Triangle = ({ direction = "up" }: TriangleProps) => {
  const borders =
    "border-l-transparent border-b-white border-r-transparent w-0 h-0";

  if (direction === "down") {
    return (
      <div
        className={`${borders} -top-4 border-l-[6px] border-b-[6px] border-r-[6px] rotate-180`}
      />
    );
  }

  return (
    <div className="absolute inset-x-2/4 -translate-x-2/4 -top-[11px] border-l-[8px] border-b-[8px] border-r-[8px]" />
  );
};

const NAVMENUS = [
  "Home",
  "TV Shows",
  "Movies",
  "New & Popular",
  "My List",
  "Browse by Languages",
];
