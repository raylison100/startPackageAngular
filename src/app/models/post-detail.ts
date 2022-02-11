export interface PostDetail {
    id: number,
    text: string,
    image: string,
    link: string,
    nameAuthor: string,
    createdAt: string,
    comments: Array<Comment>;
}

export type PostsDetail = Array<PostDetail>;