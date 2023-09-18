import Link from "next/link"

import BlurImage from "../components/blur-image"
import { allProjects } from "@/.contentlayer/generated"
import { Button } from "@nextui-org/button"
import { Card, CardBody } from "@nextui-org/card"

export default async function PostPage() {
  return (
    <section>
      <h1 className="sr-only">Projects</h1>
      <article className="my-12 grid gap-6">
        {allProjects.map((project) => (
          <Card
            shadow="sm"
            isHoverable
            className="group border-b border-foreground"
            key={project._id}
          >
            <CardBody className="py-2">
              <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:gap-0">
                <div className="sm:pt-2 md:pr-6 lg:relative lg:ml-auto lg:w-64 lg:flex-none lg:pl-2 lg:pr-0">
                  <div className="flex items-center gap-2">
                    <h2 className="m-0 text-base font-semibold text-foreground">
                      {project.title}
                    </h2>
                  </div>
                  <p className="m-0 text-sm capitalize text-default-600">
                    Personal website template
                  </p>
                  <p className="mx-0 mb-0 mt-3 line-clamp-3 text-sm text-default-600">
                    {project.description}
                  </p>

                  <div className="space-x-2">
                    <Button
                      as={Link}
                      size="sm"
                      href={`/p/${project.slugAsParams}`}
                      variant="flat"
                      className="mx-auto mt-4 max-w-0"
                    >
                      Detail
                    </Button>
                    <Button
                      as={Link}
                      size="sm"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.href}
                      variant="ghost"
                      className="mx-auto mt-4 max-w-0"
                    >
                      View
                    </Button>
                  </div>
                </div>
                <div className="scroll scrollbar-hide lg:relative lg:mr-auto lg:flex lg:overflow-x-auto">
                  <div className="sticky left-0 z-10 hidden w-8 flex-none lg:block"></div>
                  <div className="lg:relative lg:flex lg:flex-none lg:items-start lg:pr-8">
                    <Link
                      href={`/p/${project.slugAsParams}`}
                      className="hidden cursor-pointer lg:absolute lg:inset-y-0 lg:-left-8 lg:right-8 lg:z-10 lg:block"
                    >
                      <span className="sr-only border-solid border-default-200">
                        View template
                      </span>
                    </Link>

                    {project.images instanceof Array
                      ? project.images.map((image, index) =>
                          index === 0 ? (
                            <BlurImage
                              src={image}
                              alt="This is a preview image"
                              width={560}
                              height={380}
                              className="block h-auto w-full max-w-full rounded-xl bg-default-100 object-cover object-top align-middle lg:w-64 lg:flex-none"
                            />
                          ) : (
                            <BlurImage
                              src={image}
                              alt="This is a preview image"
                              width={560}
                              height={380}
                              className="hidden h-auto w-full max-w-full rounded-xl bg-default-100 object-cover object-top align-middle lg:ml-8 lg:block lg:w-64 lg:flex-none"
                            />
                          )
                        )
                      : null}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </article>
    </section>
  )
}
