"use client";

import { motion } from "framer-motion";

import { cardBase } from "@/components/home/preview/previewStyles";
import PlayIcon from "@/components/home/preview/PlayIcon";

export default function PreviewHighlightCard({ y, fontSans, fontSerif, reduceMotion, hoverAnim, onOpenVideo }) {
  return (

    <motion.article
      style={{ y, willChange: "transform" }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className={`${cardBase} ${reduceMotion ? "" : "rotate-[0.35deg]"}
                  bg-white/55
                  shadow-[0_14px_50px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.45)]`}
      whileHover={hoverAnim}
    >

      <div
        className="absolute
                   inset-0
                   -z-10
                   backdrop-blur-md"
        aria-hidden="true"
      />

      <div
        className="relative
                   p-6
                   sm:p-7
                   flex
                   flex-col
                   gap-5"
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
                       bg-emerald-500/80"
            aria-hidden="true"
          />

          <div
            className="h-px
                       flex-1
                       bg-black/10"
            aria-hidden="true"
          />

          <div
            className={`${fontSans}
                        text-xs
                        tracking-[0.18em]
                        uppercase
                        text-black/55`}
          >

            in primo piano

          </div>

        </div>

        <div>
          <div
            className={`${fontSerif}
                        text-2xl
                        text-black/85`}
          >

            Brendola

          </div>

          <div
            className={`${fontSans}
                        mt-2
                        text-sm
                        leading-relaxed
                        text-black/60`}
          >

            Rifacimento campo da calcio in erba sintetica.

          </div>

        </div>

        {/* PLAYER */}
        <button
          type="button"
          onClick={onOpenVideo}
          className="group
                     relative
                     w-full
                     rounded-2xl
                     border
                     border-black/15
                     bg-neutral-950/85
                     px-5
                     py-4
                     text-left
                     shadow-[0_14px_44px_rgba(0,0,0,0.22)]
                     transition
                     hover:bg-neutral-950/92"
          aria-label="Guarda il video"
        >

          <div
            className="flex
                       items-center
                       gap-5"
          >

            <span
              className="relative
                         grid
                         place-items-center
                         h-12
                         w-12
                         rounded-full
                         bg-emerald-500/90
                         text-white
                         shadow-[0_10px_26px_rgba(0,0,0,0.22)]
                         transition
                         group-hover:scale-[1.03]"
              aria-hidden="true"
            >

              <PlayIcon
                className="w-7
                           h-7
                           text-white"
              />

            </span>

            <div
              className="flex-1"
            >

              <div
                className={`${fontSans}
                            font-semibold
                            tracking-wide
                            text-white/92`}
              >

                Guarda il video

              </div>

              <div
                className={`${fontSans}
                            mt-1
                            text-sm
                            text-white/60`}
              >

                Video cantiere

              </div>

            </div>

          </div>

          <div
            className="pointer-events-none
                       absolute
                       inset-0
                       rounded-2xl"
            style={{
              boxShadow: reduceMotion ? "none" : "inset 0 0 0 1px rgba(255,255,255,0.06)",
            }}
            aria-hidden="true"
          />

        </button>

        <div
          className="flex
                     items-center
                     justify-between"
        >

          <div
            className="h-px
                       flex-1
                       bg-black/10"
          />

          <a
            href="/progetti"
            className={`${fontSans}
                        ml-4
                        text-xs
                        tracking-[0.18em]
                        uppercase
                        text-black/55
                        hover:text-black/75
                        transition`}
          >

            approfondimento →

          </a>

        </div>

      </div>

    </motion.article>

  );

}
