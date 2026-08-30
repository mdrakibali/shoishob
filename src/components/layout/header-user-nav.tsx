"use client"

import { Bell, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { HeaderUserNavProps } from "@/types"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// HeaderUserNav renders the submit CTA, notification bell, and user avatar
export function HeaderUserNav({ className }: HeaderUserNavProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Button
        asChild
        className="bg-primary text-primary-foreground hover:bg-primary-hover shadow-warm-xs h-9 rounded-lg px-3.5 text-xs font-semibold sm:h-10 sm:px-4 sm:text-sm"
      >
        <Link href="/submit" className="flex items-center gap-1.5">
          <Plus className="h-4 w-4" />
          <span>স্মৃতি যোগ করুন</span>
        </Link>
      </Button>

      <button
        type="button"
        aria-label="Notifications"
        className="text-foreground hover:bg-secondary/60 relative flex h-9 w-9 items-center justify-center rounded-full transition-colors"
      >
        <Bell className="h-4 w-4" />
        <span className="bg-accent ring-card absolute top-1.5 right-1.5 h-2 w-2 rounded-full ring-2" />
      </button>

      <button
        type="button"
        aria-label="User profile menu"
        className="ring-border hover:ring-primary relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 transition-all"
      >
        <Image
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
          alt="User Profile"
          fill
          sizes="36px"
          className="object-cover"
        />
      </button>
    </div>
  )
}

