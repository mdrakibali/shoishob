import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/features/home/hero-section"
import { TimelineSection } from "@/components/features/home/timeline-section"
import { RecentMemoriesSection } from "@/components/features/home/recent-memories-section"
import { GamesShowcaseSection } from "@/components/features/home/games-showcase-section"
import { MOCK_MEMORIES, MOCK_GAMES } from "@/lib/mock-data"
const recentMemories = MOCK_MEMORIES.slice(0, 3)
const popularGames = MOCK_GAMES.slice(0, 1)

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
