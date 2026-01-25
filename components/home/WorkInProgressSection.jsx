"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { fontSans, fontSerif } from "@/lib/fonts";

export default function WorkInProgressSection() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

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
      ? {}
      : {
          scale: 1.01,
          rotateX: -1.2,
          rotateY: 1.2,
          boxShadow: "0 16px 46px rgba(0,0,0,0.32)",
          transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
        },
  };

  return (
    <section
      ref={sectionRef}
      role="region"
      aria-label="Sezione Work in Progress"
      className="
        relative
        w-screen left-1/2 -translate-x-1/2
        flex items-center
        overflow-hidden
        py-20 lg:py-32
      "
    >
      {/* SFONDO STABILE */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 25% 25%, #ffffff 0%, #f2f4f7 52%, #e7ebf0 100%)",
        }}
        aria-hidden="true"
      />

      {/* Texture leggera statica */}
      <div
        className="
          absolute inset-0 -z-10 pointer-events-none
          [background-image:
            linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)]
          [background-size:56px_56px]
          opacity-25
        "
        aria-hidden="true"
      />

      {/* ✅ Wrapper contenuto coerente con le altre sezioni */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={card3D}
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="
            relative
            flex flex-col lg:flex-row
            rounded-2xl overflow-hidden
            shadow-[0_10px_40px_rgba(0,0,0,0.22)]
            bg-linear-to-br from-neutral-900 via-neutral-950 to-black
            border border-white/30
            transition-transform duration-700
          "
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        >
          {/* Hairline border interno (statico) */}
          <div className="pointer-events-none absolute inset-[1px] rounded-2xl border border-white/10" aria-hidden="true" />

          {/* IMMAGINE */}
          <motion.div
            className="lg:w-3/4 relative overflow-hidden aspect-video group"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }}
          >
            <Image
              src="/images/workImg.jpg"
              alt="Progetto architettonico in corso"
              fill
              sizes="(max-width: 768px) 100vw, 75vw"
              quality={90}
              className="object-cover"
              loading="lazy"
              decoding="async"
            />

            {/* Overlay leggibilità (statico) */}
            <div className="absolute inset-0 bg-linear-to-r from-black/35 via-black/15 to-transparent" />

            {/* Label editoriale (statica) */}
            <div
              className={`
                ${fontSans.className}
                absolute top-4 left-4
                inline-flex items-center gap-2
                rounded-full
                border border-white/20
                bg-black/25
                px-3 py-1.5
                text-[11px]
                tracking-[0.22em]
                uppercase
                text-white/80
              `}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-red-400/90" aria-hidden="true" />
              lavori in corso
            </div>

            {/* Micro-gradient locale in basso a destra */}
            <div
              className="absolute bottom-0 right-0 h-28 w-56 pointer-events-none"
              style={{
                background: "linear-gradient(315deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)",
              }}
              aria-hidden="true"
            />

            {/* CTA minimale */}
            <Link
              href="/work-in-progress"
              className={`
                ${fontSans.className}
                absolute bottom-4 right-4
                inline-flex items-center gap-2
                text-white
                text-xs sm:text-sm
                tracking-[0.18em] uppercase
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80
              `}
              aria-label="Scopri i progetti in corso"
            >
              SCOPRI <span aria-hidden="true">→</span>
            </Link>
          </motion.div>

          {/* TESTO */}
          <div className="p-10 lg:p-12 flex flex-col justify-center items-center text-center lg:w-1/3">
            <motion.h3
              className={`${fontSerif.className} text-4xl lg:text-5xl font-light text-white mb-8 tracking-tight leading-tight`}
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ willChange: "transform, opacity" }}
            >
              Work in <span className="text-red-500/90">Progress</span>
            </motion.h3>

            <motion.p
              className={`${fontSans.className} text-neutral-300 text-base font-light max-w-xs`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              style={{ willChange: "transform, opacity" }}
            >
              Progetti attualmente in corso di realizzazione.
              <span className="block mt-3 text-neutral-300/90">
                Una selezione aggiornata di cantieri e interventi in fase esecutiva, con attenzione alle scelte tecniche e
                alle soluzioni adottate in opera.
              </span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
