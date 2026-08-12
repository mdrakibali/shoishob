"use client"
import { Search } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { LoginDialog } from "@/components/layout/login-dialog"
import { MobileMenu } from "@/components/layout/mobile-menu"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/explore" },
  { name: "Games", href: "/games" },
  { name: "About", href: "/about" },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="border-border bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-primary font-serif text-2xl font-bold tracking-tight">
              Shoishob
            </span>
            <span className="text-muted-foreground hidden font-serif text-lg font-medium sm:inline-block">
              শৈশব
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`hover:text-primary text-sm font-medium transition-colors ${
                pathname === item.href ? "text-primary" : "text-secondary-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Button
            variant="ghost"
            size="icon"
            className="text-secondary-foreground hover:bg-secondary/50"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <ThemeToggle />

          <Dialog>
            <DialogTrigger
              render={
                <Button
                  variant="outline"
                  className="border-border text-foreground hover:bg-secondary/50 hidden lg:flex"
                >
                  Login
                </Button>
              }
            />
            <LoginDialog />
          </Dialog>

          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary-hover">
            <Link href="/submit">স্মৃতি যোগ করুন</Link>
          </Button>
        </div>

        {/* Mobile Menu & Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-secondary-foreground hover:bg-secondary/50"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <ThemeToggle />

          <MobileMenu navigation={navigation} />
        </div>
      </div>
    </header>
  )
}
