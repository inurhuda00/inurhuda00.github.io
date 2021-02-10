import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import React, { Children, ReactElement } from 'react'

interface IActiveLInk extends React.PropsWithChildren<LinkProps> {
    children?: ReactElement | Array<ReactElement>
    activeClassName?: string
}

const ActiveLink = ({ children, activeClassName, ...props }: IActiveLInk) => {
    const { asPath } = useRouter()
    const child = Children.only(children)
    const childClassName = child!.props.className || ''

    // pages/index.js will be matched via props.href
    // pages/about.js will be matched via props.href
    // pages/[slug].js will be matched via props.as

    const className =
        asPath === props.href || asPath === props.as
            ? `${activeClassName} ${childClassName}`.trim()
            : childClassName

    return (
        <Link {...props}>
            {React.cloneElement(child!, {
                className: className || null,
            })}
        </Link>
    )
}
export default ActiveLink
