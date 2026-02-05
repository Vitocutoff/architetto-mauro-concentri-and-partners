import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(email || "").trim());
}

function sanitizeText(s, max = 4000) {
  return String(s || "").replace(/\u0000/g, "").trim().slice(0, max);
}

function escapeHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return json({ ok: false, error: "Content-Type non valido." }, 415);
    }

    const body = await request.json();

    // dati dal form
    const name = sanitizeText(body?.name, 200);
    const email = sanitizeText(body?.email, 320);
    const message = sanitizeText(body?.message, 4000);
    const consent = Boolean(body?.consent);

    // honeypot (se in futuro lo mandi anche dal client)
    const company = sanitizeText(body?.company, 200);
    if (company) return json({ ok: true });

    // validazione
    if (!name || name.length < 2) return json({ ok: false, error: "Nome non valido." }, 400);
    if (!email || !isValidEmail(email)) return json({ ok: false, error: "Email non valida." }, 400);
    if (!message || message.length < 5) return json({ ok: false, error: "Messaggio non valido." }, 400);
    if (!consent) return json({ ok: false, error: "Consenso mancante." }, 400);

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!process.env.RESEND_API_KEY || !to || !from) {
      return json({ ok: false, error: "Configurazione email mancante (env)." }, 500);
    }

    const subject = `Nuovo contatto dal sito — ${name}`;

    const text = [
      "Nuovo messaggio dal form del sito",
      "",
      `Nome: ${name}`,
      `Email: ${email}`,
      "",
      "Messaggio:",
      message,
    ].join("\n");

    const html = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height:1.5">
        <h2>Nuovo messaggio dal sito</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}<br/>
           <strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Messaggio:</strong></p>
        <pre style="white-space:pre-wrap;background:#f6f7f9;padding:12px;border-radius:10px">${escapeHtml(message)}</pre>
      </div>
    `;

    const result = await resend.emails.send({
      from,
      to: [to],
      reply_to: email, // rispondi direttamente al mittente
      subject,
      text,
      html,
    });

    if (result?.error) {
      return json({ ok: false, error: "Invio fallito.", details: result.error }, 502);
    }

    return json({ ok: true }, 200);
  } catch {
    return json({ ok: false, error: "Errore server." }, 500);
  }
}
