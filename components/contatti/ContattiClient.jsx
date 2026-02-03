// components/contatti/ContattiClient.jsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fontSans, fontSerif, fontMono } from "@/lib/fonts";

function cx(...c) {
  return c.filter(Boolean).join(" ");
}

function Field({ k, v, mono = false }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white/75 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-[1px]">
      <div className="p-5 sm:p-6">
        <div className={cx("text-[11px] tracking-[0.22em] uppercase text-neutral-500", fontSans.className)}>
          {k}
        </div>
        <div className={cx("mt-2 text-sm sm:text-base text-neutral-900", mono ? fontMono.className : fontSans.className)}>
          {v}
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[#fbfcfe]" />

      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_16%_10%,rgba(170,235,255,0.50),transparent_62%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_86%_18%,rgba(220,214,255,0.34),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_52%_92%,rgba(214,255,200,0.26),transparent_62%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_50%,transparent_56%,rgba(0,0,0,0.040)_100%)]" />

      <div
        className="absolute inset-0 opacity-[0.16]
        [background-image:linear-gradient(to_right,rgba(0,0,0,.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.22)_1px,transparent_1px)]
        [background-size:96px_96px]"
      />

      <div
        className="absolute inset-0 opacity-[0.08]
        [background-image:linear-gradient(to_right,rgba(0,0,0,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.18)_1px,transparent_1px)]
        [background-size:18px_18px]"
      />

      <div
        className="absolute inset-0 opacity-[0.09]
        [background-image:
          linear-gradient(135deg,transparent_49.1%,rgba(0,0,0,0.19)_49.4%,rgba(0,0,0,0.19)_50.6%,transparent_50.9%),
          linear-gradient(45deg,transparent_49.1%,rgba(0,0,0,0.17)_49.4%,rgba(0,0,0,0.17)_50.6%,transparent_50.9%)]
        [background-size:420px_420px]"
      />

      <div
        className="absolute inset-0 opacity-[0.055] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.30'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}

