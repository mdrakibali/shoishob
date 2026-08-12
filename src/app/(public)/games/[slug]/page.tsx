import { GameDetailHeader } from "@/components/features/games/game-detail-header"
import { GameInstructions } from "@/components/features/games/game-instructions"
import { GameRelatedContent } from "@/components/features/games/game-related-content"
import { MOCK_GAMES } from "@/lib/mock-data"
import { notFound } from "next/navigation"

export default async function GameDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  
  // Find the game by slug
  const game = MOCK_GAMES.find((g) => g.slug === resolvedParams.slug)

  if (!game) {
    notFound()
  }
  const gameDetails = {
    ...game,
    instructions: [
      {
        title: "খেলোয়াড় নির্বাচন",
        description: "প্রথমে ঠিক করে নিতে হবে কতজন খেলবে। সাধারণত দুই দলে ভাগ হয়ে খেলা হয়।",
      },
      {
        title: "মাঠ তৈরি",
        description: "মাটিতে দাগ কেটে সীমানা তৈরি করতে হবে।",
      },
    ],
    rules: [
      "দাগের বাইরে যাওয়া যাবে না",
      "বিপক্ষ দলের কাউকে ছুঁতে পারলে সে আউট",
    ]
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <GameDetailHeader game={gameDetails} />
      
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <GameInstructions instructions={gameDetails.instructions} rules={gameDetails.rules} />
        </div>
        
        <div className="lg:col-span-1">
          <GameRelatedContent />
        </div>
      </div>
    </div>
  )
}
