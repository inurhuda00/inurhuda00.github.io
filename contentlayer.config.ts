import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },

  // @ts-ignore
  computedFields,
}))

const Tech = defineNestedType(() => ({
  name: "Tech",
  fields: {
    name: {
      type: "string",
    },
    logo: {
      type: "string",
    },
    version: {
      type: "string",
    },
  },
}))

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    about: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
    },
    live_url: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
    },
    description: {
      type: "string",
    },
    created_at: {
      type: "string",
    },
    technologies: {
      type: "list",
      of: Tech,
    },
    images: {
      type: "list",
      of: { type: "string" },
    },
  },
  // @ts-ignore
  computedFields,
}))

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Page, Project],
})
