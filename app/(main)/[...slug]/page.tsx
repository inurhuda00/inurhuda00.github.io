import { Metadata } from "next"
import { notFound } from "next/navigation"

import { MDX } from "@/app/components/shared/mdx-components"

import { allPages } from "contentlayer/generated"

interface PageProps {
  params: {
    slug: string[]
  }
}

async function getPageFromParams(params: PageProps["params"]) {
  const slug = params?.slug?.join("/")
  const page = allPages.find((page) => page.slugAsParams === slug)

  if (!page) {
    null
  }

  return page
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params)

  if (!page) {
    return {}
  }

  return {
    title: page.title,
    description: page.description,
  }
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }))
}

export default async function Page({ params }: PageProps) {
  const page = await getPageFromParams(params)

  if (!page) {
    notFound()
  }

  return (
    <article className="prose max-w-full px-4 py-6 dark:prose-invert">
      <h1 className="mt-12">{page.title}</h1>
      {page.description && <p className="text-xl">{page.description}</p>}
      <hr />
      <MDX code={page.body.code} />
    </article>
  )
}
