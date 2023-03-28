import Head from "next/head"

import { config } from "@/config/site"

export default function Meta({
  title = "inurhuda00.github.io",
  description = `inurhuda00.github.io is ${config.description}`,
  image = `${config.image}`,
}: {
  title?: string
  description?: string
  image?: string
}) {
  return (
    <Head>
      <title>{`${title} - ${config.website}`}</title>
      <meta
        name="description"
        content={`${description} | ${config.name} inurhuda00.github.io`}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-navbutton-color" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#0f172a" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={image} />
      <meta property="og:logo" content="/icon.webp"></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@seiriooss" />
      <meta
        name="twitter:title"
        content={`inurhuda00.github.io - ${config.name}`}
      />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}
