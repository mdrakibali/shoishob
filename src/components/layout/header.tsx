"use client"
import { Menu, Search, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ThemeToggle } from "./theme-toggle"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/explore" },
  { name: "Games", href: "/games" },
  { name: "About", href: "/about" },
]

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <header className="border-border bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-secondary/50 hidden lg:flex"
              >
                Login
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-primary mb-2 text-center font-serif text-2xl">
                  Shoishob
                </DialogTitle>
                <DialogDescription className="text-center">
                  আপনার অ্যাকাউন্টে লগইন করুন অথবা নতুন অ্যাকাউন্ট তৈরি করুন।
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Button variant="outline" className="h-12 w-full">
                  Continue with Google
                </Button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="border-border w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background text-muted-foreground px-2">
                      Or continue with email
                    </span>
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm leading-none font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
              <Button
                type="button"
                className="bg-primary text-primary-foreground hover:bg-primary-hover w-full"
              >
                লগইন
              </Button>
              <p className="text-muted-foreground mt-4 text-center text-sm">
                Only mock UI for now.
              </p>
            </DialogContent>
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

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-secondary-foreground hover:bg-secondary/50"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border">
              <SheetTitle className="text-primary font-serif text-xl">Shoishob</SheetTitle>
              <div className="mt-8 flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-medium ${
                      pathname === item.href ? "text-primary" : "text-secondary-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="border-border mt-4 flex flex-col gap-4 border-t pt-4">
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary-hover w-full justify-center"
                  >
                    <Link href="/submit" onClick={() => setIsMobileMenuOpen(false)}>
                      স্মৃতি যোগ করুন
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-border w-full justify-center">
                    <User className="mr-2 h-4 w-4" />
                    Login
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
