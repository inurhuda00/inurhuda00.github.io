import Link from 'next/link'

type Props = {
    title?: string
}

const Footer = ({ title = 'Blog' }: Props) => {
    return (
        <footer className="max-w-4xl mx-auto px-5">
            <div className="py-28 flex flex-col lg:flex-row items-center">
                <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                    Statically Generated with Next.js.
                </h3>
                <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                    <Link href="https://github.com/inurhuda00/inurhuda00.github.io/">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="mx-3 bg-black hover:bg-gray-50 hover:text-black border border-black text-gray-50 font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 dark:border-gray-50"
                        >
                            View on GitHub
                        </a>
                    </Link>
                </div>
            </div>
            <section>
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <div className="flex title-font font-medium items-center md:justify-start justify-center">
                        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight md:tracking-tighter leading-tight">
                            {title}.
                        </h2>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © 2021
                        <Link href="https://github.com/inurhuda00/">
                            <a
                                className="text-gray-600 dark:text-gray-400 ml-1"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                @inurhuda00
                            </a>
                        </Link>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-3">
                        <a>
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                    width="20"
                                    height="20"
                                    x="2"
                                    y="2"
                                    rx="5"
                                    ry="5"
                                ></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="0"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                ></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </section>
        </footer>
    )
}

export default Footer
