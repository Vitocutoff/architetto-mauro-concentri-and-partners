// /app/progetti/page.jsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { progettiCategories } from "@/data/progetti";
import { fontSans, fontSerif, fontMono } from "@/lib/fonts"; // <-- adatta i nomi se servono

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

// Placeholder super leggero (quasi invisibile) solo per evitare flash brutto
const BLUR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Crect width='24' height='24' fill='%23f2f2f2'/%3E%3C/svg%3E";

function IconArrow({ dir = "left" }) {
  return (
    <span aria-hidden className={cx("inline-block", dir === "left" ? "rotate-180" : "")}>
      →
    </span>
  );
}

function HeroCarousel({ categories, onJumpToCategory }) {
  const safeCategories = categories?.length ? categories : [];

  // ✅ ordine bgCard corretto
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

  // Preload “vero” (scarica subito le 4 immagini)
  useEffect(() => {
    const srcs = Object.values(bgById);
    const imgs = [];
    for (const s of srcs) {
      const im = new window.Image();
      im.src = s;
      imgs.push(im);
    }
  }, [bgById]);

  // BG crossfade senza salti (bottom stabile, top entra quando pronto)
  const [bottomSrc, setBottomSrc] = useState(initialBg);
  const [topSrc, setTopSrc] = useState(initialBg);
  const [topVisible, setTopVisible] = useState(false);
  const changeToken = useRef(0);
  const settleTimer = useRef(null);

  // testo
  const [displayTitle, setDisplayTitle] = useState(initialActive.label);
  const [displayKicker, setDisplayKicker] = useState(initialActive.kicker);
  const [textPhase, setTextPhase] = useState("idle"); // out|in|idle

  // sizer (no shift)
  const { longestLabel, longestKicker } = useMemo(() => {
    const labels = safeCategories.map((c) => c.label || "");
    const kickers = safeCategories.map((c) => c.kicker || "");
    const longestLabel = labels.reduce((a, b) => (b.length > a.length ? b : a), labels[0] || "");
    const longestKicker = kickers.reduce((a, b) => (b.length > a.length ? b : a), kickers[0] || "");
    return { longestLabel, longestKicker };
  }, [safeCategories]);

  // autoplay
  useEffect(() => {
    if (!safeCategories.length) return;
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % safeCategories.length);
    }, 6500);
    return () => clearInterval(t);
  }, [paused, safeCategories.length]);

  // keyboard
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeCategories.length]);

  // cambio BG: prepara top, bottom resta
  useEffect(() => {
    if (!activeBg) return;
    if (activeBg === bottomSrc) return;

    if (settleTimer.current) clearTimeout(settleTimer.current);

    changeToken.current += 1;
    setTopVisible(false);
    setTopSrc(activeBg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeBg]);

  // testo
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

  function prev() {
    if (!safeCategories.length) return;
    setIndex((i) => (i - 1 + safeCategories.length) % safeCategories.length);
  }
  function next() {
    if (!safeCategories.length) return;
    setIndex((i) => (i + 1) % safeCategories.length);
  }
  function goTo(i) {
    if (!safeCategories.length) return;
    setIndex(i);
  }

  const titleAnim =
    textPhase === "out" ? "opacity-0 -translate-y-1" : "opacity-100 translate-y-0";
  const kickerAnim =
    textPhase === "out" ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0";

  const total = safeCategories.length || 4;

  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-[32px] border border-neutral-200 bg-white",
        "min-h-[50vh] sm:min-h-[54vh] lg:min-h-[58vh] xl:min-h-[60vh]"
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* BG bottom — CARICAMENTO DIRETTO (no optimizer) per evitare ritardi */}
      <div className="absolute inset-0">
        <Image
          key={`bg-bottom-${bottomSrc}`}
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
          key={`bg-top-${topSrc}`}
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

      {/* Scrim HERO — ancora meno “bianco” a sx + transizione più uniforme */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.54)_0%,rgba(255,255,255,0.34)_46%,rgba(255,255,255,0.16)_74%,rgba(255,255,255,0.08)_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(0,0,0,.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.14)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div
          className="absolute inset-0 opacity-[0.10] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.32'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
      </div>

      {/* Content */}
      <div className="relative flex h-full flex-col p-6 sm:p-8 lg:p-10">
        {/* Top bar + HUD */}
        <div className="flex items-center justify-between gap-4">
          <div className={cx("text-xs tracking-[0.26em] uppercase text-neutral-900", fontSans.className)}>
            Progetti
          </div>

          <div className="flex items-center gap-2">
            <div className={cx("hidden text-xs text-neutral-900 sm:block", fontMono.className)}>
              CAT {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
              <span className="ml-2 text-neutral-800">{paused ? "PAUSE" : "AUTO"}</span>
            </div>

            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-neutral-300 bg-white/40 px-4 py-2 text-sm text-neutral-950 backdrop-blur-[1px] transition hover:border-neutral-700"
              aria-label="Slide precedente"
            >
              <IconArrow dir="left" />
            </button>
            <button
              type="button"
              onClick={next}
              className="rounded-full border border-neutral-300 bg-white/40 px-4 py-2 text-sm text-neutral-950 backdrop-blur-[1px] transition hover:border-neutral-700"
              aria-label="Slide successiva"
            >
              <IconArrow dir="right" />
            </button>
          </div>
        </div>

        {/* Title block */}
        <div className="mt-6 max-w-4xl">
          <div className="rounded-3xl border border-black/10 bg-white/30 p-6 backdrop-blur-[1px] sm:p-7 lg:p-8">
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
                  className={cx("mt-4 max-w-2xl text-sm leading-relaxed text-neutral-950 sm:text-base", fontSans.className)}
                  style={clamp2LinesStyle()}
                >
                  {longestKicker}
                </p>
              </div>

              {/* reale */}
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

                <div className={cx("mt-5 text-xs text-neutral-900", fontMono.className)}>
                  ← → per cambiare categoria · clicca una tipologia per andare alla sezione
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 cards tipologie — SOLUZIONE SEMPLICE: titolo 1 riga + font leggermente più piccolo */}
        <div className="mt-6">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {safeCategories.map((c, i) => {
              const isActive = i === index;

              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    goTo(i);
                    onJumpToCategory(c.id);
                  }}
                  className={cx(
                    "group relative text-left transition",
                    "rounded-2xl border bg-white/34 backdrop-blur-[1px]",
                    "h-[120px] px-4 py-4 overflow-hidden",
                    isActive ? "border-neutral-950" : "border-neutral-300 hover:border-neutral-700"
                  )}
                >
                  <div className="flex h-full flex-col">
                    <div className={cx("text-[11px] tracking-[0.22em] uppercase text-neutral-900", fontMono.className)}>
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* 1 riga, ellissi: così Campi da Calcio NON crea mai differenze */}
                    <div
                      className={cx(
                        "mt-2 font-medium text-neutral-950 antialiased",
                        "text-[13px] leading-[1.25] pb-[3px]", // pb evita taglio discendenti
                        "whitespace-nowrap overflow-hidden text-ellipsis",
                        fontSans.className
                      )}
                      title={c.label}
                    >
                      {c.label}
                    </div>

                    <div className={cx("mt-auto text-xs text-neutral-900 whitespace-nowrap overflow-hidden text-ellipsis", fontSans.className)}>
                      {c.projects?.length || 0} progetti
                    </div>

                    <div
                      className={cx(
                        "absolute bottom-3 right-3 rounded-full border bg-white/45 px-2 py-1 text-[11px] text-neutral-950 backdrop-blur-[1px] transition",
                        isActive ? "border-neutral-950" : "border-neutral-300 group-hover:border-neutral-700"
                      )}
                    >
                      Vai ↴
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* footer hero */}
        <div className="mt-5 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => onJumpToCategory(active.id)}
            className={cx(
              "rounded-full border border-neutral-300 bg-white/40 px-5 py-2.5 text-sm text-neutral-950 backdrop-blur-[1px] transition hover:border-neutral-700",
              fontSans.className
            )}
          >
            Vai alla sezione <span className={cx("ml-2 text-neutral-900", fontMono.className)}>↴</span>
          </button>

          <div className="hidden sm:block w-56">
            <div className="h-[2px] w-full overflow-hidden rounded-full bg-neutral-300/70">
              <div className="h-full bg-neutral-950/90" style={{ width: `${((index + 1) / total) * 100}%` }} />
            </div>
            <div className={cx("mt-2 text-[11px] text-neutral-900", fontSans.className)}>
              Hover sulla hero per mettere in pausa.
            </div>
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

