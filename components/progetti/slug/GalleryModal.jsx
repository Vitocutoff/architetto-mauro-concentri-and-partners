"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";

function cx(...c) {
  return c.filter(Boolean).join(" ");
}

function normalizeImages(images) {
  if (!Array.isArray(images)) return [];
  return images
    .map((img) => {
      if (!img) return null;
      if (typeof img === "string") return { src: img, alt: "" };
      const src = img.src || img.url;
      if (!src) return null;
      return { src, alt: img.alt || "" };
    })
    .filter(Boolean);
}

export default function GalleryModal({
  open,
  images,
  initialIndex = 0,
  onClose,
  title = "Galleria",
}) {
  // ✅ hook sempre in cima
  const safeImages = useMemo(() => normalizeImages(images), [images]);
  const total = safeImages.length;

  const [index, setIndex] = useState(() => {
    const i = Number.isFinite(initialIndex) ? initialIndex : 0;
    return Math.min(Math.max(i, 0), Math.max(total - 1, 0));
  });

  // sync index quando apri/cambi initialIndex/immagini
  useEffect(() => {
    if (!open) return;
    const i = Number.isFinite(initialIndex) ? initialIndex : 0;
    setIndex(Math.min(Math.max(i, 0), Math.max(total - 1, 0)));
  }, [open, initialIndex, total]);

  const prev = useCallback(() => {
    if (total <= 1) return;
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    if (total <= 1) return;
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const close = useCallback(() => {
    onClose?.();
  }, [onClose]);

  // ✅ scroll lock via classList (niente style mutation)
  useEffect(() => {
    if (!open) return;

    const html = document.documentElement;
    const body = document.body;

    const prevHtml = html.className;
    const prevBody = body.className;

    html.classList.add("overflow-hidden");
    body.classList.add("overflow-hidden");

    return () => {
      html.className = prevHtml;
      body.className = prevBody;
    };
  }, [open]);

  // keyboard
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  // ✅ early return DOPO gli hook
  if (!open) return null;
  if (!total) return null;

  const current = safeImages[index];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 px-4 sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      {/* close */}
      <button
        type="button"
        onClick={close}
        className="fixed top-[calc(env(safe-area-inset-top)+1rem)] right-4 sm:right-6 z-[10000]
                   rounded-full bg-white/10 hover:bg-white/20 border border-white/15
                   px-3 py-2 text-sm text-white transition"
        aria-label="Chiudi"
      >
        Chiudi ✕
      </button>

      <div
        className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black
                   shadow-[0_20px_80px_rgba(0,0,0,0.60)]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
          <div className="text-sm text-white/80">
            {title} <span className="text-white/50">—</span>{" "}
            <span className="tabular-nums text-white/70">
              {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/85
                         hover:bg-white/10 transition disabled:opacity-40"
              disabled={total <= 1}
              aria-label="Immagine precedente"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/85
                         hover:bg-white/10 transition disabled:opacity-40"
              disabled={total <= 1}
              aria-label="Immagine successiva"
            >
              →
            </button>
          </div>
        </div>

        {/* main image */}
        <div className="relative bg-black">
          <div className="relative w-full h-[72svh] max-h-[72svh]">
            <Image
              src={current.src}
              alt={current.alt || ""}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* thumbs */}
        {total > 1 && (
          <div className="border-t border-white/10 bg-black/80 px-3 py-3">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {safeImages.map((img, i) => {
                const active = i === index;
                return (
                  <button
                    key={`${img.src}-${i}`}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={cx(
                      "relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition",
                      active ? "border-white/70" : "border-white/15 hover:border-white/35"
                    )}
                    aria-label={`Apri immagine ${i + 1}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt || ""}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
