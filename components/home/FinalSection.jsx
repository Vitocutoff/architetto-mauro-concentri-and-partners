"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { fontSans, fontSerif } from "@/lib/fonts";

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  message: "",
  consent: false,
  company: "", // honeypot
};

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(email).trim());
}

export default function FinalSection() {
  const reduceMotion = useReducedMotion();

  const [form, setForm] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });

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

  const hasErrors = Object.keys(errors).length > 0;

  function updateField(key, value) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function buildMailto() {
    const to = "info@mauroconcentriarchitetto.com"; // modifica se necessario
    const subject = encodeURIComponent("Richiesta contatto dal sito");
    const body = encodeURIComponent(
      [
        `Nome: ${form.name.trim()}`,
        `Email: ${form.email.trim()}`,
        form.phone.trim() ? `Telefono: ${form.phone.trim()}` : null,
        "",
        form.message.trim(),
      ]
        .filter(Boolean)
        .join("\n")
    );
    return `mailto:${to}?subject=${subject}&body=${body}`;
  }

  async function onSubmit(e) {
    e.preventDefault();

    if (form.company.trim()) return; // honeypot

    setStatus({ type: "idle", message: "" });

    if (hasErrors) {
      setStatus({ type: "error", message: "Controlla i campi evidenziati e riprova." });
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
          consent: form.consent,
        }),
      });

      if (res.ok) {
        setStatus({
          type: "success",
          message: "Messaggio inviato correttamente. Ti risponderemo al più presto.",
        });
        setForm(INITIAL);
        return;
      }

      window.location.href = buildMailto();
      setStatus({ type: "info", message: "Apertura del client di posta per completare l’invio." });
    } catch {
      window.location.href = buildMailto();
      setStatus({ type: "info", message: "Apertura del client di posta per completare l’invio." });
    } finally {
      setSubmitting(false);
    }
  }

  const enter = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18, scale: 0.99 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
        viewport: { once: true },
      };

  // Input styles: niente rosso, errori in ambra
  const fieldBase =
    "mt-2 w-full rounded-2xl border bg-white/85 px-4 py-3 text-neutral-900 outline-none transition focus:ring-2 focus:ring-white/15";
  const fieldError = "border-amber-500/70 focus:ring-2 focus:ring-amber-500/25";
  const fieldOk = "border-white/10";

  return (
    <section role="region" aria-label="Email" className="relative w-full overflow-hidden isolate">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bgFinal.jpg"
          alt="Sfondo architettonico"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-linear-to-b from-white/45 via-white/10 to-neutral-950/90" />

        <div
          className="absolute -top-28 left-[-12%] h-[38rem] w-[38rem] rounded-full blur-2xl opacity-70"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.12) 38%, transparent 72%)",
          }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 opacity-[0.11] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-18 sm:py-22 lg:py-26">
        {/* Cornice unica: niente doppie linee */}
        <motion.div
          {...enter}
          className="
            relative
            grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10
            rounded-3xl overflow-hidden
            border border-white/18
            shadow-[0_20px_80px_rgba(0,0,0,0.35)]
            bg-white/10
          "
          style={{ willChange: "transform, opacity" }}
        >
          {/* Hairline interno unico (molto soft) */}
          <div
            className="pointer-events-none absolute inset-[1px] rounded-3xl border border-black/10 opacity-60"
            aria-hidden="true"
          />

          {/* LEFT */}
          <div className="lg:col-span-5 relative p-8 sm:p-10 lg:p-12">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.38) 58%, rgba(255,255,255,0.16) 100%)",
              }}
              aria-hidden="true"
            />

            <div className="relative">
              <div className={`${fontSans.className} text-xs tracking-[0.26em] uppercase text-neutral-800/70`}>
                EMAIL
              </div>

              <h2 className={`${fontSerif.className} mt-4 text-4xl sm:text-5xl leading-[1.02] text-neutral-950`}>
                Contattaci
                <span className="block text-neutral-950/70">e raccontaci di cosa hai bisogno.</span>
              </h2>

              <p className={`${fontSans.className} mt-6 text-base sm:text-lg leading-relaxed text-neutral-800/85 max-w-xl`}>
                Per informazioni su progetti, consulenze o collaborazioni, scrivici: sarà nostra premura risponere il
                prima possibile.
              </p>

              {/* Card unica con email */}
              <div className="mt-8">
                <div className="rounded-2xl border border-black/10 bg-white/55 px-6 py-5">
                  <div className={`${fontSans.className} text-xs tracking-[0.18em] uppercase text-neutral-700/70`}>
                    email
                  </div>
                  <div className={`${fontSans.className} mt-2 text-sm sm:text-base text-neutral-900`}>
                    info@mauroconcentriarchitetto.com
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-10 bg-black/20" aria-hidden="true" />
                <span className={`${fontSans.className} text-sm text-neutral-700/80`}>
                  Se devi inviare allegati, puoi farlo direttamente via email.
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 relative p-8 sm:p-10 lg:p-12">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(20,20,20,0.82) 0%, rgba(0,0,0,0.90) 62%, rgba(0,0,0,0.94) 100%)",
              }}
              aria-hidden="true"
            />

            {/* Un solo hairline qui (non doppio): molto leggero */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10" aria-hidden="true" />

            <div
              className="absolute left-10 right-10 top-10 h-px bg-linear-to-r from-transparent via-white/25 to-transparent"
              aria-hidden="true"
            />

            <form onSubmit={onSubmit} className="relative">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <div className={`${fontSans.className} text-xs tracking-[0.24em] uppercase text-white/60`}>
                    richiesta
                  </div>
                  <h3 className={`${fontSerif.className} mt-3 text-3xl sm:text-4xl text-white`}>
                    Invia un messaggio
                  </h3>
                </div>
              </div>

              {/* Honeypot */}
              <div className="sr-only" aria-hidden="true">
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

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={`${fontSans.className} text-sm text-white/80`} htmlFor="name">
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
                    <div className={`${fontSans.className} mt-2 text-sm text-amber-300/90`}>{errors.name}</div>
                  )}
                </div>

                <div>
                  <label className={`${fontSans.className} text-sm text-white/80`} htmlFor="email">
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
                    <div className={`${fontSans.className} mt-2 text-sm text-amber-300/90`}>{errors.email}</div>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className={`${fontSans.className} text-sm text-white/80`} htmlFor="phone">
                    Telefono (facoltativo)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className={`${fieldBase} ${fieldOk}`}
                    autoComplete="tel"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className={`${fontSans.className} text-sm text-white/80`} htmlFor="message">
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
                    <div className={`${fontSans.className} mt-2 text-sm text-amber-300/90`}>{errors.message}</div>
                  )}
                </div>

                <div className="sm:col-span-2 mt-1">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => updateField("consent", e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-white/30 bg-transparent"
                    />
                    <span className={`${fontSans.className} text-sm text-white/70 leading-relaxed`}>
                      Ho letto l’informativa privacy e acconsento al trattamento dei dati per essere ricontattato.
                    </span>
                  </label>
                  {errors.consent && (
                    <div className={`${fontSans.className} mt-2 text-sm text-amber-300/90`}>{errors.consent}</div>
                  )}
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className={`${fontSans.className} text-sm text-white/60`} aria-live="polite">
                  {status.type !== "idle" ? status.message : " "}
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={
                    reduceMotion || submitting ? undefined : { y: -2, transition: { duration: 0.25, ease: "easeOut" } }
                  }
                  className={`
                    ${fontSans.className}
                    inline-flex items-center justify-center
                    rounded-full px-7 py-3
                    text-sm sm:text-base tracking-[0.18em] uppercase
                    transition
                    ${submitting ? "bg-white/20 text-white/90" : "bg-white text-neutral-950 hover:bg-white/90"}
                    shadow-[0_14px_36px_rgba(0,0,0,0.35)]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                  `}
                >
                  {submitting ? "Invio…" : "Invia →"}
                </motion.button>
              </div>

              <div className={`${fontSans.className} mt-6 text-xs text-white/45`}>
                Nota: se il modulo non è disponibile, si aprirà il client di posta per completare l’invio.
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[18vh] bg-linear-to-b from-transparent via-black/20 to-black/10 pointer-events-none" aria-hidden="true" />
    </section>
  );
}
