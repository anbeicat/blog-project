export interface Project {
    id: string;
    title: string;
    description: string;
    detail: string;
    techStack: string[];
    features: string[];
    learned: string[];
    githubUrl?: string;
    demoUrl?: string;
}