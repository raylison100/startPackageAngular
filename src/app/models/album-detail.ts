import { Post } from "./post";

export interface AlbumDetail {
    id: number;
    name: string;
    nomeAuthor: string;
    createdAt: Date;
    posts: Array<Post>;
}

export type AlbumsDetail = Array<AlbumDetail>;