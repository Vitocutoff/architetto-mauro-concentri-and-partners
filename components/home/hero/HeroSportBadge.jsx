"use client";

import { motion } from "framer-motion";

export default function HeroSportBadge({ href, inView, reduceMotion }) {
  return (

    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Apri la pubblicazione dello studio su Sport&Impianti (si apre in una nuova scheda)"
      className="absolute
                 z-20
                 top-24
                 sm:top-28
                 lg:top-20
                 left-1/2
                 -translate-x-1/2
                 text-center
                 select-none
                 lg:left-8
                 lg:translate-x-0
                 lg:text-left"
      initial={{ opacity: 0, y: -8 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: reduceMotion ? 0 : 1.0,
      }}
      whileHover={reduceMotion ? undefined : { y: -1 }}
      style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
    >

      <div
        className="flex
                   items-center
                   justify-center
                   lg:justify-start
                   gap-2
                   text-[11px]
                   sm:text-xs
                   uppercase
                   tracking-[0.28em]
                   text-black/70"
      >

        <span>

          Pubblicato su

        </span>

        <span
          className="text-black/45"
          aria-hidden="true"
        >

          ↗

        </span>

      </div>

      <div
        className="mt-2
                   inline-flex
                   items-baseline
                   justify-center
                   lg:justify-start
                   gap-2
                   text-lime-700"
      >

        <span
          className="font-semibold
                     tracking-[0.22em]
                     [text-decoration:overline]
                     decoration-lime-800
                     decoration-1px"
        >

          SPORT

        </span>

        <span
          className="font-medium
                     tracking-[0.06em]
                     text-xl
                     text-lime-700
                     -mx-1"
          aria-label="e"
        >

          &amp;

        </span>

        <span
          className="font-semibold
                     tracking-[0.22em]
                     [text-decoration:underline]
                     decoration-lime-800
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
                   text-black/60
                   normal-case"
      >

        il portale dello sport, ambiente
        <br />
        e lifestyle.

      </div>

    </motion.a>

  );

}
