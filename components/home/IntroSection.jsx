"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

import { fontCursive, fontSans, fontSerif } from "@/lib/fonts";

function MicroLabel({ children, align = "left" }) {
  return (
    <div
      className={[
        "hidden lg:flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-black/45 select-none",
        align === "right" ? "justify-end" : "justify-start",
      ].join(" ")}
      aria-hidden="true"
    >
      {align === "left" && <span className="h-px w-25 bg-black/15" />}
      <span className="leading-none">{children}</span>
      {align === "right" && <span className="h-px w-25 bg-black/15" />}
    </div>
  );
}

function Node({ className = "" }) {
  // doppio puntino: 1 grosso + 1 piccolo sopra, come il tuo dettaglio attuale
  return (
    <div className={["relative", className].join(" ")} aria-hidden="true">
      <span className="absolute left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-black/18" />
      <span className="absolute left-1/2 -translate-x-1/2 -top-1.5 h-1 w-1 rounded-full bg-black/10" />
    </div>
  );
}

export default function IntroSection() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.35 });

  const fullText =
    "Dopo la laurea allo IUAV di Venezia nel 1989 ho iniziato la mia attività di professionista, occupandomi di urbanistica, edilizia privata, edilizia industriale e lavori pubblici soprattutto nel settore degli impianti sportivi.";
  const words = fullText.split(" ");

  const extraText1 =
    "Dal 2000 lavoro come Architetto Mauro Concentri & Partners, un gruppo di professionisti formato da me, dall’arch. Domenico Gabaldo e da SP Engineering Srl, direttore tecnico Ing. Francesco Piccioli. Ci occupiamo soprattutto di edilizia pubblica, con una specializzazione nell’impiantistica sportiva.";

  const extraText2 =
    "Dal 2000 al 2015 sono stato consulente provinciale CONI: quell’esperienza ha rafforzato competenze e visione dello studio e ha reso l’impiantistica sportiva uno dei nostri ambiti principali. Lavoriamo con un’organizzazione flessibile e una progettazione integrata tra specialisti che collaborano stabilmente da oltre 25 anni. Questo ci permette di seguire progetti anche molto diversi tra loro, garantendo una direzione lavori presente e continua in tutte le fasi di realizzazione.";

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
    <section
      ref={ref}
      role="region"
      aria-label="Introduzione e biografia professionale"
      className="relative
                 w-screen
                 left-1/2
                 -translate-x-1/2
                 min-h-screen
                 flex
                 items-start
                 justify-center
                 overflow-hidden
                 pt-16
                 sm:pt-18
                 lg:pt-20
                 pb-14
                 sm:pb-16
                 lg:pb-20"
    >
      {/* BACKGROUND (no foto, armonico tra Hero e Preview B/N) */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={
          inView && !reduceMotion
            ? { backgroundPosition: ["0% 40%", "100% 60%", "0% 40%"] }
            : {}
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        style={{
          // “carta tecnica” molto soft: caldo+freddo leggero, niente dominanti forti
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(234,238,244,0.92) 42%, rgba(245,245,245,0.94) 100%)",
          backgroundSize: "220% 220%",
          willChange: "transform, opacity",
          transform: "translateZ(0)",
        }}
        aria-hidden="true"
      />

      {/* texture super leggera (effetto materia, NON griglia protagonista) */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-25
                   [background-image:
                     radial-gradient(rgba(0,0,0,0.035)_1px,transparent_1px)]
                   bg-size-[42px_42px]"
        aria-hidden="true"
      />

      {/* luce morbida per “staccare” le card/typo dal fondo e accompagnare le foto prima/dopo */}
      <div
        className="absolute inset-0 pointer-events-none -z-10
                   bg-linear-to-t from-white/0 via-white/45 to-transparent"
        style={{ opacity: inView ? (reduceMotion ? 0.6 : 0.85) : 0 }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto w-full max-w-300">
          <div
            className="grid
                       grid-cols-1
                       items-center
                       gap-10
                       md:text-center
                       md:justify-items-center
                       lg:grid-cols-12
                       lg:gap-12
                       lg:text-left
                       lg:justify-items-stretch"
          >
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
                transition={{ duration: 1.05, ease: "easeOut", delay: reduceMotion ? 0 : 0.2 }}
                className={`${fontSerif.className} relative max-w-xl text-center lg:text-left`}
              >
                <div className="font-semibold text-4xl md:text-5xl lg:text-6xl text-sky-700/90 leading-snug">
                  Progettare è realizzare esperienze di vita.
                </div>

                <footer
                  className={`${fontCursive.className}
                              mt-4
                              text-4xl md:text-5xl
                              text-neutral-900
                              text-center
                              lg:text-right`}
                >
                  – Mauro Concentri
                </footer>
              </motion.blockquote>

              {/* (VIDEO RIMOSSO) */}

              {/* LINEA SOTTO (lg+) - resta come “ancora” grafica */}
              <div
                className="hidden lg:block relative mt-10 w-full max-w-170"
                aria-hidden="true"
              >
                <div className="h-px w-full bg-black/12" />
              </div>
            </div>

            {/* Destra */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                <div
                  className="pointer-events-none absolute -inset-10 rounded-full bg-white/60 blur-2xl opacity-55 hidden lg:block"
                  aria-hidden="true"
                />

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.25 }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -8, scale: 1.03, rotate: [0, 0.35, 0], transition: { duration: 1.15, ease: "easeInOut" } }
                  }
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
                    className="object-cover object-center select-none"
                    sizes="(max-width: 768px) 78vw, (max-width: 1024px) 55vw, 420px"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* BIO AREA */}
          <div className="mt-14 md:mt-16 lg:mt-14 relative">
            {/* centrale */}
            <div
              className="hidden lg:block absolute left-1/2 -top-30 bottom-3 w-px bg-black/10"
              aria-hidden="true"
            />

            {/* asse sinistro */}
            <div
              className="hidden lg:block absolute left-[10%] -top-20 h-90 w-px bg-black/8"
              aria-hidden="true"
            />

            {/* NODI (puntini) - ora più “ritmo” */}
            {/* nodo su asse centrale: intersezione alta (quello che avevi) */}
            <div className="hidden lg:block absolute left-1/2 -top-14 -translate-x-1/2" aria-hidden="true">
              <Node />
            </div>

            {/* nodo su asse centrale: metà percorso (aggiunge profondità e coerenza) */}
            <div className="hidden lg:block absolute left-1/2 top-24 -translate-x-1/2 opacity-90" aria-hidden="true">
              <Node />
            </div>

            {/* nodo su asse centrale: più in basso */}
            <div className="hidden lg:block absolute left-1/2 top-72 -translate-x-1/2 opacity-80" aria-hidden="true">
              <Node />
            </div>

            {/* nodo su asse sinistro: vicino alla sua “testa” */}
            <div className="hidden lg:block absolute left-[10%] -top-16 -translate-x-1/2 opacity-85" aria-hidden="true">
              <Node />
            </div>

            {/* nodo su asse sinistro: più in basso */}
            <div className="hidden lg:block absolute left-[10%] top-40 -translate-x-1/2 opacity-70" aria-hidden="true">
              <Node />
            </div>

            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
              {/* 1989 */}
              <motion.div
                className="lg:col-span-5 lg:col-start-7 text-center lg:text-left"
                variants={bioVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <MicroLabel align="right">1989-1999</MicroLabel>

                <motion.p
                  className={`${fontSans.className}
                              mt-4
                              lg:mt-5
                              text-neutral-800
                              text-lg
                              md:text-xl
                              leading-relaxed
                              max-w-3xl mx-auto
                              lg:max-w-none`}
                >
                  {words.map((word, i) => (
                    <motion.span
                      key={`${word}-${i}`}
                      className="inline-block mr-1"
                      variants={wordVariants}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>

              {/* 2000 */}
              <motion.div
                initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduceMotion ? 0 : 14 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.85,
                  ease: [0.22, 1, 0.36, 1],
                  delay: reduceMotion ? 0 : 0.95,
                }}
                className="lg:col-span-5 lg:col-start-1 text-center lg:text-left lg:translate-y-6"
              >
                <div className="hidden lg:flex items-center gap-3 mb-4" aria-hidden="true">
                  <span className="h-px w-85 bg-black/15" />
                  <span className="text-[11px] tracking-[0.22em] text-black/45">DAL 2000</span>
                  <span className="h-px w-14 bg-black/12" />
                </div>

                <p className={`${fontSans.className} text-neutral-800 text-base md:text-lg leading-relaxed`}>
                  {extraText1}
                </p>

                <div className="hidden lg:flex items-center gap-3 mt-7" aria-hidden="true">
                  <span className="h-px w-40 bg-black/10" />
                  <span className="text-[10px] tracking-[0.22em] uppercase text-black/35">Edilizia pubblica</span>
                </div>
              </motion.div>

              {/* 2000–2015 */}
              <motion.div
                initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduceMotion ? 0 : 14 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: reduceMotion ? 0 : 1.15,
                }}
                className="lg:col-span-4 lg:col-start-8 mt-2 lg:mt-12"
              >
                <MicroLabel align="right">2000–2015</MicroLabel>

                <p
                  className={`${fontSans.className}
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
        </div>
      </motion.div>
    </section>
  );
}
