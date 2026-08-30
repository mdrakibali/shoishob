"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

// SidebarThemeSwitch provides a segmented pill toggle for light and dark themes
export function SidebarThemeSwitch({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const currentTheme = theme === "system" ? resolvedTheme : theme
  const isDark = currentTheme === "dark"

  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-xl px-3.5 py-2 text-sm",
        className
      )}
    >
      <div className="text-muted-foreground flex items-center gap-2.5 font-medium">
        <Moon className="h-4.5 w-4.5" />
        <span>Theme</span>
      </div>

      <div className="bg-secondary/70 border-border flex items-center rounded-full border p-0.5">
        <button
          type="button"
          onClick={() => setTheme("light")}
          aria-label="Switch to light theme"
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-full transition-all",
            mounted && !isDark
              ? "bg-card text-primary shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Sun className="h-3.5 w-3.5" />
        </button>

        <button
          type="button"
          onClick={() => setTheme("dark")}
          aria-label="Switch to dark theme"
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-full transition-all",
            mounted && isDark
              ? "bg-card text-primary shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Moon className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
