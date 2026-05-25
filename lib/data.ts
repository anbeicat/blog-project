import type { BlogPost } from "@/types/blog";
import type { Project } from "@/types/project";

export const blogPosts: BlogPost[] = [
    {
        id: "react-nextjs-study",
        title: "React와 Next.js 학습 기록",
        description: "React, TypeScript, Next.js를 학습하면서 정리한 내용입니다.",
        content:
            "React와 Next.js를 기반으로 프론트엔드 개발자로 성장하기 위한 학습 기록입니다. 컴포넌트 구조, App Router, TypeScript 타입 정의, Tailwind CSS를 중심으로 학습하고 있습니다.",
        tags: ["React", "Next.js", "TypeScript"],
        createdAt: "2026-05-25",
        readingTime: "3분",
    },
    {
        id: "frontend-career-korea",
        title: "한국 프론트엔드 개발자 취업 준비",
        description: "한국 IT 회사 취업을 준비하면서 필요한 기술과 프로젝트를 정리합니다.",
        content:
            "한국에서 프론트엔드 개발자로 취업하기 위해 React, Next.js, TypeScript, Git, REST API 연동 능력을 중심으로 준비하고 있습니다. 또한 Java와 Spring Boot 기초를 함께 학습하여 백엔드 구조에 대한 이해도 넓히고 있습니다.",
        tags: ["Career", "Frontend", "Korea"],
        createdAt: "2026-05-25",
        readingTime: "4분",
    },
    {
        id: "typescript-basic",
        title: "TypeScript를 사용하는 이유",
        description: "프론트엔드 개발에서 TypeScript가 중요한 이유를 정리합니다.",
        content:
            "TypeScript는 JavaScript에 타입 시스템을 추가한 언어입니다. 컴포넌트 props, API 응답 데이터, 프로젝트 모델 등을 명확하게 정의할 수 있어 유지보수성과 안정성을 높일 수 있습니다.",
        tags: ["TypeScript", "Frontend"],
        createdAt: "2026-05-26",
        readingTime: "3분",
    },
];

export const projects: Project[] = [
    {
        id: "portfolio-blog",
        title: "개인 기술 블로그 및 포트폴리오",
        description:
            "Next.js와 TypeScript를 활용하여 개발한 개인 기술 블로그 및 포트폴리오 웹사이트입니다.",
        detail:
            "이 프로젝트는 한국 IT 회사 취업을 준비하는 과정에서 프론트엔드 개발 역량을 정리하고, 학습 기록과 프로젝트 경험을 보여주기 위해 제작한 웹사이트입니다. Next.js App Router, 동적 라우팅, 컴포넌트 분리, TypeScript 타입 정의, Tailwind CSS 기반 반응형 UI를 학습하는 것을 목표로 했습니다.",
        techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        features: [
            "개인 소개 섹션",
            "프로젝트 목록 표시",
            "기술 블로그 목록",
            "블로그 상세 페이지",
            "블로그 검색 기능",
            "프로젝트 상세 페이지",
            "반응형 웹 디자인",
        ],
        learned: [
            "Next.js App Router 구조 이해",
            "동적 라우팅 구현",
            "React 컴포넌트 분리",
            "TypeScript interface 정의",
            "Tailwind CSS 기반 UI 구현",
            "GitHub를 활용한 프로젝트 관리",
        ],
        githubUrl: "https://github.com/anbeicat/blog-project",
    },
    {
        id: "ai-task-manager",
        title: "AI 기반 업무 태스크 관리 플랫폼",
        description:
            "React, Next.js, TypeScript, PostgreSQL, Prisma, AI API를 기반으로 개발 예정인 업무 관리 웹 서비스입니다.",
        detail:
            "AI 기반 업무 태스크 관리 플랫폼은 사용자가 프로젝트와 업무를 효율적으로 관리할 수 있도록 돕는 웹 서비스입니다. 프로젝트 생성, 태스크 CRUD, 마감일 관리, 업무 상태 관리, AI 업무 요약 및 태스크 추천 기능을 포함할 예정입니다.",
        techStack: [
            "React",
            "Next.js",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "AI API",
        ],
        features: [
            "회원가입 및 로그인",
            "프로젝트 CRUD",
            "태스크 CRUD",
            "마감일 관리",
            "상태 및 우선순위 관리",
            "AI 업무 요약",
            "AI 태스크 추천",
        ],
        learned: [
            "DB 기반 CRUD 구현",
            "인증 흐름 이해",
            "REST API 설계",
            "AI API 연동",
            "실무형 웹 서비스 구조 설계",
        ],
    },
];