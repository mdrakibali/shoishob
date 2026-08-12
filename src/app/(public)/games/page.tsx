import * as React from "react"
import { GameCard } from "@/components/shared/game-card"
import { type GameData } from "@/types"

const allGames: GameData[] = [
  {
    id: "1",
    slug: "gollachhut",
    title: "গোল্লাছুট",
    description:
      "দল বেঁধে খেলার এক অন্যতম মজাদার গ্রামীণ খেলা, যেখানে একজন 'রাজা' থাকে আর বাকিরা তাকে রক্ষা করে দৌড়ে নির্দিষ্ট স্থানে যাওয়ার চেষ্টা করে।",
    timePeriod: "1990s–2000s",
    players: "6–12 জন",
    imageUrl: "/assets/game_placeholder.png",
  },
  {
    id: "2",
    slug: "dariabandha",
    title: "দাঁড়িয়াবান্ধা",
    description:
      "মাটিতে দাগ কেটে ঘর তৈরি করে দুই দলের মধ্যে খেলা হয়। একদল ঘর পার হতে চায় আর অন্যদল তাদের ছোঁয়ার চেষ্টা করে।",
    timePeriod: "1990s–2000s",
    players: "8–10 জন",
    imageUrl: "/assets/game_placeholder.png",
  },
  {
    id: "3",
    slug: "danguli",
    title: "ডাংগুলি",
    description:
      "ছোট একটি লাঠি (গুলি) কে বড় লাঠি (ডাং) দিয়ে আঘাত করে দূরে ছুঁড়ে মারার খেলা। ক্রিকেটের আদি রূপ বলা যেতে পারে।",
    timePeriod: "1980s–2000s",
    players: "2–6 জন",
    imageUrl: "/assets/game_placeholder.png",
  },
  {
    id: "4",
    slug: "marble",
    title: "মার্বেল",
    description:
      "কাঁচের ছোট ছোট গোলক দিয়ে খেলা। একটি মার্বেল দিয়ে অন্য মার্বেলকে আঘাত করাই মূল লক্ষ্য।",
    timePeriod: "1990s–2010s",
    players: "2–4 জন",
    imageUrl: "/assets/game_placeholder.png",
  },
  {
    id: "5",
    slug: "latim",
    title: "লাটিম",
    description: "কাঠের তৈরি লাটিমে সুতো পেঁচিয়ে মাটিতে ছুঁড়ে ঘুরানোর একটি দারুণ আকর্ষণীয় খেলা।",
    timePeriod: "1980s–2010s",
    players: "1–5 জন",
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

export default function GamesPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="text-foreground mb-6 font-serif text-4xl font-bold md:text-5xl">
          হারিয়ে যাওয়া খেলাগুলো
        </h1>
        <p className="text-muted-foreground text-xl">
          যে খেলাগুলো আমাদের বিকেলগুলোকে ভরে রাখত। চলুন, ফিরে যাই সেই ধুলোমাখা মাঠে।
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {allGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}
