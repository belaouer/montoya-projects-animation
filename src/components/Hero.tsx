"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const TITLE: string = "MONTOYA";
const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  const handleMouseOver = (i: number) => {
    gsap.to(lettersRef.current[i], {
      scaleY: 1.3,
      duration: 0.2,
      ease: "power4.out",
    });
  };

  const handleMouseLeave = (i: number) => {
    gsap.to(lettersRef.current[i], {
      scaleY: 1,
      duration: 0.2,
      ease: "power4.out",
    });
  };

  useGSAP(() => {}, { scope: container });
  return (
    <div
      ref={container}
      className="w-full h-screen max-h-screen flex flex-col justify-between p-4  lg:p-14"
    >
      <div className="flex flex-col justify-center items-center text-center h-full w-full  ">
        <h1 className="font-six-caps text-[calc(1rem+22.15vw)] lg:text-[calc(1rem+24.15vw)] font-medium leading-none cursor-pointer  select-none">
          {TITLE.split("").map((letter, i) => {
            return (
              <span
                ref={(ref) => {
                  lettersRef.current[i] = ref!;
                }}
                key={i}
                className="inline-block origin-bottom"
                onMouseOver={() => handleMouseOver(i)}
                onMouseLeave={() => handleMouseLeave(i)}
              >
                {letter}
              </span>
            );
          })}
        </h1>
        <div className="text-[16px] lg:text-[18px] font-poppins  lg:w-1/2 mx-auto text-white/50 mt-8">
          <span className="lg:block">
            WE ARE A CREATIVE STUDIO, SPECIALIZED IN STRATEGY, BRANDING
          </span>
          <span className="lg:block">
            {" "}
            DESIGN, AND DEVELOPMENT. OUR WORK IS ALWAYS AT THE INTERSECTION{" "}
          </span>
          <span className="lg:block">
            {" "}
            OF DESIGN AND TECHNOLOGY.
          </span>
        </div>
      </div>
      <div className="flex justify-between text-sm">
        <h4>Scroll to Explore</h4>
        <h4>Featured Projects</h4>
      </div>
    </div>
  );
};

export default Hero;
