import Image from "next/image";
import { fontSerif } from "@/lib/fonts";

function cx(...c) {
  return c.filter(Boolean).join(" ");
}

function SideLabel({ text, align = "center" }) {
  return (
    <div
      className={cx(
        "flex h-full items-center",
        align === "left" ? "justify-start" : "justify-center"
      )}
    >
      <div
        className={cx(
          "text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight uppercase text-neutral-950",
          "select-none",
          fontSerif.className
        )}
      >
        {text}
      </div>
    </div>
  );
}

function Photo({ src, alt }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_18px_70px_rgba(0,0,0,0.10)]">
      {/* ~20% meno alta rispetto ad aspect-video (16/9): 9 * 0.8 = 7.2 */}
      <div className="group relative aspect-[16/7.2] bg-neutral-100">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
          sizes="(min-width: 1024px) 75vw, 100vw"
          priority={false}
        />

        {/* micro “depth” senza testo */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60
                     bg-[radial-gradient(900px_420px_at_20%_20%,rgba(255,255,255,0.22),transparent_60%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0
                     bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_60%,rgba(0,0,0,0.10)_100%)]"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

function Row({ src, label, reverse = false }) {
  return (
    <div className="grid gap-4 lg:grid-cols-12 items-stretch">
      {/* LAYOUT NORMALE: foto sx (9) + label dx (3) */}
      {!reverse ? (
        <>
          <div className="lg:col-span-9">
            <Photo src={src} alt={label} />
          </div>
          <div className="lg:col-span-3">
            <SideLabel text={label} />
          </div>
        </>
      ) : (
        <>
          {/* LAYOUT INVERTITO: label sx (3) + foto dx (9) */}
          <div className="lg:col-span-3">
            <SideLabel text={label} align="left" />
          </div>
          <div className="lg:col-span-9">
            <Photo src={src} alt={label} />
          </div>
        </>
      )}
    </div>
  );
}

export default function BeforeAfter({ beforeSrc, afterSrc }) {
  if (!beforeSrc || !afterSrc) return null;

  return (
    <section className="space-y-6">
      <Row src={beforeSrc} label="PRIMA" reverse={false} />
      <Row src={afterSrc} label="DOPO" reverse />
    </section>
  );
}
