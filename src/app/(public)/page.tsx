import { FeedLayout } from "@/components/features/feed/feed-layout"
import { MOCK_FEED_POSTS } from "@/lib/mock-data/feed-data"

// HomePage renders the primary Facebook-style 3-column Shoishob community feed
export default function HomePage() {
  return <FeedLayout initialPosts={MOCK_FEED_POSTS} />
}
