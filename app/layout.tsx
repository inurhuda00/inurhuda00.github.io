import React from "react"

import { Metadata } from "next"
import { Epilogue } from "next/font/google"

import Header from "./components/navbar"
import "./globals.css"
import { Providers } from "./providers"

const epilogue = Epilogue({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Inurhuda00",
    template: "%s | inurhuda00",
  },
  description: "Code, Build, Test, and Ship",
  openGraph: {
    title: "Inurhuda00",
    description: "Code, Build, Test, and Ship",
    url: "http://localhost:3000",
    siteName: "Inurhuda00",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Ilham Nuruddin",
    card: "summary_large_image",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={` ${epilogue.className}`}>
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="mx-auto max-w-3xl dark:bg-background dark:text-foreground">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
