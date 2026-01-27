// components/cv/CvEntry.jsx

export default function CvEntry({ period, title, place, note }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white/92 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
      <div className="p-5 sm:p-6">
        <div className="text-[11px] tracking-[0.22em] uppercase text-zinc-500">
          {period}
        </div>

        <h3 className="mt-3 text-base sm:text-lg font-semibold tracking-tight text-zinc-900">
          {title}
        </h3>

        <div className="mt-1 text-sm text-zinc-700">{place}</div>

        {note ? <div className="mt-2 text-sm text-zinc-500">{note}</div> : null}
      </div>
    </div>
  );
}
