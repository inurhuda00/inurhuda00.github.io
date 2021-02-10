import { DefaultSeo, DefaultSeoProps } from 'next-seo'
import { AppProps } from 'next/app'
import '../styles/index.css'

const seo: DefaultSeoProps = {
    openGraph: {
        type: 'website',
        locale: 'id_ID',
        url: 'http://inurhuda00.github.io/',
        site_name: 'blog',
    },
    twitter: {
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
    },
    titleTemplate: '%s | Next blog',
}

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <DefaultSeo {...seo} />
            <Component {...pageProps} />
        </>
    )
}
