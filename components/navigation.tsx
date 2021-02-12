import Link from 'next/link'

let links: Array<{ href: string; name: string }> = [
    { name: 'Blog', href: '/blog' },
    { name: 'Project', href: '/project' },
    { name: 'Home', href: '/' },
]

const Navigation = () => {
    return (
        <div className="hidden md:flex space-x-10">
            {links.map(({ name, href }) => (
                <Link href={href} key={href}>
                    <a className="btn-nav">{name}</a>
                </Link>
            ))}
        </div>
    )
}

export default Navigation
