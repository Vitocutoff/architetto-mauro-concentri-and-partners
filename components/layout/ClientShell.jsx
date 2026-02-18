// /components/layout/ClientShell.jsx

"use client";

import { MotionConfig } from "framer-motion";
import { usePathname } from "next/navigation";

import CookieBanner from "@/components/layout/CookieBanner";

export default function ClientShell({ children, footer = null }) {
  const pathname = usePathname();

  const hideFooter = pathname === "/contatti";

  return (

    <MotionConfig
      reducedMotion="never"
    >

      <CookieBanner />

      {children}

      {!hideFooter ? footer : null}

    </MotionConfig>

  );

}
