"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
const navItems = [
  { title: "Home", href: "#home" },
  { title: "Projects", href: "#projects" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];
export const Header = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <div className="flex items-center justify-center fixed w-full top-3 z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 bg-white/10 rounded-full backdrop-blur">
        {navItems.map((item) => (
          <div
            key={item.title}
            className={twMerge(
              "nav-item",
              activeNav == item.href &&
                "bg-white font-bold text-gray-900 md:hover:bg-white/70 md:hover:text-gray-900"
            )}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setActiveNav(item.href);
              const anchor = document.querySelector(item.href);
              if (anchor) {
                anchor.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {item.title}
          </div>
        ))}
      </nav>
    </div>
  );
};
