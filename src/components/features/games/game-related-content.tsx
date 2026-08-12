import { MemoryCard } from "@/components/shared/memory-card"
import { GameCard } from "@/components/shared/game-card"
import { GameRelatedContentProps } from "@/types"

export function GameRelatedContent({ memories, relatedGames }: GameRelatedContentProps) {
  return (
    <>
      <div className="mb-16">
        <h2 className="text-foreground mb-8 font-serif text-3xl font-bold">
          এই খেলা নিয়ে মানুষের স্মৃতি
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {memories.map((memory) => (
            <MemoryCard key={memory.id} memory={memory} />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-foreground mb-8 font-serif text-3xl font-bold">এই সময়ের আরও খেলা</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {relatedGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </>
  )
}
