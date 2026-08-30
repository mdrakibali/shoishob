"use client"

import { Search } from "lucide-react"
import { HeaderSearchProps } from "@/types"
import { cn } from "@/lib/utils"

// HeaderSearch provides a global search input with keyboard shortcut indicator
export function HeaderSearch({ className }: HeaderSearchProps) {
  return (
    <div className={cn("relative w-full max-w-md", className)}>
      <label htmlFor="global-search" className="sr-only">
        Search memories
      </label>
      <div className="text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
        <Search className="h-4 w-4" aria-hidden="true" />
      </div>
      <input
        id="global-search"
        type="search"
        placeholder="Search memories..."
        className="border-border bg-card/60 text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-card focus:ring-primary/20 h-10 w-full rounded-full border pr-14 pl-10 text-sm transition-all focus:outline-none focus:ring-2"
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <kbd className="border-border bg-secondary/80 text-muted-foreground rounded border px-1.5 py-0.5 font-mono text-[11px] font-medium shadow-xs">
          Ctrl K
        </kbd>
      </div>
    </div>
  )
}

