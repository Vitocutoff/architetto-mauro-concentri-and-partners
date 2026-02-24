// /components/workinprogress/WorkInProgressHero.jsx

import { fontSans, fontSerif } from "@/lib/fonts";
import Image from "next/image";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function WorkInProgressHero() {
  return (

    <header
      className="relative
                 overflow-hidden
                 rounded-3xl
                 border
                 border-black/10
                 shadow-[0_18px_70px_rgba(0,0,0,0.14)]
                 mb-10"
    >

      <div
        className="absolute
                   inset-0"
        aria-hidden="true"
      >

        <Image
          src="/backgrounds/bgProgress.webp"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover
                     object-top"
        />

        {/* Scrim scuro */}
        <div
          className="absolute
                     inset-0
                     bg-[linear-gradient(180deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.45)_38%,rgba(0,0,0,0.74)_100%)]"
        />

        {/* Accenti soft (cyan/verde/giallo) */}
        <div
          className="absolute
                     inset-0
                     opacity-90
                     pointer-events-none
                     bg-[radial-gradient(900px_circle_at_20%_30%,rgba(8,145,178,0.25),transparent_58%),radial-gradient(950px_circle_at_78%_22%,rgba(34,197,94,0.16),transparent_60%),radial-gradient(1100px_circle_at_55%_85%,rgba(234,179,8,0.12),transparent_62%)]"
        />

        {/* Grain leggero */}
        <div
          className="absolute
                     inset-0
                     opacity-[0.09]
                     mix-blend-overlay
                     pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
          }}
        />

      </div>

      <div
        className="relative
                   px-6
                   py-14
                   sm:px-10
                   sm:py-16
                   lg:px-12"
      >

        <div
          className="max-w-3xl"
        >

          <div
            className="inline-flex
                       items-center
                       gap-3"
          >

            <span
              className="h-px
                         w-10
                         bg-white/25"
              aria-hidden="true"
            />

            <p
              className={cx(
                fontSans.className,
                "text-xs tracking-[0.22em] uppercase text-white/65"
              )}
            >

              aggiornamenti

            </p>

          </div>

          <h1
            className={cx(
              fontSerif.className,
              "mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white"
            )}
          >

            Work in Progress

          </h1>

          <p
            className={cx(
              fontSans.className,
              "mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-white/75"
            )}
          >

            Cantieri e progetti in fase di sviluppo. La sezione verrà aggiornata progressivamente con immagini e dettagli.

          </p>

        </div>

      </div>

    </header>

  );
}
