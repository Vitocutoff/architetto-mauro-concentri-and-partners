function cx(...c) {
  return c.filter(Boolean).join(" ");
}

export default function MapCard({ fontSans, fontSerif, googleMapsUrl, appleMapsUrl, embedUrl, mapLoaded, setMapLoaded }) {
  const pill = cx(
    "rounded-full border px-4 py-2 text-sm transition",
    "border-neutral-200 bg-white text-neutral-900 hover:border-neutral-400",
    fontSans.className
  );

  const pillDark = cx(
    "rounded-full border px-4 py-2 text-sm transition",
    "border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800",
    fontSans.className
  );

  return (

    <div
      className="rounded-2xl
                 border
                 border-neutral-400
                 bg-white/30
                 backdrop-blur-md
                 shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                 overflow-hidden"
    >

      <div
        className="p-5
                   sm:p-6"
      >

        <div
          className={cx("text-[11px] tracking-[0.22em] uppercase text-zinc-800/95", fontSans.className)}
        >

          come raggiungerci

        </div>

        <h2
          className={cx("mt-3 text-2xl font-semibold tracking-tight text-zinc-950/95", fontSerif.className)}
        >

          Mappa

        </h2>

        <p
          className={cx("mt-3 text-sm leading-relaxed text-zinc-900", fontSans.className)}
        >

          Per tutela della privacy, la mappa interattiva viene caricata solo su richiesta.

        </p>

        <div
          className="mt-5
                     flex
                     flex-wrap
                     gap-3"
        >

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className={pill}
          >

            Apri in Google Maps →

          </a>

          <a
            href={appleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className={pill}
          >

            Apri in Apple Mappe →

          </a>

          <button
            type="button"
            onClick={() => setMapLoaded(true)}
            className={pillDark}
          >

            {mapLoaded ? "Mappa caricata" : "Carica mappa"}

          </button>

        </div>

      </div>

      <div
        className="relative
                   aspect-video
                   bg-neutral-300/30"
      >

        {!mapLoaded ? (

          <>

            <div
              className="absolute
                         inset-0
                         flex
                         items-center
                         justify-center"
            >

              <div
                className="text-center
                           px-6"
              >

                <div
                  className={cx("text-xs tracking-[0.22em] uppercase text-neutral-600", fontSans.className)}
                >

                  contenuto esterno

                </div>

                <div
                  className={cx("mt-2 text-sm text-neutral-800", fontSans.className)}
                >

                  Clicca “Carica mappa” per visualizzare Google Maps.

                </div>

              </div>

            </div>

            <div
              className="absolute
                         inset-0
                         opacity-[0.08]
                         bg-[linear-gradient(to_right,rgba(0,0,0,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.18)_1px,transparent_1px)] bg-size-[24px_24px]"
            />

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

  );

}
