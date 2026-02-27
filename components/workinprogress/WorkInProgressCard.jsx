import { fontMono, fontSans } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

function clamp2LinesStyle() {
  return {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };
}

export default function WorkInProgressCard({ p }) {
  if (!p) return null;

  const coverSrc = p?.cover || null;

  return (
    <Link
      href={`/work-in-progress/${p.slug}`}
      className="group relative block overflow-hidden rounded-2xl
                 border border-neutral-200/90 bg-white/88
                 shadow-[0_14px_46px_rgba(0,0,0,0.10)]
                 transition
                 hover:-translate-y-1 hover:border-neutral-300
                 hover:shadow-[0_22px_70px_rgba(0,0,0,0.14)]
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300
                 transform-gpu"
    >
      {/* subtle inner stroke (premium) */}
      <div
        className="pointer-events-none absolute inset-px rounded-2xl border border-white/55 opacity-60"
        aria-hidden="true"
      />

      {/* Badge */}
      <div className="absolute left-3 top-3 z-20">
        <div
          className={`${fontMono.className}
                      inline-flex items-center gap-2
                      rounded-full border border-black/10
                      bg-white/65 px-3 py-1.5
                      text-[10px] tracking-[0.22em] uppercase
                      text-neutral-900 backdrop-blur-md`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
          AGGIORNAMENTI
          <span className="text-neutral-500/70" aria-hidden="true">
            •
          </span>
          IN CORSO
        </div>
      </div>

      {/* Cover */}
      <div className="relative aspect-16/10 bg-neutral-100">
        {coverSrc ? (
          <>
            <Image
              src={coverSrc}
              alt=""
              fill
              className="object-cover object-center
                         transition-transform duration-700
                         ease-[cubic-bezier(0.22,1,0.36,1)]
                         group-hover:scale-[1.04]"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />

            {/* scrim pulito (leggibilità, senza “luce strana”) */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.00)_42%,rgba(0,0,0,0.22)_100%)]" />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(650px_320px_at_50%_20%,rgba(255,255,255,0.12),transparent_60%)]" />
            </div>
          </>
        ) : (
          // Placeholder “blueprint soft” (zero asset pesanti)
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-[#fbfcfe]" />

            {/* glow tecnico soft */}
            <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_22%_28%,rgba(8,145,178,0.16),transparent_62%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(720px_circle_at_78%_22%,rgba(34,197,94,0.10),transparent_62%)]" />

            {/* micro-grid */}
            <div className="absolute inset-0 opacity-[0.12]
                            bg-[linear-gradient(to_right,rgba(0,0,0,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.18)_1px,transparent_1px)]
                            bg-size-[88px_88px]" />
            <div className="absolute inset-0 opacity-[0.07]
                            bg-[linear-gradient(to_right,rgba(0,0,0,.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.14)_1px,transparent_1px)]
                            bg-size-[18px_18px]" />

            {/* diagonali + arco (wow ma leggero) */}
            <div className="absolute inset-0 opacity-[0.10]
                            [background-image:
                              linear-gradient(135deg,transparent_49.1%,rgba(0,0,0,0.12)_49.4%,rgba(0,0,0,0.12)_50.6%,transparent_50.9%),
                              radial-gradient(520px_340px_at_70%_30%,rgba(0,140,175,0.18),transparent_62%)]" />

            {/* vignetta minimale */}
            <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_50%,transparent_58%,rgba(0,0,0,0.05)_100%)]" />
          </div>
        )}

        {/* highlight bordo in hover (molto “premium”) */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.35)" }}
          aria-hidden="true"
        />
      </div>

      {/* Body */}
      <div className="p-4">
        <h3
          className={`${fontSans.className}
                      text-base font-medium text-neutral-950 antialiased
                      leading-[1.32] pb-0.75`}
          style={clamp2LinesStyle()}
        >
          {p.title}
        </h3>

        <p className={`${fontSans.className} mt-1 text-sm text-neutral-800/95`}>
          {p.place}
        </p>

        <div className="mt-4 flex items-center justify-between gap-4">
          <span className={`${fontMono.className} text-xs text-neutral-900/90`}>
            {p.year || "—"}
          </span>

          <span
            className={`${fontMono.className}
                        inline-flex items-center gap-2
                        text-xs text-neutral-900/85`}
          >
            Dettagli
            <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
