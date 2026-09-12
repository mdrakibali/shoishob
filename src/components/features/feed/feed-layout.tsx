import { FeedLayoutProps } from "@/types"
import { MOCK_FEED_POSTS } from "@/lib/mock-data/feed-data"
import { FeedStream } from "@/components/features/feed/feed-stream"
import { PromptBannerCard } from "@/components/features/feed/prompt-banner-card"
import { LeftSidebar } from "@/components/features/feed/sidebar/left-sidebar"
import { RightSidebar } from "@/components/features/feed/widgets/right-sidebar"
import { cn } from "@/lib/utils"

// FeedLayout structures the 3-column layout with sticky sidebars and global application scroll
export function FeedLayout({
  initialPosts = MOCK_FEED_POSTS,
  className,
}: FeedLayoutProps) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-7xl items-start justify-center gap-6 px-4 sm:px-6 lg:gap-8 lg:px-8",
        className
      )}
    >
      {/* Left Sidebar Column - Sticky under header */}
      <LeftSidebar className="hidden w-56 shrink-0 lg:flex sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto custom-scrollbar pt-6 pb-6" />

      {/* Center Main Feed Column - Natural flow without column scrollbar; scrolls entire page */}
      <div className="flex w-full min-w-0 max-w-2xl flex-1 flex-col gap-6 pt-6 pb-24">
        <PromptBannerCard />
        <FeedStream initialPosts={initialPosts} />
      </div>

      {/* Right Sidebar Column - Sticky under header */}
      <RightSidebar className="hidden w-72 shrink-0 xl:flex sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto custom-scrollbar pt-6 pb-6" />
    </div>
  )
}

