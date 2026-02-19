import Image from "next/image";

import CvEntry from "@/components/cv/CvEntry";
import CvSection from "@/components/cv/CvSection";
import CvSidebarBlock from "@/components/cv/CvSidebarBlock";
import { fontSans, fontSerif } from "@/lib/fonts";

export const metadata = {
  title: "CV",
  description: "Curriculum professionale e incarichi principali dello studio.",
};

function Fact({ k, v }) {
  return (
    <div
      className="rounded-xl
                 border
                 border-zinc-200
                 bg-white/80
                 px-4
                 py-3"
    >
      <div
        className="text-[11px]
                   tracking-[0.22em]
                   uppercase
                   text-zinc-500"
      >
        {k}
      </div>

      <div
        className="mt-1
                   text-sm
                   text-zinc-900"
      >
        {v}
      </div>
    </div>
  );
}

function Subheading({ children }) {
  return (
    <div className="pt-6">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-zinc-300" aria-hidden="true" />
        <h3
          className={`${fontSans.className}
                      text-xs
                      tracking-[0.22em]
                      uppercase
                      text-zinc-600`}
        >
          {children}
        </h3>
      </div>
    </div>
  );
}

export default function CVPage() {
  /* ================= DATI ================= */

  const abilitazioni = [
    {
      k: "Albo",
      v: (
        <>
          Iscrizione all’Albo Architetti PPC — Provincia di Vicenza,{" "}
          <strong>n. 689</strong> (dal <strong>05/07/1989</strong>)
        </>
      ),
    },
    { k: "INARCASSA", v: <>Matricola <strong>347710</strong></> },
    {
      k: "Regione Veneto",
      v: (
        <>
          Elenco Collaudatori tecnici (cat. 1 opere edilizie){" "}
          <strong>n. 1569</strong>
        </>
      ),
    },
    {
      k: "Sicurezza",
      v: (
        <>
          Coordinatore <strong>CSP / CSE</strong> (abilitazione{" "}
          <strong>1998</strong>) — aggiornamento valido fino al{" "}
          <strong>10/05/2029</strong>
        </>
      ),
    },
  ];

  const didattica = [
    {
      period: "2006 — oggi",
      title: (
        <>
          Docente — <em>Tecnologia</em>
        </>
      ),
      place: <>Istituto comprensivo Statale di Sovizzo (VI)</>,
    },
    {
      period: "1989 — 2006",
      title: (
        <>
          Docente — <em>Tecnologia</em>
        </>
      ),
      place: (
        <>
          Istituto Maria Immacolata “Leone XIII” — Scuola paritaria,
          Montecchio Maggiore (VI)
        </>
      ),
    },
  ];

  const editoriale = [
    {
      period: "2006",
      title: <>Manuale sull’impiantistica sportiva</>,
      place: <>C.O.N.I. — Comitato Provinciale di Vicenza</>,
      note: (
        <>
          con arch. <strong>Luigi Crimi</strong>
        </>
      ),
    },
  ];

  const incarichiSportivi = [
    {
      period: "2020 — oggi",
      title: <>Omologatore regionale</>,
      place: (
        <>
          <strong>F.I.S.R.</strong> — Federazione Italiana Sport Rotellistici
        </>
      ),
    },
    {
      period: "2010 — 2012",
      title: <>C.O.N.I. — Comitato Provinciale di Vicenza</>,
      place: <>Consulente per l’impiantistica sportiva</>,
    },
    {
      period: "2001 — 2009",
      title: <>C.O.N.I. — Comitato Provinciale di Vicenza</>,
      place: <>Vice-consulente per l’impiantistica sportiva</>,
    },
  ];

  const commissioniVigilanza = [
    {
      period: "2002 — 2015",
      title: <>Commissione di vigilanza Pubblici Spettacoli (Prefettizia)</>,
      place: (
        <>
          Membro (rappresentante <strong>C.O.N.I.</strong>) — impianti sportivi
        </>
      ),
    },
    {
      period: "2002 — 2014",
      title: <>Commissioni di vigilanza Pubblici Spettacoli Comunali</>,
      place: (
        <>
          Membro (rappresentante <strong>C.O.N.I.</strong>) — Provincia di
          Vicenza
        </>
      ),
    },
  ];

  const incarichiTecnici = [
    {
      period: "2010 — oggi",
      title: (
        <>
          Membro CEC esperto <strong>BB.AA.</strong>
        </>
      ),
      place: <>Comune di Grisignano di Zocco (VI)</>,
    },
    {
      period: "2006 — 2007",
      title: (
        <>
          Membro CEC esperto <strong>BB.AA.</strong>
        </>
      ),
      place: <>Comune di Longare (VI)</>,
    },
    {
      period: "2000 — 2005",
      title: <>Membro CEC</>,
      place: <>Comune di Creazzo (VI)</>,
    },
  ];

  const ruoliIstituzionali = [
    {
      period: "2016 — 2017",
      title: <>Fondazione I.U.A.V. di Venezia</>,
      place: (
        <>
          Membro del Consiglio di Amministrazione (rappresentante{" "}
          <strong>MIUR</strong>)
        </>
      ),
    },
    {
      period: "1996 — 1998",
      title: <>Assessore all’Urbanistica ed Edilizia Privata</>,
      place: <>Comune di Sovizzo (VI)</>,
    },
  ];

  /* ================= RENDER ================= */

  return (
    <section
      className="relative
                 w-screen
                 left-1/2
                 -translate-x-1/2
                 overflow-hidden"
    >
      <div
        className="relative
                   mx-auto
                   w-full
                   max-w-6xl
                   px-4
                   sm:px-6
                   lg:px-8
                   py-10
                   sm:py-14"
      >
        {/* HEADER */}
        <header>
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-zinc-300" />
            <p
              className={`${fontSans.className}
                          text-xs
                          tracking-[0.22em]
                          uppercase
                          text-zinc-600`}
            >
              informazioni
            </p>
          </div>

          <h1
            className={`${fontSerif.className}
                        mt-4
                        text-4xl
                        sm:text-5xl
                        font-semibold
                        tracking-tight
                        text-zinc-900`}
          >
            Curriculum Vitae
          </h1>
        </header>

        {/* GRIGLIA */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[340px_1fr]">
          {/* SIDEBAR */}
          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            {/* FOTO PROFILO */}
            <CvSidebarBlock title="Profilo">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full border bg-black border-zinc-200 shadow-sm">
                  <Image
                    src="/images/mauroConcentriCV.webp"
                    alt="Mauro Concentri"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                <div
                  className={`${fontSerif.className}
                              mt-4
                              text-xl
                              font-semibold
                              text-zinc-900`}
                >
                  Mauro Concentri
                </div>

                <div
                  className={`${fontSans.className}
                              mt-1
                              text-sm
                              text-zinc-600`}
                >
                  Architetto
                </div>
              </div>
            </CvSidebarBlock>

            {/* ABILITAZIONI */}
            <CvSidebarBlock title="Abilitazioni principali" accent="emerald">
              <div className="space-y-3">
                {abilitazioni.map((a) => (
                  <Fact key={a.k} k={a.k} v={a.v} />
                ))}
              </div>
            </CvSidebarBlock>

            {/* DIDATTICA */}
            <CvSidebarBlock title="Didattica" accent="sky" compact>
              <div className="space-y-4">
                {didattica.map((e, i) => (
                  <CvEntry key={`did-${i}`} {...e} />
                ))}
              </div>
            </CvSidebarBlock>

            {/* EDITORIALE */}
            <CvSidebarBlock title="Editoriale" accent="amber" compact>
              <div className="space-y-4">
                {editoriale.map((e, i) => (
                  <CvEntry key={`ed-${i}`} {...e} />
                ))}
              </div>
            </CvSidebarBlock>
          </aside>

          {/* CONTENUTO PRINCIPALE */}
          <div className="space-y-12">
            <CvSection id="pa" title="Pubblica Amministrazione" accent="red">
              <Subheading>Incarichi sportivi</Subheading>
              {incarichiSportivi.map((e, i) => (
                <CvEntry key={`sport-${i}`} {...e} />
              ))}

              <Subheading>Commissioni di vigilanza</Subheading>
              {commissioniVigilanza.map((e, i) => (
                <CvEntry key={`vig-${i}`} {...e} />
              ))}

              <Subheading>Incarichi tecnici</Subheading>
              {incarichiTecnici.map((e, i) => (
                <CvEntry key={`tec-${i}`} {...e} />
              ))}

              <Subheading>Ruoli istituzionali</Subheading>
              {ruoliIstituzionali.map((e, i) => (
                <CvEntry key={`ist-${i}`} {...e} />
              ))}
            </CvSection>
          </div>
        </div>
      </div>
    </section>
  );
}
