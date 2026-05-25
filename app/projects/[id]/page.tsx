import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

interface ProjectDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ProjectDetailPage({
    params,
}: ProjectDetailPageProps) {
    const { id } = await params;
    const project = projects.find((item) => item.id === id);

    if (!project) {
        notFound();
    }

    return (
        <article className="mx-auto max-w-4xl px-6 py-12">
            <p className="mb-3 text-sm font-medium text-blue-600">Project</p>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900">
                {project.title}
            </h1>

            <p className="mb-8 text-lg leading-8 text-gray-600">
                {project.description}
            </p>

            <section className="mb-8 rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">프로젝트 소개</h2>
                <p className="leading-8 text-gray-600">{project.detail}</p>
            </section>

            <section className="mb-8 rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">기술 스택</h2>

                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            <section className="mb-8 rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">주요 기능</h2>

                <ul className="list-disc space-y-2 pl-5 text-gray-600">
                    {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>
            </section>

            <section className="mb-8 rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">학습 내용</h2>

                <ul className="list-disc space-y-2 pl-5 text-gray-600">
                    {project.learned.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </section>

            <div className="flex flex-wrap gap-4">
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-700"
                    >
                        GitHub Repository
                    </a>
                )}

                {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                        Live Demo
                    </a>
                )}
            </div>
        </article>
    );
}