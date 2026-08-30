"use client"

import { useState } from "react"
import { Bookmark, Heart, MessageCircle, Share2 } from "lucide-react"
import { PostActionsProps } from "@/types"
import { cn } from "@/lib/utils"

// PostActions renders the interactive engagement bar (Like, Comment, Share, Bookmark)
export function PostActions({
  likesCount: initialLikesCount,
  commentsCount,
  isLiked: initialIsLiked = false,
  isSaved: initialIsSaved = false,
  onLike,
  onComment,
  onShare,
  onSave,
}: PostActionsProps) {
  const [isLiked, setIsLiked] = useState(initialIsLiked)
  const [likesCount, setLikesCount] = useState(initialLikesCount)
  const [isSaved, setIsSaved] = useState(initialIsSaved)

  const handleLike = () => {
    setIsLiked((prev) => !prev)
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1))
    onLike?.()
  }

  const handleSave = () => {
    setIsSaved((prev) => !prev)
    onSave?.()
  }

  return (
    <div className="border-border/60 flex items-center justify-between border-t pt-3">
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Like Button */}
        <button
          type="button"
          onClick={handleLike}
          className={cn(
            "flex items-center gap-1.5 text-xs font-semibold transition-colors",
            isLiked
              ? "text-destructive"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Heart
            className={cn(
              "h-4.5 w-4.5 transition-transform active:scale-125",
              isLiked && "fill-current"
            )}
          />
          <span>{likesCount}</span>
        </button>

        {/* Comment Button */}
        <button
          type="button"
          onClick={onComment}
          className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-xs font-semibold transition-colors"
        >
          <MessageCircle className="h-4.5 w-4.5" />
          <span>{commentsCount}</span>
        </button>

        {/* Share Button */}
        <button
          type="button"
          onClick={onShare}
          className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-xs font-semibold transition-colors"
        >
          <Share2 className="h-4.5 w-4.5" />
          <span className="hidden sm:inline">শেয়ার করুন</span>
        </button>
      </div>

      {/* Bookmark / Save */}
      <button
        type="button"
        aria-label="Save to your archive"
        onClick={handleSave}
        className={cn(
          "rounded-lg p-1.5 transition-colors",
          isSaved
            ? "text-primary"
            : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
        )}
      >
        <Bookmark className={cn("h-4.5 w-4.5", isSaved && "fill-current")} />
      </button>
    </div>
  )
}

