// /components/progetti/ProgettiPageClient.jsx
"use client";

import { useRef } from "react";
import { fontSans, fontSerif, fontMono } from "@/lib/fonts";
import Carousel from "@/components/progetti/Carousel";
import ProjectCard from "@/components/progetti/ProjectCard";

export default function ProgettiPageClient({ categories }) {
  const sectionRefs = useRef({});

  const register = (id) => (el) => {
    if (el) sectionRefs.current[id] = el;
  };

  const jumpToCategory = (id) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div id="top" />

      <Carousel categories={categories} onJumpToCategory={jumpToCategory} />

      <div className="mt-10 space-y-14">
        {categories.map((cat) => (
          <div key={cat.id} ref={register(cat.id)} id={cat.id} className="scroll-mt-24">
            <div className="flex items-end justify-between gap-6">
              <div className="min-w-0">
                <h2 className={`text-2xl font-semibold text-neutral-950 ${fontSerif.className}`}>
                  {cat.label}
                </h2>
                <p className={`mt-2 max-w-2xl text-sm leading-relaxed text-neutral-900 ${fontSans.className}`}>
                  {cat.kicker}
                </p>
              </div>

              <a
                href="#top"
                className={`hidden rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 hover:border-neutral-400 lg:inline-flex ${fontSans.className}`}
              >
                Torna su <span className={`ml-2 text-neutral-700 ${fontMono.className}`}>→</span>
              </a>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cat.projects.map((p) => (
                <ProjectCard key={p.slug} p={p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
