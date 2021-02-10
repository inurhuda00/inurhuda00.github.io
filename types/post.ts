import Author from './author'

type PostType = {
    slug: string
    title: string
    created_at: string
    updated_at: string
    coverImage: string
    author: Author
    excerpt: string
    tags: Array<string>
    ogImage: {
        url: string
    }
    url: string
    content: string
}

export default PostType
