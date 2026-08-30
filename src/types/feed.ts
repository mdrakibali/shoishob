// Type definitions for feed, post, sidebars, widgets and layout components

export interface FeedAuthor {
  id: string
  name: string
  avatar: string
  username?: string
}

export interface FeedPost {
  id: string
  author: FeedAuthor
  era: string
  timestamp: string
  title: string
  content: string
  images: string[]
  totalImagesCount?: number
  location?: string
  tags: string[]
  likesCount: number
  commentsCount: number
  isLiked?: boolean
  isSaved?: boolean
}

export interface PromptCategoryItem {
  id: string
  label: string
  iconName: "game" | "heart" | "location" | "food" | "more"
  href?: string
}

export interface EraTimelineItem {
  id: string
  era: string
  title: string
  countText: string
  imageUrl: string
  href?: string
}

export interface PopularGameItem {
  id: string
  slug: string
  title: string
  countText: string
  imageUrl: string
}

export interface WeeklyFeaturedItem {
  id: string
  slug: string
  title: string
  authorName: string
  imageUrl: string
}

export type FeedFilterTabId = "latest" | "popular" | "recent" | "following"

export interface FeedFilterTabItem {
  id: FeedFilterTabId
  label: string
}

// Component Prop Interfaces

export interface FeedLayoutProps {
  initialPosts?: FeedPost[]
  className?: string
}

export interface PromptBannerCardProps {
  className?: string
}

export interface FeedFilterTabsProps {
  activeTab: FeedFilterTabId
  onTabChange: (tab: FeedFilterTabId) => void
  className?: string
}

export interface FeedPostCardProps {
  post: FeedPost
  className?: string
}

export interface PostHeaderProps {
  author: FeedAuthor
  era: string
  timestamp: string
}

export interface PostGalleryProps {
  images: string[]
  totalImagesCount?: number
  postTitle: string
}

export interface PostTagsProps {
  location?: string
  tags: string[]
}

export interface PostActionsProps {
  likesCount: number
  commentsCount: number
  isLiked?: boolean
  isSaved?: boolean
  onLike?: () => void
  onComment?: () => void
  onShare?: () => void
  onSave?: () => void
}

export interface LeftSidebarProps {
  className?: string
}

export interface SidebarNavItemProps {
  label: string
  href: string
  iconName: string
  isActive?: boolean
  isExact?: boolean
}

export interface SidebarSectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

export interface RightSidebarProps {
  className?: string
}

export interface EraTimelineWidgetProps {
  items: EraTimelineItem[]
  className?: string
}

export interface PopularGamesWidgetProps {
  games: PopularGameItem[]
  className?: string
}

export interface WeeklyFeaturedWidgetProps {
  featured: WeeklyFeaturedItem
  className?: string
}

export interface HeaderSearchProps {
  className?: string
}

export interface HeaderUserNavProps {
  className?: string
}

