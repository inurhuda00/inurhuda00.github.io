import { Fragment } from "react"

import Link from "next/link"

import BlurImage from "@/app/components/shared/blur-image"

import SocialList from "../components/shared/socials-list"
import { allProjects } from "@/.contentlayer/generated"
import common from "@/content/constant"
import avatar from "@/public/avatar.png"
import { Button } from "@nextui-org/button"
import { Card, CardBody, CardFooter } from "@nextui-org/card"
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
          <ul className="grid gap-6 sm:grid-cols-2">
            {allProjects.slice(0, common.max).map((project) => (
              <Card
                shadow="sm"
                isHoverable
                className="group relative flex w-full items-center justify-start border-b border-default-200 dark:border-default-800"
                key={project._id}
              >
                <CardBody className="flex-none">
                  <Link href={`/p/${project.slugAsParams}`}>
                    <BlurImage
                      src={project.image}
                      alt="This is a preview image"
                      width={560}
                      height={380}
                      className="$ block h-auto w-full max-w-full rounded-xl bg-default-100 align-middle lg:flex-none"
                    />
                  </Link>
                </CardBody>

                <CardFooter className="justify-between gap-x-6 px-6 pb-6">
                  <Link href={`/p/${project.slugAsParams}`}>
                    <h3 className="mb-2 text-lg font-medium">{project.name}</h3>
                    <p className="max-w-lg text-sm text-default-700 dark:text-default-400">
                      {project.description}
                    </p>
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.live_url}
                    className="-trandefault-y-1/2 right-5 top-4 w-8 rounded-full border-2 border-default-700 p-1 text-right text-sm text-default-700 group-hover:inline-block dark:text-default-400 md:top-1/2"
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
                </CardFooter>
              </Card>
            ))}
          </ul>
        </section>
        <section className="flex flex-col items-center px-2 text-center">
          <Button as={Link} href="/p" className="mx-auto w-full max-w-fit">
            More
          </Button>
        </section>
      </section>
    </Fragment>
  )
}
