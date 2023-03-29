import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  image: string
  website: string
  resume: string
  navs: NavItem[]
}

export const config: SiteConfig = {
  name: "Ilham Nuruddin",
  description: "Personal Website built with Radix UI and Tailwind CSS.",
  image: "/ogimage.webp",
  website: "inurhuda00.github.io",
  resume:
    "https://drive.google.com/file/d/1VWi0p6LTHWA1Zh_dMyBdjjfFj0z681z8/view?usp=share_link",
  navs: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Project",
      href: "/project",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
}
