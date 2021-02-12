import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PostType from 'types/post'
import DateFormatter from './date-formatter'

const CardPost = ({ post }: { post: PostType }) => {
    return (
        <div className="flex flex-col xs:flex-row my-6" key={post.slug}>
            <div className="p-2">
                <Image
                    width="280"
                    height="200"
                    objectFit="fill"
                    objectPosition="center"
                    priority
                    quality={50}
                    src={post.image}
                    alt="dynamic-routing.jpg"
                />
            </div>

            <div className="w-full space-y-2 pl-4">
                <Link href={`/posts/${post.slug}`}>
                    <a className="flex flex-col md:flex-row justify-between">
                        <h4 className="text-lg font-semibold md:text-xl w-full">
                            {post.title}
                        </h4>
                    </a>
                </Link>

                <p className="text-gray-600">{post.summary}</p>
                <p className="text-sm text-gray-600 min-w-32 mt-2 md:mt-0">
                    {post.readingTime.text} •{' '}
                    <DateFormatter dateString={post.created_at} />
                </p>
            </div>
        </div>
    )
}

export default CardPost
