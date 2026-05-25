import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
    title: "Projects | Qiao Portfolio Blog",
    description:
        "React, Next.js, TypeScript 기반으로 진행한 프론트엔드 프로젝트 목록입니다.",
};

export default function ProjectsPage() {
    return (
        <div className="mx-auto max-w-5xl px-6 py-12">
            <h1 className="mb-4 text-3xl font-bold text-gray-900">Projects</h1>

            <p className="mb-10 text-gray-600">
                프론트엔드 개발과 한국 IT 취업 준비를 위해 진행한 프로젝트입니다.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}