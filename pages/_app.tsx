import '../styles/index.scss'

import React from 'react'
import { AppProps } from 'next/app'

import MDXComponents from '@components/mdx-component'

import { MDXProvider } from '@mdx-js/react'
import { SearchProvider } from '@context/searchContext'
import { DefaultSeo, DefaultSeoProps } from 'next-seo'
import { ThemeProvider } from 'next-themes'

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
        <ThemeProvider attribute="class">
            <SearchProvider>
                <MDXProvider components={MDXComponents}>
                    <DefaultSeo {...seo} />

                    <Component {...pageProps} />
                </MDXProvider>
            </SearchProvider>
        </ThemeProvider>
    )
}
