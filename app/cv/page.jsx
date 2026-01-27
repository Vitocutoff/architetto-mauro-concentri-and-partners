// app/cv/page.jsx

export const metadata = {
  title: "CV | Mauro Concentri",
  description:
    "Curriculum Vitae – tipologie a sinistra, incarichi a destra (ordinati dal più recente al più vecchio).",
};

const ACCENT = {
  a: "rgba(20,184,166,0.30)", // teal
  b: "rgba(14,165,233,0.26)", // sky
  thin: "rgba(14,165,233,0.18)",
};

const highlights = [
  { k: "Albo", v: "n. 689 (dal 1989)" },
  { k: "INARCASSA", v: "347710" },
  { k: "Reg. Veneto", v: "Collaudatori n. 1569" },
  { k: "Sicurezza", v: "valida fino al 10/05/2029" },
  { k: "FISR", v: "Omologatore (dal 02/2020)" },
];

const categories = [
  { id: "pa", label: "Pubblica Amministrazione", tag: "PA" },
  { id: "did", label: "Didattica", tag: "EDU" },
  { id: "ed", label: "Editoriale", tag: "PUB" },
  { id: "sp", label: "Sport", tag: "SP" },
];

const abilitazioni = [
  { k: "Albo", v: "Architetti PPC – Provincia di Vicenza, n. 689 (dal 1989)" },
  { k: "INARCASSA", v: "Posizione 347710" },
  { k: "Reg. Veneto", v: "Elenco Collaudatori n. 1569" },
  { k: "Sicurezza", v: "CSP/CSE + agg. valido fino al 10/05/2029 (dal 2008)" },
];

const data = {
  pa: [
    { year: 2017, period: "2016–2017", title: "Fondazione I.U.A.V. di Venezia", place: "Membro CdA (rappresentante MIUR)" },
    { year: 9999, period: "Dal 2010 — Oggi", title: "Membro CEC esperto BB.AA.", place: "Comune di Grisignano di Zocco (VI)" },
    { year: 2012, period: "2010–2012", title: "CONI – Comitato Provinciale di Vicenza", place: "Consulente per l’impiantistica sportiva" },
    { year: 9999, period: "Dal 2002 — Oggi", title: "Commissione Vigilanza Pubblici Spettacoli (Prefettizia) — impianti sportivi", place: "Membro (rappresentante C.O.N.I.)" },
    { year: 2015, period: "2002–2015", title: "Commissioni Vigilanza Pubblici Spettacoli Comunali — impianti sportivi", place: "Membro (rappresentante C.O.N.I.) — Provincia di Vicenza" },
    { year: 2009, period: "2001–2009", title: "CONI – Comitato Provinciale di Vicenza", place: "Vice consulente per l’impiantistica sportiva" },
    { year: 2007, period: "2006–2007", title: "Membro CEC esperto BB.AA.", place: "Comune di Longare (VI)" },
    { year: 2005, period: "2000–2005", title: "Membro CEC", place: "Comune di Creazzo (VI)" },
    { year: 1998, period: "1996–1998", title: "Assessore all’Urbanistica ed Edilizia Privata", place: "Comune di Sovizzo (VI)" },
  ],
  did: [
    { year: 9999, period: "Dal 2006", title: 'Docente — “Tecnologia”', place: "Istituto comprensivo Statale di Sovizzo (VI)" },
    { year: 2006, period: "1989–2006", title: 'Docente — “Tecnologia”', place: 'Istituto Maria Immacolata “Leone XIII” — Scuola paritaria, Montecchio Maggiore (VI)' },
  ],
  ed: [
    { year: 2006, period: "2006", title: "Manuale sull’impiantistica sportiva", place: "CONI — Comitato Provinciale di Vicenza", note: "con arch. Luigi Crimi" },
  ],
  sp: [
    { year: 9999, period: "Dal 02/2020", title: "Omologatore regionale", place: "FISR — Federazione Italiana Sport Rotellistici" },
  ],
};

function sortByRecent(arr) {
  return [...arr].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
}

function SubtleGridBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.10]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "84px 84px",
          }}
        />
      </div>
      <div
        className="absolute -top-44 left-1/2 h-96 w-[980px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          backgroundImage: `radial-gradient(circle at 40% 40%, ${ACCENT.b}, rgba(0,0,0,0) 60%)`,
          opacity: 0.10,
        }}
      />
    </div>
  );
}

