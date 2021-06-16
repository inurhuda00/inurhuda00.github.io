import Layout from '@components/layout'
import { getAllPosts } from '@lib/api'

import { FormEvent, Fragment, useContext, useEffect, useRef } from 'react'

import CardPost from '@components/card-post'
import PostType from 'types/post'
import { searchContext } from '@context/searchContext'
import { useSearchable } from '@lib/useSearchable'
import usePagination from '@lib/usePaginate'

const Blog = ({ posts }: { posts: Array<PostType> }) => {
    const { search, setSearch } = useContext(searchContext)

    const onSearch = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { value } = e.currentTarget
        setSearch(value)
    }

    let currentPosts = []

    currentPosts = useSearchable(posts, search, (post: any) =>
        [post.title].sort(
            (a, b) => Number(new Date(b.updated_at)) - Number(new Date(a.updated_at))
        )
    )

    const { next, currentPage, currentData, maxPage } = usePagination(currentPosts, 2)

    currentPosts = currentData()

    const element = useRef<HTMLHeadingElement>(null)

    const observer = useRef<IntersectionObserver>()

    const prevY = useRef(0)

    const buildThresholdList = () => {
        let thresholds = []
        let numSteps = 20

        for (let i = 1.0; i <= numSteps; i++) {
            let ratio = i / numSteps
            thresholds.push(ratio)
        }

        thresholds.push(0)
        return thresholds
    }

    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    let y = entry.boundingClientRect.y
                    if (prevY.current > y) {
                        next()
                    }

                    prevY.current = y
                })
            },
            { root: null, rootMargin: '0px', threshold: buildThresholdList() }
        )
    }, [])

    useEffect(() => {
        const currentElement = element.current
        const currentObserver = observer.current

        if (currentElement && currentObserver) {
            currentObserver.observe(currentElement)
        }

        return () => {
            if (currentElement && currentObserver) {
                currentObserver.unobserve(currentElement)
            }
        }
    }, [element])

    return (
        <Fragment>
            <Layout title="Blog">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
                    Blog
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Use the search and pill button below to filter it.
                </p>
                <div className="relative w-full my-2">
                    <input
                        type="text"
                        value={search}
                        onChange={onSearch}
                        autoComplete="off"
                        placeholder="Search articles"
                        className="px-4 py-2 border text-gray-800 border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-gray-50"
                    />
                    <svg
                        className="absolute right-3 top-3 h-5 w-5 text-gray-600 dark:text-gray-400"
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

                {currentPosts.length ? (
                    currentPosts.map((post, index) => (
                        <CardPost post={post} key={index} />
                    ))
                ) : (
                    <p className="w-full text-center py-3"> Not Found</p>
                )}

                {!search && currentPage !== maxPage && (
                    <h2 className="w-full text-center py-3" ref={element}>
                        loading
                    </h2>
                )}

                {currentPage === maxPage && (
                    <h1 className="w-full text-center py-3">
                        No more posts available...
                    </h1>
                )}
            </Layout>
        </Fragment>
    )
}

export default Blog

export const getStaticProps = async () => {
    let posts = await getAllPosts()
    // let tags = await getAllTags()

    return {
        props: { posts },
    }
}
