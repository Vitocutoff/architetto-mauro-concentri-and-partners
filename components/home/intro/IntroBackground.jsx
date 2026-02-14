"use client";

import { motion } from "framer-motion";

export default function IntroBackground({ inView, reduceMotion }) {
  return (

    <>

      {/* BACKGROUND */}
      <motion.div
        className="absolute
                   inset-0
                   -z-10"
        animate={
          inView && !reduceMotion
            ? { backgroundPosition: ["0% 40%", "100% 60%", "0% 40%"] }
            : {}
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(234,238,244,0.92) 42%, rgba(245,245,245,0.94) 100%)",
          backgroundSize: "220% 220%",
          willChange: "transform, opacity",
          transform: "translateZ(0)",
        }}
        aria-hidden="true"
      />

      {/* texture leggera */}
      <div
        className="absolute
                   inset-0
                   -z-10
                   pointer-events-none
                   opacity-25
                   [background-image: radial-gradient(rgba(0,0,0,0.035)_1px,transparent_1px)]
                   bg-size-[42px_42px]"
        aria-hidden="true"
      />

      {/* luce morbida */}
      <div
        className="absolute
                   inset-0
                   pointer-events-none
                   -z-10
                   bg-linear-to-t
                   from-white/0
                   via-white/45
                   to-transparent"
        style={{ opacity: inView ? (reduceMotion ? 0.6 : 0.85) : 0 }}
        aria-hidden="true"
      />

    </>

  );

}