function MarginOrnaments() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
      <div className="absolute right-6 top-24 w-[420px] opacity-[0.40]">
        <svg viewBox="0 0 420 180" className="h-auto w-full">
          <defs>
            <linearGradient id="inkA" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={ACCENT.b} />
              <stop offset="100%" stopColor={ACCENT.a} />
            </linearGradient>
          </defs>
          <g stroke="rgba(0,0,0,0.16)" strokeWidth="1" fill="none">
            <path d="M14 18 H120" />
            <path d="M14 18 V92" />
            <path d="M406 18 H300" />
            <path d="M406 18 V92" />
            <line x1="44" y1="126" x2="376" y2="126" />
            <line x1="44" y1="120" x2="44" y2="132" />
            <line x1="376" y1="120" x2="376" y2="132" />
            <line x1="220" y1="32" x2="220" y2="164" opacity="0.65" />
          </g>
          <g stroke="url(#inkA)" strokeWidth="2.2" fill="none" opacity="0.55">
            <path d="M62 44 C140 16, 216 20, 290 52 S374 100, 404 80" />
          </g>
          <g>
            <circle cx="44" cy="126" r="3" fill="rgba(0,0,0,0.22)" />
            <circle cx="376" cy="126" r="3" fill="rgba(0,0,0,0.22)" />
            <circle cx="220" cy="52" r="3" fill={ACCENT.b} opacity="0.55" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Chip({ k, v }) {
  return (
    <div className="relative rounded-full border border-zinc-200 bg-white/80 px-3 py-1.5 text-xs text-zinc-700 backdrop-blur-sm">
      <span
        className="absolute left-2 top-1/2 h-3 w-[2px] -translate-y-1/2 rounded-full"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${ACCENT.b}, ${ACCENT.a})`,
          opacity: 0.75,
        }}
      />
      <span className="pl-3 font-semibold text-zinc-900">{k}</span>
      <span className="text-zinc-400"> / </span>
      <span className="text-zinc-700">{v}</span>
    </div>
  );
}

function LeftPanelCard({ title, children }) {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-white/82 shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden">
      <div
        className="h-[2px] w-full"
        style={{
          backgroundImage: `linear-gradient(to right, ${ACCENT.b}, rgba(0,0,0,0), ${ACCENT.a})`,
          opacity: 0.75,
        }}
      />
      <div className="p-5">
        <h2 className="text-sm font-semibold tracking-tight text-zinc-900">
          {title}
        </h2>
        <div className="mt-4">{children}</div>
      </div>
    </section>
  );
}

function CategoryLink({ id, label, tag }) {
  return (
    <a
      href={`#${id}`}
      className="group flex items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-white/70 px-4 py-3 text-sm text-zinc-800 hover:bg-white/90 transition-colors"
    >
      <span className="font-medium">{label}</span>
      <span className="rounded-full border border-zinc-200 bg-white/70 px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-zinc-700">
        {tag}
      </span>
    </a>
  );
}

function ItemRow({ period, title, place, note }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white/88 shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden">
      <div
        className="h-[2px] w-full"
        style={{
          backgroundImage: `linear-gradient(to right, ${ACCENT.b}, rgba(0,0,0,0), ${ACCENT.a})`,
          opacity: 0.75,
        }}
      />
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-[11px] tracking-[0.22em] uppercase text-zinc-500">
            {period}
          </div>
        </div>
        <h3 className="mt-3 text-base sm:text-lg font-semibold tracking-tight text-zinc-900">
          {title}
        </h3>
        <p className="mt-1 text-sm text-zinc-700">{place}</p>
        {note ? <p className="mt-2 text-sm text-zinc-500">{note}</p> : null}
      </div>
    </div>
  );
}

function RightSection({ id, label, tag, items }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-end justify-between gap-6">
        <div className="space-y-1">
          <p className="text-[11px] tracking-[0.22em] uppercase text-zinc-500">
            {tag}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            {label}
          </h2>
        </div>
        <span className="hidden sm:block h-px w-16 bg-zinc-200" />
      </div>

      <div className="mt-4 h-px w-full bg-zinc-200" />

      <div className="mt-6 space-y-5">
        {sortByRecent(items).map((it, idx) => (
          <ItemRow key={`${id}-${idx}`} {...it} />
        ))}
      </div>
    </section>
  );
}

export default function CVPage() {
  return (
    <main className="relative">
      <SubtleGridBg />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <MarginOrnaments />

        {/* HERO */}
        <header className="relative">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-zinc-300" />
            <p className="text-xs tracking-[0.22em] uppercase text-zinc-600">
              CV – struttura a due colonne
            </p>
          </div>

          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900">
            Curriculum Vitae
          </h1>

          <p className="mt-3 max-w-2xl text-base text-zinc-600">
            Tipologie e riferimenti a sinistra. Incarichi ed esperienze a destra, ordinati dal più recente al più vecchio.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {highlights.map((h) => (
              <Chip key={`${h.k}-${h.v}`} k={h.k} v={h.v} />
            ))}
          </div>
        </header>

        {/* LAYOUT 2 COLONNE */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
          {/* LEFT: tipologie */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <LeftPanelCard title="Tipologie">
              <div className="space-y-3">
                {categories.map((c) => (
                  <CategoryLink key={c.id} id={c.id} label={c.label} tag={c.tag} />
                ))}
              </div>
            </LeftPanelCard>

            <LeftPanelCard title="Abilitazioni principali">
              <div className="space-y-3 text-sm text-zinc-700">
                {abilitazioni.map((a, idx) => (
                  <div key={idx} className="rounded-xl border border-zinc-200 bg-white/70 px-4 py-3">
                    <div className="text-[11px] tracking-[0.22em] uppercase text-zinc-500">
                      {a.k}
                    </div>
                    <div className="mt-1 font-medium text-zinc-900">{a.v}</div>
                  </div>
                ))}
              </div>
            </LeftPanelCard>
          </aside>

          {/* RIGHT: incarichi */}
          <div className="space-y-10">
            <RightSection
              id="pa"
              label="Pubblica Amministrazione"
              tag="PA"
              items={data.pa}
            />
            <RightSection
              id="did"
              label="Didattica"
              tag="EDU"
              items={data.did}
            />
            <RightSection
              id="ed"
              label="Editoriale"
              tag="PUB"
              items={data.ed}
            />
            <RightSection
              id="sp"
              label="Sport"
              tag="SP"
              items={data.sp}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
