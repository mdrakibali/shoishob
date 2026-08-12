import { HeroSection } from "@/components/features/home/hero-section"
import { FeaturedStorySection } from "@/components/features/home/featured-story-section"
import { StatsSection } from "@/components/features/home/stats-section"
import { CtaSection } from "@/components/features/home/cta-section"
import { RecentMemoriesSection } from "@/components/features/home/recent-memories-section"
import { GamesShowcaseSection } from "@/components/features/home/games-showcase-section"
import { MOCK_MEMORIES, MOCK_GAMES } from "@/lib/mock-data"
const recentMemories = MOCK_MEMORIES.slice(0, 6)
const popularGames = MOCK_GAMES.slice(0, 6)

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <HeroSection />
      <FeaturedStorySection />
      <StatsSection />
      <RecentMemoriesSection memories={recentMemories} />
      <GamesShowcaseSection games={popularGames} />
      <CtaSection />
    </div>
  )
}
