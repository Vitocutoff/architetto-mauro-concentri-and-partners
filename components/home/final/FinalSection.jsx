"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";

import FinalBackground from "@/components/home/final/FinalBackground";
import FinalEmailPanel from "@/components/home/final/FinalEmailPanel";
import FinalFormPanel from "@/components/home/final/FinalFormPanel";

import { INITIAL, buildMailto } from "@/components/home/final/finalUtils";

export default function FinalSection() {
  const reduceMotion = useReducedMotion();

  const [form, setForm] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  function updateField(key, value) {
    setForm((p) => ({ ...p, [key]: value }));
    if (status.type !== "idle") setStatus({ type: "idle", message: "" });
  }

  async function onSubmit(e, errors) {
    e.preventDefault();

    if (form.company.trim()) return; // honeypot

    setStatus({ type: "idle", message: "" });

    const hasErrors = Object.keys(errors).length > 0;
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
          message: form.message.trim(),
          consent: form.consent,
          company: form.company,
        }),
      });

      if (res.ok) {
        setStatus({
          type: "success",
          message: "Messaggio inviato. Ti risponderemo al più presto.",
        });
        setForm(INITIAL);
        return;
      }

      const text = await res.text().catch(() => "");
      console.error("POST /api/contact failed:", res.status, text);
      setStatus({
        type: "error",
        message: "Invio non riuscito. Riprova tra poco oppure usa l’email diretta.",
      });
      return;
    } catch {
      window.location.href = buildMailto(form);
      setStatus({
        type: "info",
        message: "Apertura del client di posta per completare l’invio.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (

    <section
      role="region"
      aria-label="Email"
      className="relative
                 w-screen
                 left-1/2
                 -translate-x-1/2
                 overflow-hidden
                 isolate"
    >

      <FinalBackground />

      <div
        className="relative
                   z-10
                   mx-auto
                   w-full
                   max-w-7xl
                   px-4
                   sm:px-6
                   lg:px-12
                   py-18
                   sm:py-22
                   lg:py-26"
      >

        <div
          className="relative
                     grid grid-cols-1
                     lg:grid-cols-12
                     gap-8
                     lg:gap-10
                     rounded-3xl
                     overflow-hidden
                     border
                     border-white/18
                     shadow-[0_20px_80px_rgba(0,0,0,0.35)]
                     bg-white/10"
        >

          <div
            className="pointer-events-none
                       absolute
                       inset-px
                       rounded-3xl
                       border
                       border-black/10
                       opacity-60"
            aria-hidden="true"
          />

          <FinalEmailPanel />

          <FinalFormPanel
            reduceMotion={reduceMotion}
            form={form}
            updateField={updateField}
            submitting={submitting}
            status={status}
            setStatus={setStatus}
            onSubmit={onSubmit}
          />

        </div>

      </div>

      <div
        className="absolute
                   bottom-0
                   left-0
                   w-full
                   h-[18vh]
                   bg-linear-to-b
                   from-transparent
                   via-black/20
                   to-black/10
                   pointer-events-none"
        aria-hidden="true"
      />

    </section>

  );

}
