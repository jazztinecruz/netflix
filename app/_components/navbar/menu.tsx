"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavMenu = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const renderMenuItems = () => {
    return NAVMENUS.map((menu) => {
      const isBold = pathname === menu.url ? "font-bold" : "font-medium";
      const disabled = menu.isDisabled
        ? "text-secondary cursor-not-allowed"
        : "";

      return (
        <Link key={menu.label} href={menu.url}>
          <li className={`text-sm ${isBold} ${disabled}`}>{menu.label}</li>
        </Link>
      );
    });
  };

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
            <ul className="flex flex-col items-center justify-center text-center gap-4 text-white">
              {renderMenuItems()}
            </ul>
          </button>
        )}
      </section>
      <section className="hidden lg:block">
        <ul className="flex items-center gap-4">{renderMenuItems()}</ul>
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
  { label: "Home", url: "/", isDisabled: false },
  { label: "New & Popular", url: "/popular", isDisabled: false },
  { label: "TV Shows", url: "/", isDisabled: true },
  { label: "My List", url: "/", isDisabled: true },
  { label: "Browse by Languages", url: "/", isDisabled: true },
];