export default function ContattiClient() {
  const address = "Corso Padova, 65 — 36100 Vicenza (VI), Italia";

  const { googleMapsUrl, appleMapsUrl, embedUrl } = useMemo(() => {
    const q = encodeURIComponent("Corso Padova 65, 36100 Vicenza, Italia");
    return {
      googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${q}`,
      appleMapsUrl: `https://maps.apple.com/?q=${q}`,
      embedUrl: `https://www.google.com/maps?q=${q}&output=embed`,
    };
  }, []);

  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <Background />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-zinc-300" />
            <p className={cx("text-xs tracking-[0.22em] uppercase text-zinc-600", fontSans.className)}>
              studio
            </p>
          </div>

          <h1 className={cx("mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900", fontSerif.className)}>
            Contatti
          </h1>

          <p className={cx("mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-700", fontSans.className)}>
            Tutti i riferimenti dello studio, inclusi recapiti, indirizzo e indicazioni per raggiungerci.
          </p>
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* SX */}
          <div className="lg:col-span-5 space-y-4">
            <Field k="Indirizzo" v={address} />

            <Field
              k="Email"
              v={
                <a className="underline decoration-black/15 hover:decoration-black/40" href="mailto:info@mauroconcentri.com">
                  info@mauroconcentri.com
                </a>
              }
            />

            <Field
              k="Telefono"
              v={
                <>
                  <a className="underline decoration-black/15 hover:decoration-black/40" href="tel:+390000000000">
                    +39 000 000 0000
                  </a>
                  <span className="block mt-1 text-xs text-neutral-500">
                    (sostituisci con il numero corretto)
                  </span>
                </>
              }
              mono
            />

            <Field
              k="PEC"
              v={
                <>
                  <a className="underline decoration-black/15 hover:decoration-black/40" href="mailto:pec@esempio.it">
                    pec@esempio.it
                  </a>
                  <span className="block mt-1 text-xs text-neutral-500">
                    (sostituisci con la PEC reale)
                  </span>
                </>
              }
            />

            <Field
              k="Dati societari"
              v={
                <div className="space-y-1">
                  <div>
                    Partita IVA: <span className={fontMono.className}>—</span>
                  </div>
                  <div>
                    Codice Fiscale: <span className={fontMono.className}>—</span>
                  </div>
                </div>
              }
            />
          </div>

          {/* DX */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-neutral-200 bg-white/75 shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden backdrop-blur-[1px]">
              <div className="p-5 sm:p-6">
                <div className={cx("text-[11px] tracking-[0.22em] uppercase text-neutral-500", fontSans.className)}>
                  come raggiungerci
                </div>

                <h2 className={cx("mt-3 text-2xl font-semibold tracking-tight text-neutral-900", fontSerif.className)}>
                  Mappa
                </h2>

                <p className={cx("mt-3 text-sm leading-relaxed text-neutral-700", fontSans.className)}>
                  Per tutela della privacy, la mappa interattiva viene caricata solo su richiesta.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={cx(
                      "rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 hover:border-neutral-400 transition",
                      fontSans.className
                    )}
                  >
                    Apri in Google Maps →
                  </a>

                  <a
                    href={appleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={cx(
                      "rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 hover:border-neutral-400 transition",
                      fontSans.className
                    )}
                  >
                    Apri in Apple Mappe →
                  </a>

                  <button
                    type="button"
                    onClick={() => setMapLoaded(true)}
                    className={cx(
                      "rounded-full border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800 transition",
                      fontSans.className
                    )}
                  >
                    {mapLoaded ? "Mappa caricata" : "Carica mappa"}
                  </button>
                </div>
              </div>

              <div className="relative aspect-[16/9] bg-neutral-100">
                {!mapLoaded ? (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center px-6">
                        <div className={cx("text-xs tracking-[0.22em] uppercase text-neutral-500", fontSans.className)}>
                          contenuto esterno
                        </div>
                        <div className={cx("mt-2 text-sm text-neutral-700", fontSans.className)}>
                          Clicca “Carica mappa” per visualizzare Google Maps.
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(0,0,0,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.18)_1px,transparent_1px)] [background-size:24px_24px]" />
                  </>
                ) : (
                  <iframe
                    title="Mappa - Studio Architetto Mauro Concentri & Partners"
                    src={embedUrl}
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white/75 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-[1px]">
              <div className="p-5 sm:p-6">
                <div className={cx("text-[11px] tracking-[0.22em] uppercase text-neutral-500", fontSans.className)}>
                  team
                </div>

                <h2 className={cx("mt-3 text-2xl font-semibold tracking-tight text-neutral-900", fontSerif.className)}>
                  Partners
                </h2>

                <div className="mt-5 space-y-3">
                  {["Nome Cognome", "Nome Cognome", "Nome Cognome"].map((n) => (
                    <div key={n} className="rounded-xl border border-neutral-200 bg-white/70 px-4 py-3">
                      <div className={cx("text-sm text-neutral-900", fontSans.className)}>{n}</div>
                      <div className={cx("text-xs text-neutral-600", fontSans.className)}>Ruolo / specializzazione</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <Link
                    href="/privacy-policy"
                    className={cx("text-xs tracking-[0.18em] uppercase text-neutral-700 hover:text-neutral-900 transition", fontSans.className)}
                  >
                    privacy policy →
                  </Link>

                  <Link
                    href="/"
                    className={cx("text-xs tracking-[0.18em] uppercase text-neutral-700 hover:text-neutral-900 transition", fontSans.className)}
                  >
                    home →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className={cx("mt-10 text-xs text-neutral-500", fontSans.className)}>
          Nota: Telefono, PEC e dati societari sono placeholder — sostituiscili con i valori reali.
        </p>
      </div>
    </section>
  );
}
