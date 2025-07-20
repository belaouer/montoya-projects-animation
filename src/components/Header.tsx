"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useMenuStore } from "@/stores/menuStore";

const Header = () => {
  const { isOpen, toggleMenu } = useMenuStore();
  const topLine = useRef<SVGPathElement>(null);
  const bottomLine = useRef<SVGPathElement>(null);

  const GAP = 8; // espace vertical entre les deux traits (px)

  useEffect(() => {
    if (!topLine.current || !bottomLine.current) return;

    if (isOpen) {
      gsap.to(topLine.current, {
        duration: 0.3,
        rotation: 45,
        transformOrigin: "center center",
        y: GAP / 2,
        ease: "power2.inOut",
      });

      gsap.to(bottomLine.current, {
        duration: 0.3,
        rotation: -45,
        transformOrigin: "center center",
        y: -GAP / 2,
        ease: "power2.inOut",
      });
    } else {
      gsap.to([topLine.current, bottomLine.current], {
        duration: 0.3,
        rotation: 0,
        y: 0,
        ease: "power2.inOut",
      });
    }
  }, [isOpen, GAP]);

  return (
    <header className="fixed top-0 left-0 right-0 px-16 py-8 flex justify-between items-center z-50 font-poppins">
      <Image
        src="http://clapat.ro/themes/montoya/images/logo-white.png"
        height={50}
        width={60}
        alt="logo"
      />

      <button
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        className="p-2 cursor-pointer flex justify-center items-center space-x-8"
      >
        <span className="inline-block text-sm">Menu</span>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            ref={topLine}
            d={`M3 ${12 - GAP / 2} H21`}
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            ref={bottomLine}
            d={`M3 ${12 + GAP / 2} H21`}
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </header>
  );
};
export default Header;
