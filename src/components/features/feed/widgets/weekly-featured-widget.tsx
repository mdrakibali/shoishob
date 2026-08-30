import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { WeeklyFeaturedWidgetProps } from "@/types"
import { cn } from "@/lib/utils"

// WeeklyFeaturedWidget renders the 'সাপ্তাহিক সেরা স্মৃতি' highlight card
export function WeeklyFeaturedWidget({
  featured,
  className,
}: WeeklyFeaturedWidgetProps) {
  return (
    <div
      className={cn(
        "border-border bg-card flex flex-col gap-3 rounded-2xl border p-4.5 shadow-xs",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-foreground font-serif text-sm font-bold">
          সাপ্তাহিক সেরা স্মৃতি
        </h3>
        <Link
          href={`/memories/${featured.slug}`}
          className="text-primary hover:text-primary-hover flex items-center gap-1 text-xs font-semibold"
        >
          <span>সব দেখুন</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      <Link
        href={`/memories/${featured.slug}`}
        className="hover:bg-secondary/50 flex items-center gap-3.5 rounded-xl p-1.5 transition-colors"
      >
        <div className="bg-muted relative h-12 w-12 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={featured.imageUrl}
            alt={featured.title}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col min-w-0">
          <span className="text-foreground line-clamp-1 text-xs font-bold leading-tight">
            {featured.title}
          </span>
          <span className="text-muted-foreground text-[11px] leading-tight">
            {featured.authorName}
          </span>
        </div>
      </Link>
    </div>
  )
}

