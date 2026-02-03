// /app/progetti/page.jsx
import { progettiCategories } from "@/data/progetti";
import Background from "@/components/progetti/Background";
import ProgettiPageClient from "@/components/progetti/ProgettiPageClient";

export const metadata = {
  title: "Progetti",
  description: "Selezione di progetti: impiantistica sportiva, edilizia e interventi pubblici e privati.",
};


export default function ProgettiPage() {
  const categories = progettiCategories;

  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      <Background />

      <section className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <ProgettiPageClient categories={categories} />
      </section>
    </main>
  );
}
