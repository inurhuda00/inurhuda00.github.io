import Link from 'next/link'
import { TLink } from './header'

const Navigation = ({ links }: { links: Array<TLink> }) => {
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
