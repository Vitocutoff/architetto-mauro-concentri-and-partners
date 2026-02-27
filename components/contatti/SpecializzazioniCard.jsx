function Pill({ children, fontSans }) {
  return (
    <span
      className={`${fontSans.className} inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[12px] text-white/90`}
    >
      {children}
    </span>
  );
}

export default function SpecializzazioniCard({ fontSans, fontSerif, specializzatoIn, competenze }) {
  return (
    <div className="rounded-3xl border border-white/18 bg-white/6 p-6 sm:p-7 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-white/25" aria-hidden="true" />
        <div className={`${fontSans.className} text-xs tracking-[0.22em] uppercase text-white/70`}>
          ambiti principali
        </div>
      </div>

      <div className="mt-5 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className={`${fontSerif.className} text-xl text-white/95`}>
            Specializzato in
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {specializzatoIn.map((s) => (
              <Pill key={s} fontSans={fontSans}>
                {s}
              </Pill>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className={`${fontSerif.className} text-xl text-white/95`}>
            Supporto completo
          </div>

          <ul className="mt-4 space-y-2">
            {competenze.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/65 shrink-0" aria-hidden="true" />
                <span className={`${fontSans.className} text-sm text-white/80 leading-relaxed`}>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
