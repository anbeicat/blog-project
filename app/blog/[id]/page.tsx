/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 19:04:44
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-25 19:05:03
 * @description: 
 * @FilePath: /qiao-portfolio-blog/app/blog/[id]/page.tsx
 */
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";

interface BlogDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { id } = await params;
    const post = blogPosts.find((item) => item.id === id);

    if (!post) {
        notFound();
    }

    return (
        <article className="mx-auto max-w-3xl px-6 py-12">
            <p className="mb-3 text-sm text-gray-500">
                {post.createdAt} · {post.readingTime}
            </p>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900">
                {post.title}
            </h1>

            <p className="mb-8 text-lg leading-8 text-gray-600">
                {post.description}
            </p>

            <div className="mb-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-8 leading-8 text-gray-700 shadow-sm">
                {post.content}
            </div>
        </article>
    );
}