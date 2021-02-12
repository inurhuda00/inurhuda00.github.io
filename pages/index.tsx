import Layout from '@components/layout'
import DateFormatter from '@components/date-formatter'
import { getAllPosts } from '@lib/api'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import PostType from 'types/post'
import Link from 'next/link'
import CardPost from '@components/card-post'

type Props = {
    posts: Array<PostType>
}

const Index = ({ posts }: Props) => {
    return (
        <Layout title="Home">
            <section className="text-gray-900">
                <div className="flex flex-col justify-center items-start py-12">
                    <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
                        Hey, I’m Mr. Goodman
                    </h1>

                    <h2 className="prose text-gray-600 mb-16">
                        Seorang yang suka berkolaborasi dan mencoba hal-hal baru
                        bersama-sama. Suka dengan hal-hal tentang UI/UIX dan mendevelop
                        web UI. Check beberapa hal tentang UI disini ––{' '}
                        <Link href="/project">
                            <a>components</a>
                        </Link>{' '}
                        😁
                    </h2>

                    <div className="w-full">
                        <h3 className="font-bold text-2xl md:text-4xl tracking-tight my-8">
                            Latest Update
                        </h3>
                        {posts.slice(0, 3).map((post) => (
                            <CardPost post={post} key={post.slug} />
                        ))}
                    </div>

                    <div className="w-full">
                        <h3 className="font-bold text-2xl md:text-4xl tracking-tight my-8">
                            Project
                        </h3>

                        <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4 my-6">
                            <div>
                                <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
                                    Past, Present, and Future of React State Management
                                </h4>
                                <p className="leading-5 text-gray-700 dark:text-gray-300">
                                    Learn about the history of state management in React
                                    and what the preferred solutions are today.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4 my-6">
                            <div>
                                <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
                                    Past, Present, and Future of React State Management
                                </h4>
                                <p className="leading-5 text-gray-700 dark:text-gray-300">
                                    Learn about the history of state management in React
                                    and what the preferred solutions are today.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4 my-6">
                            <div>
                                <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
                                    Past, Present, and Future of React State Management
                                </h4>
                                <p className="leading-5 text-gray-700 dark:text-gray-300">
                                    Learn about the history of state management in React
                                    and what the preferred solutions are today.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    let posts = await getAllPosts()

    return {
        props: { posts },
    }
}

export default Index
