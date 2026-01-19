"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";
import { fontSans, fontSerif } from "@/lib/fonts";

/* Hook per tracciare lo scroll */
function useScrollY() {
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return scrollY;
}

export default function PreviewSection() {
  const scrollY = useScrollY();

  const sideTextY = useSpring(
    useTransform(scrollY, [0, 800], [0, -20]),
    { stiffness: 60, damping: 18 }
  );

  const cardY1 = useSpring(useTransform(scrollY, [0, 800], [0, -10]), { stiffness: 60, damping: 18 });
  const cardY2 = useSpring(useTransform(scrollY, [0, 800], [0, -15]), { stiffness: 60, damping: 18 });
  const cardY3 = useSpring(useTransform(scrollY, [0, 800], [0, -20]), { stiffness: 60, damping: 18 });
  const cardY4 = useSpring(useTransform(scrollY, [0, 800], [0, -25]), { stiffness: 60, damping: 18 });

  const cards = [
    { img: "/images/bgCard1.jpg", title: "Palazzetti", link: "#", motionY: cardY1 },
    { img: "/images/bgCard2.jpg", title: "Piste di Atletica", link: "#", motionY: cardY2 },
    { img: "/images/bgCard3.jpg", title: "Acquapark & Piscine", link: "#", motionY: cardY3 },
    { img: "/images/bgCard4.jpg", title: "Campi in Erba Sintetica", link: "#", motionY: cardY4 },
  ];

  /* 🧩 Hover 3D migliorato — movimenti più fluidi e naturali */
  const hover3D = {
    rest: {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      boxShadow: "0 8px 25px rgba(0,0,0,0.35)",
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
    hover: {
      scale: 1.03,
      rotateX: -2,
      rotateY: 2,
      boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
      transition: { duration: 1.1, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay: 0.6, ease: [0.42, 0, 0.58, 1] },
    },
    idle: {
      y: [0, -3, 0],
      transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
    },
    hover: {
      scale: 1.08,
      transition: { type: "spring", stiffness: 180, damping: 10 },
    },
  };

  return (
    <section
      role="region"
      aria-label="Anteprima dei progetti di impiantistica sportiva"
      className="relative flex items-start justify-center overflow-hidden py-20"
    >
      {/* SFONDO ANIMATO */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(135deg, #181818 0%, #101010 50%, #000000 100%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* LUCE DI TAGLIO */}
      <div className="absolute inset-0 bg-linear-to-t from-white/5 via-transparent to-transparent pointer-events-none" />

      {/* CONTENUTO */}
      <div className="w-full max-w-[95%] lg:max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-20 px-6 lg:px-12">
        {/* SCRITTA LATERALE */}
        <motion.div
          style={{ y: sideTextY }}
          initial={{ opacity: 0, x: -60, rotateY: 45 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex flex-col justify-start w-[8%]"
        >
          <motion.h2
            className={`${fontSans.className} text-neutral-100/90 text-[6vw]
                        uppercase tracking-[0.15em] font-extrabold
                        [writing-mode:vertical-rl] rotate-180 leading-none`}
            whileHover={{
              textShadow:
                "0 0 8px rgba(255,255,255,0.8), 0 0 16px rgba(255,255,255,0.3)",
              scale: 1.05,
              transition: { duration: 1, ease: "easeInOut" },
            }}
            style={{ marginTop: "8vh" }}
          >
            impianti
            <br />
            sportivi
          </motion.h2>
        </motion.div>

        {/* COLONNA DESTRA */}
        <div className="flex flex-col justify-start items-center lg:items-end w-full lg:w-[90%]">
          <motion.h2
            className={`${fontSerif.className} text-4xl lg:text-6xl text-sky-600 mb-14 self-center lg:self-end drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-red-500/80 text-3xl lg:text-6xl font-light mr-4">
              &gt;
            </span>
            preview
          </motion.h2>

          {/* GRIGLIA CARD */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-14 w-full max-w-4xl">
            {cards.map((card) => (
              <motion.div
                key={card.title}
                variants={hover3D}
                initial="rest"
                whileHover="hover"
                animate="rest"
                style={{ y: card.motionY }}
                className="rounded-xl overflow-hidden flex flex-col border border-white/10 bg-neutral-900/70 backdrop-blur-lg shadow-[0_8px_25px_rgba(0,0,0,0.35)] transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group"
              >
                {/* Immagine fluida sincronizzata con hover */}
                <motion.div
                  className="relative w-full h-56 lg:h-64 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                >
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.25 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 80%)",
                    }}
                  />
                  <Image
                    src={card.img}
                    alt={`Anteprima progetto: ${card.title}`}
                    width={400}
                    height={400}
                    decoding="async"
                    className="object-cover w-full h-full transition-transform duration-1400 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
                    loading="lazy"
                  />
                </motion.div>

                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className={`${fontSerif.className} text-xl mb-8 text-center font-light text-neutral-200/95`}
                  >
                    {card.title}
                  </h3>

                  <motion.a
                    href={card.link}
                    variants={buttonVariants}
                    initial="hidden"
                    whileInView="visible"
                    animate="idle"
                    whileHover="hover"
                    viewport={{ once: true }}
                    className={`${fontSans.className}
                                mx-auto mt-auto px-5 py-2 font-bold
                                bg-neutral-200 text-black rounded-xl
                                shadow-md hover:bg-neutral-300
                                focus-visible:ring-2 focus-visible:ring-white/80
                                transition-colors duration-300`}
                  >
                    Scopri
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
