import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import BlurImage from "@/app/components/blur-image"
import { MDX } from "@/app/components/mdx-components"

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

export default async function ProjectPage({ params }: ProjectProps) {
  const project = await getProjectFromParams(params)

  if (!project) {
    notFound()
  }

  return (
    <article className="mb-32">
      <section className="relative mx-auto px-4 pt-16 leading-6 text-default-600 sm:px-6 lg:px-8 lg:pt-20">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 text-default-600 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col lg:pb-6">
            <h1 className="z-30 mx-0 mt-4 text-4xl font-extrabold leading-none tracking-tight text-default-900 sm:text-5xl">
              {project.name}
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
              alt={""}
            />
          </div>
        </div>
      </section>

      <section className="relative px-4">
        <div className="absolute top-52 w-full border border-default-200" />
        <div className="grid grid-cols-4 gap-10 px-0 py-10 pt-48 md:pt-24">
          <div className="prose relative col-span-4 mb-10 flex max-w-full flex-col space-y-8 bg-background px-4 py-6 dark:prose-invert sm:rounded-xl sm:border sm:border-default-200 md:col-span-3">
            <MDX code={project.body.code} />
          </div>
          <div className="sticky top-20 col-span-1 mt-48 hidden flex-col divide-y divide-default-200 self-start sm:flex">
            <div className="flex flex-col space-y-4 py-5">
              <p className="text-sm text-foreground"></p>
              {/* <Author username={project.author} /> */}
            </div>
            {/* {relatedArticles.length > 0 && (
              <div className="flex flex-col space-y-4 py-5">
                <p className="text-sm text-default-500">Read more</p>
                <ul className="flex flex-col space-y-4">
                  {relatedArticles.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col space-y-2"
                      >
                        <p className="font-semibold text-default-700 underline-offset-4 group-hover:underline">
                          {post.title}
                        </p>
                        <p className="line-clamp-2 text-sm text-default-500 underline-offset-2 group-hover:underline">
                          {post.summary}
                        </p>
                        <p className="text-xs text-default-400 underline-offset-2 group-hover:underline">
                          {formatDate(post.publishedAt)}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
          </div>
        </div>
      </section>
      <section className="mt-20 grid grid-cols-1 gap-x-6 gap-y-10 border-x-0 border-b-0 border-t border-solid border-default-200 px-4 pt-10 leading-6 text-default-900 sm:sm:mt-20 lg:lg:mt-20 lg:grid-cols-3">
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
      <section className="mb-0 mt-32 grid grid-cols-1 gap-x-6 gap-y-10 border-x-0 border-b-0 border-t border-solid border-slate-200 px-4 pt-10 leading-6 text-default-900 sm:mb-0 sm:mt-32 lg:mb-0 lg:mt-32 lg:grid-cols-3">
        <h2 className="m-0 text-2xl font-semibold leading-9 tracking-tight text-default-900">
          Tech Stack
        </h2>
        <div className="max-w-none text-base lg:col-span-2">
          <div className="mt-6 leading-7">
            <ul className="m-0 grid grid-cols-2 gap-x-8 gap-y-6 p-0">
              {project.technologies.map((tech, index) => (
                <li className="text-left" key={index}>
                  <strong className="font-normal text-default-900">
                    {tech.name}
                  </strong>{" "}
                  {tech.version}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </article>
  )
}
