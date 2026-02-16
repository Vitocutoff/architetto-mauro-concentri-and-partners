"use client";

import { motion } from "framer-motion";

export default function PreviewHeader({ fontSans, fontSerif }) {
  return (

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
                   border-white/20
                   bg-white/10
                   px-4
                   py-2
                   backdrop-blur-md"
      >

        <span
          className="text-red-400
                     text-lg
                     font-light"
        >

          &gt;

        </span>

        <span
          className={`${fontSans}
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
        className={`${fontSerif}
                    text-4xl
                    sm:text-5xl
                    lg:text-6xl
                    text-white/95`}
      >

        Progetti

      </motion.h2>

    </div>

  );

}
