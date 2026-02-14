"use client";

import { motion } from "framer-motion";

export default function IntroHeader({ inView, reduceMotion, fontSerif, fontCursive }) {
  return (

    <div
      className="lg:col-span-7
                 flex
                 flex-col
                 items-center
                 lg:items-start
                 relative"
    >

      <motion.blockquote
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 1.05,
          ease: "easeOut",
          delay: reduceMotion ? 0 : 0.2,
        }}
        className={`${fontSerif}
                    relative
                    max-w-xl
                    text-center
                    lg:text-left`}
      >

        <div
          className="font-semibold
                     text-4xl
                     md:text-5xl
                     lg:text-6xl
                     text-sky-700/90
                     leading-snug"
        >

          Progettare è realizzare esperienze di vita.

        </div>

        <footer
          className={`${fontCursive}
                      mt-4
                      text-4xl md:text-5xl
                      text-neutral-900
                      text-center
                      lg:text-right`}
        >

          – Mauro Concentri

        </footer>

      </motion.blockquote>

      {/* LINEA SOTTO (lg+) */}
      <div
        className="hidden
                   lg:block
                   relative
                   mt-10
                   w-full
                   max-w-170"
        aria-hidden="true"
      >

        <div
          className="h-px
                     w-full
                     bg-black/12"
        />

      </div>

    </div>

  );

}
