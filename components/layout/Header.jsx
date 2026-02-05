// /components/layout/Header.jsx

"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useScroll } from "framer-motion";
import { usePathname } from "next/navigation";

import DesktopMenu from "@/components/layout/DesktopMenu";
import MobileMenu from "@/components/layout/MobileMenu";
import LogoAnimated from "@/components/ui/LogoAnimated";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [showLogo, setShowLogo] = useState(false);

  const pathname = usePathname();

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const lastShowRef = useRef(false);

  useEffect(() => {
    if (pathname !== "/") {
      requestAnimationFrame(() => {
        lastShowRef.current = true;
        setShowLogo(true);
      });
      return;
    }

    const unsubscribe = scrollY.on("change", (latest) => {
      const trigger = window.innerHeight * 0.4;
      const next = latest > trigger;

      if (next !== lastShowRef.current) {
        lastShowRef.current = next;
        setShowLogo(next);
      }
    });

    return () => unsubscribe();
  }, [scrollY, pathname]);

  return (

    <header
      className="fixed
                 top-0
                 left-0
                 z-50
                 w-full
                 border-b
                 border-white/10
                 bg-linear-to-r
                 from-white/80
                 via-white/70
                 to-white/80
                 backdrop-blur-xl
                 shadow-lg
                 supports-backdrop-filter:backdrop-saturate-200"
    >

      <div
        className="mx-auto
                   w-full
                   max-w-420
                   px-4
                   sm:px-6
                   lg:px-8
                   xl:px-12"
      >

        <nav
          aria-label="Menu Principale"
          className="flex
                     items-center
                     justify-between
                     py-3"
        >

          <div
            className="flex
                       flex-1
                       min-w-0
                       items-center"
          >

            {showLogo && (

              <div
                className="min-w-0
                           overflow-hidden
                           max-w-[calc(100vw-5.25rem)]
                           sm:max-w-[calc(100vw-6.25rem)]
                           min-[820px]:max-w-none"
              >

                <LogoAnimated />

              </div>

            )}

          </div>

          <div
            className="hidden
                       min-[1280px]:block"
          >

            <DesktopMenu />

          </div>

          <div
            className="block
                       min-[1280px]:hidden"
          >

            <MobileMenu
              isOpen={menuOpen}
              toggleMenu={toggleMenu}
              closeMenu={closeMenu}
            />

          </div>

        </nav>

      </div>

    </header>

  );

}
