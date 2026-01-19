// 📄 /components/layout/DesktopMenu.jsx

"use client";

import { menuItems } from "@/data/menuItems";
import { useEffect } from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { fontNav } from "@/lib/fonts";

export default function DesktopMenu() {

  const pathname = usePathname();
  const controls = useAnimationControls();

  // ✅ Patch D1: rispetta prefers-reduced-motion
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let cancelled = false;

    const run = async () => {

      // PRM: niente animazioni, stato finale immediato
      if (shouldReduceMotion) {
        controls.set("show");
        return;
      }

      await controls.start("hidden");
      if (cancelled) return;

      await controls.start("show");
      if (cancelled) return;

    };

    run();

    // ✅ Patch D2: unmount-safe
    return () => {
      cancelled = true;
    };
  }, [pathname, controls, shouldReduceMotion]);

  const linkClass = (path) =>
    `transition-colors duration-300 ease-in-out focus-visible:ring-2 focus-visible:ring-black/70 px-1 rounded-sm
     ${pathname === path
      ? "text-blue-900/95 font-bold cursor-default"
      : "hover:text-blue-900/95 text-black/95"}`;

  // Variants contenitore (stagger ingresso)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.12,
        ease: "easeInOut",
      },
    },
  };

  // Variants voce menu
  const wordVariants = {
    hidden: (i) => ({
      opacity: 0,
      y: 40,
      x: i % 2 === 0 ? -25 : 25,
      scale: 1,
      rotate: 0,
    }),

    // Opzione 1: show esplicita scale/rotate + transizioni per-property
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        opacity: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
        y: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
        x: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
        scale: { duration: 0.3, ease: "easeOut" },
        rotate: { duration: 0.3, ease: "easeOut" },
      },
    },

    hover: {
      scale: 1.06,
      rotate: -0.5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Variants lettere (bounce)
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({
      opacity: 1,
      y: [20, -4, 0],
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
      },
    }),
  };

  const AnimatedLetters = ({ text }) => (
    <motion.span
      initial="hidden"
      animate="show"
      variants={{
        show: {
          transition: { staggerChildren: 0.04, delayChildren: 0.15 },
        },
      }}
      className="inline-block"
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} custom={i} variants={letterVariants} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <nav aria-label="Menu principale desktop">
      <motion.ul
        variants={container}
        initial="hidden"
        animate={controls}
        className={`${fontNav.className}
                    flex items-center gap-6
                    text-lg tracking-wider`}
      >
        {menuItems.map((item, index) => (
          <motion.li
            key={item.href}
            custom={index}
            variants={wordVariants}
            whileHover="hover"
          >
            <Link
              href={item.href}
              className={linkClass(item.href)}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              <AnimatedLetters text={item.label} />
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );

}
