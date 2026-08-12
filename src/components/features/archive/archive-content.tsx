"use client"

import { useMemo, useState } from "react"
import { ArchiveItem } from "@/types"
import { ArchiveCard } from "./archive-card"
import { ViewControls, SortOption } from "@/components/shared/view-controls"

interface ArchiveContentProps {
  initialItems: ArchiveItem[]
}

export function ArchiveContent({ initialItems }: ArchiveContentProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState<SortOption>("newest")

  const sortedItems = useMemo(() => {
    return [...initialItems].sort((a, b) => {
      // Sorting based on ID for dummy data.
      // In real app, sort by actual dates/titles
      if (sortBy === "newest") {
        return a.id.localeCompare(b.id)
      } else if (sortBy === "oldest") {
        return b.id.localeCompare(a.id)
      }
      return 0
    })
  }, [initialItems, sortBy])

  return (
    <div>
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <ViewControls 
          viewMode={viewMode} 
          onViewModeChange={setViewMode}
          sortBy={sortBy}
          onSortByChange={setSortBy}
          totalItems={initialItems.length}
        />
      </div>

      <div
        className={
          viewMode === "grid"
            ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            : "flex flex-col gap-4"
        }
      >
        {sortedItems.map((item) => (
          <ArchiveCard key={item.id} item={item} viewMode={viewMode} />
        ))}
      </div>
    </div>
  )
}
