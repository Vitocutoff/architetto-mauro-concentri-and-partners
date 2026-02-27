export default function ContactField({ k, v, mono = false, fontSans, fontMono }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white/92 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
      <div className="p-5 sm:p-6">
        <div className={`${fontSans.className} text-[11px] tracking-[0.22em] uppercase text-neutral-500`}>
          {k}
        </div>

        <div className={`mt-2 text-sm sm:text-base text-neutral-900 ${mono ? fontMono.className : fontSans.className}`}>
          {v}
        </div>
      </div>
    </div>
  );
}
