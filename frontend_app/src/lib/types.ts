export interface Blog {
    id: number;
    title: string;
    author: Author;
    category: string;
    published_at: string;
    is_draft: boolean;
    featured_image: string;
}

export interface Author {
    id: number;
    username: string;
    profile_image: string;
}