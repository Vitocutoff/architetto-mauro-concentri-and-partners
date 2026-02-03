// app/contatti/page.jsx

import ContattiClient from "@/components/contatti/ContattiClient";

export const metadata = {
  title: "Contatti",
  description:
    "Contatti dello studio: indirizzo, email, telefono, PEC e informazioni utili per raggiungerci.",
};

export default function ContattiPage() {
  return <ContattiClient />;
}
