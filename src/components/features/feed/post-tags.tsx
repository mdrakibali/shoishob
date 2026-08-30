import { MapPin, Tag } from "lucide-react"
import { PostTagsProps } from "@/types"

// PostTags renders location and subject pills attached to a memory post
export function PostTags({ location, tags }: PostTagsProps) {
  if (!location && (!tags || tags.length === 0)) return null

  return (
    <div className="flex flex-wrap items-center gap-2 pt-1">
      {location && (
        <span className="border-border/60 bg-secondary/50 text-foreground/85 flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs font-medium">
          <MapPin className="h-3.5 w-3.5 text-accent" />
          <span>{location}</span>
        </span>
      )}

      {tags.map((tag) => (
        <span
          key={tag}
          className="border-border/60 bg-secondary/50 text-foreground/85 flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs font-medium"
        >
          <Tag className="h-3 w-3 text-muted-foreground" />
          <span>{tag}</span>
        </span>
      ))}
    </div>
  )
}

