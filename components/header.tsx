import { useState } from 'react'
import Navigation from './navigation'
import Tooltip from './tooltip'

type Props = {
    title?: string
}

const Header = ({ title = 'Blog' }: Props) => {
    const [dark, setDark] = useState(false)
    return (
        <header className="w-full p-8 my-0 md:my-8 mx-auto bg-white bg-opacity-60 py-8 mb-6 sticky-nav">
            <div className="max-w-4xl mx-auto px-5 flex flex-wrap flex-col md:flex-row items-center">
                <div className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    <Navigation />
                </div>
                <div className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                    <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight md:tracking-tighter leading-tight">
                        {title}.
                    </h2>
                </div>
                <div className="lg:w-2/5 inline-flex lg:justify-end mx-10 lg:mx-0 space-x-4">
                    <Tooltip content={`${dark ? '😴' : '😎'}`}>
                        <button onClick={() => setDark(!dark)} className="btn-nav">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                {dark ? (
                                    <path
                                        fillRule="evenodd"
                                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                        clipRule="evenodd"
                                    />
                                ) : (
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                )}
                            </svg>
                        </button>
                    </Tooltip>
                    <Tooltip
                        content="store the suck article here"
                        tooltipClassName={`${
                            dark
                                ? 'text-gray-50 bg-gray-900 py-1 px-2 rounded'
                                : 'bg-gray-50 text-gray-900 py-1 px-2 rounded'
                        }`}
                    >
                        <button className="btn-nav">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                                <path
                                    fillRule="evenodd"
                                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </Tooltip>
                </div>
            </div>
        </header>
    )
}

export default Header
