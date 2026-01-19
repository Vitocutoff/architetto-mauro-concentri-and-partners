"use client";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fontCursive, fontMono, fontSerif } from "@/lib/fonts";

export default function IntroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  const fullText =
    "Nel 1989 ho iniziato la mia attività di professionista, occupandomi di urbanistica, edilizia privata, edilizia industriale e lavori pubblici soprattutto nel settore degli impianti sportivi.";
  const words = fullText.split(" ");

  return (
    <section
      ref={ref}
      role="region"
      aria-label="Introduzione e biografia professionale"
      className="relative min-h-screen flex
                 items-center justify-center
                 overflow-hidden py-8"
    >

      {/* BACKGROUND ANIMATO */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={
          inView
            ? { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }
            : {}
        }
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #e7eaef 40%, #dde2e7 100%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* LUCE MORBIDA */}
      <motion.div
        className="absolute inset-0 bg-linear-to-t
                   from-white/0 via-white/40
                   to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: [0, 1, 0.6] } : {}}
        transition={{ duration: 1.8, ease: "easeOut" }}
        aria-hidden="true"
      />

      {/* VIRGOLETTE DECORATIVE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        className="hidden md:block absolute
                   top-8 left-8 text-black/60
                   drop-shadow-[0_6px_14px_rgba(0,0,0,0.25)]"
        aria-hidden="true"
      >

        <FaQuoteLeft className="text-5xl lg:text-6xl" />

      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        className="hidden md:block absolute
                   bottom-8 right-8 text-black/60
                   drop-shadow-[0_6px_14px_rgba(0,0,0,0.25)]"
        aria-hidden="true"
      >

        <FaQuoteRight className="text-5xl lg:text-6xl" />

      </motion.div>

      {/* CONTENUTO */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full
                   max-w-[95%] sm:max-w-3xl
                   lg:max-w-7xl mx-auto flex
                   flex-col lg:flex-row items-center
                   justify-between gap-12 px-4
                   sm:px-6 lg:px-20 overflow-hidden"
      >

        {/* TESTO */}
        <div
          className="flex-1 flex flex-col
                     justify-center
                     items-start text-left
                     gap-10"
        >

          <motion.blockquote
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.4 }}
            className={`${fontSerif.className}
                        font-semibold text-4xl md:text-5xl
                        lg:text-6xl text-sky-700/90
                        leading-snug max-w-xl text-shadow-md`}
          >

            Progettare è realizzare esperienze di vita.

            <footer
              className={`${fontCursive.className}
                          mt-4 text-4xl md:text-5xl
                          text-neutral-900 text-right`}
            >

              – Mauro Concentri

            </footer>

          </motion.blockquote>

          {/* BIO ANIMATA */}
          <motion.p
            className={`${fontMono.className}
                        text-neutral-700 text-lg md:text-xl
                        font-extralight leading-relaxed max-w-md`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 1.3 },
              },
            }}
          >

            {words.map((word, i) => (

              <motion.span
                key={i}
                className="inline-block mr-1"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, ease: "easeOut" },
                  },
                }}
              >

                {word}

              </motion.span>

            ))}

          </motion.p>

        </div>

        {/* IMMAGINE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          whileHover={{
            y: -8,
            scale: 1.04,
            rotate: [0, 0.5, 0],
            transition: { duration: 1.2, ease: "easeInOut" },
          }}
          className="shrink-0 w-[260px] h-[260px]
                     sm:w-[320px] sm:h-80 lg:w-[420px]
                     lg:h-[420px] relative rounded-full
                     overflow-hidden border-2 border-black/40
                     shadow-[0_8px_40px_rgba(0,0,0,0.3)]
                     lg:hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
        >

          <Image
            src="/images/mauroConcentri.png"
            alt="Ritratto dell'architetto Mauro Concentri"
            fill
            className="object-cover object-center select-none"
            sizes="(max-width: 1024px) 50vw, 420px"
            priority
            decoding="async"
          />

        </motion.div>

      </motion.div>

    </section>

  );

}
