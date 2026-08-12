import { useState } from "react"
import Link from "next/link"
import { Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import { MobileMenuProps } from "@/types"

export function MobileMenu({ navigation }: MobileMenuProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="text-secondary-foreground hover:bg-secondary/50"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        }
      />
      <SheetContent side="right" className="bg-background border-border">
        <SheetTitle className="text-primary font-serif text-xl">Shoishob</SheetTitle>
        <div className="mt-8 flex flex-col gap-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
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
              <Link href="/submit" onClick={() => setIsOpen(false)}>
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
  )
}
