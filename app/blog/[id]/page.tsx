/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 19:04:44
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-25 20:15:09
 * @description: 
 * @FilePath: /qiao-portfolio-blog/app/blog/[id]/page.tsx
 */
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import Link from "next/link";
import type { Metadata } from "next";

interface BlogDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateMetadata({
    params,
}: BlogDetailPageProps): Promise<Metadata> {
    const { id } = await params;
    const post = blogPosts.find((item) => item.id === id);

    if (!post) {
        return {
            title: "게시글을 찾을 수 없습니다 | Qiao Portfolio Blog",
        };
    }

    return {
        title: `${post.title} | Qiao Portfolio Blog`,
        description: post.description,
    };
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

            <div className="mt-8">
                <Link
                    href="/blog"
                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                    ← 블로그 목록으로 돌아가기
                </Link>
            </div>
        </article>
    );
}