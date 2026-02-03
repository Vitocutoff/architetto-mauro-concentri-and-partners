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
      className="relative
                 w-screen
                 left-1/2
                 -translate-x-1/2
                 flex
                 items-center
                 overflow-hidden
                 py-20
                 lg:py-32"
    >

      {/* SFONDO BASE */}
      <div
        className="absolute
                   inset-0
                   -z-50
                   pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #f3f4f6 0%, #eef1f6 46%, #f6f2ea 72%, #eef4fb 100%)",
        }}
        aria-hidden="true"
      />

      {/* Griglia CAD soft */}
      <div
        className="absolute
                   inset-0
                   -z-50
                   pointer-events-none
                   [background-image:
                     linear-gradient(to_right,rgba(0,0,0,0.020)_1px,transparent_1px),
                     linear-gradient(to_bottom,rgba(0,0,0,0.018)_1px,transparent_1px)]
                   bg-size-[84px_84px]
                   opacity-16"
        aria-hidden="true"
      />

      {/* mask centrale */}
      <div
        className="absolute
                   inset-0
                   -z-40
                   pointer-events-none"
        aria-hidden="true"
      >

        <svg
          className="absolute
                     inset-0
                     h-full
                     w-full"
          viewBox="0 0 1000 700"
          preserveAspectRatio="none"
        >

          <defs>

            <mask
              id="cutCardAreaWipAsset"
            >

              <rect
                x="0"
                y="0"
                width="1000"
                height="700"
                fill="white"
              />

              <rect
                x="85"
                y="160"
                width="830"
                height="385"
                rx="38"
                fill="black"
              />

            </mask>

            <style>

              {`.wf1 { stroke: rgba(0,0,0,0.18); stroke-width: 1; vector-effect: non-scaling-stroke; }
                .wf2 { stroke: rgba(0,0,0,0.12); stroke-width: 1; vector-effect: non-scaling-stroke; stroke-dasharray: 6 6; }
                .wf3 { stroke: rgba(0,0,0,0.22); stroke-width: 2; vector-effect: non-scaling-stroke; }
                .txt { fill: rgba(0,0,0,0.22); font-size: 10px; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;  letter-spacing: 0.22em; }
                .node { fill: rgba(0,0,0,0.20); }`}

            </style>

          </defs>

          <g
            mask="url(#cutCardAreaWipAsset)"
          >

            <image
              href="/images/palazzetto-blueprint.png"
              x="0"
              y="0"
              width="1000"
              height="700"
              preserveAspectRatio="xMidYMid slice"
              opacity="0.28"
              style={{ mixBlendMode: "multiply" }}
            />

            {/* fallback wireframe */}
            <rect
              x="60"
              y="55"
              width="880"
              height="590"
              fill="transparent"
              className="wf1"
              opacity="0.55"
            />

            <line
              x1="60"
              y1="120"
              x2="940"
              y2="120"
              className="wf2"
              opacity="0.7"
            />

            <line
              x1="60"
              y1="610"
              x2="940"
              y2="610"
              className="wf2"
              opacity="0.7"
            />

            <line
              x1="120"
              y1="55"
              x2="120"
              y2="645"
              className="wf2"
              opacity="0.7"
            />

            <line
              x1="880"
              y1="55"
              x2="880"
              y2="645"
              className="wf2"
              opacity="0.7"
            />

            <g
              opacity="0.45"
            >

              <line
                x1="95"
                y1="165"
                x2="335"
                y2="165"
                className="wf3"
              />

              <line
                x1="95"
                y1="165"
                x2="95"
                y2="285"
                className="wf3"
              />

              <line
                x1="95"
                y1="285"
                x2="255"
                y2="285"
                className="wf3"
              />

              <path
                d="M255 285 A50 50 0 0 1 305 235"
                fill="none"
                className="wf1"
              />

              <line
                x1="255"
                y1="285"
                x2="305"
                y2="235"
                className="wf1"
              />

              <circle
                cx="210"
                cy="205"
                r="2.6"
                className="node"
              />

              <text
                x="95"
                y="150"
                className="txt"
              >

                PIANTA

              </text>

            </g>

            <g
              opacity="0.35"
            >

              <rect
                x="650"
                y="520"
                width="290"
                height="125"
                fill="transparent"
                className="wf1"
              />

              <path
                d="M665 625 L665 560 L720 560 L720 585 L780 585 L780 545 L920 545 L920 625 Z"
                fill="transparent"
                className="wf3"
              />

              <text
                x="650"
                y="508"
                className="txt"
              >

                DETTAGLIO

              </text>

            </g>

          </g>

        </svg>

        {/* velo leggero */}
        <div
          className="absolute
                     inset-0
                     bg-radial
                     from-white/70
                     via-transparent
                     to-black/10
                     opacity-55"
        />

      </div>

      {/* Wrapper contenuto */}
      <div
        className="relative
                   z-10
                   mx-auto
                   w-full
                   max-w-7xl
                   px-4
                   sm:px-6
                   lg:px-12"
      >

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
            background: "linear-gradient(135deg, #0b1220 0%, #062a33 38%, #071318 100%)",
          }}
        >

          <div
            className="pointer-events-none
                       absolute
                       inset-1px
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
              src="/images/workImg.jpg"
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
                         to-transparent"
            />

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
                background: "linear-gradient(315deg, rgba(2,6,23,0.60) 0%, rgba(8,47,73,0.18) 55%, transparent 100%)",
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

          <div className="p-10
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
                          mb-8 tracking-tight
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

      </div>

    </section>

  );

}
