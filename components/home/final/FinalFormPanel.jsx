"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

import { fontSans, fontSerif } from "@/lib/fonts";
import { isValidEmail } from "@/components/home/final/finalUtils";
import { fieldBase, fieldError, fieldOk, getStatusDot, getStatusStyle } from "@/components/home/final/finalStyles";

export default function FinalFormPanel({ reduceMotion, form, updateField, submitting, status, setStatus, onSubmit }) {
  const errors = useMemo(() => {
    const e = {};
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name) e.name = "Inserisci il nome.";
    if (!email) e.email = "Inserisci l’email.";
    else if (!isValidEmail(email)) e.email = "Email non valida.";
    if (!message) e.message = "Inserisci un messaggio.";
    if (!form.consent) e.consent = "È necessario accettare l’informativa.";
    return e;
  }, [form]);

  const statusStyle = getStatusStyle(status.type);
  const statusDot = getStatusDot(status.type);

  return (

    <div
      className="lg:col-span-7
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
            "linear-gradient(135deg, rgba(20,20,20,0.82) 0%, rgba(0,0,0,0.90) 62%, rgba(0,0,0,0.94) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none
                   absolute
                   inset-0
                   rounded-3xl
                   border
                   border-white/10"
        aria-hidden="true"
      />

      <div
        className="absolute
                   left-10
                   right-10
                   top-10
                   h-px
                   bg-linear-to-r
                   from-transparent
                   via-white/25
                   to-transparent"
        aria-hidden="true"
      />

      <form
        onSubmit={(e) => onSubmit(e, errors)}
        noValidate
        className="relative"
      >

        <div
          className="flex
                     items-end
                     justify-between
                     gap-6"
        >

          <div>

            <div
              className={`${fontSans.className}
                          text-xs
                          tracking-[0.24em]
                          uppercase
                          text-white/60`}
            >

              richiesta

            </div>

            <h3
              className={`${fontSerif.className}
                          mt-3
                          text-3xl
                          sm:text-4xl
                          text-white`}
            >

              Invia un messaggio

            </h3>

          </div>

        </div>

        {/* Honeypot */}
        <div
          className="sr-only"
          aria-hidden="true"
        >

          <label>

            Company

            <input
              type="text"
              name="company"
              value={form.company}
              onChange={(e) => updateField("company", e.target.value)}
              autoComplete="off"
              tabIndex={-1}
            />

          </label>

        </div>

        <div
          className="mt-8
                     grid
                     grid-cols-1
                     sm:grid-cols-2
                     gap-5"
        >

          <div>

            <label
              className={`${fontSans.className}
                          text-sm
                          text-white/80`}
              htmlFor="name"
            >

              Nome e Cognome

            </label>

            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              className={`${fieldBase} ${errors.name ? fieldError : fieldOk}`}
              autoComplete="name"
            />

            {errors.name && (

              <div
                className={`${fontSans.className}
                            mt-2
                            text-sm
                            text-amber-300/90`}
              >

                {errors.name}

              </div>

            )}

          </div>

          <div>

            <label
              className={`${fontSans.className}
                          text-sm
                          text-white/80`}
              htmlFor="email"
            >

              Email

            </label>

            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              className={`${fieldBase} ${errors.email ? fieldError : fieldOk}`}
              autoComplete="email"
            />

            {errors.email && (

              <div
                className={`${fontSans.className}
                            mt-2
                            text-sm
                            text-amber-300/90`}
              >

                {errors.email}

              </div>

            )}

          </div>

          <div
            className="sm:col-span-2"
          >

            <label
              className={`${fontSans.className}
                          text-sm
                          text-white/80`}
              htmlFor="message"
            >

              Messaggio

            </label>

            <textarea
              id="message"
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              rows={6}
              className={`${fieldBase} resize-none ${errors.message ? fieldError : fieldOk}`}
            />

            {errors.message && (

              <div
                className={`${fontSans.className}
                            mt-2
                            text-sm
                            text-amber-300/90`}
              >

                {errors.message}

              </div>

            )}

          </div>

          <div
            className="sm:col-span-2
                       mt-1"
          >

            <label
              className="flex
                         items-start
                         gap-3
                         cursor-pointer"
            >

              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => updateField("consent", e.target.checked)}
                className="mt-1
                           h-4
                           w-4
                           rounded
                           border-white/30
                           bg-transparent"
              />

              <span
                className={`${fontSans.className}
                            text-sm
                            text-white/70
                            leading-relaxed`}
              >

                Ho letto l’informativa{" "}

                <a
                  href="/privacy-policy"
                  className="underline
                             underline-offset-4
                             decoration-white/40
                             hover:decoration-white/70"
                >

                  privacy

                </a>{" "}

                e acconsento al trattamento dei dati per essere ricontattato.

              </span>

            </label>

            {errors.consent && (

              <div
                className={`${fontSans.className}
                            mt-2
                            text-sm
                            text-amber-300/90`}
              >

                {errors.consent}

              </div>

            )}

          </div>

        </div>

        {/* ✅ Footer form: status pill + bottone */}
        <div
          className="mt-8
                     flex
                     flex-col
                     gap-4
                     sm:flex-row
                     sm:items-center
                     sm:justify-between"
        >

          <div
            className="min-h-11
                       flex
                       items-center"
          >

            <motion.div
              aria-live="polite"
              initial={false}
              animate={status.type === "idle" ? { opacity: 0, y: 2 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`${fontSans.className} inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${statusStyle}`}
            >

              <span
                className={`h-2 w-2 rounded-full ${statusDot}`}
                aria-hidden="true"
              />

              <span
                className="leading-snug"
              >

                {status.type !== "idle" ? status.message : ""}

              </span>

            </motion.div>

          </div>

          <motion.button
            type="submit"
            disabled={submitting}
            whileHover={
              reduceMotion || submitting
                ? undefined
                : { y: -2, transition: { duration: 0.25, ease: "easeOut" } }
            }
            className={`${fontSans.className}
                        inline-flex
                        items-center
                        justify-center
                        rounded-full
                        px-7
                        py-3
                        text-sm
                        sm:text-base
                        tracking-[0.18em]
                        uppercase
                        transition
                        shadow-[0_14px_36px_rgba(0,0,0,0.35)]
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-white/70
                        whitespace-nowrap
                        shrink-0
                        min-w-42.5
                        ${submitting ? "bg-white/20 text-white/90" : "bg-white text-neutral-950 hover:bg-white/90"}`}
          >

            {submitting ? "Invio…" : "Invia →"}

          </motion.button>

        </div>

        <div
          className={`${fontSans.className}
                      mt-6
                      text-xs
                      text-white/45`}
        >

          Se il modulo non è disponibile, si aprirà il client di posta per completare l’invio.

        </div>

        {/* reset error pill on any input change? (opzionale) */}
        <button
          type="button"
          className="sr-only"
          onClick={() => setStatus({ type: "idle", message: "" })}
          aria-hidden="true"
          tabIndex={-1}
        />

      </form>

    </div>

  );

}