function ProjectCard({ p }) {
  return (
    <Link
      href={`/${p.slug}`}
      className={cx(
        "group block overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:border-neutral-400",
        "focus:outline-none focus:ring-2 focus:ring-neutral-300"
      )}
    >
      <div className="relative aspect-[16/10] bg-neutral-100" />
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3
            className={cx(
              "text-base font-medium text-neutral-950 antialiased",
              "leading-[1.32] pb-[3px]",
              fontSans.className
            )}
            style={clamp2LinesStyle()}
          >
            {p.title}
          </h3>
          <span className={cx("shrink-0 text-xs text-neutral-900", fontMono.className)}>{p.year || "—"}</span>
        </div>
        <p className={cx("mt-1 text-sm text-neutral-900", fontSans.className)}>{p.place}</p>
        <p className={cx("mt-3 text-xs text-neutral-800", fontMono.className)}>
          Apri scheda <span className="text-neutral-700">→</span>
        </p>
      </div>
    </Link>
  );
}

export default function ProgettiPage() {
  const categories = progettiCategories;

  const sectionRefs = useRef({});
  const registerRef = (id) => (el) => {
    if (el) sectionRefs.current[id] = el;
  };

  const jumpTo = (id) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      {/* BACKGROUND GENERALE: griglie + intersezioni “visibili” + diagonale tecnica */}
      <div className="pointer-events-none absolute inset-0">
        {/* griglia grande */}
        <div
          className="absolute inset-0 opacity-[0.10]
          [background-image:linear-gradient(to_right,rgba(0,0,0,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.18)_1px,transparent_1px)]
          [background-size:96px_96px]"
        />
        {/* griglia fitta */}
        <div
          className="absolute inset-0 opacity-[0.06]
          [background-image:linear-gradient(to_right,rgba(0,0,0,.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.16)_1px,transparent_1px)]
          [background-size:18px_18px]"
        />
        {/* diagonale/intersezione (tocco “intreccio intelligente”) */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(135deg,transparent_48%,rgba(0,0,0,0.22)_49%,rgba(0,0,0,0.22)_51%,transparent_52%)] [background-size:420px_420px]" />
        {/* accento radiale */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_10%,rgba(0,0,0,0.05),transparent_60%)]" />
      </div>

      <section className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div id="top" />

        <HeroCarousel categories={categories} onJumpToCategory={jumpTo} />

        <div className="mt-10 space-y-14">
          {categories.map((cat) => (
            <div key={cat.id} ref={registerRef(cat.id)} id={cat.id} className="scroll-mt-24">
              <div className="flex items-end justify-between gap-6">
                <div className="min-w-0">
                  <h2 className={cx("text-2xl font-semibold text-neutral-950", fontSerif.className)}>{cat.label}</h2>
                  <p className={cx("mt-2 max-w-2xl text-sm leading-relaxed text-neutral-900", fontSans.className)}>
                    {cat.kicker}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => jumpTo("top")}
                  className={cx(
                    "hidden rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 hover:border-neutral-400 lg:inline-flex",
                    fontSans.className
                  )}
                >
                  Torna su <span className={cx("ml-2 text-neutral-700", fontMono.className)}>↑</span>
                </button>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.projects.map((p) => (
                  <ProjectCard key={p.slug} p={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
