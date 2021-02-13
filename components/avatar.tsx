import Image from 'next/image'
import { Fragment, useState } from 'react'
import DateFormatter from './date-formatter'

interface Props {
    name: string
    picture: string
    read: string
    date: string
}

const Avatar = ({ name, picture, read, date }: Props) => {
    const [mark, setMark] = useState(false)

    return (
        <Fragment>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Image
                        src={picture}
                        width="28"
                        height="28"
                        quality={50}
                        className="rounded-full"
                        alt={name}
                    />
                    <span>
                        <p className="text-xs text-gray-600">written by</p>
                        <p className="text-lg font-semibold hover:underline">{name}</p>
                    </span>
                </div>

                <div className="flex items-center space-x-6">
                    <p className="hidden sm:block text-sm text-gray-600 min-w-32">
                        {read} • <DateFormatter dateString={date} />
                    </p>

                    <div>
                        <button
                            onClick={() => {
                                setMark(!mark)
                            }}
                            className="inline-flex items-center border-0 p-2 focus:outline-none hover:bg-gray-200 rounded"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className={`w-5 h-5 ${
                                    mark && 'fill-current'
                                } text-gray-900`}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                />
                            </svg>
                        </button>
                        <button className="inline-flex items-center border-0 p-2 focus:outline-none hover:bg-gray-200 rounded">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <p className="mt-8 sm:hidden text-sm text-gray-600 min-w-32">
                {read} • <DateFormatter dateString={date} />
            </p>
        </Fragment>
    )
}

export default Avatar
