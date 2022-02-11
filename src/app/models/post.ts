export interface Post {
    id: number;
    image: string;
    link: string;
    text: string;
    createdAt: Date;
}

export type Posts = Array<Post>;