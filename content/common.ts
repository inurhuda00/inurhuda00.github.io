import { facebook } from "@/components/icon/facebook"
import { github } from "@/components/icon/github"
import { instagram } from "@/components/icon/instagram"
import { linkedin } from "@/components/icon/linkedin"

export default {
  name: "hi!, i'm inurhuda00",
  description:
    "Hii, I'm a fullstack web developer who passionate about developing an awesome web app.I would like to learn new things about the latest technology to create websites",
  image: "/ogimage.webp",
  resume: "https://www.linkedin.com/in/inurhuda00",
  max: 4,
  socials: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/inurhuda00",
      icon: linkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/inurhuda00",
      icon: github,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/inurhuda00",
      icon: facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/nurhudai_",
      icon: instagram,
    },
  ],
  navs: [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/p" },
    { name: "Blog", href: "https://ruang.work" },
    { name: "About", href: "/about" },
  ],
}
