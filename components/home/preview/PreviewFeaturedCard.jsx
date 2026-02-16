"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { cardBase } from "@/components/home/preview/previewStyles";

export default function PreviewFeaturedCard({ featured, fontSans, fontSerif, reduceMotion, hoverAnim }) {
  return (

    <motion.article
      style={{ y: featured.y, willChange: "transform" }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className={`${cardBase} ${reduceMotion ? "" : "rotate-[-0.6deg]"}`}
      whileHover={hoverAnim}
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

            <div className={`${fontSerif}
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
