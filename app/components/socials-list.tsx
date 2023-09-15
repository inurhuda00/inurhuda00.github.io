import common from "@/content/common"
import { Button } from "@nextui-org/button"

export default function SocialList() {
  return (
    <section className="relative mb-8 inline-flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth whitespace-nowrap py-6 scrollbar-hide md:justify-center">
      <div className="shrink-0 snap-start scroll-mx-6" />
      {common.socials.map((social, i) => (
        <Button
          key={i}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 snap-start scroll-mx-6"
          startContent={<social.icon className="h-8 w-8 pr-2" />}
        >
          <span>{social.name}</span>
        </Button>
      ))}
    </section>
  )
}
