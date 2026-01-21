"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import { fontSans, fontSerif } from "@/lib/fonts";

export default function PreviewSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);

  // Scroll relativo alla sezione (più controllato del globale)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yFeatured = useSpring(
    useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 8, reduceMotion ? 0 : -10]),
    { stiffness: 70, damping: 18 }
  );

  const yA = useSpring(
    useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 16, reduceMotion ? 0 : -18]),
    { stiffness: 70, damping: 18 }
  );

  const yB = useSpring(
    useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 10, reduceMotion ? 0 : -22]),
    { stiffness: 70, damping: 18 }
  );

  const yC = useSpring(
    useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 20, reduceMotion ? 0 : -14]),
    { stiffness: 70, damping: 18 }
  );

  // Dati (per ora come nel tuo file, puoi cambiarli quando vuoi)
  const featured = {
    img: "/images/bgCard4.jpg",
    title: "Campi in Erba Sintetica",
    link: "#",
    tag: "Selezione",
    y: yFeatured,
  };

  const cards = [
    { img: "/images/bgCard1.jpg", title: "Palazzetti", link: "#", y: yA },
    { img: "/images/bgCard2.jpg", title: "Piste di Atletica", link: "#", y: yB },
    { img: "/images/bgCard3.jpg", title: "Acquapark & Piscine", link: "#", y: yC },
  ];

  const cardBase =
    "relative rounded-2xl overflow-hidden border border-black/10 bg-white/55 backdrop-blur-md shadow-[0_14px_50px_rgba(0,0,0,0.14)]";

  const cardHover = reduceMotion
    ? {}
    : {
        y: -6,
        rotate: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section
      ref={sectionRef}
      role="region"
      aria-label="Anteprima dei progetti"
      className="relative overflow-hidden py-18 sm:py-20 lg:py-24"
    >
      {/* SFONDO: molto più chiaro, con “materia” (grid + luce) */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={
          reduceMotion
            ? undefined
            : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }
        }
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(135deg, #f6f7fb 0%, #edf1f7 45%, #e7ecf3 100%)",
          backgroundSize: "200% 200%",
        }}
        aria-hidden="true"
      />

      {/* Texture leggera (senza immagini): griglia sottilissima + vignetta */}
      <div
        className="
          absolute inset-0 -z-10 pointer-events-none
          [background-image:
            linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
          [background-size:48px_48px]
          opacity-40
        "
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 pointer-events-none bg-radial from-white/70 via-transparent to-black/10"
        aria-hidden="true"
      />

      {/* CONTENUTO */}
      <div className="mx-auto w-full max-w-[95%] lg:max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Header editoriale: non solo titolo, ma anche microcopy */}
        <div className="flex flex-col items-start gap-5">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/60 px-4 py-2 backdrop-blur-md"
          >
            <span className="text-red-500/80 text-lg font-light">&gt;</span>
            <span className={`${fontSans.className} text-sm tracking-[0.18em] uppercase text-black/60`}>
              anteprima
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className={`${fontSerif.className} text-4xl sm:text-5xl lg:text-6xl text-black/85`}
          >
            Progetti selezionati
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className={`${fontSans.className} max-w-2xl text-base sm:text-lg leading-relaxed text-black/60`}
          >
            Una panoramica di alcune tipologie di intervento nell’impiantistica sportiva.
            Se vuoi, posso trasformare questa sezione in un vero portfolio filtrabile.
          </motion.p>
        </div>

        {/* Layout editoriale */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* FEATURED */}
          <motion.article
            style={{ y: featured.y }}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className={`lg:col-span-7 ${cardBase} ${reduceMotion ? "" : "rotate-[-0.6deg]"}`}
            whileHover={cardHover}
          >
            <a href={featured.link} className="block">
              <div className="relative h-72 sm:h-80 lg:h-[28rem]">
                <Image
                  src={featured.img}
                  alt={`Anteprima progetto: ${featured.title}`}
                  fill
                  priority={false}
                  sizes="(max-width: 1024px) 95vw, 60vw"
                  className="object-cover object-center"
                />
                {/* overlay soft */}
                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent" />

                {/* tag */}
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs tracking-[0.18em] uppercase text-white/80 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400/90" />
                  {featured.tag}
                </div>

                {/* titolo */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className={`${fontSerif.className} text-2xl sm:text-3xl text-white/95`}>
                    {featured.title}
                  </div>
                  <div className={`${fontSans.className} mt-1 text-sm text-white/70`}>
                    Approfondisci il progetto →
                  </div>
                </div>
              </div>
            </a>
          </motion.article>

          {/* Colonna destra: 3 card “stacked” con offset (anti monotonia) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {cards.map((c, idx) => (
              <motion.article
                key={c.title}
                style={{ y: c.y }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className={`${cardBase} ${reduceMotion ? "" : idx === 0 ? "rotate-[0.6deg]" : idx === 1 ? "rotate-[-0.4deg]" : "rotate-[0.3deg]"}`}
                whileHover={cardHover}
              >
                <a href={c.link} className="block">
                  <div className="relative h-52 sm:h-56 overflow-hidden">
                    <Image
                      src={c.img}
                      alt={`Anteprima progetto: ${c.title}`}
                      fill
                      sizes="(max-width: 1024px) 95vw, 35vw"
                      className={`object-cover object-center ${reduceMotion ? "" : "transition-transform duration-[1400ms] ease-[cubic-bezier(0.33,1,0.68,1)] hover:scale-[1.05]"}`}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                      <div className={`${fontSerif.className} text-xl text-white/95`}>
                        {c.title}
                      </div>
                      <div
                        className={`${fontSans.className} text-xs tracking-[0.18em] uppercase text-white/75`}
                      >
                        scopri →
                      </div>
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

