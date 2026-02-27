// /app/progetti/[slug]/page.jsx

import { notFound } from "next/navigation";
import { progettiCategories } from "@/data/progetti";
import ProjectPageClient from "@/components/progetti/slug/ProjectPageClient";

function findProjectBySlug(slug) {
  for (const cat of progettiCategories) {
    const p = cat.projects?.find((x) => x.slug === slug);
    if (p) return { project: p, category: cat };
  }
  return null;
}

export function generateMetadata({ params }) {
  const found = findProjectBySlug(params.slug);
  if (!found) return { title: "Progetto" };
  const { project, category } = found;

  return {
    title: `${project.title} — ${category.label}`,
    description: project.description || category.kicker || "Dettagli progetto",
  };
}

export default function ProjectSlugPage({ params }) {
  const found = findProjectBySlug(params.slug);
  if (!found) return notFound();

  return <ProjectPageClient project={found.project} category={found.category} />;
}
