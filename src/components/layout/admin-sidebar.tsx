"use client"
import {
  History,
  Image as ImageIcon,
  Inbox,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { title: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { title: "Submissions", href: "/admin/submissions", icon: Inbox },
  { title: "Memories", href: "/admin/memories", icon: History },
  { title: "Comments", href: "/admin/comments", icon: MessageSquare },
  { title: "Media", href: "/admin/media", icon: ImageIcon },
  { title: "Users", href: "/admin/users", icon: Users },
  { title: "Settings", href: "/admin/settings", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="border-border bg-card sticky top-0 flex h-screen w-64 flex-col border-r">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-primary font-serif text-2xl font-bold tracking-tight">
            Shoishob
          </span>
          <span className="text-muted-foreground bg-secondary rounded px-2 py-1 font-sans text-xs font-semibold tracking-wider uppercase">
            Admin
          </span>
        </Link>
      </div>

      <nav className="flex-1 space-y-2 overflow-y-auto px-4">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (pathname?.startsWith(`${item.href}/`) && item.href !== "/admin")

          return (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-secondary-foreground hover:bg-secondary/50 hover:text-foreground"
              )}
            >
              <item.icon className={cn("h-4 w-4", isActive ? "opacity-100" : "opacity-70")} />
              {item.title}
            </Link>
          )
        })}
      </nav>

      <div className="border-border border-t p-4">
        <Button
          variant="ghost"
          className="text-secondary-foreground hover:bg-secondary/50 hover:text-destructive w-full justify-start"
        >
          <LogOut className="mr-2 h-4 w-4 opacity-70" />
          Sign out
        </Button>
      </div>
    </aside>
  )
}
