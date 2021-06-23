import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PostType from 'types/post'
import DateFormatter from './date-formatter'

const CardPost = ({ post }: { post: PostType | { [key: string]: any } }) => {
    return (
        <div className="flex flex-col xs:flex-row my-6" key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
                <a className="p-2">
                    <Image
                        objectFit="fill"
                        objectPosition="center"
                        quality={50}
                        width="280"
                        height="184"
                        priority
                        src="/images/blog/preview.jpg"
                        alt={`Cover Image for ${post.title}`}
                        className="rounded"
                    />
                </a>
            </Link>

            <div className="w-full space-y-2 pl-4">
                <Link href={`/posts/${post.slug}`}>
                    <a className="flex flex-col md:flex-row justify-between">
                        <h4 className="text-lg font-semibold md:text-xl w-full">
                            {post.title}
                        </h4>
                    </a>
                </Link>

                <p className="text-gray-600 dark:text-gray-400">{post.summary}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 min-w-32 mt-2 md:mt-0">
                    {post.readingTime.text} •{' '}
                    <DateFormatter dateString={post.created_at} />
                </p>
            </div>
        </div>
    )
}

export default CardPost
