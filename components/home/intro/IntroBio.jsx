"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";

import { MicroLabel, Node } from "@/components/home/intro/IntroPrimitives";

// SSR-safe hydration flag (no useEffect, no setState)
function useHydrated() {
  return useSyncExternalStore(
    () => () => {}, // subscribe noop
    () => true,     // client snapshot
    () => false     // server snapshot
  );
}

export default function IntroBio({
  inView,
  reduceMotion: reduceMotionProp,
  fontSans,
  words,
  extraText1,
  extraText2,
}) {
  // Se per qualche motivo non passi reduceMotion dal parent, lo prendiamo qui.
  const reduceMotionHook = useReducedMotion();
  const reduceMotion = typeof reduceMotionProp === "boolean" ? reduceMotionProp : reduceMotionHook;

  const hydrated = useHydrated();

  // Animazioni SOLO dopo hydration e solo se non reduce motion
  const shouldAnimateWords = hydrated && !reduceMotion;

  const bioVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.06,
        delayChildren: reduceMotion ? 0 : 1.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.42, ease: "easeOut" },
    },
  };

  return (
    <div
      className="mt-14
                 md:mt-16
                 lg:mt-14
                 relative"
    >
      {/* centrale */}
      <div
        className="hidden
                   lg:block
                   absolute
                   left-1/2
                   -top-30
                   bottom-3
                   w-px
                   bg-black/10"
        aria-hidden="true"
      />

      {/* asse sinistro */}
      <div
        className="hidden
                   lg:block
                   absolute
                   left-[10%]
                   -top-20
                   h-90
                   w-px
                   bg-black/8"
        aria-hidden="true"
      />

      {/* NODI */}
      <div
        className="hidden
                   lg:block
                   absolute
                   left-1/2
                   -top-14
                   -translate-x-1/2"
        aria-hidden="true"
      >
        <Node />
      </div>

      <div
        className="hidden
                   lg:block
                   absolute
                   left-1/2
                   top-24
                   -translate-x-1/2
                   opacity-90"
        aria-hidden="true"
      >
        <Node />
      </div>

      <div
        className="hidden
                   lg:block
                   absolute
                   left-1/2
                   top-72
                   -translate-x-1/2
                   opacity-80"
        aria-hidden="true"
      >
        <Node />
      </div>

      <div
        className="hidden
                   lg:block
                   absolute
                   left-[10%]
                   -top-16
                   -translate-x-1/2
                   opacity-85"
        aria-hidden="true"
      >
        <Node />
      </div>

      <div
        className="hidden
                   lg:block
                   absolute
                   left-[10%]
                   top-40
                   -translate-x-1/2
                   opacity-70"
        aria-hidden="true"
      >
        <Node />
      </div>

      <div
        className="relative
                   grid
                   grid-cols-1
                   gap-10
                   lg:grid-cols-12
                   lg:gap-10"
      >
        <motion.div
          className="lg:col-span-5
                     lg:col-start-7
                     text-center
                     lg:text-left"
          variants={bioVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <MicroLabel align="right">1989-1999</MicroLabel>

          <motion.p
            className={`${fontSans}
                        mt-4
                        lg:mt-5
                        text-neutral-800
                        text-lg
                        md:text-xl
                        leading-relaxed
                        max-w-3xl mx-auto
                        lg:max-w-none`}
          >
            {words.map((word, i) =>
              shouldAnimateWords ? (
                <motion.span
                  key={`${word}-${i}`}
                  className="inline-block mr-1"
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              ) : (
                <span key={`${word}-${i}`} className="inline-block mr-1">
                  {word}
                </span>
              )
            )}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
          animate={
            inView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: reduceMotion ? 0 : 14 }
          }
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease: [0.22, 1, 0.36, 1],
            delay: reduceMotion ? 0 : 0.95,
          }}
          className="lg:col-span-5
                     lg:col-start-1
                     text-center
                     lg:text-left
                     lg:translate-y-6"
        >
          <div
            className="hidden
                       lg:flex
                       items-center
                       gap-3
                       mb-4"
            aria-hidden="true"
          >
            <span className="h-px w-85 bg-black/15" />
            <span className="text-[11px] tracking-[0.22em] text-black/45">
              DAL 2000
            </span>
            <span className="h-px w-14 bg-black/12" />
          </div>

          <p
            className={`${fontSans}
                        text-neutral-800
                        text-base
                        md:text-lg
                        leading-relaxed`}
          >
            {extraText1}
          </p>

          <div
            className="hidden
                       lg:flex
                       items-center
                       gap-3
                       mt-7"
            aria-hidden="true"
          >
            <span className="h-px w-40 bg-black/10" />
            <span className="text-[10px] tracking-[0.22em] uppercase text-black/35">
              Edilizia pubblica
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
          animate={
            inView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: reduceMotion ? 0 : 14 }
          }
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            ease: [0.22, 1, 0.36, 1],
            delay: reduceMotion ? 0 : 1.15,
          }}
          className="lg:col-span-4
                     lg:col-start-8
                     mt-2
                     lg:mt-12"
        >
          <MicroLabel align="right">2000–2015</MicroLabel>

          <p
            className={`${fontSans}
                        mt-4
                        lg:mt-5
                        text-neutral-800
                        text-base
                        md:text-lg
                        leading-relaxed
                        text-center
                        lg:text-left`}
          >
            {extraText2}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
