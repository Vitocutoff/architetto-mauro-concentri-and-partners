"use client";

import Image from "next/image";

export default function PreviewBackground() {
  return (

    <div
      className="absolute
                 inset-0
                 -z-10"
      aria-hidden="true"
    >

      <Image
        src="/backgrounds/bgPreviewSection.webp"
        alt="Foto Studio"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover
                   object-center"
      />

      {/* overlay */}
      <div
        className="absolute
                   inset-0
                   bg-black/25
                   sm:bg-black/30"
      />

    </div>

  );

}
