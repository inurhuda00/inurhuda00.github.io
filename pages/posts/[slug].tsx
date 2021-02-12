import Layout from '@components/layout'
import MDXComponents from '@components/mdx-component'
import PostHeader from '@components/post-header'
import PostTitle from '@components/post-title'
import { getAllPosts, getPostBySlug } from '@lib/api'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/dist/client/router'
import React, { Fragment } from 'react'
import hydrate from 'next-mdx-remote/hydrate'

const Post = ({ postData }: any) => {
    const router = useRouter()
    const { mdxSource, frontMatter } = postData

    const content = hydrate(mdxSource, { components: MDXComponents })

    return (
        <Fragment>
            <NextSeo
                title={frontMatter.title}
                canonical="http://inurhuda00.github.io/"
                openGraph={{
                    title: `${frontMatter.title}`,
                    description: `${frontMatter.summary}`,
                    url: `${frontMatter.url}`,
                    type: 'article',
                    article: {
                        publishedTime: `${frontMatter.created_at}`,
                        modifiedTime: `${frontMatter.updated_at}`,
                        section: `${frontMatter.tags.join(' ')}`,
                        authors: [`${frontMatter.author.url}`],
                        tags: frontMatter.tags,
                    },
                    images: [
                        {
                            url: `${frontMatter.image}`,
                            width: 850,
                            height: 650,
                            alt: `${frontMatter.title}`,
                        },
                    ],
                }}
            />
            <Layout>
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <article className="mb-32">
                        <PostHeader
                            title={frontMatter.title}
                            image={frontMatter.image}
                            date={frontMatter.created_at}
                            author={frontMatter.author}
                        />
                        <section className="prose max-w-none w-full">{content}</section>
                    </article>
                )}
            </Layout>
        </Fragment>
    )
}

export const getStaticProps = async ({ params }: any) => {
    const postData = await getPostBySlug(params.slug)
    return {
        props: {
            postData,
        },
    }
}

export const getStaticPaths = async () => {
    const paths = await getAllPosts()

    return {
        paths: paths.map(({ slug }) => ({
            params: {
                slug,
            },
        })),
        fallback: false,
    }
}

export default Post
