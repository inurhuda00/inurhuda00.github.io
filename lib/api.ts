import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import rehypePrism from '@mapbox/rehype-prism'
import readingTime from 'reading-time'
import { serialize } from 'next-mdx-remote/serialize'
import PostType, { TVisibility } from 'types/post'

const postsDir = join(process.cwd(), '_posts')

export async function getPostsSlug() {
    return fs.readdirSync(postsDir)
}

export async function getPostBySlug(slug: string) {
    // remove exstension
    const clearSlug = slug.replace(/\.mdx$/, '')
    const fullPath = join(postsDir, `${clearSlug}.mdx`)

    const fileContent = fs.readFileSync(fullPath, 'utf-8')

    const { data, content } = matter(fileContent)

    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [
                require('remark-autolink-headings'),
                require('remark-slug'),
                require('remark-code-titles'),
            ],
            rehypePlugins: [rehypePrism],
        },
        target: ['esnext'],
    })

    return {
        mdxSource,
        frontMatter: {
            slug: clearSlug || null,
            readingTime: readingTime(content),
            ...data,
        },
    }
}

export async function getAllPosts() {
    const slugs = await getPostsSlug()

    const posts: any = slugs.map((slug: string) => {
        const fileContent = fs.readFileSync(join(postsDir, slug), 'utf8')
        const clearSlug = slug.replace(/\.mdx$/, '')

        const { data, content } = matter(fileContent)

        return {
            ...data,
            slug: clearSlug,
            readingTime: readingTime(content),
        }
    })

    const publicPosts = posts.filter(
        (post: PostType) => post.visibility === TVisibility.public
    )

    return publicPosts
}
