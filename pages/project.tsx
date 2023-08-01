import Image from "next/image"
import Link from "next/link"
import projects from "@/content/projects.json"

import { Layout } from "@/components/layout"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const LiveViewButton = ({ href = "#" }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <a
          href={href}
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
)

export default function Projects() {
  return (
    <Layout meta={{ title: "Projects", description: "Lates Projects" }}>
      <section className="mx-auto mb-6 w-full max-w-4xl px-6 pt-16">
        <h2 className="mb-6 text-lg font-medium uppercase tracking-wide text-slate-500 dark:text-slate-200">
          Latest Projects
        </h2>
        <div className="mb-12 grid gap-4">
          {projects.map((project, i) => (
            <article
              className="flex flex-col items-center rounded-sm p-2 dark:bg-white sm:flex-row sm:items-start"
              key={i}
            >
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={project.href}
                className="w-full sm:w-2/5"
              >
                <Image
                  src={`/images/projects/${project.cover}`}
                  alt={`thumbnail of ${project.title}`}
                  className="aspect-[713/437] rounded-t-sm border border-slate-900 object-cover object-top"
                  loading="eager"
                  width={713}
                  height={437}
                />
              </Link>
              <div className="mt-4 w-full px-4 sm:w-3/5">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.href}
                  className="w-full sm:w-2/5"
                >
                  <h3 className="text-lg font-semibold leading-6 text-slate-800">
                    {project.title}
                  </h3>
                </Link>
                <p className="mb-3 line-clamp-3 text-sm text-slate-400">
                  {project.description}
                </p>
                <footer className="flex items-center justify-between pb-4">
                  <span className="text-[11px] text-slate-400">
                    by{" "}
                    <Link href="/" className="font-medium text-slate-700">
                      inurhuda00
                    </Link>
                  </span>
                  <LiveViewButton />
                </footer>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
