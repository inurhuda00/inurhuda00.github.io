import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import Container from '@components/container'
import PostBody from '@components/post-body'
import Header from '@components/header'
import PostHeader from '@components/post-header'
import Layout from '@components/layout'
import PostTitle from '@components/post-title'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import PostType from '../../types/post'
import { Fragment } from 'react'
import { NextSeo } from 'next-seo'

type Props = {
    post: PostType
    morePosts: PostType[]
    preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <Fragment>
            <NextSeo
                title={post.title}
                canonical="http://inurhuda00.github.io/"
                openGraph={{
                    title: `${post.title}`,
                    description: `${post.excerpt}`,
                    url: `${post.url}`,
                    type: 'article',
                    article: {
                        publishedTime: `${post.created_at}`,
                        modifiedTime: `${post.updated_at}`,
                        section: `${post.tags.join(' ')}`,
                        authors: [`${post.author.url}`],
                        tags: post.tags,
                    },
                    images: [
                        {
                            url: `${post.ogImage.url}`,
                            width: 850,
                            height: 650,
                            alt: `${post.title}`,
                        },
                    ],
                }}
            />
            <Layout preview={preview}>
                <Container>
                    <Header />
                    {router.isFallback ? (
                        <PostTitle>Loading…</PostTitle>
                    ) : (
                        <>
                            <article className="mb-32">
                                <PostHeader
                                    title={post.title}
                                    coverImage={post.coverImage}
                                    date={post.created_at}
                                    author={post.author}
                                />
                                <PostBody content={post.content} />
                            </article>
                        </>
                    )}
                </Container>
            </Layout>
        </Fragment>
    )
}

export default Post

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug, [
        'slug',
        'title',
        'created_at',
        'updated_at',
        'coverImage',
        'author',
        'excerpt',
        'tags',
        'ogImage',
        'url',
        'content',
    ])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((posts) => {
            return {
                params: {
                    slug: posts.slug,
                },
            }
        }),
        fallback: false,
    }
}
