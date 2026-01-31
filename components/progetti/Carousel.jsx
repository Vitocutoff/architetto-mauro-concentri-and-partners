// /components/progetti/Carousel.jsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { fontSans, fontSerif, fontMono } from "@/lib/fonts";

const BLUR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Crect width='24' height='24' fill='%23f2f2f2'/%3E%3C/svg%3E";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function clamp2LinesStyle() {
  return {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };
}

function IconArrow({ dir = "right" }) {
  return (
    <span aria-hidden className={cx("inline-block", dir === "left" ? "rotate-180" : "")}>
      →
    </span>
  );
}

export default function Carousel({ categories, onJumpToCategory }) {
  const safeCategories = categories?.length ? categories : [];

  const bgById = useMemo(
    () => ({
      palazzetti: "/images/bgCard1.jpg",
      atletica: "/images/bgCard2.jpg",
      piscine: "/images/bgCard3.jpg",
      campi: "/images/bgCard4.jpg",
    }),
    []
  );

  const initialActive =
    safeCategories[0] || { id: "palazzetti", label: "Progetti", kicker: "", projects: [] };
  const initialBg = bgById[initialActive.id] || "/images/bgCard1.jpg";

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const active = safeCategories[index] || initialActive;
  const activeBg = bgById[active.id] || initialBg;

  // preload bg
  useEffect(() => {
    const srcs = Object.values(bgById);
    for (const s of srcs) {
      const im = new window.Image();
      im.src = s;
    }
  }, [bgById]);

  // bg crossfade
  const [bottomSrc, setBottomSrc] = useState(initialBg);
  const [topSrc, setTopSrc] = useState(initialBg);
  const [topVisible, setTopVisible] = useState(false);
  const changeToken = useRef(0);
  const settleTimer = useRef(null);

  // testo
  const [displayTitle, setDisplayTitle] = useState(initialActive.label);
  const [displayKicker, setDisplayKicker] = useState(initialActive.kicker);
  const [textPhase, setTextPhase] = useState("idle");

  const { longestLabel, longestKicker } = useMemo(() => {
    const labels = safeCategories.map((c) => c.label || "");
    const kickers = safeCategories.map((c) => c.kicker || "");
    return {
      longestLabel: labels.reduce((a, b) => (b.length > a.length ? b : a), labels[0] || ""),
      longestKicker: kickers.reduce((a, b) => (b.length > a.length ? b : a), kickers[0] || ""),
    };
  }, [safeCategories]);

  // autoplay
  useEffect(() => {
    if (!safeCategories.length || paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % safeCategories.length), 6500);
    return () => clearInterval(t);
  }, [paused, safeCategories.length]);

  // keyboard
  useEffect(() => {
    const onKeyDown = (e) => {
      if (!safeCategories.length) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setIndex((i) => (i - 1 + safeCategories.length) % safeCategories.length);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setIndex((i) => (i + 1) % safeCategories.length);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [safeCategories.length]);

  // cambio bg
  useEffect(() => {
    if (!activeBg || activeBg === bottomSrc) return;
    if (settleTimer.current) clearTimeout(settleTimer.current);
    changeToken.current += 1;
    setTopVisible(false);
    setTopSrc(activeBg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeBg]);

  // cambio testo
  useEffect(() => {
    if (!active?.label) return;
    if (active.label === displayTitle && active.kicker === displayKicker) return;

    setTextPhase("out");
    const t1 = setTimeout(() => {
      setDisplayTitle(active.label);
      setDisplayKicker(active.kicker);
      setTextPhase("in");
    }, 150);
    const t2 = setTimeout(() => setTextPhase("idle"), 420);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const titleAnim =
    textPhase === "out" ? "opacity-0 -translate-y-1" : "opacity-100 translate-y-0";
  const kickerAnim =
    textPhase === "out" ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0";

  const total = safeCategories.length || 4;
  const counter = `${String(index + 1).padStart(2, "0")}/${String(total).padStart(2, "0")}`;

  return (
    <div
      className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-white min-h-[48vh] sm:min-h-[52vh] lg:min-h-[56vh] xl:min-h-[58vh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* BG bottom */}
      <div className="absolute inset-0">
        <Image
          src={bottomSrc}
          alt=""
          fill
          unoptimized
          priority
          fetchPriority="high"
          loading="eager"
          placeholder="blur"
          blurDataURL={BLUR}
          className="object-cover kenburns will-change-transform"
          sizes="100vw"
        />
      </div>

      {/* BG top */}
      <div className="absolute inset-0">
        <Image
          key={topSrc}
          src={topSrc}
          alt=""
          fill
          unoptimized
          priority
          loading="eager"
          placeholder="blur"
          blurDataURL={BLUR}
          className={cx(
            "object-cover kenburns will-change-transform transition-opacity duration-[520ms]",
            topVisible ? "opacity-100" : "opacity-0"
          )}
          sizes="100vw"
          onLoadingComplete={() => {
            const tokenAtLoad = changeToken.current;
            requestAnimationFrame(() => setTopVisible(true));
            if (settleTimer.current) clearTimeout(settleTimer.current);
            settleTimer.current = setTimeout(() => {
              if (tokenAtLoad !== changeToken.current) return;
              setBottomSrc(topSrc);
              setTopVisible(false);
            }, 560);
          }}
        />
      </div>

      {/* Scrim hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.48)_0%,rgba(255,255,255,0.30)_46%,rgba(255,255,255,0.16)_74%,rgba(255,255,255,0.08)_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(0,0,0,.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.14)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
      </div>

      <div className="relative flex h-full flex-col p-6 sm:p-8 lg:p-10">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4">
          <div className={cx("text-xs tracking-[0.26em] uppercase text-neutral-900", fontSans.className)}>
            Progetti
          </div>

          <div className="flex items-center gap-2">
            {/* SOLO numerazione + AUTO/PAUSE */}
            <div className={cx("hidden text-xs text-neutral-900 sm:flex sm:items-center sm:gap-2", fontMono.className)}>
              <span>{counter}</span>
              <span className="text-neutral-800">{paused ? "PAUSE" : "AUTO"}</span>
            </div>

            {/* frecce più piccole */}
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + safeCategories.length) % safeCategories.length)}
              className="rounded-full border border-neutral-300 bg-white/35 px-2.5 py-1.5 text-sm text-neutral-950 backdrop-blur-[1px] transition hover:border-neutral-700"
              aria-label="Slide precedente"
            >
              <IconArrow dir="left" />
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % safeCategories.length)}
              className="rounded-full border border-neutral-300 bg-white/35 px-2.5 py-1.5 text-sm text-neutral-950 backdrop-blur-[1px] transition hover:border-neutral-700"
              aria-label="Slide successiva"
            >
              <IconArrow dir="right" />
            </button>
          </div>
        </div>

        {/* Title */}
        <div className="mt-6 max-w-4xl">
          <div className="rounded-3xl border border-black/10 bg-white/28 p-6 backdrop-blur-[1px] sm:p-7 lg:p-8">
            <div className="grid">
              {/* sizer */}
              <div className="col-start-1 row-start-1 invisible">
                <h1
                  className={cx(
                    "text-4xl font-semibold leading-[1.10] text-neutral-950 sm:text-5xl lg:text-6xl",
                    fontSerif.className
                  )}
                  style={clamp2LinesStyle()}
                >
                  {longestLabel}
                </h1>

                <p
                  className={cx(
                    "mt-4 max-w-2xl text-sm leading-relaxed text-neutral-950 sm:text-base",
                    fontSans.className
                  )}
                  style={clamp2LinesStyle()}
                >
                  {longestKicker}
                </p>
              </div>

              {/* real */}
              <div className="col-start-1 row-start-1">
                <h1
                  className={cx(
                    "text-4xl font-semibold leading-[1.10] text-neutral-950 sm:text-5xl lg:text-6xl",
                    "transition-all duration-300 will-change-transform",
                    titleAnim,
                    fontSerif.className
                  )}
                  style={clamp2LinesStyle()}
                >
                  {displayTitle}
                </h1>

                <p
                  className={cx(
                    "mt-4 max-w-2xl text-sm leading-relaxed text-neutral-950 sm:text-base",
                    "transition-all duration-300 will-change-transform",
                    kickerAnim,
                    fontSans.className
                  )}
                  style={clamp2LinesStyle()}
                >
                  {displayKicker}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pills categorie (titoli più piccoli + no taglio discendenti) */}
        <div className="mt-6">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {safeCategories.map((c, i) => {
              const isActive = i === index;
              const count = c.projects?.length || 0;

              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setIndex(i);
                    onJumpToCategory?.(c.id);
                  }}
                  className={cx(
                    "group relative text-left transition",
                    "rounded-2xl border bg-white/30 backdrop-blur-[1px]",
                    "h-[92px] px-4 py-3 overflow-hidden",
                    isActive ? "border-neutral-950" : "border-neutral-300 hover:border-neutral-700"
                  )}
                >
                  <div className="flex h-full flex-col">
                    <div className={cx("text-[11px] tracking-[0.22em] uppercase text-neutral-900", fontMono.className)}>
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* ✅ FIX definitivo: font più piccolo + leading più ampio + pb più grande */}
                    <div
                      className={cx(
                        "mt-1.5 font-medium text-neutral-950 antialiased",
                        "text-[11.5px] leading-[1.38] pb-[7px]",
                        "whitespace-nowrap overflow-hidden text-ellipsis",
                        fontSans.className
                      )}
                      title={c.label}
                    >
                      {c.label}
                    </div>

                    <div className={cx("mt-auto text-[11px] text-neutral-900 whitespace-nowrap overflow-hidden text-ellipsis", fontSans.className)}>
                      {count} progetti
                    </div>

                    <div
                      className={cx(
                        "absolute bottom-2.5 right-2.5 rounded-full border bg-white/45 px-2 py-1 text-[11px] text-neutral-950 backdrop-blur-[1px] transition",
                        isActive ? "border-neutral-950" : "border-neutral-300 group-hover:border-neutral-700",
                        fontMono.className
                      )}
                    >
                      Vai <span className="ml-1">→</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA centrata */}
        <div className="mt-5 flex items-center justify-center">
          <button
            type="button"
            onClick={() => onJumpToCategory?.(active.id)}
            className={cx(
              "rounded-full border border-neutral-300 bg-white/35 px-5 py-2.5 text-sm text-neutral-950 backdrop-blur-[1px] transition hover:border-neutral-700",
              fontSans.className
            )}
          >
            Vai alla sezione <span className={cx("ml-2 text-neutral-900", fontMono.className)}>→</span>
          </button>
        </div>

        {/* Ken Burns */}
        <style jsx>{`
          .kenburns {
            transform-origin: 55% 40%;
            animation: kenburns 18s ease-in-out infinite alternate;
          }
          @keyframes kenburns {
            from { transform: scale(1) translate3d(0, 0, 0); }
            to { transform: scale(1.04) translate3d(-1.4%, -0.8%, 0); }
          }
        `}</style>
      </div>
    </div>
  );
}
