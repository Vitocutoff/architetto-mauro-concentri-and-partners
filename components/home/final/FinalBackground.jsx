"use client";

import Image from "next/image";

export default function FinalBackground() {
  return (

    <div
      className="absolute
                 inset-0
                 -z-10"
    >

      <Image
        src="/backgrounds/bgFinalSection.webp"
        alt="Sfondo architettonico"
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover
                   object-center"
      />

      <div
        className="absolute
                   inset-0
                   bg-linear-to-b
                   from-white/45
                   via-white/10
                   to-neutral-950/90"
      />

      <div
        className="absolute
                   -top-28
                   left-[-12%]
                   h-152
                   w-152
                   rounded-full
                   blur-2xl
                   opacity-70"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.12) 38%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute
                   inset-0
                   opacity-[0.11]
                   mix-blend-overlay
                   pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

    </div>

  );

}
