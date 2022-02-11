export interface Comment {
    id: number;
    comment: string;
    nomeAuthor: string;
    createdAt: Date;
}

export type Comments = Array<Comment>;