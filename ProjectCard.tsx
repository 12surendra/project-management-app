import Link from "next/link";
import { Project } from "../lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/dashboard/projects/${project.id}`}>
      <div className="border rounded p-4 hover:shadow-lg">
        <h2 className="text-xl font-bold">{project.name}</h2>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </Link>
  );
}