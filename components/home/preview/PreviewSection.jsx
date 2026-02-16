"use client";

import { motion, useScroll, useTransform, useSpring, useReducedMotion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { fontSans, fontSerif } from "@/lib/fonts";

import PreviewBackground from "@/components/home/preview/PreviewBackground";
import PreviewHeader from "@/components/home/preview/PreviewHeader";
import PreviewFeaturedCard from "@/components/home/preview/PreviewFeaturedCard";
import PreviewHighlightCard from "@/components/home/preview/PreviewHighlightCard";
import PreviewSideCards from "@/components/home/preview/PreviewSideCards";
import PreviewVideoModal from "@/components/home/preview/PreviewVideoModal";

export default function PreviewSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const videoSrc = "/videos/drone.mp4";

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const springCfg = { stiffness: 50, damping: 30, mass: 0.9 };

  const yFeaturedT = useTransform(scrollYProgress, [0, 1], [5, -7]);
  const yTitleT = useTransform(scrollYProgress, [0, 1], [7, -9]);
  const yAT = useTransform(scrollYProgress, [0, 1], [9, -11]);
  const yBT = useTransform(scrollYProgress, [0, 1], [7, -13]);
  const yCT = useTransform(scrollYProgress, [0, 1], [11, -9]);

  const yFeaturedS = useSpring(yFeaturedT, springCfg);
  const yTitleS = useSpring(yTitleT, springCfg);
  const yAS = useSpring(yAT, springCfg);
  const yBS = useSpring(yBT, springCfg);
  const yCS = useSpring(yCT, springCfg);

  const y0 = useMotionValue(0);

  const yFeatured = reduceMotion ? y0 : yFeaturedS;
  const yTitle = reduceMotion ? y0 : yTitleS;
  const yA = reduceMotion ? y0 : yAS;
  const yB = reduceMotion ? y0 : yBS;
  const yC = reduceMotion ? y0 : yCS;

  const hoverAnim = reduceMotion
    ? { y: -2, transition: { duration: 0.25, ease: "easeOut" } }
    : { y: -6, rotate: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } };

  const featured = {
    img: "/backgrounds/bgCardCampi.webp",
    title: "Campi da Calcio in Erba Sintetica",
    link: "/progetti",
    tag: "Selezione",
    y: yFeatured,
  };

  const cards = [
    { img: "/backgrounds/bgCardPalestre.webp", title: "Palestre & Palazzetti", link: "/progetti", y: yA },
    { img: "/backgrounds/bgCardAtletica.webp", title: "Impianti di Atletica Leggera", link: "/progetti", y: yB },
    { img: "/backgrounds/bgCardPiscine.webp", title: "Acquapark & Piscine", link: "/progetti", y: yC },
  ];

  useEffect(() => {
    if (!isVideoOpen) return;

    const onKeyDown = (e) => e.key === "Escape" && setIsVideoOpen(false);
    window.addEventListener("keydown", onKeyDown);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [isVideoOpen]);

  return (

    <section
      ref={sectionRef}
      role="region"
      aria-label="Anteprima dei progetti"
      className="relative
                 w-screen
                 left-1/2
                 -translate-x-1/2
                 overflow-hidden
                 py-18
                 sm:py-20
                 lg:py-24"
    >

      <PreviewBackground />

      <div
        className="mx-auto
                   w-full
                   max-w-7xl
                   px-4
                   sm:px-6
                   lg:px-12"
      >

        <PreviewHeader
          fontSans={fontSans.className}
          fontSerif={fontSerif.className}
        />

        <div className="mt-12
                        grid
                        grid-cols-1
                        lg:grid-cols-12
                        gap-8
                        lg:gap-10"
        >

          {/* SINISTRA */}
          <div
            className="lg:col-span-7
                       flex
                       flex-col
                       gap-8"
          >

            <PreviewFeaturedCard
              featured={featured}
              fontSans={fontSans.className}
              fontSerif={fontSerif.className}
              reduceMotion={reduceMotion}
              hoverAnim={hoverAnim}
            />

            <PreviewHighlightCard
              y={yTitle}
              fontSans={fontSans.className}
              fontSerif={fontSerif.className}
              reduceMotion={reduceMotion}
              hoverAnim={hoverAnim}
              onOpenVideo={() => setIsVideoOpen(true)}
            />

          </div>

          {/* DESTRA */}
          <PreviewSideCards
            cards={cards}
            fontSans={fontSans.className}
            fontSerif={fontSerif.className}
            reduceMotion={reduceMotion}
            hoverAnim={hoverAnim}
          />

        </div>

      </div>

      <PreviewVideoModal
        open={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        reduceMotion={reduceMotion}
        videoSrc={videoSrc}
      />

    </section>

  );

}
