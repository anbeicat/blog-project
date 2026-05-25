/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 18:57:22
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-25 19:54:32
 * @description: 
 * @FilePath: /qiao-portfolio-blog/components/ProjectCard.tsx
 */
import type { Project } from "@/types/project";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {project.title}
            </h3>

            <p className="mb-4 text-sm leading-6 text-gray-600">
                {project.description}
            </p>

            <div className="mb-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex gap-4">
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                        GitHub Repository →
                    </a>
                )}

                {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                        Live Demo →
                    </a>
                )}
            </div>
        </article>
    );
}