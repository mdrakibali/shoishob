import { GamesContent } from "@/components/features/games/games-content"
import { GamesFilter } from "@/components/features/games/games-filter"
import { PageSection, SectionHeader } from "@/components/ui/section"
import { MOCK_GAMES } from "@/lib/mock-data"

export default function GamesPage() {
  return (
    <PageSection className="bg-background">
      <SectionHeader 
        title="হারিয়ে যাওয়া খেলা"
        description="শৈশবের সেই পুরোনো খেলাগুলো আবার ফিরে দেখুন"
      />

      <div className="flex flex-col gap-8 md:flex-row">
        {/* Desktop Filters */}
        <div className="hidden w-64 shrink-0 md:block">
          <GamesFilter />
        </div>

        {/* Content */}
        <GamesContent games={MOCK_GAMES} />
      </div>
    </PageSection>
  )
}
