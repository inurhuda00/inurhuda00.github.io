import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const postsDir = join(process.cwd(), '_posts')

export function getPostSlug() {
    return fs.readdirSync(postsDir)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
    // remove exstension
    const clearSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDir, `${clearSlug}.md`)
    const fileContent = fs.readFileSync(fullPath, 'utf-8')
    const { data, content } = matter(fileContent)

    type Items = {
        [key: string]: string
    }

    let items: Items = {}

    // assign field to field needed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = clearSlug
        }
        if (field === 'content') {
            items[field] = content
        }

        if (data[field]) {
            items[field] = data[field]
        }
    })

    return items
}

export function getAllPosts(fields: string[] = []) {
    const slugs = getPostSlug()
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        .sort((first, second) => (first.date > second.date ? -1 : 1))
    return posts
}
