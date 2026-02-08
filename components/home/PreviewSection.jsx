"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { fontSans, fontSerif } from "@/lib/fonts";

function PlayIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M9 7.25v9.5l8.5-4.75L9 7.25Z" fill="currentColor" />
    </svg>
  );
}

export default function PreviewSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const videoSrc = "/videos/drone.mp4";

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const springCfg = { stiffness: 50, damping: 30, mass: 0.9 };

  const yFeaturedT = useTransform(scrollYProgress, [0, 1], [5, -7]);
  const yTitleT = useTransform(scrollYProgress, [0, 1], [7, -9]);
  const yAT = useTransform(scrollYProgress, [0, 1], [9, -11]);
  const yBT = useTransform(scrollYProgress, [0, 1], [7, -13]);
  const yCT = useTransform(scrollYProgress, [0, 1], [11, -9]);

  const yFeaturedS = useSpring(yFeaturedT, springCfg);
  const yTitleS = useSpring(yTitleT, springCfg);
  const yAS = useSpring(yAT, springCfg);
  const yBS = useSpring(yBT, springCfg);
  const yCS = useSpring(yCT, springCfg);

  const yFeatured = reduceMotion ? 0 : yFeaturedS;
  const yTitle = reduceMotion ? 0 : yTitleS;
  const yA = reduceMotion ? 0 : yAS;
  const yB = reduceMotion ? 0 : yBS;
  const yC = reduceMotion ? 0 : yCS;

  const featured = {
    img: "/backgrounds/bgCardCampi.webp",
    title: "Campi da Calcio in Erba Sintetica",
    link: "/progetti",
    tag: "Selezione",
    y: yFeatured,
  };

  const cards = [
    { img: "/backgrounds/bgCardPalestre.webp", title: "Palestre & Palazzetti", link: "/progetti", y: yA },
    { img: "/backgrounds/bgCardAtletica.webp", title: "Impianti di Atletica Leggera", link: "/progetti", y: yB },
    { img: "/backgrounds/bgCardPiscine.webp", title: "Acquapark & Piscine", link: "/progetti", y: yC },
  ];

  const cardBase =
    "relative rounded-2xl overflow-hidden border border-black/15 bg-white/55 shadow-[0_14px_50px_rgba(0,0,0,0.14)] transform-gpu [backface-visibility:hidden] [transform-style:preserve-3d] isolate";

  const cardHover = reduceMotion
    ? undefined
    : {
        y: -6,
        rotate: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      };

  useEffect(() => {
    if (!isVideoOpen) return;

    const onKeyDown = (e) => e.key === "Escape" && setIsVideoOpen(false);
    window.addEventListener("keydown", onKeyDown);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [isVideoOpen]);

  return (
    <section
      ref={sectionRef}
      role="region"
      aria-label="Anteprima dei progetti"
      className="relative
                 w-screen
                 left-1/2
                 -translate-x-1/2
                 overflow-hidden
                 py-18
                 sm:py-20
                 lg:py-24"
    >
      {/* SFONDO */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src="/backgrounds/bgPreviewSection.webp"
          alt="Foto Studio"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* overlay per leggibilità */}
        <div className="absolute inset-0 bg-black/25 sm:bg-black/30" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-start gap-5">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full border border-white/20
                       bg-white/10 px-4 py-2 backdrop-blur-md"
          >
            <span className="text-red-400 text-lg font-light">&gt;</span>

            <span
              className={`${fontSans.className}
                          text-sm
                          tracking-[0.18em]
                          uppercase
                          text-white/80`}
            >
              anteprima
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className={`${fontSerif.className}
                        text-4xl
                        sm:text-5xl
                        lg:text-6xl
                        text-white/95`}
          >
            Progetti
          </motion.h2>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* SINISTRA */}
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
              <div className="absolute inset-0 -z-10 backdrop-blur-md" aria-hidden="true" />

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
                    className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full
                               border border-white/20 bg-black/30 px-3 py-1.5
                               text-xs tracking-[0.18em] uppercase text-white/80 backdrop-blur-md"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400/90" />
                    {featured.tag}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className={`${fontSerif.className} text-2xl sm:text-3xl text-white/95`}>
                      {featured.title}
                    </div>

                    <div className={`${fontSans.className} mt-1 text-sm uppercase text-right text-white/70`}>
                      Scopri →
                    </div>
                  </div>
                </div>
              </a>
            </motion.article>

            {/* APPROFONDIMENTO (Brendola + player) */}
            <motion.article
              style={{ y: yTitle, willChange: "transform" }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className={`${cardBase} ${reduceMotion ? "" : "rotate-[0.35deg]"}
                          bg-white/55
                          shadow-[0_14px_50px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.45)]`}
              whileHover={cardHover}
            >
              <div className="absolute inset-0 -z-10 backdrop-blur-md" aria-hidden="true" />

              <div className="relative p-6 sm:p-7 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" aria-hidden="true" />
                  <div className="h-px flex-1 bg-black/10" aria-hidden="true" />
                  <div className={`${fontSans.className} text-xs tracking-[0.18em] uppercase text-black/55`}>
                    in primo piano
                  </div>
                </div>

                <div>
                  <div className={`${fontSerif.className} text-2xl text-black/85`}>Brendola</div>

                  <div className={`${fontSans.className} mt-2 text-sm leading-relaxed text-black/60`}>
                    Realizzazione campo da calcio in erba sintetica.
                  </div>
                </div>

                {/* PLAYER */}
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="group relative w-full rounded-2xl border border-black/15
                             bg-neutral-950/85 px-5 py-4 text-left
                             shadow-[0_14px_44px_rgba(0,0,0,0.22)]
                             transition hover:bg-neutral-950/92"
                  aria-label="Guarda il video"
                >
                  <div className="flex items-center gap-5">
                    <span
                      className="relative grid place-items-center h-12 w-12 rounded-full
                                 bg-emerald-500/90 text-white
                                 shadow-[0_10px_26px_rgba(0,0,0,0.22)]
                                 transition group-hover:scale-[1.03]"
                      aria-hidden="true"
                    >
                      <PlayIcon className="w-7 h-7 text-white" />
                    </span>

                    <div className="flex-1">
                      <div className={`${fontSans.className} font-semibold tracking-wide text-white/92`}>
                        Guarda il video
                      </div>

                      <div className={`${fontSans.className} mt-1 text-sm text-white/60`}>
                        Drone cantiere (con audio)
                      </div>
                    </div>
                  </div>

                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{
                      boxShadow: reduceMotion ? "none" : "inset 0 0 0 1px rgba(255,255,255,0.06)",
                    }}
                    aria-hidden="true"
                  />
                </button>

                <div className="flex items-center justify-between">
                  <div className="h-px flex-1 bg-black/10" />

                  <a
                    href="/progetti"
                    className={`${fontSans.className}
                                ml-4 text-xs tracking-[0.18em] uppercase
                                text-black/55 hover:text-black/75 transition`}
                  >
                    approfondimento →
                  </a>
                </div>
              </div>
            </motion.article>
          </div>

          {/* DESTRA */}
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
                <div className="absolute inset-0 -z-10 backdrop-blur-md" aria-hidden="true" />

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
                          : "transition-transform duration-1400 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.05]"
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

      {/* MODAL VIDEO (PORTAL su body: fixed = viewport reale) */}
      {mounted && isVideoOpen &&
        createPortal(
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/75 px-4 sm:px-6
                       flex items-center justify-center"
            style={{ minHeight: "100svh" }}
            role="dialog"
            aria-modal="true"
            aria-label="Video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setIsVideoOpen(false);
            }}
          >
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="fixed z-[10000]
                         top-[calc(env(safe-area-inset-top)+1rem)]
                         right-4 sm:right-6
                         rounded-full bg-white/10 hover:bg-white/20
                         border border-white/15 text-white
                         px-3 py-2 text-sm transition"
              aria-label="Chiudi video"
            >
              Chiudi ✕
            </button>

            <motion.div
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-black
                         shadow-[0_20px_80px_rgba(0,0,0,0.60)]
                         border border-white/10"
              initial={{ scale: reduceMotion ? 1 : 0.985, y: reduceMotion ? 0 : 8 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <video
                src={videoSrc}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="w-full h-auto max-h-[78svh]"
              />
            </motion.div>
          </motion.div>,
          document.body
        )}
    </section>
  );
}
