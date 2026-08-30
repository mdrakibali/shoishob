import { FeedLayoutProps } from "@/types"
import { MOCK_FEED_POSTS } from "@/lib/mock-data/feed-data"
import { FeedStream } from "@/components/features/feed/feed-stream"
import { PromptBannerCard } from "@/components/features/feed/prompt-banner-card"
import { LeftSidebar } from "@/components/features/feed/sidebar/left-sidebar"
import { RightSidebar } from "@/components/features/feed/widgets/right-sidebar"
import { cn } from "@/lib/utils"

// FeedLayout structures the 3-column Facebook-style feed with fixed sidebars & independent center scroll
export function FeedLayout({
  initialPosts = MOCK_FEED_POSTS,
  className,
}: FeedLayoutProps) {
  return (
    <div
      className={cn(
        "mx-auto flex h-[calc(100vh-4rem)] max-w-7xl justify-center gap-6 px-4 sm:px-6 lg:gap-8 lg:px-8 overflow-hidden",
        className
      )}
    >
      {/* Left Sidebar Column - Fixed Stationary */}
      <LeftSidebar className="hidden w-56 shrink-0 lg:flex h-full overflow-y-auto custom-scrollbar pt-5 pb-6" />
      {/* Center Main Feed Column - Independent smooth scroll with 3px custom scrollbar */}
      <main className="flex h-full w-full min-w-0 max-w-2xl flex-1 flex-col gap-5 overflow-y-auto custom-scrollbar pt-5 pb-16 px-1">
        <PromptBannerCard />
        <FeedStream initialPosts={initialPosts} />
      </main>
      {/* Right Sidebar Column - Fixed Stationary */}
      <RightSidebar className="hidden w-72 shrink-0 xl:flex h-full overflow-y-auto custom-scrollbar pt-5 pb-6" />
    </div>
  )
}
