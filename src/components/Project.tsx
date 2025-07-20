"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface ProjectProps {
  id: number;
  title: string;
  year: number;
  category: string;
  projectsRef: React.RefObject<HTMLDivElement[]>;
  index: number;
  src: string;
}
const Project = ({
  id,
  title,
  year,
  category,
  projectsRef,
  index,
  src,
}: ProjectProps) => {
  useGSAP(
    () => {
      projectsRef.current.slice(0, -1).forEach((project) => {
        gsap.to(project, {
          scale: 0.7,
          filter: "blur(15px)",
          scrollTrigger: {
            trigger: project,
            start: "top top",
            // end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: projectsRef.current[index] }
  );
  return (
    <div
      ref={(ref) => {
        projectsRef.current[index] = ref!;
      }}
      className="sticky top-24 w-full h-[80vh] 2xl:h-[85vh] mb-16 rounded-2xl overflow-hidden "
    >
      <div className="relative w-full h-full flex justify-center items-center">
        <Image src={src} fill style={{ objectFit: "cover" }} alt="projet" />
        <div className="absolute w-[85%] h-[80%] m-auto flex items-end">
          <div className="flex justify-between w-full h-full items-end">
            <div className="font-poppins text-[14px] px-[1rem] py-[2px] rounded-full bg-white/20">
              {year}
            </div>
            <div className="font-six-caps text-[calc(1rem+8vw)] leading-none  font-medium uppercase">
              {title}
            </div>
            <div className="font-poppins text-[14px] px-[1rem] py-[2px] rounded-full bg-white/20 uppercase">
              {category}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
