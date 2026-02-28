import { notFound } from "next/navigation";
import ProjectPageClient from "@/components/progetti/slug/ProjectPageClient";
import { findProjectBySlug } from "@/data/progetti";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const found = findProjectBySlug(slug);

  if (!found) return { title: "Progetto" };

  const { project, category } = found;
  return {
    title: project?.title || "Progetto",
    description: project?.description || category?.kicker || "Scheda progetto",
  };
}

export default async function ProjectSlugPage({ params }) {
  const { slug } = await params;
  const found = findProjectBySlug(slug);

  if (!found) return notFound();

  return <ProjectPageClient project={found.project} category={found.category} />;
}
