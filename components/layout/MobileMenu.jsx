// /components/layout/MobileMenu.jsx

"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { fontCursive, fontMono, fontMonoSpecial, fontNav } from "@/lib/fonts";

export default function MobileMenu({ isOpen, toggleMenu, closeMenu }) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/cv", label: "CV" },
    { href: "/progetti", label: "Progetti" },
    { href: "/work-in-progress", label: "Work in Progress" },
    { href: "/contatti", label: "Contatti" },
  ];

  const linkClass = (path) =>
    `${fontNav.className} text-xl tracking-widest transition-colors duration-200 ${
      pathname === path ? "text-red-400 font-bold" : "hover:text-red-300 text-neutral-200"
    }`;

  return (
    <>
      <button
        onClick={toggleMenu}
        aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className={`fixed
                    top-1
                    right-1
                    z-90
                    w-12
                    h-12
                    flex
                    flex-col
                    justify-center
                    items-center
                    group
                    ${isOpen ? "text-red-400" : "text-black"}`}
      >

        <motion.span
          className="block
                     w-5
                     h-0.5
                     bg-current
                     mb-1
                     rounded
                     origin-center"
          animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        />

        <motion.span
          className="block
                     w-5
                     h-0.5
                     bg-current
                     mb-1
                     rounded
                     origin-center"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />

        <motion.span
          className="block
                     w-5
                     h-0.5
                     bg-current
                     rounded
                     origin-center"
          animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        />

      </button>

      <AnimatePresence>

        {isOpen && (

          <motion.nav
            id="mobile-navigation"
            aria-label="Menu principale mobile"
            role="navigation"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
            className="fixed
                       inset-0
                       z-70
                       flex
                       flex-col
                       items-center
                       justify-center
                       overflow-hidden
                       h-screen
                       w-screen"
          >

            <div
              className="absolute
                         inset-0
                         bg-linear-to-b
                         from-neutral-950
                         via-neutral-900
                         to-neutral-950"
            />

            <div
              className="relative
                         z-10
                         flex
                         flex-col
                         items-center
                         text-center"
            >

              <div
                className="mb-3
                           transform
                           -translate-y-16"
              >

                <div
                  className={`${fontMonoSpecial.className}
                              text-lg
                              mb-1
                              tracking-widest
                              text-cyan-600`}
                >

                  A
                  <span
                    className={`${fontMono.className}`}
                  >

                    rchitetto

                  </span>

                </div>

                <h2
                  className={`${fontMonoSpecial.className}
                              text-2xl
                              font-extrabold
                              tracking-widest
                              text-white`}
                >

                  MAURO<br />
                  CONCENtRi<br />

                  <span
                    className={`${fontCursive.className}
                                text-4xl
                                font-extrabold
                                tracking-widest
                                text-red-400`}
                  >

                    &amp; Partners

                  </span>

                </h2>

              </div>

              <motion.ul
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08, delayChildren: 0.4 },
                  },
                  exit: { opacity: 0 },
                }}
                className="flex
                           flex-col
                           items-center
                           gap-5"
              >

                {links.map((link, i) => (

                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 25 }}
                    transition={{ duration: 0.3, delay: 0.05 * i }}
                  >

                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={linkClass(link.href)}
                      aria-current={pathname === link.href ? "page" : undefined}
                    >

                      {link.label}

                    </Link>

                  </motion.li>

                ))}

              </motion.ul>

            </div>

          </motion.nav>

        )}

      </AnimatePresence>

    </>

  );

}
