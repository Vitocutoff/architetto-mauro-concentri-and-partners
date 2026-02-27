// /components/progetti/slug/ProjectPageClient.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { fontSans, fontSerif, fontMono } from "@/lib/fonts";
import BeforeAfter from "@/components/progetti/slug/BeforeAfter";
import Gallery from "@/components/progetti/slug/GalleryModal";

function cx(...c) {
  return c.filter(Boolean).join(" ");
}

export default function ProjectPageClient({ project, category }) {
  const details = useMemo(() => {
    const what = project.what || project.title;
    const where = project.where || project.place;
    const when = project.when || (project.year ? String(project.year) : "");
    return [
      { k: "Cosa", v: what },
      { k: "Dove", v: where },
      { k: "Quando", v: when },
    ].filter((x) => x.v);
  }, [project]);

  const hasBeforeAfter = Boolean(project.beforeImage && project.afterImage);
  const gallery = Array.isArray(project.gallery) ? project.gallery : [];
  const cover = project.cover || null;

  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-white">
      {/* HEADER */}
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-10 pb-10">
        <div className="flex items-center justify-between gap-6">
          <div className="min-w-0">
            <div className={cx("text-xs tracking-[0.22em] uppercase text-neutral-600", fontSans.className)}>
              {category?.label || "Progetto"}
            </div>

            <h1 className={cx("mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-950", fontSerif.className)}>
              {project.title}
            </h1>

            {project.description ? (
              <p className={cx("mt-5 max-w-3xl text-sm sm:text-base leading-relaxed text-neutral-700", fontSans.className)}>
                {project.description}
              </p>
            ) : null}
          </div>

          <Link
            href="/progetti"
            className={cx(
              "hidden sm:inline-flex rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 hover:border-neutral-400 transition",
              fontSans.className
            )}
          >
            Torna ai progetti <span className={cx("ml-2 text-neutral-700", fontMono.className)}>→</span>
          </Link>
        </div>

        {/* cover opzionale */}
        {cover ? (
          <div className="mt-8 relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-[0_18px_70px_rgba(0,0,0,0.10)]">
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
        ) : null}
      </div>

      {/* BODY */}
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* DETAILS */}
          <aside className="lg:col-span-4">
            <div className="rounded-3xl border border-neutral-200 bg-white/85 shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="p-6">
                <div className={cx("text-xs tracking-[0.22em] uppercase text-neutral-500", fontSans.className)}>
                  Dettagli
                </div>

                <div className="mt-4 space-y-4">
                  {details.map((d) => (
                    <div key={d.k} className="rounded-2xl border border-neutral-200 bg-white px-4 py-3">
                      <div className={cx("text-[11px] tracking-[0.22em] uppercase text-neutral-500", fontSans.className)}>
                        {d.k}
                      </div>
                      <div className={cx("mt-1 text-sm text-neutral-900", fontSans.className)}>
                        {d.v}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex sm:hidden">
                  <Link
                    href="/progetti"
                    className={cx(
                      "inline-flex w-full items-center justify-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 hover:border-neutral-400 transition",
                      fontSans.className
                    )}
                  >
                    Torna ai progetti <span className={cx("ml-2 text-neutral-700", fontMono.className)}>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <div className="lg:col-span-8 space-y-8">
            {/* Prima/Dopo */}
            {hasBeforeAfter ? (
              <BeforeAfter
                beforeSrc={project.beforeImage}
                afterSrc={project.afterImage}
                beforeLabel="Prima"
                afterLabel="Dopo"
              />
            ) : null}

            {/* Gallery */}
            {gallery.length ? (
              <Gallery images={gallery} />
            ) : null}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/progetti"
            className={cx(
              "inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm text-neutral-900 hover:border-neutral-400 transition shadow-[0_14px_36px_rgba(0,0,0,0.08)]",
              fontSans.className
            )}
          >
            Torna ai progetti <span className={cx("ml-2 text-neutral-700", fontMono.className)}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
