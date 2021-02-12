import Author from './author'

type PostType = {
    slug: string
    title: string
    created_at: string
    updated_at: string
    image: string
    author: Author
    summary: string
    tags: Array<string>
    url: string
    content: string
    readingTime: {
        text: string
        minutes: number
        time: number
        words: number
    }
}

export default PostType
