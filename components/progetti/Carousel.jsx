"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

import { fontSans, fontSerif, fontMono } from "@/lib/fonts";

const BLUR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Crect width='24' height='24' fill='%23f2f2f2'/%3E%3C/svg%3E";

const EMPTY = [];

const BG_BY_ID = {
  palazzetti: "/backgrounds/bgCardPalestre.webp",
  atletica: "/backgrounds/bgCardAtletica.webp",
  piscine: "/backgrounds/bgCardPiscine.webp",
  campi: "/backgrounds/bgCardCampi.webp",
  africa: "/backgrounds/bgCardVillaggio.webp",
};

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
    <span
      aria-hidden
      className={cx("inline-block", dir === "left" ? "rotate-180" : "")}
    >
      →
    </span>
  );
}

export default function Carousel({ categories, onJumpToCategory }) {
  const safeCategories = categories && categories.length ? categories : EMPTY;

  const initialActive =
    safeCategories[0] || {
      id: "palazzetti",
      label: "Progetti",
      kicker: "",
      projects: [],
    };

  const initialBg =
    BG_BY_ID[initialActive.id] || "/backgrounds/bgCardCampi.webp";

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const active = safeCategories[index] || initialActive;
  const activeBg = BG_BY_ID[active.id] || initialBg;

  // preload bg (una volta)
  useEffect(() => {
    const srcs = Object.values(BG_BY_ID);
    for (const s of srcs) {
      const im = new window.Image();
      im.src = s;
    }
  }, []);

  // bg crossfade state
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
      longestLabel: labels.reduce(
        (a, b) => (b.length > a.length ? b : a),
        labels[0] || ""
      ),
      longestKicker: kickers.reduce(
        (a, b) => (b.length > a.length ? b : a),
        kickers[0] || ""
      ),
    };
  }, [safeCategories]);

  // autoplay
  useEffect(() => {
    if (!safeCategories.length || paused) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % safeCategories.length),
      6500
    );
    return () => clearInterval(t);
  }, [paused, safeCategories.length]);

  // keyboard
  useEffect(() => {
    const onKeyDown = (e) => {
      if (!safeCategories.length) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setIndex(
          (i) => (i - 1 + safeCategories.length) % safeCategories.length
        );
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

    let raf = 0;
    raf = requestAnimationFrame(() => {
      setTopVisible(false);
      setTopSrc(activeBg);
    });

    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [activeBg, bottomSrc]);

  // cambio testo
  useEffect(() => {
    const nextLabel = active?.label || "";
    const nextKicker = active?.kicker || "";

    if (!nextLabel) return;
    if (nextLabel === displayTitle && nextKicker === displayKicker) return;

    let raf = 0;

    raf = requestAnimationFrame(() => {
      setTextPhase("out");
    });

    const t1 = setTimeout(() => {
      setDisplayTitle(nextLabel);
      setDisplayKicker(nextKicker);
      setTextPhase("in");
    }, 150);

    const t2 = setTimeout(() => setTextPhase("idle"), 420);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [active?.label, active?.kicker, displayTitle, displayKicker]);

  const titleAnim =
    textPhase === "out"
      ? "opacity-0 -translate-y-1"
      : "opacity-100 translate-y-0";
  const kickerAnim =
    textPhase === "out"
      ? "opacity-0 translate-y-1"
      : "opacity-100 translate-y-0";

  const total = safeCategories.length || 4;
  const counter = `${String(index + 1).padStart(2, "0")}/${String(total).padStart(
    2,
    "0"
  )}`;

  return (
    <div
      className="relative overflow-hidden rounded-4xl border border-blue-900/30 min-h-[48vh] sm:min-h-[52vh] lg:min-h-[56vh] xl:min-h-[58vh]"
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
          src={topSrc}
          alt=""
          fill
          unoptimized
          priority
          loading="eager"
          placeholder="blur"
          blurDataURL={BLUR}
          className={cx(
            "object-cover kenburns will-change-transform transition-opacity duration-520",
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

      {/* ✅ SCRIM ELEGANTE (leggibilità testi) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-black/25 sm:bg-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_18%_28%,rgba(0,0,0,0.55),transparent_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55)_0%,transparent_45%)]" />
      </div>

      <div className="relative flex h-full flex-col p-6 sm:p-8 lg:p-10">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4">
          <div
            className={cx(
              "text-xs tracking-[0.26em] uppercase text-white/90",
              fontSans.className
            )}
          >
            Progetti
          </div>

          <div className="flex items-center gap-2">
            <div
              className={cx(
                "hidden text-xs text-white/85 sm:flex sm:items-center sm:gap-2",
                fontMono.className
              )}
            >
              <span>{counter}</span>
              <span className="text-white/70">{paused ? "PAUSE" : "AUTO"}</span>
            </div>

            <button
              type="button"
              onClick={() =>
                setIndex(
                  (i) => (i - 1 + safeCategories.length) % safeCategories.length
                )
              }
              className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1.5 text-sm text-white/90 backdrop-blur-md transition hover:border-white/45 hover:bg-white/15"
              aria-label="Slide precedente"
            >
              <IconArrow dir="left" />
            </button>

            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % safeCategories.length)}
              className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1.5 text-sm text-white/90 backdrop-blur-md transition hover:border-white/45 hover:bg-white/15"
              aria-label="Slide successiva"
            >
              <IconArrow dir="right" />
            </button>
          </div>
        </div>

        {/* Title */}
        <div className="mt-6 max-w-4xl">
          <div className="rounded-3xl border border-white/15 bg-white/8 backdrop-blur-md p-6 sm:p-7 lg:p-8">
            <div className="grid">
              {/* sizer */}
              <div className="col-start-1 row-start-1 invisible">
                <h1
                  className={cx(
                    "text-3xl font-semibold leading-[1.10] text-white sm:text-4xl lg:text-5xl",
                    fontSerif.className
                  )}
                  style={clamp2LinesStyle()}
                >
                  {longestLabel}
                </h1>

                <p
                  className={cx(
                    "mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base",
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
                    "text-3xl font-semibold leading-[1.10] text-white sm:text-4xl lg:text-5xl",
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
                    "mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base",
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

        {/* Pills categorie — ✅ layout piramide 2+3 */}
        <div className="mt-6">
          <div className="grid gap-3 sm:grid-cols-12">
            {safeCategories.map((c, i) => {
              const isActive = i === index;
              const count = c.projects?.length || 0;

              // 2 sopra (span 6), 3 sotto (span 4)
              const spanClass = i < 2 ? "sm:col-span-6" : "sm:col-span-4";

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
                    "rounded-2xl border backdrop-blur-md",
                    "h-14 px-4 py-3 overflow-hidden",
                    spanClass,
                    isActive
                      ? "border-white/55 bg-white/16 shadow-[0_14px_44px_rgba(0,0,0,0.28)] -translate-y-px"
                      : "border-white/20 bg-white/10 hover:border-white/35 hover:bg-white/12 hover:-translate-y-px hover:shadow-[0_14px_44px_rgba(0,0,0,0.22)]"
                  )}
                >
                  {/* accent bar sottilissima solo active */}
                  <div
                    className={cx(
                      "absolute left-0 top-0 h-full w-0.5 transition-opacity",
                      isActive ? "opacity-100 bg-white/80" : "opacity-0 bg-white/80"
                    )}
                    aria-hidden="true"
                  />

                  {/* micro-shine diagonale (wow sobrio) */}
                  <div
                    className={cx(
                      "pointer-events-none absolute -inset-8 opacity-0 transition-opacity duration-500",
                      "bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.12)_42%,transparent_60%)]",
                      isActive ? "opacity-100" : "group-hover:opacity-100"
                    )}
                    aria-hidden="true"
                  />

                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div
                        className={cx(
                          "font-medium text-white/95 antialiased",
                          "text-[12px] leading-[1.2]",
                          "whitespace-nowrap overflow-hidden text-ellipsis",
                          fontSans.className
                        )}
                        title={c.label}
                      >
                        {c.label}
                      </div>

                      <div
                        className={cx(
                          "mt-1 text-[11px] text-white/65",
                          fontSans.className
                        )}
                      >
                        {count} progetti
                      </div>
                    </div>

                    <div
                      className={cx(
                        "shrink-0 rounded-full border px-2 py-1 text-[10px] tracking-[0.18em] uppercase",
                        "border-white/20 text-white/70 bg-white/5",
                        fontMono.className
                      )}
                      aria-label={`${count} progetti`}
                    >
                      {String(count).padStart(2, "0")}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Ken Burns */}
        <style jsx>{`
          .kenburns {
            transform-origin: 55% 40%;
            animation: kenburns 18s ease-in-out infinite alternate;
          }
          @keyframes kenburns {
            from {
              transform: scale(1) translate3d(0, 0, 0);
            }
            to {
              transform: scale(1.04) translate3d(-1.4%, -0.8%, 0);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
