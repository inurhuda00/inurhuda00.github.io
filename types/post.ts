import Author from './author'

export enum TVisibility {
    draf,
    public,
}

type PostType = {
    slug: string
    title: string
    visibility: TVisibility
    created_at: string
    updated_at: string
    image: string
    author: Author
    summary: string
    tags: Array<string>
    content: string
    readingTime: {
        text: string
        minutes: number
        time: number
        words: number
    }
}

export default PostType
