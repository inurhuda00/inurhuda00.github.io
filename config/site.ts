import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  navs: NavItem[]
}

export const config: SiteConfig = {
  name: "Ilham Nuruddin",
  description: "Personal Website built with Radix UI and Tailwind CSS.",
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
