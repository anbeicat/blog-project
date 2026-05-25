/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 20:02:48
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-25 20:02:57
 * @description: 
 * @FilePath: /qiao-portfolio-blog/app/projects/page.tsx
 */
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

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