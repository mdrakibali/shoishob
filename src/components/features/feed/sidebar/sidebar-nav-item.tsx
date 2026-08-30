"use client"

import {
  Bookmark,
  BookOpen,
  Clock,
  Compass,
  FolderArchive,
  Gamepad2,
  Home,
  Info,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SidebarNavItemProps } from "@/types"
import { cn } from "@/lib/utils"

function getSidebarIcon(iconName: string) {
  switch (iconName) {
    case "home":
      return <Home className="h-4.5 w-4.5" />
    case "explore":
      return <Compass className="h-4.5 w-4.5" />
    case "games":
      return <Gamepad2 className="h-4.5 w-4.5" />
    case "memories":
      return <BookOpen className="h-4.5 w-4.5" />
    case "saved":
      return <Bookmark className="h-4.5 w-4.5" />
    case "my-contributions":
      return <FolderArchive className="h-4.5 w-4.5" />
    case "clock":
      return <Clock className="h-4.5 w-4.5" />
    case "about":
      return <Info className="h-4.5 w-4.5" />
    default:
      return <Clock className="h-4.5 w-4.5" />
  }
}

// SidebarNavItem renders a single navigation link with active state styling
export function SidebarNavItem({
  label,
  href,
  iconName,
  isActive: explicitActive,
  isExact = false,
}: SidebarNavItemProps) {
  const pathname = usePathname()
  const active =
    explicitActive !== undefined
      ? explicitActive
      : isExact
        ? pathname === href
        : pathname === href || (href !== "/" && pathname.startsWith(href))

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3.5 rounded-xl px-3.5 py-2.5 text-sm transition-colors",
        active
          ? "bg-secondary/70 text-primary font-semibold shadow-xs"
          : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground font-medium"
      )}
    >
      <span className={cn(active ? "text-primary" : "text-muted-foreground")}>
        {getSidebarIcon(iconName)}
      </span>
      <span>{label}</span>
    </Link>
  )
}

