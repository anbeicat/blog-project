/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 19:57:15
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-25 20:00:57
 * @description: 
 * @FilePath: /qiao-portfolio-blog/components/BlogList.tsx
 */
"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/types/blog";
import BlogCard from "@/components/BlogCard";

interface BlogListProps {
    posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
    const [searchKeyword, setSearchKeyword] = useState("");

    const filteredPosts = useMemo(() => {
        const keyword = searchKeyword.trim().toLowerCase();

        if (!keyword) {
            return posts;
        }

        return posts.filter((post) => {
            const title = post.title.toLowerCase();
            const description = post.description.toLowerCase();
            const tags = post.tags.join(" ").toLowerCase();

            return (
                title.includes(keyword) ||
                description.includes(keyword) ||
                tags.includes(keyword)
            );
        });
    }, [posts, searchKeyword]);

    return (
        <div>
            <div className="mb-8">
                <input
                    value={searchKeyword}
                    onChange={(event) => setSearchKeyword(event.target.value)}
                    placeholder="검색어를 입력하세요. 예: React, TypeScript"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
            </div>

            {filteredPosts.length > 0 ? (
                <div className="grid gap-6">
                    {filteredPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <div className="rounded-xl border border-gray-200 bg-white p-8 text-center text-gray-500">
                    검색 결과가 없습니다.
                </div>
            )}
        </div>
    );
}