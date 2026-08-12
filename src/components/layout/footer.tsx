import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-border bg-background border-t">
      <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <span className="text-primary font-serif text-3xl font-bold tracking-tight">
                Shoishob
              </span>
            </Link>
            <p className="text-muted-foreground max-w-xs font-serif text-lg">
              "যা আজ স্মৃতি, তা কাল ইতিহাস"
            </p>
            <p className="text-secondary-foreground mt-4 max-w-sm text-sm">
              বাংলাদেশের বিভিন্ন প্রজন্মের খেলা, গল্প, জায়গা আর ছোট ছোট স্মৃতি এক জায়গায় সংরক্ষণ
              করার ডিজিটাল মিউজিয়াম।
            </p>
          </div>

          <div>
            <h3 className="text-foreground mb-4 text-sm font-semibold tracking-wider uppercase">
              Discover
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/explore"
                  className="text-secondary-foreground hover:text-primary text-sm transition-colors"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  className="text-secondary-foreground hover:text-primary text-sm transition-colors"
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  href="/explore"
                  className="text-secondary-foreground hover:text-primary text-sm transition-colors"
                >
                  Memories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground mb-4 text-sm font-semibold tracking-wider uppercase">
              Shoishob
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-secondary-foreground hover:text-primary text-sm transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-secondary-foreground hover:text-primary text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-secondary-foreground hover:text-primary text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border mt-12 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Shoishob Archive. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-muted-foreground font-serif text-xs">
              Built for the next generation
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
