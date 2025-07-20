"use client";
import { useMenuStore } from "@/stores/menuStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
const NavItems = [
  { id: 1, text: "portfolio" },
  { id: 2, text: "about" },
  { id: 3, text: "contact" },
  { id: 4, text: "more" },
];

interface MenuProps {
  onExitComplete: () => void;
}
const Menu = ({ onExitComplete }: MenuProps) => {
  const container = useRef<HTMLDivElement>(null);
  const textsRef = useRef<HTMLHeadingElement[]>([]);
  const { isOpen } = useMenuStore();
  useGSAP(
    () => {
      gsap.to(textsRef.current, {
        y: 0,
        duration: 0.7,
        stagger: 0.05,
        ease: "power2.out",
      });
    },
    { scope: container }
  );

  useEffect(() => {
    if (!isOpen && textsRef.current.length) {
      gsap.to(textsRef.current, {
        y: "-100%",
        duration: 0.7,
        stagger: 0.05,
        ease: "power2.out",
        onComplete: onExitComplete,
      });
    }
  }, [isOpen, onExitComplete]);
  return (
    <div className="absolute top-0 left-0 right-0  h-screen bg-black z-40 overflow-hidden text-white">
      <div className="w-full h-full flex flex-col justify-center items-center">
        {NavItems.map((navItem, i) => {
          return (
            <div
              key={navItem.id}
              className="text-container  font-six-caps text-[calc(1rem+8vw)] leading-none my-1"
            >
              <h1
                ref={(ref) => {
                  textsRef.current[i] = ref!;
                }}
                className="select-none translate-y-[100%]"
              >
                {navItem.text}
              </h1>
            </div>
          );
        })}
        <p></p>
      </div>
    </div>
  );
};

export default Menu;
