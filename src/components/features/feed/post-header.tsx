import { MoreHorizontal } from "lucide-react"
import Image from "next/image"
import { PostHeaderProps } from "@/types"

// PostHeader renders author details, era metadata, and the post option menu
export function PostHeader({ author, era, timestamp }: PostHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="ring-border/60 relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2">
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-foreground text-sm font-bold leading-tight">
            {author.name}
          </span>
          <span className="text-muted-foreground text-xs leading-normal">
            {era} • {timestamp}
          </span>
        </div>
      </div>

      <button
        type="button"
        aria-label="Post options"
        className="text-muted-foreground hover:bg-secondary/60 hover:text-foreground rounded-full p-1.5 transition-colors"
      >
        <MoreHorizontal className="h-5 w-5" />
      </button>
    </div>
  )
}

