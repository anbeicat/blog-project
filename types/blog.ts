/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-05-25 18:58:01
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-05-25 18:58:50
 * @description: 
 * @FilePath: /qiao-portfolio-blog/types/blog.ts
 */
export interface BlogPost {

    id: string;

    title: string;

    description: string;

    content: string;

    tags: string[];

    createdAt: string;

    readingTime: string;

}