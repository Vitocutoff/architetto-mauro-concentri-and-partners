import Link from "next/link";
import Image from "next/image";
import { fontSans, fontMono } from "@/lib/fonts";

function clamp2LinesStyle() {
  return {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };
}

export default function WorkInProgressCard({ p }) {
  const coverSrc = p?.cover || null;

  return (
    <Link
      href={`/work-in-progress/${p.slug}`}
      className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300"
    >
      {/* Cover */}
      <div className="relative aspect-[16/10] bg-neutral-100">
        {coverSrc ? (
          <>
            <Image
              src={coverSrc}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_40%,rgba(0,0,0,0.10)_100%)]" />
          </>
        ) : (
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(0,0,0,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.18)_1px,transparent_1px)] [background-size:24px_24px]" />
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        <h3
          className={`text-base font-medium text-neutral-950 antialiased leading-[1.32] pb-[3px] ${fontSans.className}`}
          style={clamp2LinesStyle()}
        >
          {p.title}
        </h3>

        <p className={`mt-1 text-sm text-neutral-900 ${fontSans.className}`}>{p.place}</p>

        <div className="mt-4 flex items-center justify-between gap-4">
          <span className={`text-xs text-neutral-900 ${fontMono.className}`}>{p.year || "—"}</span>

          <span className={`text-xs text-neutral-800 ${fontMono.className}`}>
            Vai <span className="text-neutral-700">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
