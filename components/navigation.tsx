import ActiveLink from './activeLink'

const Navigation = () => {
    return (
        <nav className="hidden md:flex space-x-10">
            <ActiveLink href="/profile" activeClassName="underline">
                <a className="bg-white rounded-md text-gray-900 inline-flex items-center text-lg hover:text-gray-900 hover:underline focus:outline-none">
                    profile
                </a>
            </ActiveLink>

            <ActiveLink href="/project" activeClassName="underline">
                <a className="bg-white rounded-md text-gray-900 inline-flex items-center text-lg hover:text-gray-900 hover:underline focus:outline-none">
                    project
                </a>
            </ActiveLink>
            <ActiveLink href="/poorly" activeClassName="underline">
                <a className="bg-white rounded-md text-gray-900 inline-flex items-center text-lg hover:text-gray-900 hover:underline focus:outline-none">
                    poorly
                </a>
            </ActiveLink>
        </nav>
    )
}

export default Navigation
