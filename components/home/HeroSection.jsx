"use client";

import { motion, useScroll, useTransform, useReducedMotion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import LogoCard from "@/components/home/LogoCard";

export default function HeroSection() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: false, amount: 0.35 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Animazioni Hero Section
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.65], [1, 0.92, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.65], [0, -80]);
  const x = useTransform(scrollYProgress, [0, 0.65], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 0.65], [0, -3]);

  // Sfondo parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Hint scroll (fade-out con scroll)
  const hintOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);

  const sportEImpiantiUrl =
    "https://www.sporteimpianti.it/?aziende_mappa=mauro-concentri-edilizia-pubblica-impiantisca-sportiva";

  return (

    <section
      ref={ref}
      role="banner"
      aria-label="Sezione introduttiva Mauro Concentri Architetto"
      className="relative
                 isolate
                 lg:h-screen
                 fix-vh
                 flex
                 flex-col
                 items-center
                 justify-center
                 overflow-hidden
                 bg-white"
    >

      {/* SFONDO BASE (BIANCO) */}
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

      {/* Sfondo immagine con parallax */}
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
          src="/images/bgHero.png"
          alt="Sfondo architettonico"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover
                     object-center"
        />

        {/* SFUMATURA PER LEGGIBILITÀ */}
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

      {/* Badge Sport&Impianti */}
      <motion.a
        href={sportEImpiantiUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Apri la pubblicazione dello studio su Sport&Impianti (si apre in una nuova scheda)"
        className="absolute
                   z-20
                   left-4
                   sm:left-6
                   lg:left-8
                   top-24
                   sm:top-28
                   lg:top-20
                   text-left
                   select-none"
        initial={{ opacity: 0, y: -8 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 1.0 }}
        whileHover={reduceMotion ? undefined : { y: -1 }}
        style={{
          willChange: "transform, opacity",
          transform: "translateZ(0)",
        }}
      >

        <div
          className="flex
                     items-center
                     gap-2
                     text-[11px]
                     sm:text-xs
                     uppercase
                     tracking-[0.28em]
                     text-black/45"
        >

          <span>

            Pubblicato su

          </span>

          <span
            className="text-black/40"
            aria-hidden="true"
          >

            ↗

          </span>

        </div>

        <div
          className="mt-2
                     inline-flex
                     items-baseline
                     gap-2
                     text-black/80"
        >

          <span
            className="font-semibold
                       tracking-[0.22em]
                       [text-decoration:overline]
                       decoration-black/55
                       decoration-1px"
          >

            SPORT

          </span>

          <span
            className="font-medium
                       tracking-[0.06em]
                       text-black/55
                       -mx-1"
            aria-label="e"
          >

            &amp;

          </span>

          <span
            className="font-semibold
                       tracking-[0.22em]
                       [text-decoration:underline]
                       decoration-black/55
                       decoration-1px
                       underline-offset-4"
          >

            IMPIANTI

          </span>

        </div>

        <div
          className="mt-1
                     text-[12px]
                     sm:text-[13px]
                     tracking-wide
                     text-black/45
                     normal-case"
        >

          il portale dello sport, ambiente e lifestyle

        </div>

      </motion.a>

      {/* LogoCard (animazione guidata dallo scroll) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          opacity,
          scale,
          y,
          x,
          rotate,
          willChange: "transform, opacity",
          transform: "translateZ(0)",
        }}
        className="relative z-10"
      >

        <LogoCard />

      </motion.div>

      {/* Hint scroll (animazioni infinite solo se non reduceMotion) */}
      <motion.div
        className="absolute
                   z-10
                   bottom-[calc(env(safe-area-inset-bottom)+1.25rem)]
                   sm:bottom-8
                   lg:bottom-6
                   flex
                   flex-col
                   items-center
                   text-black/80"
        style={{ opacity: hintOpacity, willChange: "opacity" }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: reduceMotion ? 0 : 0.8, duration: 1.2, ease: "easeOut" }}
      >

        <motion.span
          className="text-sm
                     tracking-widest
                     font-light
                     uppercase"
          animate={
            reduceMotion
              ? undefined
              : { opacity: [1, 0.6, 1], y: [0, -4, 0] }
          }
          transition={
            reduceMotion
              ? undefined
              : { repeat: Infinity, duration: 2.8, ease: "easeInOut" }
          }
        >

          Scroll

        </motion.span>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className="mt-1"
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
          }
          aria-hidden="true"
        >

          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 9l6 6 6-6"
          />

        </motion.svg>

      </motion.div>

    </section>

  );

}
