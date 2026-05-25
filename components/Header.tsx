/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 18:56:55
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-25 19:00:03
 * @description: 
 * @FilePath: /qiao-portfolio-blog/components/Header.tsx
 */
import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <Link href="/" className="text-lg font-bold text-gray-900">
                    Qiao Portfolio
                </Link>

                <nav className="flex gap-6 text-sm text-gray-600">
                    <Link href="/" className="hover:text-gray-900">
                        Home
                    </Link>
                    <Link href="/blog" className="hover:text-gray-900">
                        Blog
                    </Link>
                </nav>
            </div>
        </header>
    );
}