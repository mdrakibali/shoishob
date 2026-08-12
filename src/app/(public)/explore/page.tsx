"use client"
import { Filter, Search } from "lucide-react"
import { MemoryCard } from "@/components/shared/memory-card"
import { MOCK_MEMORIES } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

function FilterContent() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-3 font-medium">সময় (দশক)</h3>
        <div className="space-y-2.5">
          {["1990s", "2000s", "2010s", "2020s"].map((decade) => (
            <div key={decade} className="flex items-center space-x-2 text-sm">
              <Checkbox id={`decade-${decade}`} />
              <Label htmlFor={`decade-${decade}`} className="font-normal">
                {decade}
              </Label>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="mb-3 font-medium">ধরন</h3>
        <div className="space-y-2.5">
          {["খেলা", "শৈশবের স্মৃতি", "একটি জায়গা"].map((type) => (
            <div key={type} className="flex items-center space-x-2 text-sm">
              <Checkbox id={`type-${type}`} />
              <Label htmlFor={`type-${type}`} className="font-normal">
                {type}
              </Label>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="mb-3 font-medium">জেলা</h3>
        <div className="space-y-2.5">
          {["ঢাকা", "গাজীপুর", "চট্টগ্রাম", "সিলেট", "রাজশাহী", "বরিশাল"].map((district) => (
            <div key={district} className="flex items-center space-x-2 text-sm">
              <Checkbox id={`dist-${district}`} />
              <Label htmlFor={`dist-${district}`} className="font-normal">
                {district}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ExplorePage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 md:mb-12">
        <h1 className="text-foreground mb-4 font-serif text-3xl font-bold md:text-5xl">
          শৈশব আবিষ্কার করুন
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg">
          আমাদের বিশাল আর্কাইভ থেকে হাজারো মানুষের শৈশবের স্মৃতি, হারিয়ে যাওয়া খেলা আর পুরনো
          জায়গাগুলো খুঁজে বের করুন।
        </p>
      </div>

      {/* SEARCH BAR */}
      <div className="relative mb-8 max-w-2xl">
        <div className="relative flex w-full items-center">
          <Search className="text-muted-foreground absolute left-4 h-5 w-5" />
          <Input
            placeholder="লাটিম, গোল্লাছুট, ২০০২, গাজীপুর..."
            className="bg-background border-border focus-visible:ring-primary h-14 pl-11 text-base shadow-sm"
          />
          <Button className="bg-primary hover:bg-primary-hover text-primary-foreground absolute right-1.5 h-11">
            খুঁজুন
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-start gap-8 md:flex-row">
        {/* DESKTOP FILTERS */}
        <div className="sticky top-24 hidden w-64 shrink-0 md:block">
          <div className="bg-surface border-border rounded-xl border p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-serif text-lg font-bold">ফিল্টার</h2>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground h-8 text-xs"
              >
                রিসেট
              </Button>
            </div>
            <FilterContent />
          </div>
        </div>

        {/* MOBILE FILTERS */}
        <div className="border-border flex w-full items-center justify-between border-b pb-4 md:hidden">
          <p className="text-muted-foreground text-sm">৬টি স্মৃতি পাওয়া গেছে</p>
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
              <FilterContent />
              <div className="mt-8">
                <Button className="bg-primary hover:bg-primary-hover text-primary-foreground w-full">
                  ফলাফল দেখুন
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* RESULTS GRID */}
        <div className="w-full flex-1">
          <div className="mb-6 hidden items-center justify-between md:flex">
            <p className="text-muted-foreground text-sm font-medium">৬টি স্মৃতি পাওয়া গেছে</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {allMemories.map((memory) => (
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
