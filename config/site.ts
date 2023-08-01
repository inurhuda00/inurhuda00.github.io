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
  name: "Ilham Nuruddin Al Huda",
  description: "Personal Website built with Radix UI and Tailwind CSS.",
  image: "/ogimage.webp",
  website: "inurhuda00.github.io",
  resume: "https://www.linkedin.com/in/inurhuda00",
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
