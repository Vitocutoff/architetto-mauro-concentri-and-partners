"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    let raf;
    let active = true;

    const checkCookies = () => {
      try {
        const accepted = localStorage.getItem("cookiesAccepted");
        if (!accepted && active) {
          raf = requestAnimationFrame(() => setShow(true));
        }
      } catch {
        // Safari in private mode può lanciare eccezioni su localStorage
        if (active) {
          raf = requestAnimationFrame(() => setShow(true));
        }
      }
    };

    checkCookies();

    return () => {
      active = false;
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("cookiesAccepted", "true");
    } catch {
      /* modalità privata Safari o altre eccezioni */
    }
    setShow(false);
  };

  return (

    <AnimatePresence>

      {show && (

        <motion.aside
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-desc"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed
                     bottom-0
                     left-0
                     w-full
                     z-50
                     px-3
                     sm:px-4"
        >

          <div
            className="mx-auto max-w-5xl flex
                       flex-col sm:flex-row
                       items-center justify-between
                       gap-4 sm:gap-6 rounded-t-2xl
                       bg-white/80 backdrop-blur-md
                       border-t border-neutral-300/70
                       shadow-[0_-8px_30px_rgba(0,0,0,0.15)]
                       p-5 sm:p-6"
          >

            {/* Titolo solo per screen reader (zero impatto visivo) */}
            <h2 id="cookie-banner-title" className="sr-only">
              Informativa sui cookie
            </h2>

            {/* TESTO INFORMATIVO */}
            <p
              id="cookie-banner-desc"
              className="text-neutral-800 text-sm leading-relaxed
                         text-center sm:text-left"
            >

              Questo sito utilizza{" "}

              <strong>solo cookie tecnici</strong> per garantire il corretto
              funzionamento e migliorare l’esperienza di navigazione.
              <br className="hidden sm:block" />
              Non utilizziamo cookie di profilazione o di terze parti. Continuando accetti l’uso dei cookie.
              Consulta la{" "}

              <Link
                href="/privacy-policy"
                className="underline underline-offset-2 text-blue-900
                           hover:text-blue-950 focus:outline-none
                           focus-visible:ring-2 focus-visible:ring-blue-900/60
                           rounded-sm"
              >

                Privacy Policy

              </Link>

              .

            </p>

            {/* PULSANTE CTA */}
            <motion.button
              onClick={handleAccept}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
              className="mt-3 sm:mt-0 px-6
                         py-2.5 rounded-xl
                         bg-sky-800
                         text-white text-sm
                         font-medium cursor-pointer
                         hover:bg-sky-900
                         transition-colors
                         focus-visible:outline-none
                         focus-visible:ring-2
                         focus-visible:ring-blue-900
                         focus-visible:ring-offset-2
                         focus-visible:ring-offset-white"
            >

              OK

            </motion.button>

          </div>

        </motion.aside>

      )}

    </AnimatePresence>

  );

}
