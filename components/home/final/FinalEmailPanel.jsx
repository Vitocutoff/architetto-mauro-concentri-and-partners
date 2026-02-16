"use client";

import { fontSans, fontSerif } from "@/lib/fonts";

export default function FinalEmailPanel() {
  return (

    <div
      className="lg:col-span-5
                 relative
                 p-8
                 sm:p-10
                 lg:p-12"
    >

      <div
        className="absolute
                   inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.38) 58%, rgba(255,255,255,0.16) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="relative"
      >

        <div className={`${fontSans.className}
                         text-xs
                         tracking-[0.26em]
                         uppercase
                         text-neutral-800/70`}
        >

          EMAIL

        </div>

        <h2
          className={`${fontSerif.className}
                      mt-4
                      text-4xl
                      sm:text-5xl
                      leading-[1.02]
                      text-neutral-950`}
        >

          Contattaci

          <span
            className="block
                       text-neutral-950/70"
          >

            e raccontaci di cosa hai bisogno.

          </span>

        </h2>

        <p
          className={`${fontSans.className}
                      mt-6
                      text-base
                      sm:text-lg
                      leading-relaxed
                      text-neutral-800/85
                      max-w-xl`}
        >

          Per informazioni su progetti, consulenze o collaborazioni, scrivici:

        </p>

        <div
          className="mt-8"
        >

          <div
            className="rounded-2xl
                       border
                       border-black/10
                       bg-white/55
                       px-6
                       py-5"
          >

            <div
              className={`${fontSans.className}
                          text-xs
                          tracking-[0.18em]
                          uppercase
                          text-neutral-700/70`}
            >

              email

            </div>

            <div
              className={`${fontSans.className}
                          mt-2
                          text-sm
                          sm:text-base
                          text-neutral-900`}
            >

              archcon@goldnet.it

            </div>

          </div>

        </div>

        <div
          className="mt-8
                     flex
                     items-center
                     gap-3"
        >

          <span
            className="h-px
                       w-10
                       bg-black/20"
            aria-hidden="true"
          />

          <span
            className={`${fontSans.className}
                        text-sm
                        text-neutral-700/80`}
          >

            da qui non è possibile inviare allegati.

          </span>

        </div>

      </div>

    </div>

  );

}
