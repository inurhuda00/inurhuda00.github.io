import Footer from './footer'
import Header from './header'
import { useTheme } from 'next-themes'
import ProgressBar from 'nextjs-progressbar'

type Props = {
    children: React.ReactNode
    title?: string
}

const Layout = ({ title, children }: Props) => {
    const { theme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <div className="text-gray-900 dark:text-gray-50">
            <ProgressBar color={`${isDark ? 'white' : 'black'}`} height={3} />
            <Header title={title} />
            <main className="max-w-3xl mx-auto p-5 lg:px-8">{children}</main>
            <Footer title={title} />
        </div>
    )
}

export default Layout
