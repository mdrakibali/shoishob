import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-serif text-3xl font-bold tracking-tight text-primary">
                Shoishob
              </span>
            </Link>
            <p className="font-serif text-lg text-muted-foreground max-w-xs">
              "যা আজ স্মৃতি, তা কাল ইতিহাস"
            </p>
            <p className="mt-4 text-sm text-secondary-foreground max-w-sm">
              বাংলাদেশের বিভিন্ন প্রজন্মের খেলা, গল্প, জায়গা আর ছোট ছোট স্মৃতি এক জায়গায় সংরক্ষণ করার ডিজিটাল মিউজিয়াম।
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Discover
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/explore" className="text-sm text-secondary-foreground hover:text-primary transition-colors">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-sm text-secondary-foreground hover:text-primary transition-colors">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-sm text-secondary-foreground hover:text-primary transition-colors">
                  Memories
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Shoishob
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-secondary-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-secondary-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-secondary-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Shoishob Archive. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-xs text-muted-foreground font-serif">
              Built for the next generation
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
