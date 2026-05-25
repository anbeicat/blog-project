import { blogPosts } from "@/lib/data";
import BlogList from "@/components/BlogList";

export default function BlogPage() {
    return (
        <div className="mx-auto max-w-5xl px-6 py-12">
            <h1 className="mb-4 text-3xl font-bold text-gray-900">기술 블로그</h1>

            <p className="mb-10 text-gray-600">
                프론트엔드 개발과 한국 취업 준비 과정을 기록합니다.
            </p>

            <BlogList posts={blogPosts} />
        </div>
    );
}