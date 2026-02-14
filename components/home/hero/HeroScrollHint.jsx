"use client";

import { motion } from "framer-motion";

export default function HeroScrollHint({ hintOpacity, inView, reduceMotion }) {
  return (

    <motion.div
      className="absolute
                 z-10
                 bottom-[calc(env(safe-area-inset-bottom)+9.5rem)]
                 sm:bottom-8
                 md:bottom-12
                 lg:bottom-6
                 flex
                 flex-col
                 items-center
                 text-neutral-50
                 pointer-events-none"
      style={{ opacity: hintOpacity, willChange: "opacity" }}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        delay: reduceMotion ? 0 : 0.8,
        duration: 1.2,
        ease: "easeOut",
      }}
    >

      <motion.span
        className="text-sm
                   tracking-widest
                   font-light
                   uppercase"
        animate={
          reduceMotion ? undefined : { opacity: [1, 0.6, 1], y: [0, -4, 0] }
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

  );

}
