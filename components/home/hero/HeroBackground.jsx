// /components/home/hero/HeroBackground.jsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroBackground({ bgY, bgScale }) {
  return (

    <motion.div
      className="absolute
                 inset-0
                 z-0
                 pointer-events-none"
      style={{
        y: bgY,
        scale: bgScale,
        willChange: "transform",
        transform: "translateZ(0)",
      }}
      aria-hidden="true"
    >

      <Image
        src="/backgrounds/bgHeroSection.webp"
        alt="Sfondo architettonico"
        fill
        priority
        sizes="100vw"
        quality={90}
        className="object-cover
                   object-center"
      />

      <div
        className="absolute
                   inset-0
                   bg-linear-to-br
                   from-white/15
                   via-transparent
                   to-black/25"
        aria-hidden="true"
      />

    </motion.div>

  );

}
