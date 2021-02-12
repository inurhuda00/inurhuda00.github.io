import { Fragment } from 'react'
import Footer from './footer'
import Header from './header'

type Props = {
    children: React.ReactNode
    title?: string
}

const Layout = ({ title, children }: Props) => {
    return (
        <Fragment>
            <Header title={title} />
            <main className="max-w-3xl mx-auto p-5 lg:px-8">{children}</main>
            <Footer title={title} />
        </Fragment>
    )
}

export default Layout
