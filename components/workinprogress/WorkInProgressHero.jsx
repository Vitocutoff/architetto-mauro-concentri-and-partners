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
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/backgrounds/bgProgress.webp"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-top"
        />

        {/* ✅ SCRIM PIÙ CHIARO (meno “notte”) */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.20)_40%,rgba(0,0,0,0.32)_100%)]" />

        {/* Accenti soft (cyan/verde/giallo) – più delicati */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(900px_circle_at_18%_28%,rgba(8,145,178,0.18),transparent_60%)," +
              "radial-gradient(980px_circle_at_78%_22%,rgba(34,197,94,0.10),transparent_62%)," +
              "radial-gradient(1100px_circle_at_52%_88%,rgba(234,179,8,0.08),transparent_64%)",
            opacity: 0.95,
          }}
        />

        {/* Grain leggero – meno invadente */}
        <div
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative px-6 py-14 sm:px-10 sm:py-16 lg:px-12">
        <div className="max-w-3xl">
          {/* ✅ Pill: prima “aggiornamenti”, poi “cantieri” (senza Work) */}
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-white/30" aria-hidden="true" />

            <div
              className={cx(
                fontSans.className,
                "inline-flex items-center gap-2 rounded-full border border-white/18",
                "bg-white/10 backdrop-blur-md px-3 py-1.5",
                "text-[11px] tracking-[0.22em] uppercase text-white/75"
              )}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/80" aria-hidden="true" />
              aggiornamenti
              <span className="text-white/45" aria-hidden="true">
                —
              </span>
              cantieri
            </div>
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
              "mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-white/78"
            )}
          >
            Cantieri e progetti in fase di sviluppo. La sezione verrà aggiornata progressivamente con immagini e dettagli.
          </p>
        </div>
      </div>
    </header>
  );
}
