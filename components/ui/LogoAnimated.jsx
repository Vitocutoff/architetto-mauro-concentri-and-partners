// /components/ui/LogoAnimated.jsx

"use client";

import { motion } from "framer-motion";

import { fontCursive, fontMono, fontMonoSpecial } from "@/lib/fonts";

export default function LogoAnimated() {
  return (

    <div
      className="flex
                 items-baseline
                 gap-2
                 select-none
                 whitespace-nowrap"
    >

      <motion.span
        className="shrink-0
                   text-blue-900
                   font-bold
                   tracking-widest
                   text-[11px]
                   min-[480px]:text-xs
                   min-[820px]:text-sm"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >

        <span
          className={`${fontMonoSpecial.className}
                      font-extrabold`}
        >
          A

        </span>

        <span
          className={`${fontMono.className}`}
        >

          rchitetto

        </span>

      </motion.span>

      <motion.span
        className={`${fontCursive.className}
                    text-neutral-900
                    tracking-wide
                    text-2xl
                    min-[480px]:text-xl
                    md:text-3xl
                    min-[1280px]:text-4xl`}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
      >

        Mauro Concentri

      </motion.span>

      <motion.span
        className={`${fontCursive.className}
                    shrink-0
                    text-red-700
                    tracking-normal
                    text-2xl
                    min-[480px]:text-xl
                    md:text-3xl
                    min-[1280px]:text-3xl`}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
      >

        &amp; Partners

      </motion.span>

    </div>

  );

}
