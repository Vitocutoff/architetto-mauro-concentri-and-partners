"use client";

import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

import WorkBackground from "@/components/home/work/WorkBackground";
import WorkCard from "@/components/home/work/WorkCard";

export default function WorkInProgressSection() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  return (

    <section
      ref={sectionRef}
      role="region"
      aria-label="Sezione Work in Progress"
      className="relative
                 w-screen
                 left-1/2
                 -translate-x-1/2
                 flex
                 items-center
                 overflow-hidden
                 py-20
                 lg:py-32"
    >

      <WorkBackground />

      {/* Wrapper */}
      <div
        className="relative
                   z-10
                   mx-auto
                   w-full
                   max-w-7xl
                   px-4
                   sm:px-6
                   lg:px-12"
      >

        <WorkCard
          reduceMotion={reduceMotion}
        />

      </div>

    </section>

  );

}
