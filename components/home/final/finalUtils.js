export const INITIAL = {
  name: "",
  email: "",
  message: "",
  consent: false,
  company: "", // honeypot
};

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(email).trim());
}

export function buildMailto(form) {
  const to = "info@mauroconcentri.com";
  const subject = encodeURIComponent("Richiesta contatto dal sito");
  const body = encodeURIComponent(
    [
      `Nome: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      "",
      form.message.trim(),
    ]
      .filter(Boolean)
      .join("\n")
  );
  return `mailto:${to}?subject=${subject}&body=${body}`;
}
