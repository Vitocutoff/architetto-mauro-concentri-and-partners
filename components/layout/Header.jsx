// 📄 /components/layout/Header.jsx

"use client";

import { useState, useEffect, useCallback } from "react";
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

  useEffect(() => {

    if (pathname !== "/") {

      requestAnimationFrame(() => setShowLogo(true));
      return;
    }

    const unsubscribe = scrollY.on("change", (latest) => {
      const trigger = window.innerHeight * 0.4;
      setShowLogo(latest > trigger);
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
        className="mx-auto max-w-7xl
                   px-4 sm:px-6 lg:px-8"
      >

        <nav
          aria-label="Menu Principale"
          className="flex items-center justify-between
                     py-3"
        >

          <div className="min-w-11 flex items-center">

            {showLogo && <LogoAnimated />}

          </div>

          <div
            className="hidden lg:block"
          >

            <DesktopMenu
              key={pathname}
            />

          </div>

          <div
            className="block lg:hidden"
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

// ============================================================================
// ✅ NOTE DI OTTIMIZZAZIONE / BEST PRACTICE
// ============================================================================
// 🔹 I valori numerici di `stiffness`, `damping` e `mass` sono perfetti.
//    Se un domani volessi cambiare fluidità:
//     - stiffness ↑ → animazione più “rigida”
//     - damping ↓ → più oscillazione (“rimbalzo”)
//     - mass ↑ → movimento più lento
//
// 🔹 `useCallback` qui è una vera best practice: evita re-render
//     inutili nei figli (`MobileMenu` e `DesktopMenu`)
//
// ============================================================================
