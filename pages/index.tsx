import Image from "next/image"
import Link from "next/link"
import common from "@/content/common"
import projects from "@/content/projects"

import { Layout } from "@/components/layout"

export default function Index() {
  return (
    <Layout meta={{ title: "Home" }}>
      <section className="mx-auto w-full max-w-4xl bg-white px-6 pt-16 dark:bg-slate-900">
        <section className="mb-12 dark:text-slate-100">
          <div className="md:float-right">
            <Image
              src="/avatar.webp"
              alt="Gravatar"
              className="mb-6 h-40 w-40 rounded-full border-2 border-slate-900 object-cover shadow-lg shadow-slate-800/5 ring-1 ring-slate-800/5 dark:border-slate-100 md:mb-0"
              width={50}
              height={50}
            />
          </div>
          <section>
            <h1 className="pb-2 text-5xl font-extrabold text-black dark:text-slate-100">
              {common.name}
            </h1>
            <h2 className="pb-4 text-black dark:text-slate-100">
              <div>
                <p className="max-w-2xl py-3">{common.description}</p>
              </div>
            </h2>
          </section>
          <section className="scrollbar-hide relative flex w-full snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth whitespace-nowrap py-6">
            {common.socials.map((social) => (
              <a
                className="flex items-center font-semibold"
                rel="noreferrer"
                target="_blank"
                href={social.href}
              >
                <social.icon className="h-8 w-8 pr-2" />
                <span className="text-slate-700 dark:text-slate-400">
                  {social.name}
                </span>
              </a>
            ))}
          </section>
          <section>
            <ul>
              {projects.map((project) => (
                <li className="group flex w-full items-center justify-between border-b border-slate-200 py-5 dark:border-slate-800">
                  <div>
                    <h3 className="text-lg font-medium dark:text-slate-100">
                      {project.title}
                    </h3>
                    <p className="max-w-md text-sm text-slate-700 dark:text-slate-400">
                      {project.description}
                    </p>
                  </div>
                  {project.from || project.until ? (
                    <>
                      <p className="text-right text-sm text-slate-700 group-hover:hidden dark:text-slate-400">
                        2022 - present
                      </p>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.href}
                        className="hidden rounded-full border-2 border-slate-700 p-1 text-right text-sm text-slate-700 group-hover:inline-block dark:text-slate-400"
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
                      </Link>
                    </>
                  ) : (
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.href}
                      className="rounded-full border-2 border-slate-700 p-1 text-right text-sm text-slate-700 group-hover:inline-block dark:text-slate-400"
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
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
    </Layout>
  )
}
