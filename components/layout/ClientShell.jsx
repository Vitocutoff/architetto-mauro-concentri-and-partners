"use client";

import { usePathname } from "next/navigation";
import CookieBanner from "@/components/layout/CookieBanner";

export default function ClientShell({ children, footer = null }) {
  const pathname = usePathname();

  // Solo in /contatti non vogliamo il footer
  const hideFooter = pathname === "/contatti";

  return (
    <>
      <CookieBanner />
      {children}
      {!hideFooter ? footer : null}
    </>
  );
}
