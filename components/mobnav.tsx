import Link from 'next/link'
import React, { useState } from 'react'
import { TLink } from './header'

const MobNav = ({ links }: { links: Array<TLink> }) => {
    const [active, setactive] = useState(false)
    return (
        <nav className="fixed bottom-0 right-0 z-50">
            <div
                className="absolute w-11 h-11 text-center rounded-full bottom-3 right-3 bg-black"
                onClick={() => setactive(!active)}
            >
                <div className="inline-block mx-auto cursor-pointer m-3">
                    {active ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 text-white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 text-white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}
                </div>
            </div>

            <div className={`nav ${active ? 'nav-active' : ''}`}>
                <ul>
                    {links &&
                        links.map(({ icon, href }) => (
                            <li key={href}>
                                <Link href={href} key={href}>
                                    <a>{icon}</a>
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        </nav>
    )
}

export default MobNav
