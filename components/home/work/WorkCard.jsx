"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { fontSans, fontSerif } from "@/lib/fonts";

export default function WorkCard({ reduceMotion }) {
  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05, x: -14 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 },
    },
  };

  const card3D = {
    rest: { scale: 1, rotateX: 0, rotateY: 0, transition: { duration: 0.55 } },
    hover: reduceMotion
      ? {
          scale: 1.008,
          transition: { duration: 0.25, ease: "easeOut" },
        }
      : {
          scale: 1.01,
          rotateX: -1.2,
          rotateY: 1.2,
          boxShadow: "0 16px 46px rgba(0,0,0,0.32)",
          transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
        },
  };

  return (

    <motion.div
      variants={card3D}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative
                 flex
                 flex-col
                 lg:flex-row
                 rounded-2xl
                 overflow-hidden
                 shadow-[0_10px_40px_rgba(0,0,0,0.22)]
                 border
                 border-white/26
                 transition-transform
                 duration-700
                 isolate"
      style={{
        willChange: "transform",
        transform: "translateZ(0)",
        background: "linear-gradient(135deg, #111827 0%, #0b1020 48%, #05070c 100%)",
      }}
    >

      <div
        className="pointer-events-none
                   absolute
                   inset-px
                   rounded-2xl
                   border
                   border-white/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none
                   absolute
                   inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 24%, transparent 55%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        className="lg:w-3/4
                   relative
                   overflow-hidden
                   aspect-video
                   group"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ willChange: "transform, opacity" }}
      >

        <Image
          src="/backgrounds/bgCardWork.webp"
          alt="Progetto architettonico in corso"
          fill
          sizes="(max-width: 768px) 100vw, 75vw"
          quality={90}
          className="object-cover
                     object-center"
          loading="lazy"
          decoding="async"
        />

        <div
          className="absolute
                     inset-0
                     bg-linear-to-r
                     from-slate-950/40
                     via-slate-900/18
                     to-transparent" />

        <div
          className={`${fontSans.className}
                        absolute
                        top-4
                        left-4
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/20
                        bg-linear-to-r
                        from-slate-950/30
                        via-slate-900/18
                        to-transparent
                        px-3
                        py-1.5
                        text-[11px]
                        tracking-[0.22em]
                        uppercase
                        text-white/80`}
        >

          <span
            className="h-1.5
                       w-1.5
                       rounded-full
                       bg-red-400/90"
            aria-hidden="true"
          />

          lavori in corso

        </div>

        <div
          className="absolute
                     bottom-0
                     right-0
                     h-28
                     w-56
                     pointer-events-none"
          style={{
            background:
              "linear-gradient(315deg, rgba(2,6,23,0.60) 0%, rgba(8,47,73,0.18) 55%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        <Link
          href="/work-in-progress"
          className={`${fontSans.className}
                        absolute
                        bottom-4
                        right-4
                        inline-flex
                        items-center
                        gap-2
                        text-white
                        text-xs
                        sm:text-sm
                        tracking-[0.18em]
                        uppercase
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-white/80`}
          aria-label="Scopri i progetti in corso"
        >

          SCOPRI <span aria-hidden="true">→</span>

        </Link>

      </motion.div>

      <div
        className="p-10
                   lg:p-12
                   flex
                   flex-col
                   justify-center
                   items-center
                   text-center
                   lg:w-1/3"
      >

        <motion.h3
          className={`${fontSerif.className}
                        text-4xl
                        lg:text-5xl
                        font-light
                        text-white
                        mb-8
                        tracking-tight
                        leading-tight`}
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ willChange: "transform, opacity" }}
        >

          Work in <span className="text-red-500/90">Progress</span>

        </motion.h3>

        <motion.p
          className={`${fontSans.className}
                        text-neutral-300
                        text-base
                        font-light
                        max-w-xs`}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{ willChange: "transform, opacity" }}
        >

          Sezione dedicata ai progetti in fase di sviluppo, con aggiornamenti e immagini dei lavori in corso.

        </motion.p>

      </div>

    </motion.div>

  );

}
