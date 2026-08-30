import { RightSidebarProps } from "@/types"
import {
  ERA_TIMELINE_ITEMS,
  POPULAR_GAMES_ITEMS,
  WEEKLY_FEATURED_ITEM,
} from "@/lib/mock-data/feed-data"
import { EraTimelineWidget } from "@/components/features/feed/widgets/era-timeline-widget"
import { PopularGamesWidget } from "@/components/features/feed/widgets/popular-games-widget"
import { WeeklyFeaturedWidget } from "@/components/features/feed/widgets/weekly-featured-widget"
import { cn } from "@/lib/utils"

// RightSidebar renders the discovery widgets (Time Travel, Popular Games, Weekly Memory)
export function RightSidebar({ className }: RightSidebarProps) {
  return (
    <aside
      aria-label="Sidebar highlights"
      className={cn(
        "flex h-full flex-col gap-4 overflow-y-auto custom-scrollbar pr-1",
        className
      )}
    >
      <EraTimelineWidget items={ERA_TIMELINE_ITEMS} />
      <PopularGamesWidget games={POPULAR_GAMES_ITEMS} />
      <WeeklyFeaturedWidget featured={WEEKLY_FEATURED_ITEM} />
    </aside>
  )
}
