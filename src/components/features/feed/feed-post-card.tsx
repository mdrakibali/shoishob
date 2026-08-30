import { FeedPostCardProps } from "@/types"
import { PostActions } from "@/components/features/feed/post-actions"
import { PostGallery } from "@/components/features/feed/post-gallery"
import { PostHeader } from "@/components/features/feed/post-header"
import { PostTags } from "@/components/features/feed/post-tags"
import { cn } from "@/lib/utils"

// FeedPostCard renders a single memory post in full social feed layout
export function FeedPostCard({ post, className }: FeedPostCardProps) {
  return (
    <article
      className={cn(
        "border-border bg-card flex flex-col gap-3.5 rounded-2xl border p-5 shadow-xs sm:p-6",
        className
      )}
    >
      <PostHeader
        author={post.author}
        era={post.era}
        timestamp={post.timestamp}
      />

      <h3 className="text-foreground font-serif text-base font-bold sm:text-lg">
        {post.title}
      </h3>

      <p className="text-foreground/90 text-sm leading-relaxed">
        {post.content}
      </p>

      <PostGallery
        images={post.images}
        totalImagesCount={post.totalImagesCount}
        postTitle={post.title}
      />

      <PostTags location={post.location} tags={post.tags} />

      <PostActions
        likesCount={post.likesCount}
        commentsCount={post.commentsCount}
        isLiked={post.isLiked}
        isSaved={post.isSaved}
      />
    </article>
  )
}

