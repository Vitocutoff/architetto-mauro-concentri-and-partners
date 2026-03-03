"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";

import { cardBase } from "@/components/home/preview/previewStyles";

function useHydrated() {
  return useSyncExternalStore(
    () => () => {}, // subscribe noop
    () => true,     // client
    () => false     // server
  );
}

export default function PreviewFeaturedCard({ featured, fontSans, fontSerif, reduceMotion: reduceMotionProp, hoverAnim }) {
  const hydrated = useHydrated();

  // fallback
  const reduceMotionHook = useReducedMotion();
  const reduceMotion =
    typeof reduceMotionProp === "boolean" ? reduceMotionProp : reduceMotionHook;

  const canMotion = hydrated && !reduceMotion;

  const motionStyle = canMotion
    ? { y: featured.y, willChange: "transform" }
    : { willChange: "transform" };

  const rotateClass = canMotion ? "rotate-[-0.6deg]" : "";
  const safeHover = canMotion ? hoverAnim : undefined;
  const safeWhileInView = canMotion ? { opacity: 1, y: 0 } : undefined;
  const safeTransition = canMotion
    ? { duration: 1.0, ease: [0.22, 1, 0.36, 1] }
    : undefined;

  return (

    <motion.article
      style={motionStyle}
      initial={false}
      animate={{ opacity: 1 }}
      whileInView={safeWhileInView}
      transition={safeTransition}
      viewport={{ once: true }}
      className={`${cardBase} ${rotateClass}`}
      whileHover={safeHover}
    >

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
                       from-black/55
                       via-black/15
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
                       border-white/20
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
                         bg-red-400/90"
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
              className={`${fontSerif}
                          text-2xl
                          sm:text-3xl
                          text-white/95`}
            >

              {featured.title}

            </div>

            <div
              className={`${fontSans}
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

  );

}
