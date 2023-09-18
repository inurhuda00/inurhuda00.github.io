import { Fragment } from "react"

import Link from "next/link"

import BlurImage from "@/app/components/blur-image"

import SocialList from "./components/socials-list"
import { allPosts, allProjects } from "@/.contentlayer/generated"
import common from "@/content/common"
import avatar from "@/public/avatar.png"
import { Button } from "@nextui-org/button"
import { Card, CardBody } from "@nextui-org/card"
import Balancer from "react-wrap-balancer"

export default function Home() {
  return (
    <Fragment>
      <section className="mb-12 pt-20">
        <section className="flex flex-col items-center px-2 text-center">
          <BlurImage
            src={avatar}
            className="mb-12 aspect-square h-32 w-32 rounded-full border border-foreground-50 object-cover text-large light"
            alt={"profile"}
          />
          <p className="pb-2 text-3xl font-extrabold">
            <Balancer>{common.name}</Balancer>
          </p>
          <h2 className="max-w-3xl pb-4">
            <Balancer>{common.description}</Balancer>
          </h2>
        </section>

        <SocialList />
        <section className="mb-8 px-4">
          <h3 className="mb-6 text-lg font-semibold capitalize">Projects</h3>
          <ul className="grid gap-4">
            {allProjects.slice(0, common.max).map((project) => (
              <Card
                shadow="sm"
                isHoverable
                className="group relative flex w-full items-center justify-between border-b border-default-200 py-5 dark:border-default-800"
                key={project._id}
              >
                <CardBody>
                  <Link href={`/p/${project.slugAsParams}`}>
                    <h3>{project.title}</h3>
                    <p className="max-w-lg text-sm text-default-700 dark:text-default-400">
                      {project.description}
                    </p>
                  </Link>

                  {project.from || project.until ? (
                    <>
                      <p className="-trandefault-y-1/2 absolute right-5 top-4 w-full text-right text-sm text-default-700 group-hover:hidden dark:text-default-400 md:top-1/2">
                        2022 - present
                      </p>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.href}
                        className="-trandefault-y-1/2 absolute right-5 top-4 hidden w-8 rounded-full border-2 border-default-700 p-1 text-right text-sm text-default-700 group-hover:inline-block dark:text-default-400 md:top-1/2"
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
                      className="-trandefault-y-1/2 absolute right-5 top-4 w-8 rounded-full border-2 border-default-700 p-1 text-right text-sm text-default-700 group-hover:inline-block dark:text-default-400 md:top-1/2"
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
                </CardBody>
              </Card>
            ))}
            <Button as={Link} href="/p" className="mx-auto max-w-0">
              More
            </Button>
          </ul>
        </section>
      </section>

      {allPosts.length ? (
        <section className="mb-8 px-4">
          <h3 className="mb-6 text-lg font-semibold capitalize">working on</h3>

          <div className="grid gap-4">
            {allPosts.map((post) => (
              <Card isHoverable shadow="sm" radius="md" key={post._id}>
                <CardBody>
                  <div className="relative flex flex-col gap-x-4 md:flex-row">
                    <div className="order-2 w-full p-2 md:order-1">
                      <h1 className="relative mb-2 flex-none text-lg font-medium text-foreground">
                        {post.title}
                      </h1>
                      <p className="text-sm">{post.description}</p>
                    </div>
                    {post.cover ? (
                      <div className="relative z-10 order-1 mb-2 h-48 w-full md:mb-0">
                        <BlurImage
                          alt="Shoes theme example"
                          className="absolute inset-0 z-10 h-full w-full rounded-lg border object-cover object-top"
                          width={300}
                          height={100}
                          src={post.cover}
                        />
                      </div>
                    ) : null}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>
      ) : null}
    </Fragment>
  )
}
