import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import { ProjectDetail } from "@/components/project-detail";
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  return {
    title: project?.title.en || "Project not found",
    description: project?.description.en,
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
