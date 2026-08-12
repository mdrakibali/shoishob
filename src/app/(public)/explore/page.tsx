"use client"
import { Filter, Search } from "lucide-react"
import { MemoryCard } from "@/components/shared/memory-card"
import { MOCK_MEMORIES } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function FilterContent() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="font-medium mb-3">সময় (দশক)</h3>
        <div className="space-y-2.5">
          {['1990s', '2000s', '2010s', '2020s'].map(decade => (
            <div key={decade} className="flex items-center space-x-2 text-sm">
              <Checkbox id={`decade-${decade}`} />
              <Label htmlFor={`decade-${decade}`} className="font-normal">{decade}</Label>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="font-medium mb-3">ধরন</h3>
        <div className="space-y-2.5">
          {['খেলা', 'শৈশবের স্মৃতি', 'একটি জায়গা'].map(type => (
            <div key={type} className="flex items-center space-x-2 text-sm">
              <Checkbox id={`type-${type}`} />
              <Label htmlFor={`type-${type}`} className="font-normal">{type}</Label>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="font-medium mb-3">জেলা</h3>
        <div className="space-y-2.5">
          {['ঢাকা', 'গাজীপুর', 'চট্টগ্রাম', 'সিলেট', 'রাজশাহী', 'বরিশাল'].map(district => (
            <div key={district} className="flex items-center space-x-2 text-sm">
              <Checkbox id={`dist-${district}`} />
              <Label htmlFor={`dist-${district}`} className="font-normal">{district}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ExplorePage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 md:mb-12">
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
          শৈশব আবিষ্কার করুন
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          আমাদের বিশাল আর্কাইভ থেকে হাজারো মানুষের শৈশবের স্মৃতি, হারিয়ে যাওয়া খেলা আর পুরনো জায়গাগুলো খুঁজে বের করুন।
        </p>
      </div>

      {/* SEARCH BAR */}
      <div className="relative mb-8 max-w-2xl">
        <div className="relative flex items-center w-full">
          <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder="লাটিম, গোল্লাছুট, ২০০২, গাজীপুর..." 
            className="pl-11 h-14 bg-background border-border text-base shadow-sm focus-visible:ring-primary"
          />
          <Button className="absolute right-1.5 h-11 bg-primary hover:bg-primary-hover text-primary-foreground">
            খুঁজুন
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* DESKTOP FILTERS */}
        <div className="hidden md:block w-64 shrink-0 sticky top-24">
          <div className="bg-surface border border-border rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif font-bold text-lg">ফিল্টার</h2>
              <Button variant="ghost" size="sm" className="h-8 text-xs text-muted-foreground hover:text-foreground">
                রিসেট
              </Button>
            </div>
            <FilterContent />
          </div>
        </div>

        {/* MOBILE FILTERS */}
        <div className="md:hidden w-full flex items-center justify-between border-b border-border pb-4">
          <p className="text-sm text-muted-foreground">৬টি স্মৃতি পাওয়া গেছে</p>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="bg-background">
                <Filter className="mr-2 h-4 w-4" />
                ফিল্টার
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px] overflow-y-auto">
              <SheetHeader className="mb-6 text-left">
                <SheetTitle className="font-serif text-2xl">ফিল্টার</SheetTitle>
              </SheetHeader>
              <FilterContent />
              <div className="mt-8">
                <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                  ফলাফল দেখুন
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* RESULTS GRID */}
        <div className="flex-1 w-full">
          <div className="hidden md:flex justify-between items-center mb-6">
            <p className="text-sm font-medium text-muted-foreground">৬টি স্মৃতি পাওয়া গেছে</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {allMemories.map(memory => (
              <MemoryCard key={memory.id} memory={memory} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="border-border">
              আরও লোড করুন
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
