"use client"

import { useState } from "react"
import { FeedFilterTabId, FeedPost } from "@/types"
import { FeedFilterTabs } from "@/components/features/feed/feed-filter-tabs"
import { FeedPostCard } from "@/components/features/feed/feed-post-card"

// FeedStream handles feed tab filtering and renders the post list
export function FeedStream({
  initialPosts = [],
}: {
  initialPosts?: FeedPost[]
}) {
  const [activeTab, setActiveTab] = useState<FeedFilterTabId>("latest")

  // Filter or sort posts based on the active tab
  const displayedPosts = [...initialPosts].sort((a, b) => {
    if (activeTab === "popular") {
      return b.likesCount - a.likesCount
    }
    return 0
  })

  return (
    <div className="flex flex-col gap-5">
      <FeedFilterTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex flex-col gap-5">
        {displayedPosts.map((post) => (
          <FeedPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

