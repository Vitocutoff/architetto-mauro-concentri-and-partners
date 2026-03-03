"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { fontSans, fontSerif, fontMono } from "@/lib/fonts";
import ParallaxBackdrop from "@/components/contatti/ParallaxBackdrop";
import ContactField from "@/components/contatti/ContactField";
import MapCard from "@/components/contatti/MapCard";
import SpecializzazioniCard from "@/components/contatti/SpecializzazioniCard";

function cx(...c) {
  return c.filter(Boolean).join(" ");
}

export default function ContattiClient() {
  const sedeOperativa = "Corso Padova, 65 — 36100 Vicenza (VI), Italia";

  const email = "archcon@goldnet.it";
  const pec = "mauro.concentri@archiworldpec.it";
  const phone = "+39 0444 301913";
  const phoneHref = "+390444301913";
  const website = "www.mauroconcentriarchitetto.com";

  const piva = "02069980247";
  const cf = "CNGMRA62L07Z103J";

  const specializzatoIn = [
    "Impiantistica sportiva",
    "Edilizia pubblica",
    "Edilizia industriale",
    "Edilizia privata",
  ];

  const competenze = [
    "Progettazione generale",
    "Indagini geologiche",
    "Progettazione delle strutture",
    "Progettazione impiantistica termomeccanica",
    "Progettazione elettrica",
    "Efficientamento energetico",
    "Progettazione acustica",
    "Prevenzione incendi",
    "Coordinamento della sicurezza nei cantieri",
  ];

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

    <section
      className="relative
                 min-h-screen
                 overflow-hidden"
    >

      <ParallaxBackdrop />

      <div
        className="relative
                   z-10
                   mx-auto
                   w-full
                   max-w-6xl
                   px-4
                   pt-10
                   sm:px-6
                   lg:px-8"
      >

        <header
          className="max-w-3xl
                     mt-5"
        >

          <div
            className="inline-flex
                       items-center
                       gap-3"
          >

            <span
              className="h-px
                         w-10
                         bg-white/35"
              aria-hidden="true"
            />

            <p
              className={cx(
                "text-xs tracking-[0.22em] uppercase text-white/70",
                fontSans.className
              )}
            >
              informazioni
            </p>

          </div>

          <h1
            className={cx(
              "mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-amber-400",
              fontSerif.className
            )}
          >

            Contatti

          </h1>

          <p
            className={cx(
              "mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-neutral-50",
              fontSans.className
            )}
          >

            Dallo studio alla direzione lavori: competenze integrate e consulenza tecnica
            su interventi pubblici e privati.

          </p>

        </header>

        <div
          className="mt-8"
        >

          <SpecializzazioniCard
            fontSans={fontSans}
            fontSerif={fontSerif}
            specializzatoIn={specializzatoIn}
            competenze={competenze}
          />

        </div>

        <div
          className="h-10
                     sm:h-14
                     lg:h-16"
        />

        <div
          className="mt-6
                     pb-16"
        >

          <div
            className="grid
                       gap-6
                       lg:grid-cols-12"
          >

            <div
              className="lg:col-span-5
                         space-y-4"
            >

              <ContactField
                k="Sede operativa"
                fontSans={fontSans}
                fontMono={fontMono}
                v={sedeOperativa}
              />

              <ContactField
                k="Telefono"
                fontSans={fontSans}
                fontMono={fontMono}
                mono
                v={
                  <a
                    className="underline decoration-black/15 hover:decoration-black/40"
                    href={`tel:${phoneHref}`}
                  >
                    {phone}
                  </a>
                }
              />

              <ContactField
                k="E-mail"
                fontSans={fontSans}
                fontMono={fontMono}
                v={
                  <a
                    className="underline decoration-black/15 hover:decoration-black/40"
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>
                }
              />

              <ContactField
                k="PEC"
                fontSans={fontSans}
                fontMono={fontMono}
                mono
                v={
                  <a
                    className="underline decoration-black/15 hover:decoration-black/40"
                    href={`mailto:${pec}`}
                  >
                    {pec}
                  </a>
                }
              />

              <ContactField
                k="Web"
                fontSans={fontSans}
                fontMono={fontMono}
                mono
                v={
                  <a
                    className="underline decoration-black/15 hover:decoration-black/40"
                    href={`https://${website}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {website}
                  </a>
                }
              />

              <ContactField
                k="Dati"
                fontSans={fontSans}
                fontMono={fontMono}
                v={
                  <div className="space-y-1">
                    <div>
                      Partita IVA: <span className={fontMono.className}>{piva}</span>
                    </div>
                    <div>
                      Codice Fiscale: <span className={fontMono.className}>{cf}</span>
                    </div>
                  </div>
                }
              />
            </div>

            <div
              className="lg:col-span-7"
            >

              <MapCard
                fontSans={fontSans}
                fontSerif={fontSerif}
                googleMapsUrl={googleMapsUrl}
                appleMapsUrl={appleMapsUrl}
                embedUrl={embedUrl}
                mapLoaded={mapLoaded}
                setMapLoaded={setMapLoaded}
              />

            </div>

          </div>

          <div
            className="mt-10
                       flex
                       flex-wrap
                       items-center
                       justify-between
                       gap-4"
          >

            <Link
              href="/privacy-policy"
              className={cx(
                "text-xs tracking-[0.18em] uppercase text-neutral-400 hover:text-neutral-100 transition",
                fontSans.className
              )}
            >

              privacy policy →

            </Link>

            <Link
              href="/"
              className={cx(
                "text-xs tracking-[0.18em] uppercase text-neutral-400 hover:text-neutral-100 transition",
                fontSans.className
              )}
            >

              home →

            </Link>

          </div>

        </div>

      </div>

    </section>

  );

}
