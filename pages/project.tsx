import Head from "next/head"
import Image from "next/image"

import { Layout } from "@/components/layout"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Project | Ilham Nuruddin</title>
        <meta name="description" content="Project | Ilham Nuruddin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="mx-auto mb-6 w-full max-w-4xl px-6 pt-16">
        <h2 className="mb-6 text-lg font-medium uppercase tracking-wide text-slate-500 dark:text-slate-200">
          Latest Projects
        </h2>
        <div className="mb-12 grid gap-4">
          <article className="flex items-center rounded-sm p-2 dark:bg-white">
            <a href="#" className="w-2/5">
              <Image
                src="/images/projects/personal.jpeg"
                alt="thumbnail Blog App"
                className="aspect-[713/437] rounded-t-sm border border-slate-900 object-cover object-top"
                width={713}
                height={437}
              />
            </a>
            <div className="w-3/5 px-4">
              <a href="#">
                <h3 className="text-lg font-semibold leading-6 text-slate-800">
                  inurhuda00.github.io
                </h3>
              </a>
              <p className="line-clamp-3 mb-3 text-sm text-slate-400">
                Website pribadi untuk memperkenalkan diri ke internet dan RL
              </p>
              <footer className="flex items-center justify-between pb-4">
                <span className="text-[11px] font-medium text-slate-700">
                  <span className="text-slate-400"> By </span>inurhuda00
                </span>
                <a
                  href="#"
                  className="inline-block rounded-full border-2 border-slate-700 p-1 text-right text-sm text-slate-700 dark:text-slate-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1={7} y1={17} x2={17} y2={7} />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </footer>
            </div>
          </article>
          <article className="flex items-center rounded-sm p-2 dark:bg-white">
            <a href="#" className="w-2/5">
              <Image
                src="/images/projects/frontendmentor.jpeg"
                alt="thumbnail Blog App"
                className="aspect-[713/437] rounded-t-sm border border-slate-900 object-cover object-top"
                width={713}
                height={437}
              />
            </a>
            <div className="w-3/5 px-4">
              <a href="#">
                <h3 className="text-lg font-semibold leading-6 text-slate-800">
                  Frontendmentor Mentor Challenges
                </h3>
              </a>
              <p className="line-clamp-3 mb-3 text-sm text-slate-400">
                Belajar convert design to code dengan fronendmentor.io based on
                brief dan style guide
              </p>
              <footer className="flex items-center justify-between pb-4">
                <span className="text-[11px] font-medium text-slate-700">
                  <span className="text-slate-400"> By </span>inurhuda00
                </span>
                <a
                  href="#"
                  className="inline-block rounded-full border-2 border-slate-700 p-1 text-right text-sm text-slate-700 dark:text-slate-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1={7} y1={17} x2={17} y2={7} />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </footer>
            </div>
          </article>
          <article className="flex items-center rounded-sm p-2 dark:bg-white">
            <a href="#" className="w-2/5">
              <Image
                src="/images/projects/blog-app.jpeg"
                alt="thumbnail Blog App"
                className="aspect-[713/437] rounded-t-sm border border-slate-900 object-cover object-top"
                width={713}
                height={437}
              />
            </a>
            <div className="w-3/5 px-4">
              <a href="#">
                <h3 className="text-lg font-semibold leading-6 text-slate-800">
                  Blog app
                </h3>
              </a>
              <p className="line-clamp-3 mb-3 text-sm text-slate-400">
                Website CMS dengan roles dan permission dengan editor page
              </p>
              <footer className="flex items-center justify-between pb-4">
                <span className="text-[11px] font-medium text-slate-700">
                  <span className="text-slate-400"> By </span>inurhuda00
                </span>
                <a
                  href="#"
                  className="inline-block rounded-full border-2 border-slate-700 p-1 text-right text-sm text-slate-700 dark:text-slate-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1={7} y1={17} x2={17} y2={7} />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </footer>
            </div>
          </article>
          <article className="flex items-center rounded-sm p-2 dark:bg-white">
            <a href="#" className="w-2/5">
              <Image
                src="/images/projects/mozzaik.jpeg"
                alt="thumbnail Blog App"
                className="aspect-[713/437] rounded-t-sm border border-slate-900 object-cover object-top"
                width={713}
                height={437}
              />
            </a>
            <div className="w-3/5 px-4">
              <a href="#">
                <h3 className="text-lg font-semibold leading-6 text-slate-800">
                  mozzaik.id
                </h3>
              </a>
              <p className="line-clamp-3 mb-3 text-sm text-slate-400">
                Kanal media berfokus pada seni dan budaya
              </p>
              <footer className="flex items-center justify-between pb-4">
                <span className="text-[11px] font-medium text-slate-700">
                  <span className="text-slate-400"> By </span>inurhuda00
                </span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <a
                        href="#"
                        className="inline-block rounded-full border-2 border-slate-700 p-1 text-right text-sm text-slate-700 dark:text-slate-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1={7} y1={17} x2={17} y2={7} />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Demo</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </footer>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}
