import { ExploreFilters } from "@/components/features/explore/explore-filters"
import { ExploreMobileFilter } from "@/components/features/explore/explore-mobile-filter"
import { ExploreSearch } from "@/components/features/explore/explore-search"
import { MemoryCard } from "@/components/shared/memory-card"
import { Button } from "@/components/ui/button"
import { MOCK_MEMORIES } from "@/lib/mock-data"

export default async function ExplorePage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParams = await props.searchParams
  const query = searchParams?.q as string | undefined

  // Normalize array params
  const getArrayParam = (param: string | string[] | undefined) => {
    if (!param) return []
    return Array.isArray(param) ? param : [param]
  }

  const decades = getArrayParam(searchParams?.decade)
  const types = getArrayParam(searchParams?.type)
  const districts = getArrayParam(searchParams?.district)

  // Filter memories based on URL parameters
  const filteredMemories = MOCK_MEMORIES.filter((memory) => {
    // Search query
    if (query && !memory.title.includes(query) && !memory.excerpt.includes(query)) {
      return false
    }

    // Decade filter (mock implementation, mapping year to decade roughly if possible)
    if (decades.length > 0) {
      const year = parseInt(memory.year)
      const isMatch = decades.some((decade) => {
        if (decade === "1990s" && year >= 1990 && year < 2000) return true
        if (decade === "2000s" && year >= 2000 && year < 2010) return true
        if (decade === "2010s" && year >= 2010 && year < 2020) return true
        return false
      })
      // If we couldn't parse the year properly, or just for mock purposes, allow it to pass if no strict match logic
      if (!isMatch && !isNaN(year)) return false
    }

    // Type filter
    if (types.length > 0 && !types.includes(memory.type)) {
      return false
    }

    // District filter
    if (districts.length > 0 && !districts.includes(memory.district)) {
      return false
    }

    return true
  })

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
        <ExploreSearch />
      </div>

      <div className="flex flex-col items-start gap-8 md:flex-row">
        {/* DESKTOP FILTERS */}
        <div className="sticky top-24 hidden w-64 shrink-0 md:block">
          <div className="bg-surface border-border rounded-xl border p-5 shadow-sm">
            <ExploreFilters />
          </div>
        </div>

        {/* MOBILE FILTERS */}
        <div className="border-border flex w-full items-center justify-between border-b pb-4 md:hidden">
          <p className="text-muted-foreground text-sm">
            {filteredMemories.length}টি স্মৃতি পাওয়া গেছে
          </p>
          <ExploreMobileFilter />
        </div>

        {/* RESULTS GRID */}
        <div className="w-full flex-1">
          <div className="mb-6 hidden items-center justify-between md:flex">
            <p className="text-muted-foreground text-sm font-medium">
              {filteredMemories.length}টি স্মৃতি পাওয়া গেছে
            </p>
          </div>

          {filteredMemories.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {filteredMemories.map((memory) => (
                <MemoryCard key={memory.id} memory={memory} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <h3 className="text-foreground mb-2 text-xl font-medium">কোনো স্মৃতি পাওয়া যায়নি</h3>
              <p className="text-muted-foreground">
                আপনার খোঁজার সাথে মিলে যায় এমন কোনো স্মৃতি নেই। ফিল্টার পরিবর্তন করে দেখতে পারেন।
              </p>
            </div>
          )}

          {filteredMemories.length > 0 && (
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" className="border-border">
                আরও লোড করুন
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
