import Link from "next/link"
import { Button } from "@/components/ui/button"
import { type GameData } from "@/types"
import { type MemoryData } from "@/types"
import { HeroSection } from "@/components/features/home/hero-section"
import { TimelineSection } from "@/components/features/home/timeline-section"
import { RecentMemoriesSection } from "@/components/features/home/recent-memories-section"
import { GamesShowcaseSection } from "@/components/features/home/games-showcase-section"

const recentMemories: MemoryData[] = [
  {
    id: "1",
    slug: "bikel-holei-mathe",
    title: "বিকেল হলেই আমরা মাঠে চলে যেতাম",
    excerpt:
      "স্কুল ছুটি হলেই ব্যাগটা কোনোমতে ঘরে রেখেই দৌড় দিতাম মাঠে। যতক্ষণ মা এসে বকা না দিত, ততক্ষণ গোল্লাছুট আর কাবাডি চলত...",
    year: "২০০৩",
    district: "গাজীপুর",
    type: "নিজের স্মৃতি",
    source: "নিজের স্মৃতি",
    imageUrl: "/assets/memory_placeholder.png",
  },
  {
    id: "2",
    slug: "load-shedding-er-raat",
    title: "বিদ্যুৎ চলে গেলে সবাই বাইরে বের হতাম",
    excerpt:
      "তখন তো এত আইপিএস ছিল কেজি কারেন্ট গেলেই পাড়ার সব ছেলেপুলে রাস্তায় নেমে আসত। ল্যাম্পপোস্টের নিচে বসে কত ভূতের গল্প...",
    year: "১৯৯৮",
    district: "ঢাকা",
    type: "শৈশবের স্মৃতি",
    source: "বড় ভাইয়ের কাছে শোনা",
    imageUrl: "/assets/memory_placeholder.png",
  },
  {
    id: "3",
    slug: "school-er-shei-jhalmuri",
    title: "স্কুল গেটের সেই ঝালমুড়ি আর আচার",
    excerpt:
      "দুই টাকায় এক ঠোঙা ঝালমুড়ি পাওয়া যেত। স্কুলের টিফিনের টাকা জমিয়ে আমরা সবাই মিলে সেই ঝালমুড়ি কিনে ভাগ করে খেতাম...",
    year: "২০০৫",
    district: "সিলেট",
    type: "একটি জায়গা",
    source: "নিজের স্মৃতি",
    imageUrl: "/assets/memory_placeholder.png",
  },
]

const popularGames: GameData[] = [
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
]

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <HeroSection />
      <TimelineSection />
      <RecentMemoriesSection memories={recentMemories} />
      <GamesShowcaseSection games={popularGames} />

      {/* CONTRIBUTION CTA */}
      <section className="bg-primary text-primary-foreground relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 font-serif text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
            আপনার শৈশবও এখানে রেখে যান
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed opacity-90 md:text-2xl">
            আপনার কাছে হয়তো এটা শুধু একটা ছোট স্মৃতি। কিন্তু ভবিষ্যৎ প্রজন্মের কাছে সেটাই হতে পারে
            ইতিহাস।
          </p>
          <Button
            size="lg"
            asChild
            className="bg-background text-primary hover:bg-background/90 h-14 rounded-full px-10 text-lg shadow-xl transition-transform duration-300 hover:scale-105"
          >
            <Link href="/submit">স্মৃতি যোগ করুন</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
