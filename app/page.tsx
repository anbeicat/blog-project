import Link from "next/link";
import { blogPosts, projects } from "@/lib/data";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Vue",
  "Git",
  "REST API",
  "Java Basic",
  "Spring Boot Basic",
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <section className="mb-20">
        <p className="mb-3 text-sm font-medium text-blue-600">
          React / Next.js / TypeScript
        </p>

        <h1 className="mb-5 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          한국 IT 회사 취업을 준비하는 프론트엔드 개발자 Qiao입니다.
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-gray-600">
          React, Next.js, TypeScript를 중심으로 웹 서비스를 개발하고 있으며,
          사용자 경험과 유지보수 가능한 컴포넌트 구조에 관심이 있습니다. 현재는
          한국 프론트엔드 개발자 취업을 목표로 실무형 프로젝트를 준비하고
          있습니다.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/blog"
            className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-700"
          >
            기술 블로그 보기
          </Link>

          <a
            href="https://github.com/anbeicat/blog-project"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            GitHub 보기
          </a>
        </div>
      </section>

      <section className="mb-20 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">About Me</h2>

        <p className="mb-4 leading-8 text-gray-600">
          저는 한국에서 소프트웨어를 전공하고 있으며, 프론트엔드 개발자로
          성장하기 위해 React와 Next.js 기반 프로젝트를 꾸준히 진행하고
          있습니다.
        </p>

        <p className="leading-8 text-gray-600">
          단순히 화면을 구현하는 것뿐만 아니라 API 연동, 인증 흐름, 데이터
          구조, 배포 과정까지 이해하는 프론트엔드 개발자가 되는 것을 목표로
          하고 있습니다.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
            <p className="mt-2 text-sm text-gray-500">
              학습과 취업 준비를 위해 진행한 프로젝트입니다.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
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
            </article>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Latest Posts</h2>
            <p className="mt-2 text-sm text-gray-500">
              프론트엔드 개발과 한국 취업 준비 과정을 기록합니다.
            </p>
          </div>

          <Link href="/blog" className="text-sm font-medium text-blue-600">
            전체 보기 →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.slice(0, 2).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:bg-gray-50"
            >
              <p className="mb-2 text-sm text-gray-500">
                {post.createdAt} · {post.readingTime}
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {post.title}
              </h3>

              <p className="mb-4 text-sm leading-6 text-gray-600">
                {post.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-gray-900 p-8 text-white">
        <h2 className="mb-4 text-2xl font-bold">Contact</h2>

        <p className="mb-6 max-w-2xl leading-8 text-gray-300">
          React, Next.js, TypeScript 기반의 프론트엔드 개발자로 성장하고
          있으며, 한국 IT 회사 취업을 목표로 꾸준히 프로젝트를 진행하고
          있습니다.
        </p>

        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href="https://github.com/anbeicat"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-white px-4 py-2 font-medium text-gray-900 hover:bg-gray-200"
          >
            GitHub
          </a>

          <a
            href="mailto:anqiao10@gmail.com"
            className="rounded-lg border border-gray-600 px-4 py-2 font-medium text-white hover:bg-gray-800"
          >
            Email
          </a>
        </div>
      </section>
    </div>
  );
}