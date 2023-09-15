"use client"

import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"
import { Provider as BalancerProvider } from "react-wrap-balancer"

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextUIProvider>
      <BalancerProvider>
        <ThemeProvider {...props}>{children}</ThemeProvider>
      </BalancerProvider>
    </NextUIProvider>
  )
}
