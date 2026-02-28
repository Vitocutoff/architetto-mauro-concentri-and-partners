"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useCallback, useMemo, useState } from "react";
import { fontSans, fontSerif, fontMono } from "@/lib/fonts";

function cx(...c) {
  return c.filter(Boolean).join(" ");
}

function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}

function Icon({ children }) {
  return <span aria-hidden className="inline-block">{children}</span>;
}

export default function GalleryModal({ images }) {
  const list = useMemo(
    () => (Array.isArray(images) ? images.filter(Boolean) : []),
    [images]
  );
  const total = list.length;

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const current = total ? list[index] : null;

  const openAt = useCallback(
    (i) => {
      if (!total) return;
      setIndex(clamp(i, 0, total - 1));
      setOpen(true);
    },
    [total]
  );

  const close = useCallback(() => setOpen(false), []);

  const next = useCallback(() => {
    setIndex((i) => (total ? (i + 1) % total : 0));
  }, [total]);

  const prev = useCallback(() => {
    setIndex((i) => (total ? (i - 1 + total) % total : 0));
  }, [total]);

  const onKeyDown = useCallback(
    (e) => {
      if (!open) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    },
    [open, close, next, prev]
  );

  if (!total) return null;

  // Portal target
  const portalTarget =
    typeof document !== "undefined" ? document.body : null;

  const modal =
    open && current && portalTarget
      ? createPortal(
          <div
            className="fixed inset-0 z-9999"
            role="dialog"
            aria-modal="true"
            aria-label="Galleria immagini"
            onKeyDown={onKeyDown}
          >
            {/* blocco scroll SENZA toccare document.body */}
            <style jsx global>{`
              body {
                overflow: hidden;
              }
            `}</style>

            {/* Backdrop */}
            <button
              type="button"
              className="absolute inset-0 bg-black/70"
              aria-label="Chiudi"
              onClick={close}
            />

            {/* Panel */}
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
              <div className="relative w-full max-w-6xl">
                <div className="relative overflow-hidden rounded-4xl border border-white/12 bg-black shadow-[0_30px_120px_rgba(0,0,0,0.62)]">
                  {/* immagine */}
                  <div className="relative aspect-video bg-black">
                    <Image
                      src={current}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority={false}
                    />
                  </div>

                  {/* top bar */}
                  <div className="absolute left-0 right-0 top-0 flex items-center justify-between gap-3 p-3">
                    <div
                      className={cx(
                        "rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] tracking-[0.22em] uppercase text-white/85 backdrop-blur-md",
                        fontSans.className
                      )}
                    >
                      {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </div>

                    <button
                      type="button"
                      onClick={close}
                      className={cx(
                        "rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] tracking-[0.22em] uppercase text-white/85 backdrop-blur-md hover:bg-white/15 transition",
                        fontSans.className
                      )}
                      aria-label="Chiudi"
                    >
                      chiudi <Icon>✕</Icon>
                    </button>
                  </div>

                  {/* controls */}
                  <button
                    type="button"
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-white/90 backdrop-blur-md hover:bg-white/15 transition"
                    aria-label="Immagine precedente"
                  >
                    <Icon>←</Icon>
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-white/90 backdrop-blur-md hover:bg-white/15 transition"
                    aria-label="Immagine successiva"
                  >
                    <Icon>→</Icon>
                  </button>

                  {/* hint */}
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                    <div className={cx("text-[11px] text-white/65", fontSans.className)}>
                      ESC per chiudere • ← → per navigare
                    </div>
                  </div>
                </div>

                {/* focus catcher */}
                <button type="button" className="sr-only" autoFocus aria-hidden="true" />
              </div>
            </div>
          </div>,
          portalTarget
        )
      : null;

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-neutral-300" aria-hidden="true" />
        <h2 className={cx("text-sm tracking-[0.22em] uppercase text-neutral-600", fontSerif.className)}>
          Gallery
        </h2>
      </div>

      {/* thumbs */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((src, i) => (
          <button
            key={`${src}-${i}`}
            type="button"
            onClick={() => openAt(i)}
            className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_14px_44px_rgba(0,0,0,0.08)] transition hover:border-neutral-400 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-neutral-300 transform-gpu"
            aria-label={`Apri immagine ${i + 1} di ${total}`}
          >
            <div className="relative aspect-16/10 bg-neutral-100">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 320px, 100vw"
              />
            </div>

            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_55%,rgba(0,0,0,0.18)_100%)]" />

            <div className="absolute bottom-3 right-3">
              <div
                className={cx(
                  "rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] tracking-[0.18em] uppercase text-white/85 backdrop-blur-md",
                  fontMono.className
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          </button>
        ))}
      </div>

      {modal}
    </section>
  );
}
