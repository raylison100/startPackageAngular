export interface Album {
    id: number;
    name: string;
    nomeAuthor: string;
    createdAt: Date;
}

export type Albums = Array<Album>;