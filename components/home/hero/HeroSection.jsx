// /components/home/hero/HeroSection.jsx

"use client";

import { motion, useInView, useMotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import HeroBackground from "@/components/home/hero/HeroBackground";
import HeroScrollHint from "@/components/home/hero/HeroScrollHint";
import HeroSportBadge from "@/components/home/hero/HeroSportBadge";
import LogoCard from "@/components/home/hero/LogoCard";

export default function HeroSection() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const inView = useInView(ref, { once: true, amount: 0.35 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // MotionValues (parallax/scroll)
  const opacityT = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const scaleT = useTransform(scrollYProgress, [0, 0.25, 0.65], [1, 0.92, 0.8]);
  const yT = useTransform(scrollYProgress, [0, 0.65], [0, -80]);
  const xT = useTransform(scrollYProgress, [0, 0.65], [0, -100]);
  const rotateT = useTransform(scrollYProgress, [0, 0.65], [0, -3]);

  const bgYT = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const bgScaleT = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const hintOpacityT = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);

  // MotionValues (fallback reduced motion)
  const opacityStatic = useMotionValue(1);
  const scaleStatic = useMotionValue(1);
  const yStatic = useMotionValue(0);
  const xStatic = useMotionValue(0);
  const rotateStatic = useMotionValue(0);

  const bgYStatic = useMotionValue("0%");
  const bgScaleStatic = useMotionValue(1);

  const hintOpacityStatic = useMotionValue(1);

  // MotionValue => no mismatch
  const opacity = reduceMotion ? opacityStatic : opacityT;
  const scale = reduceMotion ? scaleStatic : scaleT;
  const y = reduceMotion ? yStatic : yT;
  const x = reduceMotion ? xStatic : xT;
  const rotate = reduceMotion ? rotateStatic : rotateT;

  const bgY = reduceMotion ? bgYStatic : bgYT;
  const bgScale = reduceMotion ? bgScaleStatic : bgScaleT;

  const hintOpacity = reduceMotion ? hintOpacityStatic : hintOpacityT;

  const sportEImpiantiUrl = "https://www.sporteimpianti.it/?aziende_mappa=mauro-concentri-edilizia-pubblica-impiantisca-sportiva";

  return (

    <section
      ref={ref}
      role="banner"
      aria-label="Sezione introduttiva Mauro Concentri Architetto"
      className="relative
                 isolate
                 w-screen
                 left-1/2
                 -translate-x-1/2
                 lg:h-screen
                 fix-vh
                 flex
                 flex-col
                 items-center
                 justify-center
                 overflow-hidden
                 bg-white"
    >

      {/* SFONDO BASE */}
      <div
        className="absolute
                   inset-0
                   z-0
                   pointer-events-none
                   bg-linear-to-b
                   from-white
                   via-neutral-50
                   to-neutral-200"
        aria-hidden="true"
      />

      {/* Sfondo parallax */}
      <HeroBackground
        bgY={bgY}
        bgScale={bgScale}
      />

      {/* Badge Sport&Impianti */}
      <HeroSportBadge
        href={sportEImpiantiUrl}
        inView={inView}
        reduceMotion={reduceMotion}
      />

      <motion.div
        className="relative
                   z-10"
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >

        <motion.div
          initial={false}
          style={{
            opacity,
            scale,
            y,
            x,
            rotate,
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
        >

          <LogoCard />

        </motion.div>

      </motion.div>

      {/* Hint scroll */}
      <HeroScrollHint
        hintOpacity={hintOpacity}
        inView={inView}
        reduceMotion={reduceMotion}
      />

    </section>

  );

}
