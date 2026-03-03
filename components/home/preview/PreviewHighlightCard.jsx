"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";
import Link from "next/link";

import { cardBase } from "@/components/home/preview/previewStyles";
import PlayIcon from "@/components/home/preview/PlayIcon";

function useHydrated() {
  return useSyncExternalStore(
    () => () => {}, // subscribe noop
    () => true,     // client
    () => false     // server
  );
}

export default function PreviewHighlightCard({ y, fontSans, fontSerif, reduceMotion: reduceMotionProp, hoverAnim, onOpenVideo }) {
  const hydrated = useHydrated();

  const reduceMotionHook = useReducedMotion();
  const reduceMotion =
    typeof reduceMotionProp === "boolean" ? reduceMotionProp : reduceMotionHook;

  const canMotion = hydrated && !reduceMotion;

  const motionStyle = canMotion
    ? { y, willChange: "transform" }
    : { willChange: "transform" };

  const rotateClass = canMotion ? "rotate-[0.35deg]" : "";
  const safeHover = canMotion ? hoverAnim : undefined;
  const safeWhileInView = canMotion ? { opacity: 1, y: 0 } : undefined;
  const safeTransition = canMotion
    ? { duration: 0.95, ease: [0.22, 1, 0.36, 1] }
    : undefined;

  const overlayBoxShadow = canMotion
    ? "inset 0 0 0 1px rgba(255,255,255,0.06)"
    : "none";

  return (

    <motion.article
      style={motionStyle}
      initial={false}
      animate={{ opacity: 1 }}
      whileInView={safeWhileInView}
      transition={safeTransition}
      viewport={{ once: true }}
      className={`${cardBase} ${rotateClass}
                  bg-white/55
                  shadow-[0_14px_50px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.45)]`}
      whileHover={safeHover}
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

                Video realizzazione

              </div>

            </div>

          </div>

          <div
            className="pointer-events-none
                       absolute
                       inset-0
                       rounded-2xl"
            style={{ boxShadow: overlayBoxShadow }}
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

          <Link
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

          </Link>

        </div>

      </div>

    </motion.article>

  );

}
