import type { AppProps } from "next/app"
import { Inter as FontSans } from "next/font/google"
import NextProgress from "next-progress"
import { ThemeProvider } from "next-themes"

import "@/styles/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
				:root {
					--font-sans: ${fontSans.style.fontFamily};
				}
			}`}</style>
      <NextProgress options={{ showSpinner: false }} />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
