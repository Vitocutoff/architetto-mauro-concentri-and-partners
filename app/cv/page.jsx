// app/cv/page.jsx

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

export default function CVPage() {
  const abilitazioni = [
    {
      k: "Albo",
      v: (
        <>
          Iscrizione all’Albo degli Architetti PPC – Provincia di Vicenza, <strong>n. 689</strong> (dal{" "}
          <strong>1989</strong>)
        </>
      ),
    },
    { k: "INARCASSA", v: <>Posizione <strong>347710</strong></> },
    {
      k: "Regione Veneto",
      v: (
        <>
          Elenco Collaudatori <strong>n. 1569</strong>
        </>
      ),
    },
    {
      k: "Sicurezza",
      v: (
        <>
          Coordinatore <strong>CSP/CSE</strong> (dal <strong>2008</strong>) — aggiornamento valido fino al{" "}
          <strong>10/05/2029</strong>
        </>
      ),
    },
  ];

  const didattica = [
    {
      period: "Dal 2006 — oggi",
      title: (
        <>
          Docente di <em>Tecnologia</em>
        </>
      ),
      place: <>Istituto comprensivo Statale di Sovizzo (VI)</>,
      note: null,
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
          Istituto Maria Immacolata “Leone XIII” — Scuola paritaria, Montecchio Maggiore (VI)
        </>
      ),
      note: null,
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

  const pubblicaAmministrazione = [
    {
      period: "Dal 2020 — oggi",
      title: <>Omologatore regionale</>,
      place: (
        <>
          <strong>F.I.S.R.</strong> — Federazione Italiana Sport Rotellistici
        </>
      ),
      note: null,
    },
    {
      period: "2016 — 2017",
      title: <>Fondazione I.U.A.V. di Venezia</>,
      place: (
        <>
          Membro del Consiglio di Amministrazione (rappresentante <strong>MIUR</strong>)
        </>
      ),
      note: null,
    },
    {
      period: "Dal 2010 — oggi",
      title: (
        <>
          Membro CEC esperto <strong>BB.AA.</strong>
        </>
      ),
      place: <>Comune di Grisignano di Zocco (VI)</>,
      note: null,
    },
    {
      period: "2010 — 2012",
      title: <>C.O.N.I. – Comitato Provinciale di Vicenza</>,
      place: <>Consulente per l’impiantistica sportiva</>,
      note: null,
    },
    {
      period: "Dal 2002 — oggi",
      title: (
        <>
          Commissione Vigilanza Pubblici Spettacoli (<strong>Prefettizia</strong>) — impianti sportivi
        </>
      ),
      place: (
        <>
          Membro (rappresentante <strong>C.O.N.I.</strong>)
        </>
      ),
      note: null,
    },
    {
      period: "2002 — 2015",
      title: <>Commissioni Vigilanza Pubblici Spettacoli Comunali — impianti sportivi</>,
      place: (
        <>
          Membro (rappresentante <strong>C.O.N.I.</strong>) — Provincia di Vicenza
        </>
      ),
      note: null,
    },
    {
      period: "2001 — 2009",
      title: <>C.O.N.I. – Comitato Provinciale di Vicenza</>,
      place: <>Vice consulente per l’impiantistica sportiva</>,
      note: null,
    },
    {
      period: "2006 — 2007",
      title: (
        <>
          Membro CEC esperto <strong>BB.AA.</strong>
        </>
      ),
      place: <>Comune di Longare (VI)</>,
      note: null,
    },
    {
      period: "2000 — 2005",
      title: <>Membro CEC</>,
      place: <>Comune di Creazzo (VI)</>,
      note: null,
    },
    {
      period: "1996 — 1998",
      title: <>Assessore all’Urbanistica ed Edilizia Privata</>,
      place: <>Comune di Sovizzo (VI)</>,
      note: null,
    },
  ];

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

        <header>

          <div
            className="inline-flex
                       items-center
                       gap-3"
          >

            <span
              className="h-px
                         w-10
                         bg-zinc-300"
            />

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
        <div
          className="mt-10
                     grid
                     grid-cols-1
                     gap-6
                     lg:grid-cols-[340px_1fr]"
        >

          {/* SINISTRA */}
          <aside
            className="space-y-6
                       lg:sticky
                       lg:top-24
                       lg:self-start"
          >

            <CvSidebarBlock
              title="Abilitazioni principali"
            >

              <div
                className="space-y-3"
              >

                {abilitazioni.map((a) => (

                  <Fact
                    key={a.k}
                    k={a.k}
                    v={a.v}
                  />

                ))}

              </div>

            </CvSidebarBlock>

            <CvSidebarBlock
              title="Didattica"
              compact
            >

              <div
                className="space-y-4"
              >

                {didattica.map((e) => (

                  <CvEntry
                    key={`${e.period}-${String(e.place)}`} {...e}
                  />

                ))}

              </div>

            </CvSidebarBlock>

            <CvSidebarBlock
              title="Editoriale"
              compact
            >

              <div
                className="space-y-4"
              >

                {editoriale.map((e) => (

                  <CvEntry
                    key={`${e.period}-${String(e.title)}`} {...e}
                  />

                ))}

              </div>

            </CvSidebarBlock>

          </aside>

          {/* DESTRA */}
          <div
            className="space-y-12"
          >

            <CvSection
              id="pa"
              title="Pubblica Amministrazione"
            >

              {pubblicaAmministrazione.map((e, i) => (

                <CvEntry
                  key={`${e.period}-${i}`} {...e}
                />

              ))}

            </CvSection>

          </div>

        </div>

      </div>

    </section>

  );

}
