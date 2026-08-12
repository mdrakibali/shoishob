import * as React from "react"
import { type GameData } from "@/types"
import { type MemoryData } from "@/types"
import { Separator } from "@/components/ui/separator"
import { GameDetailHeader } from "@/components/features/games/game-detail-header"
import { GameInstructions } from "@/components/features/games/game-instructions"
import { GameRelatedContent } from "@/components/features/games/game-related-content"

// MOCK DATA
const relatedGames: GameData[] = [
  {
    id: "2",
    slug: "dariabandha",
    title: "দাঁড়িয়াবান্ধা",
    description: "মাটিতে দাগ কেটে ঘর তৈরি করে দুই দলের মধ্যে খেলা হয়।",
    timePeriod: "1990s–2000s",
    players: "8–10 জন",
    imageUrl: "/assets/game_placeholder.png",
  },
  {
    id: "6",
    slug: "bouchi",
    title: "বউচি",
    description: "একজন 'বউ' থাকে যাকে নির্দিষ্ট একটি ঘর থেকে আরেক ঘরে নিরাপদে পৌঁছে দেওয়ার খেলা।",
    timePeriod: "1990s–2000s",
    players: "8–12 জন",
    imageUrl: "/assets/game_placeholder.png",
  },
]

const memories: MemoryData[] = [
  {
    id: "1",
    slug: "bikel-holei-mathe",
    title: "বিকেল হলেই আমরা মাঠে চলে যেতাম",
    excerpt: "স্কুল ছুটি হলেই ব্যাগটা কোনোমতে ঘরে রেখেই দৌড় দিতাম মাঠে...",
    year: "২০০৩",
    district: "গাজীপুর",
    type: "নিজের স্মৃতি",
    source: "নিজের স্মৃতি",
    imageUrl: "/assets/memory_placeholder.png",
  },
]

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
