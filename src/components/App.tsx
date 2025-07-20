"use client";
import React, { useEffect, useRef } from "react";
import Project from "./Project";
import Lenis from "lenis";
import Hero from "./Hero";

const projects = [
  {
    id: 1,
    src: "http://clapat.ro/themes/montoya/images/01hero.jpg",
    title: "white liners",
    year: 2024,
    category: "photography",
  },
  {
    id: 2,
    src: "http://clapat.ro/themes/montoya/images/02hero.jpg",
    title: "green audio",
    year: 2024,
    category: "photography",
  },
  {
    id: 3,
    src: "http://clapat.ro/themes/montoya/images/03hero.jpg",
    title: "nanotech",
    year: 2024,
    category: "branding",
  },
  {
    id: 4,
    src: "	http://clapat.ro/themes/montoya/images/04hero.jpg",
    title: "cool dude",
    year: 2024,
    category: "video production",
  },
  {
    id: 5,
    src: "http://clapat.ro/themes/montoya/images/05hero.jpg",
    title: "sphere digital",
    year: 2024,
    category: "graphic design",
  },
];

const App = () => {
  const projectsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="relative max-w-screen min-h-[500vh] bg-black text-white lg:px-8">
      <Hero />
      {projects.map((project, i) => {
        return (
          <Project
            key={project.id}
            {...project}
            projectsRef={projectsRef}
            index={i}
          />
        );
      })}
      <div className="w-full h-screen" />
    </div>
  );
};

export default App;
