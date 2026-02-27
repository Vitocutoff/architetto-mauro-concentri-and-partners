// /components/progetti/slug/BeforeAfter.jsx
import Image from "next/image";
import { fontSans, fontSerif } from "@/lib/fonts";

function cx(...c) {
  return c.filter(Boolean).join(" ");
}

export default function BeforeAfter({ beforeSrc, afterSrc, beforeLabel = "Prima", afterLabel = "Dopo" }) {
  if (!beforeSrc || !afterSrc) return null;

  const box =
    "relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-[0_18px_70px_rgba(0,0,0,0.10)]";

  return (
    <section>
      <div className={cx("text-xs tracking-[0.22em] uppercase text-neutral-600", fontSans.className)}>
        Prima / Dopo
      </div>

      <div className="mt-4 grid gap-6">
        {/* PRIMA */}
        <div className={box}>
          <div className="absolute left-5 top-5 z-10 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-xs tracking-[0.18em] uppercase text-white/85 backdrop-blur-md">
            {beforeLabel}
          </div>

          <div className="relative aspect-16/10">
            <Image src={beforeSrc} alt={`${beforeLabel}`} fill className="object-cover" sizes="(min-width: 1024px) 800px, 100vw" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_55%,rgba(0,0,0,0.16)_100%)]" />
          </div>
        </div>

        {/* DOPO */}
        <div className={box}>
          <div className="absolute left-5 top-5 z-10 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-xs tracking-[0.18em] uppercase text-white/85 backdrop-blur-md">
            {afterLabel}
          </div>

          <div className="relative aspect-16/10">
            <Image src={afterSrc} alt={`${afterLabel}`} fill className="object-cover" sizes="(min-width: 1024px) 800px, 100vw" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_55%,rgba(0,0,0,0.16)_100%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
