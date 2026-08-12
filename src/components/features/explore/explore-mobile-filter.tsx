"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Filter } from "lucide-react"
import { ExploreFilters } from "@/components/features/explore/explore-filters"

export function ExploreMobileFilter() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="outline" size="sm" className="bg-background">
            <Filter className="mr-2 h-4 w-4" />
            ফিল্টার
          </Button>
        }
      />
      <SheetContent className="w-75 overflow-y-auto sm:w-100">
        <SheetHeader className="mb-6 text-left">
          <SheetTitle className="font-serif text-2xl">ফিল্টার</SheetTitle>
        </SheetHeader>
        <ExploreFilters />
        <div className="mt-8">
          <SheetClose
            render={
              <Button className="bg-primary text-primary-foreground hover:bg-primary-hover w-full">
                ফলাফল দেখুন
              </Button>
            }
          />
        </div>
      </SheetContent>
    </Sheet>
  )
}
