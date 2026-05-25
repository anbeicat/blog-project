import Link from "next/link";
import { blogPosts, projects } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <section className="mb-16">
        <p className="mb-3 text-sm font-medium text-blue-600">
          React / Next.js / TypeScript
        </p>

        <h1 className="mb-5 text-4xl font-bold tracking-tight text-gray-900">
          프론트엔드 개발자를 준비하는 Qiao입니다.
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-gray-600">
          React, Next.js, TypeScript를 중심으로 웹 서비스를 개발하고 있으며,
          한국 IT 회사 취업을 목표로 프로젝트와 기술 학습을 정리하고 있습니다.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/blog"
            className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-700"
          >
            기술 블로그 보기
          </Link>
          <a
            href="https://github.com/"
            target="_blank"
            className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            GitHub 보기
          </a>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Projects</h2>

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
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Latest Posts</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
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
    </div>
  );
}