"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

import { fontCursive, fontSans, fontSerif } from "@/lib/fonts";

import IntroBackground from "@/components/home/intro/IntroBackground";
import IntroHeader from "@/components/home/intro/IntroHeader";
import IntroPortrait from "@/components/home/intro/IntroPortrait";
import IntroBio from "@/components/home/intro/IntroBio";

export default function IntroSection() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.35 });

  const fullText =
    "Dopo la laurea allo IUAV di Venezia nel 1989 ho iniziato la mia attività di professionista, occupandomi di urbanistica, edilizia privata, edilizia industriale e lavori pubblici soprattutto nel settore degli impianti sportivi.";
  const words = fullText.split(" ");

  const extraText1 =
    "Dal 2000 lavoro come Architetto Mauro Concentri & Partners, un gruppo di professionisti formato da me, dall’arch. Domenico Gabaldo e da SP Engineering Srl, direttore tecnico Ing. Francesco Piccioli. Ci occupiamo soprattutto di edilizia pubblica, con una specializzazione nell’impiantistica sportiva.";

  const extraText2 =
    "Dal 2000 al 2015 sono stato consulente provinciale CONI: quell’esperienza ha rafforzato competenze e visione dello studio e ha reso l’impiantistica sportiva uno dei nostri ambiti principali. Lavoriamo con un’organizzazione flessibile e una progettazione integrata tra specialisti che collaborano stabilmente da oltre 25 anni. Questo ci permette di seguire progetti anche molto diversi tra loro, garantendo una direzione lavori presente e continua in tutte le fasi di realizzazione.";

  return (

    <section
      ref={ref}
      role="region"
      aria-label="Introduzione e biografia professionale"
      className="relative
                 w-screen
                 left-1/2
                 -translate-x-1/2
                 min-h-screen
                 flex
                 items-start
                 justify-center
                 overflow-hidden
                 pt-16
                 sm:pt-18
                 lg:pt-20
                 pb-14
                 sm:pb-16
                 lg:pb-20"
    >

      <IntroBackground
        inView={inView}
        reduceMotion={reduceMotion}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative
                   z-10
                   w-full
                   mx-auto
                   px-4
                   sm:px-6
                   lg:px-8"
      >

        <div
          className="mx-auto
                     w-full
                     max-w-300"
        >

          <div
            className="grid
                       grid-cols-1
                       items-center
                       gap-10
                       md:text-center
                       md:justify-items-center
                       lg:grid-cols-12
                       lg:gap-12
                       lg:text-left
                       lg:justify-items-stretch"
          >

            <IntroHeader
              inView={inView}
              reduceMotion={reduceMotion}
              fontSerif={fontSerif.className}
              fontCursive={fontCursive.className}
            />

            <IntroPortrait
              inView={inView}
              reduceMotion={reduceMotion}
            />

          </div>

          <IntroBio
            inView={inView}
            reduceMotion={reduceMotion}
            fontSans={fontSans.className}
            words={words}
            extraText1={extraText1}
            extraText2={extraText2}
          />

        </div>

      </motion.div>

    </section>

  );

}
