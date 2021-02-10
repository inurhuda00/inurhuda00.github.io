import Container from '@components/container'
import MoreStories from '@components/more-stories'
import HeroPost from '@components/hero-post'
import Intro from '@components/intro'
import Layout from '@components/layout'
import { getAllPosts } from '../lib/api'
import Post from '../types/post'
import { NextSeo } from 'next-seo'

type Props = {
    allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
    return (
        <>
            <NextSeo
                title="Page Meta Title"
                description="This will be the page meta description"
                canonical="http://inurhuda00.github.io/"
                additionalMetaTags={[
                    {
                        property: 'dc:creator',
                        content: 'inurhuda00',
                    },
                ]}
            />
            <Layout>
                <Container>
                    <Intro />
                    {heroPost && (
                        <HeroPost
                            title={heroPost.title}
                            coverImage={heroPost.coverImage}
                            date={heroPost.created_at}
                            author={heroPost.author}
                            slug={heroPost.slug}
                            excerpt={heroPost.excerpt}
                        />
                    )}
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                </Container>
            </Layout>
        </>
    )
}

export default Index

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
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

    return {
        props: { allPosts },
    }
}
