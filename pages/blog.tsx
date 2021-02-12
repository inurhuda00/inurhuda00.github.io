import Layout from '@components/layout'
import { getAllPosts } from '../lib/api'

import { Fragment } from 'react'

import CardPost from '@components/card-post'
import PostType from 'types/post'

const Blog = ({ posts }: { posts: Array<PostType> }) => {
    return (
        <Fragment>
            <Layout title="Blog">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    Blog
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    I've been writing online since 2014, mostly about web development and
                    tech careers. In total, I've written 66 articles on this site. Use the
                    search and pill button below to filter by title.
                </p>
                <div className="relative w-full my-2">
                    <input
                        aria-label="Search articles"
                        type="text"
                        placeholder="Search articles"
                        className="px-4 py-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white text-gray-900"
                    />
                    <svg
                        className="absolute right-3 top-3 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                </div>

                <button className="px-4 py-1 border rounded-md border-gray-300">
                    tags
                </button>

                {posts.map((post) => (
                    <CardPost post={post} key={post.slug} />
                ))}
            </Layout>
        </Fragment>
    )
}

export default Blog

export const getStaticProps = async () => {
    let posts = await getAllPosts()

    return {
        props: { posts },
    }
}
