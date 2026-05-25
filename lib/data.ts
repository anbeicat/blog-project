/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 18:57:37
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-25 18:59:48
 * @description: 
 * @FilePath: /qiao-portfolio-blog/lib/data.ts
 */
import type { BlogPost } from "@/types/blog";
import type { Project } from "@/types/project";

export const blogPosts: BlogPost[] = [
    {
        id: "react-nextjs-study",
        title: "React와 Next.js 학습 기록",
        description: "React, TypeScript, Next.js를 학습하면서 정리한 내용입니다.",
        content:
            "React와 Next.js를 기반으로 프론트엔드 개발자로 성장하기 위한 학습 기록입니다.",
        tags: ["React", "Next.js", "TypeScript"],
        createdAt: "2026-05-25",
        readingTime: "3분",
    },
    {
        id: "frontend-career-korea",
        title: "한국 프론트엔드 개발자 취업 준비",
        description: "한국 IT 회사 취업을 준비하면서 필요한 기술과 프로젝트를 정리합니다.",
        content:
            "한국에서 프론트엔드 개발자로 취업하기 위해 React, Next.js, TypeScript, Git, API 연동 능력을 중심으로 준비하고 있습니다.",
        tags: ["Career", "Frontend", "Korea"],
        createdAt: "2026-05-25",
        readingTime: "4분",
    },
];

export const projects: Project[] = [
    {
        id: "ai-task-manager",
        title: "AI 기반 업무 태스크 관리 플랫폼",
        description:
            "React, Next.js, TypeScript를 기반으로 개발 예정인 AI 업무 관리 웹 서비스입니다.",
        techStack: ["React", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "AI API"],
    },
    {
        id: "portfolio-blog",
        title: "개인 기술 블로그 및 포트폴리오",
        description:
            "Next.js와 TypeScript를 활용하여 개발한 개인 기술 블로그 및 포트폴리오 웹사이트입니다.",
        techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
];