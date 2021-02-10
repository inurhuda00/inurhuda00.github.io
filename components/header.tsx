import Link from 'next/link'
import Navigation from './navigation'

const Header = ({ title = 'Blog' }) => {
    return (
        <section className="flex-col md:flex-row flex items-center justify-between max-w-5xl mx-auto mb-20 mt-8">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
                <Link href="/">
                    <a className="hover:underline">{title}</a>
                </Link>
                .
            </h2>
        </section>
    )
}

export default Header
