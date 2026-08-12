import { MemoryCard } from "@/components/shared/memory-card"
import { GameCard } from "@/components/shared/game-card"
import { SectionHeader } from "@/components/ui/section"
import { GameRelatedContentProps } from "@/types"

export function GameRelatedContent({ memories = [], relatedGames = [] }: GameRelatedContentProps) {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-20">
      {memories.length > 0 && (
        <div>
          <SectionHeader 
            title="এই খেলা নিয়ে মানুষের স্মৃতি" 
            className="mb-8"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {memories.map((memory) => (
              <MemoryCard key={memory.id} memory={memory} />
            ))}
          </div>
        </div>
      )}

      {relatedGames.length > 0 && (
        <div>
          <SectionHeader 
            title="এই সময়ের আরও খেলা" 
            className="mb-8"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {relatedGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
