/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 18:58:12
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-25 18:59:09
 * @description: 
 * @FilePath: /qiao-portfolio-blog/types/project.ts
 */
export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    demoUrl?: string;
}