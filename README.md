# Qiao Portfolio Blog

## 프로젝트 소개

Qiao Portfolio Blog는 React, Next.js, TypeScript를 기반으로 개발한 개인 기술 블로그 및 포트폴리오 웹사이트입니다.

이 프로젝트는 한국 IT 회사 취업을 준비하는 과정에서 프론트엔드 개발 역량을 정리하고, 학습 기록과 프로젝트 경험을 보여주기 위해 제작되었습니다.

## 주요 기능

- 개인 소개 섹션
- 프로젝트 목록 표시
- 기술 블로그 목록
- 블로그 상세 페이지
- 태그 기반 콘텐츠 표시
- 반응형 웹 디자인

## 기술 스택

### Frontend

- React
- Next.js
- TypeScript
- Tailwind CSS

### Deploy

- Vercel

## 프로젝트 구조

```txt
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── blog/
│       ├── page.tsx
│       └── [id]/
│           └── page.tsx
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts
└── types/
    ├── blog.ts
    └── project.ts
```

## 실행 방법

아래 명령어를 사용하여 프로젝트를 로컬 환경에서 실행할 수 있습니다.

```bash
npm install
npm run dev
```

브라우저에서 아래 주소로 접속합니다.

```txt
http://localhost:3000
```

## 배포 링크

- Vercel: https://blog-project-seven-orcin.vercel.app/

배포가 완료되면 위 항목에 실제 서비스 링크를 추가할 예정입니다.

## 학습 목표

이 프로젝트를 통해 다음 내용을 학습했습니다.

- Next.js App Router 구조 이해
- 동적 라우팅 구현
- React 컴포넌트 분리
- TypeScript interface 정의
- Tailwind CSS 기반 반응형 UI 구현
- GitHub를 활용한 프로젝트 관리

## 향후 개선 사항

- MDX 기반 블로그 작성 기능 추가
- 프로젝트 상세 페이지 추가
- 검색 기능 추가
- 다크 모드 추가
- Vercel 배포 및 커스텀 도메인 연결

## 작성자

- GitHub: [anbeicat](https://github.com/anbeicat)