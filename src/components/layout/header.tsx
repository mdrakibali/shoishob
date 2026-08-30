"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { BrandLogo } from "@/components/shared/icons/brand-logo"
import { HeaderSearch } from "@/components/layout/header-search"
import { HeaderUserNav } from "@/components/layout/header-user-nav"

// Header renders the top social navigation bar matching the Facebook-style Shoishob layout
export function Header() {
  return (
    <header className="border-border bg-background/95 sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Left: Brand Logo & Sidebar Toggle */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5">
            <BrandLogo className="h-7 w-7 text-primary" />
            <span className="text-foreground text-xl font-bold tracking-tight">
              Shoishob
            </span>
          </Link>

          <button
            type="button"
            aria-label="Toggle Navigation Sidebar"
            className="text-muted-foreground hover:bg-secondary/60 hover:text-foreground rounded-lg p-1.5 transition-colors"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Center: Global Search Bar */}
        <div className="hidden flex-1 justify-center md:flex">
          <HeaderSearch />
        </div>

        {/* Right: Actions (Submit CTA, Notification, Avatar) */}
        <div className="flex items-center gap-2">
          <HeaderUserNav />
        </div>
      </div>
    </header>
  )
}
