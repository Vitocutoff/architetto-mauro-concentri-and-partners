export default function CvSidebarBlock({
  title,
  children,
  compact = false,
  accent = "zinc",   // zinc | emerald | sky | amber
  hero = false,      // true per blocco profilo
}) {
  const accentMap = {
    zinc: "bg-zinc-900/70",
    emerald: "bg-emerald-500/80",
    sky: "bg-sky-500/80",
    amber: "bg-amber-500/80",
    red: "bg-red-500/80",
  };

  const accentBg = accentMap[accent] || accentMap.zinc;

  return (
    <section
      className={[
        "relative",
        "rounded-2xl",
        "border border-zinc-200",
        "bg-white/92",
        "shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
        "overflow-hidden",
      ].join(" ")}
    >
      {/* Accent bar */}
      <div
        className={`absolute left-0 top-0 h-full w-[3px] ${accentBg}`}
        aria-hidden="true"
      />

      <div className={compact ? "p-4 sm:p-5" : "p-5 sm:p-6"}>
        {/* HEADER */}
        {title ? (
          <div
            className={
              hero
                ? "mb-5 text-center"
                : "mb-4 flex items-end justify-between gap-4"
            }
          >
            <h3
              className={[
                "font-semibold",
                "tracking-tight",
                "text-zinc-900",
                hero ? "text-base" : "text-sm",
              ].join(" ")}
            >
              {title}
            </h3>

            {!hero && (
              <span
                className="h-px w-12 bg-zinc-200/80"
                aria-hidden="true"
              />
            )}
          </div>
        ) : null}

        {/* CONTENT */}
        <div
          className={[
            hero ? "space-y-4" : "",
          ].join(" ")}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
