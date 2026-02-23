export default function CvEntry({
  period,
  title,
  place,
  note,
  bullets,
  highlight = false,
}) {
  return (
    <article
      className={[
        "relative",
        "rounded-2xl",
        "border border-zinc-200",
        "bg-white/92",
        "shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
        "overflow-hidden",
        highlight ? "ring-1 ring-zinc-900/10" : "",
      ].join(" ")}
    >
      <div className="p-5 sm:p-6">
        {/* HEADER */}
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            {title ? (
              <h3 className="text-base sm:text-lg font-semibold tracking-tight text-zinc-900">
                {title}
              </h3>
            ) : null}

            {place ? (
              <div className="mt-1 text-sm leading-relaxed text-zinc-700">
                {place}
              </div>
            ) : null}
          </div>

          {period ? (
            <div className="shrink-0 text-right">
              <time className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-[11px] tracking-[0.22em] uppercase text-zinc-600 whitespace-nowrap">
                {period}
              </time>
            </div>
          ) : null}
        </div>

        {/* BODY */}
        {(note || (bullets && bullets.length)) ? (
          <div className="mt-4 pt-4 border-t border-zinc-200/80">
            {note ? (
              <div className="text-sm leading-relaxed text-zinc-500">
                {note}
              </div>
            ) : null}

            {bullets && bullets.length ? (
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                {bullets.map((b, i) => (
                  <li key={`${b}-${i}`} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
