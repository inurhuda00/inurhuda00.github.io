import Link from "next/link"
import common from "@/content/common"

import { cn } from "@/lib/utils"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"

export default function About() {
  return (
    <Layout meta={{ title: "About", description: "Tentang" }}>
      <section className="mx-auto w-full max-w-4xl px-6 pt-16">
        <section className="mb-12 dark:text-slate-100">
          <Link
            href={common.resume}
            rel="noreferrer"
            target="_blank"
            className={cn(buttonVariants({ variant: "subtle" }))}
          >
            Download CV
          </Link>
          <div className="mt-4">
            <h3 className="max-w-md">
              Tanya apapun tentang programing, blockchain and crypto. apapun
              terkait dunia tech. lets discuss and connect on :
            </h3>
            <div className="grid gap-2 pt-4">
              {common.socials.map((social) => {
                return (
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
                )
              })}
            </div>
            <p className="pt-4"> See you on the other side 🎉.</p>
          </div>
        </section>
      </section>
    </Layout>
  )
}
