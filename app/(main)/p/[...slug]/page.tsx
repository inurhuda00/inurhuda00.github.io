import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import BlurImage from "@/app/components/shared/blur-image"
import { MDX } from "@/app/components/shared/mdx-components"

import { Button } from "@nextui-org/button"
import { LinkIcon } from "@nextui-org/link"
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

  const { name, description, image, slugAsParams } = project

  return {
    title: name,
    description,
    openGraph: {
      title: name,
      description,
      type: "article",
      url: `http://localhost:3000/p/${slugAsParams}`,
      images: [
        {
          url: `http://localhost:3000${image}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: name,
      description,
      images: [`http://localhost:3000${image}`],
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

export default async function Page({ params }: ProjectProps) {
  const project = await getProjectFromParams(params)

  if (!project) {
    notFound()
  }

  return (
    <article className="mb-32 mt-6">
      <section className="relative mx-auto px-4 pt-16 leading-6 text-default-600 sm:px-6 lg:px-8 lg:pt-20">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 text-default-600 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col lg:pb-6">
            <h1 className="z-30 mx-0 mt-4 text-4xl font-extrabold leading-none tracking-tight text-default-900 sm:text-5xl">
              <span className="bg-default-50">{project.name}</span>
            </h1>
            <div className="order-first flex items-center gap-2">
              <p className="leading-7 text-default-500">{project.about}</p>
            </div>
            <p className="mx-0 mt-6 text-base leading-7 text-default-700">
              {project.description}
            </p>
            <div className="mt-10 flex gap-4">
              <Button
                as={Link}
                href={project.live_url}
                startContent={<LinkIcon />}
              >
                View
              </Button>
            </div>
          </div>
          <div className="relative lg:col-span-2">
            <BlurImage
              src={project.image}
              width={1600}
              height={1280}
              className="object-image relative z-20 -mb-36 block h-auto rounded-xl border bg-default-200 object-cover object-top align-middle sm:-mb-14 lg:-mb-7 xl:-mb-14"
              alt={project.name}
            />
          </div>
        </div>
      </section>
      ˝
      {project.technologies.length ? (
        <section className="default-900 mx-12 my-12 mt-36 sm:mt-14 lg:mt-7 xl:mt-14">
          <h2 className="mb-6 text-2xl font-semibold leading-9 tracking-tight text-default-900">
            Tech Stack
          </h2>
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
            {project.technologies.map((tech, index) => {
              return (
                <div className="bg-default p-8 sm:p-10" key={index}>
                  <img
                    className="max-h-12 w-full object-contain"
                    src={`/stack/${tech.logo}`}
                    alt={tech.name}
                    width={158}
                    height={48}
                  />
                </div>
              )
            })}
          </div>
        </section>
      ) : null}
      <section className="relative overflow-hidden px-4">
        <div className="absolute top-1/4 w-full border-t border-solid border-default-200" />
        <div className="prose relative col-span-4 mx-auto mb-10 flex max-w-3xl flex-col space-y-8 rounded-xl border border-default-200 bg-background px-4 py-6 dark:prose-invert md:col-span-3 md:p-6">
          <MDX code={project.body.code} />
        </div>
      </section>
      <section className="grid grid-cols-1 gap-x-6 gap-y-10 border-t border-solid border-default-200 px-4 pt-10 leading-6 text-default-900 lg:grid-cols-3">
        <h2 className="text-2xl font-semibold leading-9 tracking-tight text-default-900">
          Screenshots
        </h2>
        <div className="grid grid-cols-1 gap-8 text-default-900 sm:grid-cols-2 lg:col-span-2">
          {project.images.map((image, index) => (
            <BlurImage
              key={index}
              src={image}
              width={560}
              height={380}
              alt="This is a detail image"
              className="block h-auto max-w-full rounded-lg bg-default-200 align-middle"
            />
          ))}
        </div>
      </section>
    </article>
  )
}
