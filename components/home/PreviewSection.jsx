"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { fontSans, fontSerif } from "@/lib/fonts";

export default function PreviewSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);

  // Scroll relativo alla sezione
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // ✅ Meno rimbalzo: spring più “smorzata” + escursioni più piccole
  const springCfg = { stiffness: 50, damping: 30, mass: 0.9 };

  const yFeatured = useSpring(
    useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 5, reduceMotion ? 0 : -7]),
    springCfg
  );

  const yTitle = useSpring(
    useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 7, reduceMotion ? 0 : -9]),
    springCfg
  );

  const yA = useSpring(
    useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 9, reduceMotion ? 0 : -11]),
    springCfg
  );

  const yB = useSpring(
    useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 7, reduceMotion ? 0 : -13]),
    springCfg
  );

  const yC = useSpring(
    useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 11, reduceMotion ? 0 : -9]),
    springCfg
  );

  const featured = {
    img: "/images/bgCard4.jpg",
    title: "Campi da Calcio in Erba Sintetica",
    link: "#",
    tag: "Selezione",
    y: yFeatured,
  };

  const cards = [
    { img: "/images/bgCard1.jpg", title: "Palestre & Palazzetti", link: "#", y: yA },
    { img: "/images/bgCard2.jpg", title: "Impianti di Atletica Leggera", link: "#", y: yB },
    { img: "/images/bgCard3.jpg", title: "Acquapark & Piscine", link: "#", y: yC },
  ];

  // ✅ Hardening GPU per ridurre micro-flicker con blur+shadow+transform
  const cardBase =
    "relative rounded-2xl overflow-hidden border border-black/10 bg-white/55 backdrop-blur-md shadow-[0_14px_50px_rgba(0,0,0,0.14)] transform-gpu [backface-visibility:hidden] [transform-style:preserve-3d]";

  const cardHover = reduceMotion
    ? {}
    : {
        y: -5,
        rotate: 0,
        transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section
      ref={sectionRef}
      role="region"
      aria-label="Anteprima dei progetti"
      className="
        relative
        w-screen
        left-1/2
        -translate-x-1/2
        overflow-hidden
        py-18
        sm:py-20
        lg:py-24
      "
    >
      {/* SFONDO (aggiornato: più “architettonico”, meno pastello) */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={reduceMotion ? undefined : { backgroundPosition: ["0% 45%", "100% 55%", "0% 45%"] }}
        transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(135deg, #f5f6f8 0%, #eef1f6 34%, #fff3e8 68%, #eef6ff 100%)",
          backgroundSize: "220% 220%",
        }}
        aria-hidden="true"
      />

      {/* Texture diagonale leggera */}
      <div
        className="
          absolute inset-0 -z-10 pointer-events-none
          [background-image:
            linear-gradient(135deg,rgba(0,0,0,0.03)_1px,transparent_1px),
            linear-gradient(315deg,rgba(0,0,0,0.02)_1px,transparent_1px)]
          bg-size-[60px_60px]
          opacity-35
        "
        aria-hidden="true"
      />

      {/* Vignetta + luce */}
      <div
        className="
          absolute inset-0 -z-10 pointer-events-none
          bg-radial from-white/80 via-transparent to-black/10
        "
        aria-hidden="true"
      />

      <div
        className="
          absolute -top-24 left-[-10%]
          h-112 w-md -z-10
          rounded-full bg-radial
          from-red-500/10 via-transparent to-transparent
          blur-2xl
          transform-gpu [backface-visibility:hidden]
        "
        aria-hidden="true"
      />

      {/* ✅ Wrapper */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-start gap-5">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="
              inline-flex items-center gap-3 rounded-full
              border border-black/10 bg-white/60
              px-4 py-2 backdrop-blur-md
            "
          >
            <span className="text-red-500/80 text-lg font-light">&gt;</span>

            <span
              className={`${fontSans.className}
                text-sm tracking-[0.18em] uppercase text-black/60
              `}
            >
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
            Progetti
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className={`${fontSans.className} max-w-2xl text-base sm:text-lg leading-relaxed text-black/60`}
          >
            Una selezione di progetti con tipologie di intervento nell’impiantistica sportiva.
          </motion.p>
        </div>

        {/* Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* COLONNA SINISTRA */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* FEATURED */}
            <motion.article
              style={{ y: featured.y, willChange: "transform" }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className={`${cardBase} ${reduceMotion ? "" : "rotate-[-0.6deg]"}`}
              whileHover={cardHover}
            >
              <a href={featured.link} className="block">
                <div className="relative h-72 sm:h-80 lg:h-112">
                  <Image
                    src={featured.img}
                    alt={`Anteprima progetto: ${featured.title}`}
                    fill
                    priority={false}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent" />

                  <div
                    className="
                      absolute left-5 top-5
                      inline-flex items-center gap-2
                      rounded-full border border-white/20
                      bg-black/30 px-3 py-1.5
                      text-xs tracking-[0.18em] uppercase
                      text-white/80 backdrop-blur-md
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400/90" />
                    {featured.tag}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className={`${fontSerif.className} text-2xl sm:text-3xl text-white/95`}>
                      {featured.title}
                    </div>

                    <div className={`${fontSans.className} mt-1 text-sm uppercase text-white/70`}>
                      Scopri →
                    </div>
                  </div>
                </div>
              </a>
            </motion.article>

            {/* Card approfondimento (Brendola) — rifinita + anti flicker */}
            <motion.article
              style={{ y: yTitle, willChange: "transform" }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className={`
                ${cardBase}
                ${reduceMotion ? "" : "rotate-[0.35deg]"}
                bg-white/65
                shadow-[0_14px_50px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.55)]
              `}
              whileHover={cardHover}
            >
              <div className="relative h-52 sm:h-56 p-6 flex flex-col justify-between">
                <div>
                  {/* Micro–header editoriale (più “architetto”) */}
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500/70" aria-hidden="true" />
                    <div className="h-px flex-1 bg-black/10" aria-hidden="true" />
                    <div
                      className={`${fontSans.className}
                        text-xs tracking-[0.18em] uppercase text-black/55
                      `}
                    >
                      in primo piano
                    </div>
                  </div>

                  <div className={`${fontSerif.className} mt-3 text-2xl text-black/85`}>Brendola</div>

                  <div className={`${fontSans.className} mt-3 text-sm leading-relaxed text-black/60`}>
                    Ampliamento campo da calcio con realizzazione nuovo impianto di illuminazione e manto in erba sintetica.
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="h-px flex-1 bg-black/10" />
                  <div className={`${fontSans.className} ml-4 text-xs tracking-[0.18em] uppercase text-black/55`}>
                    approfondimento →
                  </div>
                </div>

                {/* Glow “blindato” (ridotto e GPU-safe) */}
                <div
                  className="
                    absolute -right-24 -top-24
                    h-64 w-64 rounded-full
                    bg-radial from-red-500/10 via-transparent to-transparent
                    blur-2xl
                    pointer-events-none
                    transform-gpu [backface-visibility:hidden]
                  "
                  aria-hidden="true"
                />
              </div>
            </motion.article>
          </div>

          {/* COLONNA DESTRA */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {cards.map((c, idx) => (
              <motion.article
                key={c.title}
                style={{ y: c.y, willChange: "transform" }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className={`${cardBase} ${
                  reduceMotion ? "" : idx === 0 ? "rotate-[0.6deg]" : idx === 1 ? "rotate-[-0.4deg]" : "rotate-[0.3deg]"
                }`}
                whileHover={cardHover}
              >
                <a href={c.link} className="block">
                  <div className="relative h-52 sm:h-56 overflow-hidden">
                    <Image
                      src={c.img}
                      alt={`Anteprima progetto: ${c.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className={`object-cover object-center ${
                        reduceMotion
                          ? ""
                          : "transition-transform duration-1400 ease-[cubic-bezier(0.33,1,0.68,1)] hover:scale-[1.05]"
                      }`}
                      loading="lazy"
                      decoding="async"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                      <div className={`${fontSerif.className} text-xl text-white/95`}>{c.title}</div>

                      <div className={`${fontSans.className} text-xs tracking-[0.18em] uppercase text-white/75`}>
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
