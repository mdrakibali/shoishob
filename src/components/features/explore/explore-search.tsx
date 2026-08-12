"use client"
import { useState } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function ExploreSearch() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const [query, setQuery] = useState(searchParams.get("q") || "")

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    
    const params = new URLSearchParams(searchParams.toString())
    if (query.trim()) {
      params.set("q", query.trim())
    } else {
      params.delete("q")
    }
    
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSearch} className="relative flex w-full items-center">
      <Search className="text-muted-foreground absolute left-4 h-5 w-5" />
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="লাটিম, গোল্লাছুট, ২০০২, গাজীপুর..."
        className="bg-background border-border focus-visible:ring-primary h-14 pl-11 text-base shadow-sm"
      />
      <Button 
        type="submit" 
        className="bg-primary hover:bg-primary-hover text-primary-foreground absolute right-1.5 h-11"
      >
        খুঁজুন
      </Button>
    </form>
  )
}
