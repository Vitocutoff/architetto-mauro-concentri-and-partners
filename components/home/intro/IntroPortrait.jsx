"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function IntroPortrait({ inView, reduceMotion }) {
  const hoverAnim = reduceMotion
    ? { y: -4, scale: 1.015 }
    : {
        y: -8,
        scale: 1.03,
        rotate: [0, 0.35, 0],
        transition: { duration: 1.15, ease: "easeInOut" },
      };

  return (

    <div
      className="lg:col-span-5
                 flex
                 justify-center
                 lg:justify-end"
    >

      <div
        className="relative"
      >

        <div
          className="pointer-events-none
                     absolute
                     -inset-10
                     rounded-full
                     bg-white/60
                     blur-2xl
                     opacity-55
                     hidden
                     lg:block"
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
            delay: reduceMotion ? 0 : 0.25,
          }}
          whileHover={hoverAnim}
          className="relative
                     w-65
                     h-65
                     sm:w-[320px]
                     sm:h-80
                     lg:w-105
                     lg:h-105
                     rounded-full
                     overflow-hidden
                     border-2
                     border-black/35
                     shadow-[0_14px_70px_rgba(0,0,0,0.28)]
                     lg:-translate-y-10"
        >

          <Image
            src="/images/mauroConcentri.webp"
            alt="Ritratto dell'architetto Mauro Concentri"
            fill
            className="object-cover
                       object-center
                       select-none"
            sizes="(max-width: 768px) 78vw, (max-width: 1024px) 55vw, 420px"
            loading="lazy"
          />

        </motion.div>

      </div>

    </div>

  );

}
