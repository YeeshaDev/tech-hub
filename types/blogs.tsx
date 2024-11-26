// @/types/blogs.ts
export interface BlogPost {
    id: number;
    title: string;
    content: string;
    date: string;
    images?: string[] | string | undefined; 
  }
  