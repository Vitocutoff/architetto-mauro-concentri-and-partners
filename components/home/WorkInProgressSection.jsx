"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fontSans, fontSerif } from "@/lib/fonts";

export default function WorkInProgressSection() {
  /* --- VARIANTI --- */
  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1, filter: "blur(8px)", x: -40 },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      x: 0,
      transition: { duration: 1.3, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, rotateX: 15 },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 1, ease: [0.25, 0.8, 0.25, 1], delay: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 140, damping: 12, delay: 1 },
    },
    idle: {
      y: [0, -3, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
    hover: {
      scale: 1.08,
      boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
      transition: { type: "spring", stiffness: 200, damping: 10 },
    },
  };

  /* --- EFFETTO 3D --- */
  const card3D = {
    rest: { scale: 1, rotateX: 0, rotateY: 0, transition: { duration: 0.6 } },
    hover: {
      scale: 1.02,
      rotateX: -3,
      rotateY: 3,
      boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (

    <section
      role="region"
      aria-label="Sezione Work in Progress"
      className="relative flex items-center
                 overflow-hidden py-20 lg:py-32"
    >

      {/* SFONDO CHIARO RADIALE */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(circle at 30% 30%, #ffffff 0%, #f4f4f4 45%, #e9e9e9 100%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* BAGLIORE ROSSO SOFT RIDOTTO */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.03, 0.1, 0.03] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(circle at 50% 35%, rgba(255, 60, 60, 0.15) 0%, transparent 60%)",
        }}
      />

      {/* CONTENUTO */}
      <div
        className="relative z-10 max-w-7xl
                   mx-auto px-6 w-full"
      >

        <motion.div
          variants={card3D}
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="flex flex-col lg:flex-row
                     rounded-2xl overflow-hidden
                     shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                     bg-linear-to-br from-neutral-900
                     via-neutral-950 to-black border
                     border-white/60 backdrop-blur-md
                     transition-transform duration-700"
        >

          {/* IMMAGINE */}
          <motion.div
            className="lg:w-3/4 relative overflow-hidden aspect-video"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <Image
              src="/images/workImg.jpg"
              alt="Progetto architettonico in corso"
              fill
              sizes="(max-width: 768px) 100vw, 75vw"
              quality={90}
              className="object-cover"
              loading="lazy"
            />

            {/* OVERLAY */}
            <div
              className="absolute inset-0 bg-linear-to-r
                         from-black/20 via-black/10 to-transparent"
            />

            {/* BAGLIORE DINAMICO */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(255,40,0,0.1) 45%, rgba(255,60,0,0.15) 50%, rgba(255,40,0,0.1) 55%, transparent 100%)",
                backgroundSize: "200% 200%",
                mixBlendMode: "screen",
              }}
            />

          </motion.div>

          {/* TESTO + BOTTONE */}
          <div
            className="p-10 lg:p-12 flex
                       flex-col justify-center
                       items-center text-center
                       lg:w-1/3"
          >

            <motion.h3
              className={`${fontSerif.className}
                          text-4xl lg:text-5xl font-light
                          text-white mb-8 tracking-tight
                          leading-tight`}
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              Work in <span className="text-red-500">Progress</span>

            </motion.h3>

            <motion.p
              className={`${fontSans.className}
                          text-neutral-300 text-base font-light
                          max-w-xs mb-10`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            >

              Progetti attualmente in corso di realizzazione: segno di una continua ricerca
              e di un percorso professionale in evoluzione.

            </motion.p>

            <motion.a
              href="#"
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              animate="idle"
              whileHover="hover"
              viewport={{ once: true }}
              className={`${fontSans.className}
                          px-6 py-2 text-lg font-semibold
                          bg-white text-black rounded-xl
                          shadow-lg hover:bg-gray-200
                          focus-visible:ring-2
                          focus-visible:ring-white/70
                          transition`}
            >

              Scopri

            </motion.a>

          </div>

        </motion.div>

      </div>

    </section>

  );

}
