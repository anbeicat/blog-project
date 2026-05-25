/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 18:55:45
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-25 19:01:37
 * @description: 
 * @FilePath: /qiao-portfolio-blog/app/blog/page.tsx
 */
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
    return (
        <div className="mx-auto max-w-5xl px-6 py-12">
            <h1 className="mb-4 text-3xl font-bold text-gray-900">기술 블로그</h1>
            <p className="mb-10 text-gray-600">
                프론트엔드 개발과 한국 취업 준비 과정을 기록합니다.
            </p>

            <div className="grid gap-6">
                {blogPosts.map((post) => (
                    <Link
                        key={post.id}
                        href={`/blog/${post.id}`}
                        className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:bg-gray-50"
                    >
                        <p className="mb-2 text-sm text-gray-500">
                            {post.createdAt} · {post.readingTime}
                        </p>

                        <h2 className="mb-3 text-xl font-semibold text-gray-900">
                            {post.title}
                        </h2>

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
        </div>
    );
}