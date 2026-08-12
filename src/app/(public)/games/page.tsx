import { GamesFilter } from "@/components/features/games/games-filter"
import { GamesContent } from "@/components/features/games/games-content"
import { MOCK_GAMES } from "@/lib/mock-data"

export default async function GamesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await searchParams
  const filteredGames = MOCK_GAMES
  if (resolvedParams.players) { 
    // In a real app, we'd properly match these
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-foreground mb-4 text-3xl font-bold md:text-5xl">
          হারিয়ে যাওয়া খেলাগুলো
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl">
          যে খেলাগুলো আমাদের বিকেলগুলোকে ভরে রাখত। চলুন, ফিরে যাই সেই ধুলোমাখা মাঠে।
        </p>
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-card border-border sticky top-24 rounded-lg border p-6 shadow-sm">
            <GamesFilter />
          </div>
        </div>

        {/* Games Grid */}
        <GamesContent games={filteredGames} />
      </div>
    </div>
  )
}
