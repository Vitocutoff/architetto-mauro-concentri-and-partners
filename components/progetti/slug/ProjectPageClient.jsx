// /components/progetti/slug/ProjectPageClient.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { fontSans, fontSerif, fontMono } from "@/lib/fonts";
import BeforeAfter from "@/components/progetti/slug/BeforeAfter";
import GalleryModal from "@/components/progetti/slug/GalleryModal";

function cx(...c) {
  return c.filter(Boolean).join(" ");
}

function Pill({ label, value }) {
  return (
    <div
      className={cx(
        // “pill” ma adatta a 2 righe
        "w-full rounded-2xl border border-neutral-200 bg-white/92",
        "px-4 py-3 shadow-[0_10px_26px_rgba(0,0,0,0.06)]",
        "backdrop-blur-[1px]"
      )}
      title={typeof value === "string" ? value : undefined}
    >
      {/* riga 1 */}
      <div
        className={cx(
          "text-[11px] tracking-[0.22em] uppercase text-neutral-600",
          fontSans.className
        )}
      >
        {label}
      </div>

      {/* riga 2 (sempre una riga, niente 3 righe) */}
      <div
        className={cx(
          "mt-1 text-sm text-neutral-900",
          "whitespace-nowrap overflow-hidden text-ellipsis",
          fontSans.className
        )}
      >
        {value}
      </div>
    </div>
  );
}

export default function ProjectPageClient({ project, category }) {
  const p = project || {};
  const cat = category || {};

  const details = useMemo(() => {
    const what = p.what || p.title || "";
    const where = p.where || p.place || "";
    const when = p.when || (p.year ? String(p.year) : "");
    return [
      { k: "Cosa", v: what },
      { k: "Dove", v: where },
      { k: "Quando", v: when },
    ].filter((x) => x.v);
  }, [p.what, p.title, p.where, p.place, p.when, p.year]);

  const hasBeforeAfter = Boolean(p.beforeImage && p.afterImage);
  const gallery = Array.isArray(p.gallery) ? p.gallery.filter(Boolean) : [];
  const cover = p.cover || null;

  const backBtn = cx(
    "inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm text-neutral-900",
    "hover:border-neutral-400 transition shadow-[0_14px_36px_rgba(0,0,0,0.08)]",
    fontSans.className
  );

  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
      {/* HEADER */}
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div
              className={cx(
                "text-xs tracking-[0.22em] uppercase text-neutral-600",
                fontSans.className
              )}
            >
              {cat.label || "Progetto"}
            </div>

            <h1
              className={cx(
                "mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-950",
                fontSerif.className
              )}
            >
              {p.title}
            </h1>

            {p.description ? (
              <p
                className={cx(
                  "mt-5 max-w-3xl text-sm sm:text-base leading-relaxed text-neutral-700",
                  fontSans.className
                )}
              >
                {p.description}
              </p>
            ) : null}
          </div>

          <div className="shrink-0">
            <Link href="/progetti" className={backBtn}>
              Torna ai progetti{" "}
              <span className={cx("ml-2 text-neutral-700", fontMono.className)}>
                →
              </span>
            </Link>
          </div>
        </div>

        {/* COVER + PILLS */}
        {cover ? (
          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-9">
              <div className="relative overflow-hidden rounded-4xl border border-neutral-200 bg-neutral-100 shadow-[0_18px_70px_rgba(0,0,0,0.10)]">
                <div className="relative aspect-16/8">
                  <Image
                    src={cover}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 900px, 100vw"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_40%,rgba(0,0,0,0.12)_100%)]" />
                </div>
              </div>
            </div>

            {/* ✅ 3 pill a destra, ALLINEATE IN BASSO, 2 righe SEMPRE */}
            <div className="lg:col-span-3 flex lg:items-end">
              <div className="w-full">
                <div className="grid gap-2">
                  {details.slice(0, 3).map((d) => (
                    <Pill key={d.k} label={d.k} value={d.v} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* BODY */}
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-16 mt-25">
        <div className="space-y-10">
          {hasBeforeAfter ? (
            <BeforeAfter
              beforeSrc={p.beforeImage}
              afterSrc={p.afterImage}
              beforeLabel="PRIMA"
              afterLabel="DOPO"
            />
          ) : null}

          {gallery.length ? <GalleryModal images={gallery} /> : null}

          {/* Footer */}
          <div className="pt-4 flex justify-center">
            <Link href="/progetti" className={backBtn}>
              Torna ai progetti{" "}
              <span className={cx("ml-2 text-neutral-700", fontMono.className)}>
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
