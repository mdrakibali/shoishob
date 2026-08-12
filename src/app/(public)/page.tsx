import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { HeroSection } from "@/components/features/home/hero-section"
import { FeaturedStorySection } from "@/components/features/home/featured-story-section"
import { TimelineSection } from "@/components/features/home/timeline-section"
import { StatsSection } from "@/components/features/home/stats-section"
import { RecentMemoriesSection } from "@/components/features/home/recent-memories-section"
import { GamesShowcaseSection } from "@/components/features/home/games-showcase-section"
import { MOCK_MEMORIES, MOCK_GAMES } from "@/lib/mock-data"
const recentMemories = MOCK_MEMORIES.slice(0, 3)
const popularGames = MOCK_GAMES.slice(0, 1)

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <HeroSection />
      <FeaturedStorySection />
      <TimelineSection />
      <StatsSection />
      <RecentMemoriesSection memories={recentMemories} />
      <GamesShowcaseSection games={popularGames} />
      {/* CONTRIBUTION CTA */}
      <Section className="py-24">
        <div className="bg-primary text-primary-foreground relative overflow-hidden rounded-3xl px-6 py-20 text-center md:px-12 md:py-24">
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              আপনার শৈশবও এখানে রেখে যান
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed opacity-90 md:text-xl">
              আপনার কাছে হয়তো এটা শুধু একটা ছোট স্মৃতি। কিন্তু ভবিষ্যৎ প্রজন্মের কাছে সেটাই হতে পারে
              ইতিহাস। আজই আপনার গল্পটি আমাদের সাথে শেয়ার করুন।
            </p>
            <Button
              size="lg"
              asChild
              className="bg-background text-primary hover:bg-background/90 h-14 rounded-full px-10 text-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <Link href="/submit">স্মৃতি যোগ করুন</Link>
            </Button>
          </div>
          {/* Subtle background decoration */}
          <div className="bg-primary-foreground/10 absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl"></div>
          <div className="bg-primary-foreground/10 absolute -right-24 -bottom-24 h-96 w-96 rounded-full blur-3xl"></div>
        </div>
      </Section>
    </div>
  )
}
