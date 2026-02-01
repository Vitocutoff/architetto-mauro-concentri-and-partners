"use client";

import CookieBanner from "@/components/layout/CookieBanner";

export default function ClientShell({ children }) {
  return (

    <>

      <CookieBanner />

      {children}

    </>

  );

}
