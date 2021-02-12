import Link from 'next/link'
import Image from 'next/image'

import ConsCard from './cons-card'
import Step from './step'

const CustomLink = (props: any) => {
    const href = props.href
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

    if (isInternalLink) {
        return (
            <Link href={href}>
                <a {...props} />
            </Link>
        )
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const MDXComponents = {
    a: CustomLink,
    Image,
    ConsCard,
    Step,
}
export default MDXComponents
