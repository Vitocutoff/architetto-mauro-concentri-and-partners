export default function CvSection({
  id,
  title,
  children,
  size = "lg",
  accent = "zinc",   // zinc | emerald | sky | amber
}) {
  const titleClass =
    size === "sm"
      ? "text-lg font-semibold tracking-tight leading-tight"
      : "text-2xl font-semibold tracking-tight leading-tight";

  const accentMap = {
    zinc: "bg-zinc-800/70",
    emerald: "bg-emerald-500/80",
    sky: "bg-sky-500/80",
    amber: "bg-amber-500/80",
    red: "bg-red-400/70",
  };

  const accentBg = accentMap[accent] || accentMap.zinc;

  return (
    <section
      id={id}
      className="scroll-mt-28"
    >
      <div
        className="
          relative
          rounded-2xl
          border
          border-zinc-200
          bg-white/92
          shadow-[0_10px_30px_rgba(0,0,0,0.06)]
          overflow-hidden
        "
      >
        {/* Accent bar */}
        <div
          className={`absolute left-0 top-0 h-full w-0.75 ${accentBg}`}
          aria-hidden="true"
        />

        <div className="p-6 sm:p-8">
          {/* HEADER */}
          <div className="flex items-end justify-between gap-6">
            <h2
              className={[
                titleClass,
                "text-zinc-900",
              ].join(" ")}
            >
              {title}
            </h2>

            <span
              className="hidden sm:block h-px w-20 bg-zinc-200/80"
              aria-hidden="true"
            />
          </div>

          {/* Divider */}
          <div
            className="mt-4 h-px w-full bg-zinc-200/80"
            aria-hidden="true"
          />

          {/* CONTENT */}
          <div className="mt-6 space-y-6">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
