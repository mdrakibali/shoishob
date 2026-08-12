"use client"

import { useState, useMemo } from "react"
import { type GameData } from "@/types"
import { GameCard } from "@/components/shared/game-card"
import { ViewControls, ViewMode, SortOption } from "@/components/shared/view-controls"
import { Button } from "@/components/ui/button"

export function GamesContent({ games }: { games: GameData[] }) {
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [sortBy, setSortBy] = useState<SortOption>("newest")

  const sortedGames = useMemo(() => {
    const sorted = [...games]
    if (sortBy === "newest") {
      // Mock since GameData doesn't have a year
      sorted.reverse()
    } else if (sortBy === "oldest") {
      // do nothing
    } else if (sortBy === "popular") {
      // Mock popularity
      sorted.sort((a, b) => b.title.localeCompare(a.title))
    }
    return sorted
  }, [games, sortBy])

  return (
    <div className="w-full flex-1">
      <ViewControls
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        sortBy={sortBy}
        onSortByChange={setSortBy}
        totalItems={sortedGames.length}
      />

      {sortedGames.length > 0 ? (
        <div 
          className={
            viewMode === "grid" 
              ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3" 
              : "mx-auto flex max-w-4xl flex-col gap-6"
          }
        >
          {sortedGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <h3 className="text-foreground mb-2 text-xl font-medium">কোনো খেলা পাওয়া যায়নি</h3>
          <p className="text-muted-foreground">
            আপনার খোঁজার সাথে মিলে যায় এমন কোনো খেলা নেই। ফিল্টার পরিবর্তন করে দেখতে পারেন।
          </p>
        </div>
      )}

      {sortedGames.length > 0 && (
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-border">
            আরও লোড করুন
          </Button>
        </div>
      )}
    </div>
  )
}
