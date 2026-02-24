// /components/workinprogress/WorkInProgressCard.jsx

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
      className="group relative block overflow-hidden rounded-2xl border border-neutral-200
                 bg-white/90 shadow-[0_14px_50px_rgba(0,0,0,0.10)]
                 transition hover:border-neutral-400 hover:shadow-[0_18px_70px_rgba(0,0,0,0.14)]
                 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-neutral-300 transform-gpu"
    >
      {/* Badge */}
      <div className="absolute left-3 top-3 z-10">
        <div
          className={`${fontMono.className}
                      inline-flex items-center gap-2 rounded-full
                      border border-white/30 bg-white/18 px-3 py-1.5
                      text-[11px] tracking-[0.22em] uppercase text-white
                      backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.18)]`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
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
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />

            {/* overlay più elegante */}
            <div
              className="absolute inset-0
                         bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_36%,rgba(0,0,0,0.18)_100%)]"
              aria-hidden="true"
            />
          </>
        ) : (
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-[#fbfcfe]" />
            <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_22%_30%,rgba(34,211,238,0.16),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_80%_22%,rgba(34,197,94,0.10),transparent_62%)]" />

            <div
              className="absolute inset-0 opacity-[0.14]
                         bg-[linear-gradient(to_right,rgba(2,6,23,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.14)_1px,transparent_1px)]
                         bg-size-[72px_72px]"
            />
            <div
              className="absolute inset-0 opacity-[0.07]
                         bg-[linear-gradient(to_right,rgba(2,6,23,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.12)_1px,transparent_1px)]
                         bg-size-[18px_18px]"
            />

            <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_50%,transparent_60%,rgba(0,0,0,0.045)_100%)]" />
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        <h3
          className={`${fontSans.className} text-base font-medium text-neutral-950 antialiased leading-[1.32] pb-0.75`}
          style={clamp2LinesStyle()}
        >
          {p.title}
        </h3>

        <p className={`${fontSans.className} mt-1 text-sm text-neutral-900`}>{p.place}</p>

        <div className="mt-4 flex items-center justify-between gap-4">
          <span className={`${fontMono.className} text-xs text-neutral-900`}>{p.year || "—"}</span>
          <span className={`${fontMono.className} text-xs text-neutral-800`}>
            Vai <span className="text-neutral-700">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
