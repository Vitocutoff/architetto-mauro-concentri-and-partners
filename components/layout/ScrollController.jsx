"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function ScrollController() {

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Patch C: rispetta prefers-reduced-motion (zero impatto visivo sul resto degli utenti)
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1, // leggermente più rapido ma sempre fluido
      easing: (t) => 1 - Math.pow(1 - t, 4), // easing più naturale
      smoothWheel: true,
      smoothTouch: false,
      gestureDirection: "vertical",
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    // cleanup
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
