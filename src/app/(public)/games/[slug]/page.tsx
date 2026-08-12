
import { GameDetailHeader } from "@/components/features/games/game-detail-header"
import { GameInstructions } from "@/components/features/games/game-instructions"
import { GameRelatedContent } from "@/components/features/games/game-related-content"
import { Separator } from "@/components/ui/separator"
import { MOCK_GAMES, MOCK_MEMORIES } from "@/lib/mock-data"

// MOCK DATA is imported from @/lib/mock-data.ts
const relatedGames = MOCK_GAMES.slice(0, 2)
const memories = MOCK_MEMORIES.slice(0, 1)

export default function GameDetailPage() {
  return (
    <div className="bg-background min-h-screen">
      <GameDetailHeader />

      {/* CONTENT SECTIONS */}
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <GameInstructions />
        <Separator className="my-16" />
        <GameRelatedContent memories={memories} relatedGames={relatedGames} />
      </div>
    </div>
  )
}
