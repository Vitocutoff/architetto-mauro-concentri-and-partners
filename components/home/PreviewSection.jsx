"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useReducedMotion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { fontSans, fontSerif } from "@/lib/fonts";

function PlayIcon({ className = "" }) {
  return (

    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >

      <path
        d="M9 7.25v9.5l8.5-4.75L9 7.25Z"
        fill="currentColor"
      />

    </svg>

  );

}

export default function PreviewSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.25 });

  const [isVideoOpen, setIsVideoOpen] = useState(false);

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

  // ✅ Base card: niente blur sul wrapper trasformato (evita flicker)
  const cardBase =
    "relative rounded-2xl overflow-hidden border border-white/14 bg-white/12 shadow-[0_18px_70px_rgba(0,0,0,0.28)] transform-gpu [backface-visibility:hidden] [transform-style:preserve-3d] isolate";

  const cardHover = reduceMotion
    ? {}
    : {
        y: -6,
        rotate: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
      };

  // ✅ Overlay video: ESC + scroll lock
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

  const videoSrc = "/videos/drone.mp4";

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
      <div
        className="absolute
                   inset-0
                   -z-10"
        aria-hidden="true"
      >

        <Image
          src="/backgrounds/bgPreviewSection.webp"
          alt="Foto Studio"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover
                     object-center"
        />

        <div
          className="absolute
                     inset-0
                     bg-black/18
                     sm:bg-black/22"
        />

        <div
          className="absolute
                     inset-0
                     bg-radial
                     from-white/12
                     via-transparent
                     to-black/45"
        />

      </div>

      <div
        className="mx-auto
                   w-full
                   max-w-7xl
                   px-4
                   sm:px-6
                   lg:px-12"
      >

        {/* Header */}
        <div
          className="flex
                     flex-col
                     items-start
                     gap-5"
        >

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="inline-flex
                       items-center
                       gap-3
                       rounded-full
                       border
                       border-white/18
                       bg-white/10
                       px-4
                       py-2
                       backdrop-blur-md"
          >

            <span
              className="text-white/70
                         text-lg
                         font-light"
            >

              &gt;

            </span>

            <span
              className={`${fontSans.className}
                          text-sm
                          tracking-[0.18em]
                          uppercase
                          text-white/70`}
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
                        text-white/92`}
          >

            Progetti

          </motion.h2>

        </div>

        <div
          className="mt-12
                     grid
                     grid-cols-1
                     lg:grid-cols-12
                     gap-8
                     lg:gap-10"
        >

          {/* SINISTRA */}
          <div
            className="lg:col-span-7
                       flex
                       flex-col
                       gap-8"
          >

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

              {/* blur layer statico (ok qui) */}
              <div
                className="absolute
                           inset-0
                           -z-10
                           backdrop-blur-md"
                aria-hidden="true"
              />

              <a
                href={featured.link}
                className="block"
              >

                <div
                  className="relative
                             h-72
                             sm:h-80
                             lg:h-112"
                >

                  <Image
                    src={featured.img}
                    alt={`Anteprima progetto: ${featured.title}`}
                    fill
                    priority={false}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover
                               object-center"
                  />

                  <div
                    className="absolute
                               inset-0
                               bg-linear-to-t
                               from-black/70
                               via-black/20
                               to-transparent"
                  />

                  <div
                    className="absolute
                               left-5
                               top-5
                               inline-flex
                               items-center
                               gap-2
                               rounded-full
                               border
                               border-white/18
                               bg-black/30
                               px-3
                               py-1.5
                               text-xs
                               tracking-[0.18em]
                               uppercase
                               text-white/80
                               backdrop-blur-md"
                  >

                    <span
                      className="h-1.5
                                 w-1.5
                                 rounded-full
                                 bg-cyan-300/90"
                    />

                    {featured.tag}

                  </div>

                  <div
                    className="absolute
                               bottom-5
                               left-5
                               right-5"
                  >

                    <div
                      className={`${fontSerif.className}
                                  text-2xl
                                  sm:text-3xl
                                  text-white/95`}
                    >

                      {featured.title}

                    </div>

                    <div
                      className={`${fontSans.className}
                                  mt-1
                                  text-sm
                                  uppercase
                                  text-right
                                  text-white/70`}
                    >

                      Scopri →

                    </div>

                  </div>

                </div>

              </a>

            </motion.article>

            {/* APPROFONDIMENTO (Brendola + video overlay) */}
            <motion.article
              style={{ y: yTitle, willChange: "transform" }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className={`${cardBase} ${reduceMotion ? "" : "rotate-[0.35deg]"}`}
              whileHover={cardHover}
            >

              {/* ✅ blur layer statico */}
              <div
                className="absolute
                           inset-0
                           -z-10
                           backdrop-blur-md"
                aria-hidden="true"
              />

              {/* ✅ contenuto “solido” per distinguere dal player */}
              <div
                className="relative
                           p-6
                           sm:p-7"
              >

                <div
                  className="flex
                             items-center
                             gap-3"
                >

                  <span
                    className="h-1.5
                               w-1.5
                               rounded-full
                               bg-cyan-300/90"
                    aria-hidden="true"
                  />

                  <div
                    className="h-px
                               flex-1
                               bg-white/14"
                    aria-hidden="true"
                  />

                  <div
                    className={`${fontSans.className}
                                text-xs
                                tracking-[0.18em]
                                uppercase
                                text-white/70`}
                  >

                    approfondimento

                  </div>

                </div>

                <div
                  className={`${fontSerif.className}
                              mt-4
                              text-2xl
                              text-white/92`}
                >

                  Brendola

                </div>

                <div
                  className={`${fontSans.className}
                              mt-2
                              text-sm
                              leading-relaxed
                              text-white/70`}
                >

                  Realizzazione campo da calcio in erba sintetica (drone).

                </div>

                {/* ✅ “player tile” separato (no glass su glass) */}
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="group mt-5
                             w-full
                             rounded-2xl
                             overflow-hidden
                             border
                             border-white/16
                             bg-neutral-950/55
                             shadow-[0_18px_60px_rgba(0,0,0,0.40)]
                             transition
                             hover:border-white/22
                             focus-visible:outline-none
                             focus-visible:ring-2
                             focus-visible:ring-white/50"
                  aria-label="Guarda il video (si apre in overlay)"
                >

                  <div
                    className="relative
                               aspect-video
                               w-full"
                  >

                    <Image
                      src="/backgrounds/bgCardCampi.webp"
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover
                                 object-center
                                 opacity-85
                                 transition-transform
                                 duration-700
                                 group-hover:scale-[1.03]"
                      priority={false}
                    />

                    <div
                      className="absolute
                                 inset-0
                                 bg-linear-to-t
                                 from-black/75
                                 via-black/20
                                 to-transparent"
                      aria-hidden="true"
                    />

                    {/* Play (no rosso, alone più contenuto) */}
                    <div
                      className="absolute
                                 inset-0
                                 grid
                                 place-items-center"
                    >

                      <motion.span
                        className="relative
                                   grid
                                   place-items-center
                                   h-12
                                   w-12
                                   rounded-full
                                   bg-cyan-500/90
                                   text-white
                                   shadow-[0_10px_34px_rgba(0,180,255,0.28)]"
                        whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 260, damping: 18 }}
                      >

                        <span
                          className="absolute
                                     inset-0
                                     rounded-full"
                          style={{
                            boxShadow: "0 0 0 10px rgba(0,180,255,0.10)",
                          }}
                          aria-hidden="true"
                        />

                        <span className="ml-0.5">

                          <PlayIcon
                            className="w-5.5
                                       h-5.5
                                       text-white"
                          />

                        </span>

                      </motion.span>

                    </div>

                    <div
                      className="absolute
                                 bottom-3
                                 left-4
                                 right-4
                                 flex
                                 items-center
                                 justify-between"
                    >

                      <div
                        className={`${fontSans.className}
                                    text-xs
                                    tracking-[0.18em]
                                    uppercase
                                    text-white/80`}
                      >

                        guarda il video

                      </div>

                      <div
                        className={`${fontSans.className}
                                    text-xs
                                    text-white/65`}
                        aria-hidden="true"
                      >

                        ↗

                      </div>

                    </div>

                  </div>

                </button>

              </div>

            </motion.article>

          </div>

          {/* DESTRA */}
          <div
            className="lg:col-span-5
                       flex
                       flex-col
                       gap-8"
          >

            {cards.map((c, idx) => (

              <motion.article
                key={c.title}
                style={{ y: c.y, willChange: "transform" }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className={`${cardBase} ${
                  reduceMotion
                    ? ""
                    : idx === 0
                      ? "rotate-[0.6deg]"
                      : idx === 1
                        ? "rotate-[-0.4deg]"
                        : "rotate-[0.3deg]"
                }`}
                whileHover={cardHover}
              >

                <div
                  className="absolute
                             inset-0
                             -z-10
                             backdrop-blur-md"
                  aria-hidden="true"
                />

                <a
                  href={c.link}
                  className="block"
                >

                  <div
                    className="relative
                               h-52
                               sm:h-56
                               overflow-hidden"
                  >

                    <Image
                      src={c.img}
                      alt={`Anteprima progetto: ${c.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className={`object-cover object-center ${
                        reduceMotion
                          ? ""
                          : "transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                      }`}
                      loading="lazy"
                      decoding="async"
                    />

                    <div
                      className="absolute
                                 inset-0
                                 bg-linear-to-t
                                 from-black/70
                                 via-black/18
                                 to-transparent"
                    />

                    <div
                      className="absolute
                                 bottom-4
                                 left-4
                                 right-4
                                 flex
                                 items-end
                                 justify-between
                                 gap-4"
                    >

                      <div
                        className={`${fontSerif.className}
                                    text-xl
                                    text-white/95`}
                      >

                        {c.title}

                      </div>

                      <div
                        className={`${fontSans.className}
                                    text-xs
                                    tracking-[0.18em]
                                    uppercase
                                    text-white/75`}
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

      {/* MODAL VIDEO */}
      {isVideoOpen && (

        <motion.div
          className="fixed
                     inset-0
                     z-200
                     bg-black/70
                     px-4
                     py-6
                     sm:py-10"
          role="dialog"
          aria-modal="true"
          aria-label="Video"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setIsVideoOpen(false);
          }}
        >

          <div
            className="absolute
                       inset-0
                       pointer-events-none
                       bg-linear-to-b
                       from-white/10
                       via-transparent
                       to-transparent"
            aria-hidden="true"
          />

          <button
            type="button"
            onClick={() => setIsVideoOpen(false)}
            className="fixed
                       z-210
                       top-[calc(env(safe-area-inset-top)+1rem)]
                       right-4
                       sm:right-6
                       rounded-full
                       bg-white/10
                       hover:bg-white/20
                       border
                       border-white/15
                       text-white
                       px-3
                       py-2
                       text-sm
                       transition"
            aria-label="Chiudi video"
          >

            Chiudi ✕

          </button>

          {/* ✅ Centratissimo */}
          <div
            className="relative
                       mx-auto
                       flex
                       min-h-[calc(100vh-6rem)]
                       items-center
                       justify-center"
          >

            <motion.div
              className="relative
                         w-full
                         max-w-5xl
                         rounded-2xl
                         overflow-hidden
                         bg-black
                         shadow-[0_20px_80px_rgba(0,0,0,0.6)]
                         border
                         border-white/10"
              initial={{ scale: reduceMotion ? 1 : 0.98, y: reduceMotion ? 0 : 8 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
              onMouseDown={(e) => e.stopPropagation()}
            >

              <video
                src={videoSrc}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="w-full
                           h-auto"
              />

            </motion.div>

          </div>

        </motion.div>

      )}

    </section>

  );

}
