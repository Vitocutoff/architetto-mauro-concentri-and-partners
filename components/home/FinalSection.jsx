"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fontSans, fontSerif } from "@/lib/fonts";

export default function FinalSection() {
  return (
    <section
      role="region"
      aria-label="Sezione finale con collegamento ai contatti"
      className="relative min-h-screen w-full overflow-hidden isolate"
    >
      {/* SFONDO: immagine con sfumatura corretta */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bgFinal.jpg"
          alt="Progetto architettonico"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* 🔹 Gradiente invertito: chiaro sopra → scuro sotto */}
        <div className="absolute inset-0 bg-linear-to-b from-white/40 via-transparent to-neutral-900/90" />
      </div>

      {/* CONTENUTO CENTRALE */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-md px-8 py-10 rounded-3xl
                     shadow-[0_8px_25px_rgba(0,0,0,0.25)] border border-white/30"
        >
          <h2
            className={`${fontSerif.className} text-3xl md:text-4xl
                        font-semibold text-neutral-800 mb-4`}
          >
            CONTATTAMI
          </h2>

          <p className="text-neutral-600 text-lg mb-8 max-w-xl mx-auto">
            Contattami per scoprire i progetti in corso e le nuove collaborazioni nel mondo dell’architettura sportiva.
          </p>

          <motion.a
            href="/contatti"
            whileHover={{
              scale: 1.05,
              y: -4,
              boxShadow:
                "0 8px 20px rgba(0,0,0,0.25), 0 0 20px rgba(255,0,0,0.3)",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`${fontSans.className} text-lg font-medium px-8 py-3
                        rounded-full bg-neutral-900 text-white hover:bg-red-600
                        transition-colors duration-300 shadow-md`}
          >
            Contatti →
          </motion.a>
        </motion.div>
      </div>

      {/* LEGGERA SFUMATURA VERSO IL FOOTER */}
      <div
        className="absolute
                   bottom-0
                   left-0
                   w-full
                   h-[18vh]
                   bg-linear-to-b from-transparent via-black/10 to-black/5 pointer-events-none" />
    </section>
  );
}
