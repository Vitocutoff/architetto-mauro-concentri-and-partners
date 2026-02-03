import { fontSans, fontSerif } from "@/lib/fonts";

export const metadata = {
  title: "Privacy Policy",
  description: "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).",
};

export default function PrivacyPolicyPage() {
  return (

    <article
      className="relative
                 w-screen
                 left-1/2
                 -translate-x-1/2
                 overflow-hidden"
    >

      <section
        className="mx-auto
        max-w-5xl
        px-4
        sm:px-6
        lg:px-12
        py-20
        sm:py-24
        lg:py-28"
      >

        <header
          className="mb-16
                     sm:mb-20"
        >

          <span
            className={`${fontSans.className}
                        inline-block
                        text-xs
                        tracking-[0.28em]
                        uppercase
                        text-neutral-500`}
          >

            Informativa

          </span>

          <h1
            className={`${fontSerif.className}
                        mt-4
                        text-4xl
                        sm:text-5xl
                        lg:text-6xl
                        leading-tight
                        text-neutral-900`}
          >

            Privacy Policy

          </h1>

          <p
            className={`${fontSans.className}
                        mt-6
                        max-w-2xl
                        text-base
                        sm:text-lg
                        leading-relaxed
                        text-neutral-600`}
          >

            Questa pagina descrive in modo trasparente come vengono trattati i dati personali
            degli utenti che visitano il sito dello studio <strong>Architetto Mauro Concentri &amp; Partners</strong>.

          </p>

        </header>

        <div
          className="space-y-16
                     sm:space-y-20"
        >

          <section>

            <h2
              className={`${fontSerif.className}
                          text-2xl
                          sm:text-3xl
                          text-neutral-900`}
            >

              Titolare del trattamento

            </h2>

            <div
              className="mt-6
                         max-w-2xl"
            >

              <p
                className={`${fontSans.className}
                            text-neutral-700
                            leading-relaxed`}
              >

                Il titolare del trattamento dei dati è:

              </p>

              <div
                className="mt-4
                           rounded-2xl
                           border
                           border-black/10
                           bg-neutral-50
                           px-6
                           py-5"
              >

                <p
                  className={`${fontSans.className}
                              text-neutral-900`}
                >

                  <strong>Architetto Mauro Concentri &amp; Partners</strong>

                </p>

                <p
                  className={`${fontSans.className}
                              mt-1
                              text-neutral-600`}
                >

                  Email:{" "}

                  <a
                    href="mailto:info@mauroconcentri.com"
                    className="underline
                               underline-offset-4
                               decoration-neutral-400
                               hover:decoration-neutral-700"
                  >

                    info@mauroconcentri.com

                  </a>

                </p>

              </div>

            </div>

          </section>

          <section>

            <h2
              className={`${fontSerif.className}
                          text-2xl
                          sm:text-3xl
                          text-neutral-900`}
            >

              Dati personali trattati

            </h2>

            <p
              className={`${fontSans.className}
                          mt-6
                          max-w-2xl
                          text-neutral-700
                          leading-relaxed`}
            >

              Attraverso questo sito possono essere raccolti esclusivamente i dati
              forniti volontariamente dall’utente.

            </p>

            <ul
              className={`${fontSans.className}
                          mt-6
                          grid
                          gap-3
                          max-w-xl
                          text-neutral-700`}
            >

              <li>Nome e cognome</li>

              <li>Indirizzo email</li>

              <li>Contenuto del messaggio inviato tramite il modulo di contatto</li>

              <li>Dati tecnici di navigazione (in forma anonima e aggregata)</li>

            </ul>

          </section>

          <section>
            <h2
              className={`${fontSerif.className}
                          text-2xl
                          sm:text-3xl
                          text-neutral-900`}
            >

              Finalità del trattamento

            </h2>

            <p
              className={`${fontSans.className}
                          mt-6
                          max-w-2xl
                          text-neutral-700
                          leading-relaxed`}
            >

              I dati personali sono utilizzati esclusivamente per finalità connesse
              all’attività professionale dello studio, in particolare per:

            </p>

            <ul
              className={`${fontSans.className}
                          mt-6
                          grid
                          gap-3
                          max-w-xl
                          text-neutral-700`}
            >

              <li>rispondere a richieste di informazioni o contatto</li>

              <li>gestire comunicazioni professionali e precontrattuali</li>

              <li>adempiere a obblighi di legge</li>

            </ul>

          </section>

          <section>
            <h2
              className={`${fontSerif.className}
                          text-2xl
                          sm:text-3xl
                          text-neutral-900`}
            >

              Base giuridica

            </h2>

            <p
              className={`${fontSans.className}
                          mt-6
                          max-w-2xl
                          text-neutral-700
                          leading-relaxed`}
            >

              Il trattamento dei dati si fonda sull’esecuzione di misure precontrattuali
              richieste dall’interessato e sul consenso espresso tramite il modulo di contatto,
              ai sensi dell’art. 6 del Regolamento UE 2016/679.

            </p>

          </section>

          <section>

            <h2
              className={`${fontSerif.className}
                          text-2xl
                          sm:text-3xl
                          text-neutral-900`}
            >

              Diritti dell’utente

            </h2>

            <p
              className={`${fontSans.className}
                          mt-6
                          max-w-2xl
                          text-neutral-700
                          leading-relaxed`}
            >

              In qualsiasi momento l’utente può esercitare i diritti previsti dal GDPR,
              tra cui accesso, rettifica, cancellazione e limitazione del trattamento.

            </p>

            <p
              className={`${fontSans.className}
                          mt-4
                          max-w-2xl
                          text-neutral-700`}
            >

              Le richieste possono essere inviate a:

              <br />

              <a
                href="mailto:info@mauroconcentri.com"
                className="underline
                           underline-offset-4
                           decoration-neutral-400
                           hover:decoration-neutral-700"
              >

                info@mauroconcentri.com

              </a>

            </p>

          </section>

          <footer
            className="pt-10
                       border-t
                       border-black/10"
          >

            <p
              className={`${fontSans.className}
                          text-sm
                          text-neutral-500`}
            >

              Ultimo aggiornamento: febbraio 2026

            </p>

          </footer>

        </div>

      </section>

    </article>

  );

}
