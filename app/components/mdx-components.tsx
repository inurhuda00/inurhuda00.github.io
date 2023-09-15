import BlurImage from "./blur-image"
import SocialList from "./socials-list"
import { useMDXComponent } from "next-contentlayer/hooks"

const components = {
  Image: BlurImage,
  SocialList,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
