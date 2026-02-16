"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { cardBase } from "@/components/home/preview/previewStyles";

export default function PreviewSideCards({ cards, fontSans, fontSerif, reduceMotion, hoverAnim }) {
  return (

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
          className={`group ${cardBase} ${
            reduceMotion
              ? ""
              : idx === 0
                ? "rotate-[0.6deg]"
                : idx === 1
                  ? "rotate-[-0.4deg]"
                  : "rotate-[0.3deg]"
          }`}
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
                    : "transition-transform duration-1400 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.05]"
                }`}
                loading="lazy"
                decoding="async"
              />

              <div
                className="absolute
                           inset-0
                           bg-linear-to-t
                           from-black/45
                           via-black/10
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
                  className={`${fontSerif}
                              text-xl
                              text-white/95`}
                >

                  {c.title}

                </div>

                <div
                  className={`${fontSans}
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

  );

}
