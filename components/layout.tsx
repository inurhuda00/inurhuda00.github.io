import { Header } from "@/components/header"
import Meta from "./meta"

interface LayoutProps {
  children: React.ReactNode
  meta?: {
    title?: string
    description?: string
    image?: string
  }
}

export function Layout({ children, meta }: LayoutProps) {
  return (
    <>
      <Meta {...meta} />
      <Header />
      <main>{children}</main>
    </>
  )
}
