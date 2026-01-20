"use client";

import { motion } from "framer-motion";
import { fontCursive, fontMonoSpecial } from "@/lib/fonts";

export default function LogoAnimated() {
  return (

    <div
      className="flex
                 items-center
                 gap-2
                 select-none"
    >

      <motion.span
        className={`${fontMonoSpecial.className}
                    text-blue-900/95
                    font-bold
                    text-sm
                    tracking-widest`}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >

        Architetto

      </motion.span>

      <motion.span
        className={`${fontCursive.className}
                    text-black/90
                    text-3xl
                    tracking-wide`}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      >

        Mauro Concentri

      </motion.span>

      <motion.span
        className={`${fontCursive.className}
                    text-red-900/90
                    tracking-normal
                    text-3xl`}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >

        &amp; Partners

      </motion.span>

    </div>

  );

}
