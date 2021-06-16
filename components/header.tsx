import Navigation from './navigation'
import Tooltip from './tooltip'
import { useTheme } from 'next-themes'
import MobNav from './mobnav'
import { Fragment } from 'react'
import { useMedia } from '@lib/useMedia'

export type TLink = {
    href: string
    name: string
    icon: React.ReactNode
}

let links: Array<TLink> = [
    {
        name: 'Blog',
        href: '/blog',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-white"
            >
                <path d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
        ),
    },
    {
        name: 'Project',
        href: '/project',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-white"
            >
                <path d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" />
            </svg>
        ),
    },
    {
        name: 'Home',
        href: '/',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-white"
            >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
        ),
    },
]

type Props = {
    title?: string
}

const Header = ({ title = 'Blog' }: Props) => {
    const mobile = useMedia('(max-width: 767px)')
    const { theme, setTheme } = useTheme()

    const isDark = theme === 'dark'

    return (
        <Fragment>
            <header className="w-full p-8 my-0 md:my-8 mx-auto bg-gray-50 bg-opacity-60 py-8 mb-6 sticky-nav dark:bg-black">
                <div className="max-w-4xl mx-auto px-5 flex flex-wrap flex-col md:flex-row items-center">
                    <div className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                        <Navigation links={links} />
                    </div>

                    <div className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
                        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight md:tracking-tighter leading-tight">
                            {title}.
                        </h2>
                    </div>
                    <div className="lg:w-2/5 inline-flex lg:justify-end mx-10 lg:mx-0 space-x-4">
                        <Tooltip content={`${isDark ? '😴' : '😎'}`}>
                            <button
                                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                                className="btn-nav"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    {isDark ? (
                                        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                                    ) : (
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                    )}
                                </svg>
                            </button>
                        </Tooltip>
                        <Tooltip
                            content="store the suck article here"
                            tooltipClassName={`text-xs ${
                                isDark
                                    ? 'bg-gray-50 text-gray-900 py-1 px-2 rounded'
                                    : 'text-gray-50 bg-black py-1 px-2 rounded'
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
                                    <path d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                </svg>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </header>
            {mobile && <MobNav links={links} />}
        </Fragment>
    )
}

export default Header
