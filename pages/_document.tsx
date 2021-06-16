import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="id">
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/inter-var-latin.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />

                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/favicon/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/favicon/site.webmanifest" />
                    <link
                        rel="mask-icon"
                        href="/favicon/safari-pinned-tab.svg"
                        color="#000000"
                    />
                    <link rel="shortcut icon" href="/favicon/favicon.ico" />
                    <meta name="msapplication-TileColor" content="#000000" />
                    <meta
                        name="msapplication-config"
                        content="/favicon/browserconfig.xml"
                    />
                    <meta name="theme-color" content="#000" />
                    <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
                    <meta
                        name="description"
                        content={`A statically generated blog example using Next.js and.`}
                    />
                    <meta
                        property="og:image"
                        content="https://og-image.now.sh/**inurhuda00**%20blog.png?theme=light&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"
                    />
                </Head>
                <body className="dark:bg-black dark:text-gray-50">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
