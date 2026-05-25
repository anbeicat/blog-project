/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 18:57:15
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-25 19:54:20
 * @description: 
 * @FilePath: /qiao-portfolio-blog/components/BlogCard.tsx
 */
import Link from "next/link";
import type { BlogPost } from "@/types/blog";

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <Link
            href={`/blog/${post.id}`}
            className="block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:bg-gray-50 hover:shadow-md"
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
    );
}