"use client"

import Link from "next/link"
import { PawPrint } from "lucide-react"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <PawPrint className="h-7 w-7 text-[#4F00FF]" />
          <span className="text-xl font-extrabold text-foreground tracking-tight">Ratio</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="#pricing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Pricing
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            About
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-[#4F00FF] px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-[#4000cc] transition-colors"
          >
            Download Ratio
          </Link>
        </div>
      </div>
    </nav>
  )
}
