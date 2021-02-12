import { DefaultSeo, DefaultSeoProps } from 'next-seo'
import { AppProps } from 'next/app'
import ProgressBar from 'nextjs-progressbar'
import { MDXProvider } from '@mdx-js/react'
import '../styles/index.css'
import MDXComponents from '@components/mdx-component'
import React from 'react'

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
        <MDXProvider components={MDXComponents}>
            <DefaultSeo {...seo} />
            <ProgressBar color="black" height={3} />
            <Component {...pageProps} />
        </MDXProvider>
    )
}
