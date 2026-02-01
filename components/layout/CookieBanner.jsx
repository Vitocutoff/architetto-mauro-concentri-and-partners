"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const STORAGE_KEY = "cookieBannerDismissed";

function getInitialDismissed() {
  try {
    return Boolean(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    return false;
  }
}

export default function CookieBanner() {
  const [dismissed, setDismissed] = useState(getInitialDismissed);

  const handleDismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {}
    setDismissed(true);
  };

  return (

    <AnimatePresence>

      {!dismissed && (

        <motion.aside
          role="dialog"
          aria-modal="true"
          aria-label="Informativa cookie"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed
                     bottom-0
                     left-0
                     w-full
                     z-50
                     px-3
                     sm:px-4"
        >

          <div
            className="mx-auto
                       max-w-5xl
                       flex
                       flex-col
                       sm:flex-row
                       items-center
                       justify-between
                       gap-3
                       sm:gap-5
                       rounded-t-2xl
                       bg-white/85
                       backdrop-blur-md
                       border-t
                       border-neutral-200
                       shadow-[0_-10px_30px_rgba(0,0,0,0.15)]
                       p-4
                       sm:p-5"
          >

            <p
              className="text-neutral-800
                         text-sm
                         leading-relaxed
                         text-center
                         sm:text-left"
            >

              Usiamo cookie tecnici e storage locale per garantire il corretto
              funzionamento del sito (es. ricordare questa scelta). Non utilizziamo
              cookie di profilazione. Maggiori informazioni nella{" "}

              <Link
                href="/privacy-policy"
                className="underline
                           underline-offset-2
                           text-cyan-700
                           hover:text-cyan-900
                           focus:outline-none
                           focus-visible:ring-2
                           focus-visible:ring-cyan-900/60
                           rounded-sm"
              >

                Privacy Policy

              </Link>

              .

            </p>

            <motion.button
              type="button"
              onClick={handleDismiss}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="shrink-0
                         px-3
                         py-1.5
                         rounded-full
                         border
                         border-neutral-300
                         bg-white/70
                         text-neutral-900
                         text-xs
                         font-medium
                         hover:bg-white
                         hover:border-neutral-400
                         transition-colors
                         focus-visible:outline-none
                         focus-visible:ring-2
                         focus-visible:ring-black/30"
            >

              Ho capito

            </motion.button>

          </div>

        </motion.aside>

      )}

    </AnimatePresence>

  );

}
