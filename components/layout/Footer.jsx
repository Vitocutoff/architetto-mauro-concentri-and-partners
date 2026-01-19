"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { fontMono, fontMonoSpecial, fontSerif, fontCursive } from "@/lib/fonts";

export default function Footer() {

  const year = new Date().getFullYear();

  const revealVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

  return (

    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={revealVariants}
      className="w-full text-gray-200 bg-linear-to-b
                 lg:bg-linear-to-r from-neutral-950
                 via-neutral-900 to-neutral-950"
    >

      {/* CONTENUTO PRINCIPALE */}
      <div
        className="max-w-6xl 2xl:max-w-7xl mx-auto grid
                   grid-cols-1 lg:grid-cols-3
                   gap-10 px-6 py-10 md:py-12"
      >

        {/* CONTATTI */}
        <section
          aria-labelledby="footer-contacts"
          className="text-center flex flex-col
                     items-center justify-center"
        >

          <h2 id="footer-contacts" className="sr-only">
            Contatti
          </h2>

          <div
            className="flex justify-center gap-x-8
                       mb-6 text-xl text-cyan-500/90"
          >
            <FaPhoneAlt aria-hidden="true" />
            <FaMobileAlt aria-hidden="true" />
            <FaEnvelope aria-hidden="true" />
          </div>

          <address
            className="space-y-3 leading-relaxed not-italic
                       text-sm sm:text-base"
          >

            <p className={`${fontSerif.className} text-cyan-500/90`}>
              Studio:
              <a
                href="tel:+390444301913"
                className="ml-2 text-neutral-200 hover:text-white
                           transition-colors duration-300
                           focus-visible:outline-none focus-visible:ring-2
                           focus-visible:ring-white/70 rounded-sm"
              >
                +39 0444 301913
              </a>
            </p>

            <p className={`${fontSerif.className} text-cyan-500/90`}>
              Cellulare:
              <a
                href="tel:+393407631501"
                className="ml-2 text-neutral-200 hover:text-white
                           transition-colors duration-300
                           focus-visible:outline-none focus-visible:ring-2
                           focus-visible:ring-white/70 rounded-sm"
              >
                +39 340 7631501
              </a>
            </p>

            <p className={`${fontSerif.className} text-cyan-500/90`}>
              E-mail:
              <a
                href="mailto:archcon@goldnet.it"
                className="ml-2 text-neutral-200 hover:text-white
                           transition-colors duration-300
                           focus-visible:outline-none focus-visible:ring-2
                           focus-visible:ring-white/70 rounded-sm"
              >
                archcon@goldnet.it
              </a>
            </p>

          </address>
        </section>

        {/* LOGO CENTRALE */}
        <section
          aria-labelledby="footer-logo"
          className="flex items-center justify-center
                     text-center"
        >

          <div
            className="border border-white/60 rounded-md
                       px-10 py-6 inline-block transition-all
                       duration-500 hover:border-white/90
                       hover:shadow-lg hover:shadow-white/10"
          >

            {/* ARCHITETTO */}
            <div
              className={`${fontMono.className}
                          text-2xl tracking-wide text-cyan-500/95`}
            >
              <span
                className={`${fontMonoSpecial.className} mr-0.5`}
              >
                A
              </span>
              rchitetto
            </div>

            {/* MAURO */}
            <h2
              id="footer-logo"
              className={`${fontSerif.className}
                          text-2xl font-bold uppercase
                          tracking-wider text-neutral-300`}
            >
              Mauro
            </h2>

            {/* CONCENTRI */}
            <div
              className={`${fontSerif.className}
                          text-2xl font-bold uppercase
                          tracking-wider text-neutral-300`}
            >
              Concentri
            </div>

            {/* LINEA SPOSTATA QUI */}
            <div
              className="border-t border-neutral-200/40 mx-auto
                         my-3 w-40 sm:w-48"
            ></div>

            {/* & PARTNERS */}
            <div
              className={`${fontCursive.className}
                          text-5xl font-bold
                          tracking-wider text-red-400`}
            >
              &amp; Partners
            </div>

          </div>

        </section>

        {/* INDIRIZZO + SOCIAL */}
        <section
          aria-labelledby="footer-address"
          className="text-center flex flex-col
                     items-center justify-center"
        >

          <h2 id="footer-address" className="sr-only">
            Indirizzo e social
          </h2>

          <p className={`${fontSerif.className} text-lg mb-3 text-neutral-200`}>
            Corso Padova, 65 – 36100 Vicenza
          </p>

          <p className="mb-1">
            C.F.{" "}
            <span className={`${fontSerif.className} text-gray-200`}>
              CNCMRA62L07Z103J
            </span>
          </p>

          <p className="mb-6">
            P.IVA{" "}
            <span className={`${fontSerif.className} text-gray-200`}>
              02069980247
            </span>
          </p>

          <div className="flex justify-center gap-x-6 text-2xl">
            <a
              href="https://facebook.com"
              aria-label="Profilo Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-transform
                         duration-300 focus-visible:ring-2 focus-visible:ring-white/70
                         rounded-sm hover:scale-110"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://linkedin.com"
              aria-label="Profilo LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-transform
                         duration-300 focus-visible:ring-2 focus-visible:ring-white/70
                         rounded-sm hover:scale-110"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://instagram.com/mauroconcentri?igsh=YnpiNDNjbnpibDgO"
              aria-label="Profilo Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 transition-transform
                         duration-300 focus-visible:ring-2 focus-visible:ring-white/70
                         rounded-sm hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>

        </section>

      </div>

      {/* COPYRIGHT */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="bg-linear-to-r from-white/90 via-white
                   to-white/90 text-black/70 text-center
                   py-4 text-sm border-t border-neutral-200/60"
      >
        © {year} Architetto Mauro Concentri &amp; Partners ·{" "}
        <Link
          href="/privacy-policy"
          className="underline underline-offset-4 hover:text-black
                     transition-colors duration-300 focus-visible:ring-2
                     focus-visible:ring-black/50 rounded-sm"
        >
          Privacy Policy
        </Link>
      </motion.div>

    </motion.footer>

  );
}
