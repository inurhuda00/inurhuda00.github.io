"use client"

import React from "react"

import { usePathname } from "next/navigation"

import { ModeToggle } from "./mode-toggle"
import common from "@/content/constant"
import {
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react"

export default function Header() {
  const current = usePathname()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <Navbar>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {common.navs.map((item, index) => (
          <NavbarItem isActive={current === item.href} key={index}>
            <Link
              href={item.href}
              color="foreground"
              showAnchorIcon={item.href.includes("https")}
              aria-current="page"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <ModeToggle />
      </NavbarContent>

      <NavbarMenu className="pt-6">
        {common.navs.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-3xl font-medium"
              color={
                index === 2
                  ? "warning"
                  : index === common.navs.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
