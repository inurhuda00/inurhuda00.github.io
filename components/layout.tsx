import { Header } from "@/components/header"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
