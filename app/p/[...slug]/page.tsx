import { Metadata } from "next"
import { notFound } from "next/navigation"

import { Mdx } from "@/app/components/mdx-components"

import { allProjects } from "contentlayer/generated"

interface ProjectProps {
  params: {
    slug: string[]
  }
}

async function getProjectFromParams(params: ProjectProps["params"]) {
  const slug = params?.slug?.join("/")
  const project = allProjects.find((project) => project.slugAsParams === slug)

  if (!project) {
    null
  }

  return project
}

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const project = await getProjectFromParams(params)

  if (!project) {
    return {}
  }

  const { title, description, cover, slugAsParams } = project

  const ogImage = cover
    ? `http://localhost:3000${cover}`
    : `http://localhost:3000/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `http://localhost:3000/p/${slugAsParams}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

export async function generateStaticParams(): Promise<
  ProjectProps["params"][]
> {
  return allProjects.map((project) => ({
    slug: project.slugAsParams.split("/"),
  }))
}

export default async function ProjectPage({ params }: ProjectProps) {
  const project = await getProjectFromParams(params)

  if (!project) {
    notFound()
  }

  return (
    <article className="prose max-w-full px-4 py-6 dark:prose-invert">
      <h1 className="mb-2 mt-12">{project.title}</h1>
      {project.description && (
        <p className="mt-0 text-xl text-slate-700 dark:text-slate-200">
          {project.description}
        </p>
      )}
      <hr className="my-4" />
      <Mdx code={project.body.code} />
    </article>
  )
}
