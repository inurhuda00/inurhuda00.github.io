import Link from "next/link"

import { config } from "@/config/site"
import { cn } from "@/lib/utils"
import { Layout } from "@/components/layout"
import { Button, buttonVariants } from "@/components/ui/button"

export default function About() {
  return (
    <Layout meta={{ title: "About", description: "Tentang" }}>
      <section className="mx-auto w-full max-w-4xl px-6 pt-16">
        <section className="mb-12 dark:text-slate-100">
          <Link
            href={config.resume}
            rel="noreferrer"
            target="_blank"
            className={cn(buttonVariants({ variant: "subtle" }))}
          >
            Download CV
          </Link>
          <div className="mt-4">
            <h3 className="max-w-md">
              Tanya apapun tentang programing, blockchain and crypto. apapun
              terkait dunia tech. lets discuss and connect on :
            </h3>
            <div className="grid gap-2 pt-4">
              <a
                className="flex items-center font-semibold"
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/inurhuda00"
              >
                {/*! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-8 w-8 pr-2"
                  fill="currentColor"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
                <span className="text-slate-700 dark:text-slate-400">
                  LinkedIn
                </span>
              </a>
              <a
                className="flex items-center font-semibold"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/inurhuda00"
              >
                {/*! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-8 w-8 pr-2"
                  fill="currentColor"
                >
                  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
                </svg>
                <span className="text-slate-700 dark:text-slate-400">
                  GitHub
                </span>
              </a>
              <a
                className="flex items-center font-semibold"
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/inurhuda00"
              >
                <svg
                  className="h-8 w-8 pr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h137V328h-63v-72h63v-55c0-62 37-96 94-96 27 0 55 5 55 5v61h-31c-31 0-40 19-40 38v47h69l-11 72h-58v152h137a48 48 0 0048-48V80a48 48 0 00-48-48z" />
                </svg>
                <span className="text-slate-700 dark:text-slate-400">
                  Facebook
                </span>
              </a>
              <a
                className="flex items-center font-semibold"
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/nurhudai_"
              >
                <svg
                  className="h-8 w-8 pr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path d="M224 141a115 115 0 100 229 115 115 0 000-229zm0 190a75 75 0 110-150 75 75 0 010 150zm147-195a27 27 0 11-54 0 27 27 0 0154 0zm76 28c-2-36-10-68-37-94-26-27-58-35-93-37-37-2-148-2-185 0-36 2-68 10-94 36S3 129 1 164c-2 37-2 148 0 185 2 36 10 68 37 94s58 35 94 36c37 3 148 3 185 0 35-1 67-9 93-36 27-26 35-58 37-94 2-37 2-147 0-184zm-48 224c-8 20-23 35-43 43-29 11-99 9-132 9s-103 2-132-9c-20-8-35-23-43-43-11-29-9-99-9-132s-2-103 9-132c8-20 23-35 43-43 30-11 100-9 132-9s103-2 132 9c20 8 35 23 43 43 12 29 9 99 9 132s3 103-9 132z" />
                </svg>
                <span className="text-slate-700 dark:text-slate-400">
                  Instagram
                </span>
              </a>
            </div>
            <p className="pt-4"> See you on the other side 🎉.</p>
          </div>
        </section>
      </section>
    </Layout>
  )
}
