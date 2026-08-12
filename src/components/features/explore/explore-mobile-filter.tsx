"use client"

import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ExploreFilters } from "./explore-filters"

export function ExploreMobileFilter() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="bg-background">
          <Filter className="mr-2 h-4 w-4" />
          ফিল্টার
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] overflow-y-auto sm:w-[400px]">
        <SheetHeader className="mb-6 text-left">
          <SheetTitle className="font-serif text-2xl">ফিল্টার</SheetTitle>
        </SheetHeader>
        <ExploreFilters />
        <div className="mt-8">
          <Button className="bg-primary text-primary-foreground hover:bg-primary-hover w-full">
            ফলাফল দেখুন
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
