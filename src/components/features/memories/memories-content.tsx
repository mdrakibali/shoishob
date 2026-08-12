"use client"
import { MemoryCard } from "@/components/shared/memory-card"
import { SortOption, ViewControls, ViewMode } from "@/components/shared/view-controls"
import { Button } from "@/components/ui/button"
import { type MemoryData } from "@/types"
import { useMemo, useState } from "react"

export function MemoriesContent({ memories }: { memories: MemoryData[] }) {
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [sortBy, setSortBy] = useState<SortOption>("newest")

  const sortedMemories = useMemo(() => {
    const sorted = [...memories]
    if (sortBy === "newest") {
      sorted.sort((a, b) => parseInt(b.year) - parseInt(a.year))
    } else if (sortBy === "oldest") {
      sorted.sort((a, b) => parseInt(a.year) - parseInt(b.year))
    } else if (sortBy === "popular") {
      // Mock popularity
      sorted.reverse()
    }
    return sorted
  }, [memories, sortBy])

  return (
    <div className="w-full flex-1">
      <ViewControls
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        sortBy={sortBy}
        onSortByChange={setSortBy}
        totalItems={sortedMemories.length}
      />

      {sortedMemories.length > 0 ? (
        <div 
          className={
            viewMode === "grid" 
              ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3" 
              : "mx-auto flex max-w-4xl flex-col gap-6"
          }
        >
          {sortedMemories.map((memory) => (
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

      {sortedMemories.length > 0 && (
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-border">
            আরও লোড করুন
          </Button>
        </div>
      )}
    </div>
  )
}
