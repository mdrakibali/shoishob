import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { EraTimelineWidgetProps } from "@/types"
import { cn } from "@/lib/utils"

// EraTimelineWidget renders the 'সময়ের ভ্রমণ' sidebar card with decade memory counts
export function EraTimelineWidget({ items, className }: EraTimelineWidgetProps) {
  return (
    <div
      className={cn(
        "border-border bg-card flex flex-col gap-3 rounded-2xl border p-4.5 shadow-xs",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-foreground font-serif text-sm font-bold">
          সময়ের ভ্রমণ
        </h3>
        <Link
          href="/memories"
          className="text-primary hover:text-primary-hover flex items-center gap-1 text-xs font-semibold"
        >
          <span>সব দেখুন</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="flex flex-col gap-2.5">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href || `/memories?era=${item.era}`}
            className="hover:bg-secondary/50 flex items-center gap-3 rounded-xl p-1.5 transition-colors"
          >
            <div className="bg-muted relative h-9 w-9 shrink-0 overflow-hidden rounded-lg">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col min-w-0">
              <span className="text-foreground text-xs font-bold leading-tight">
                {item.title}
              </span>
              <span className="text-muted-foreground text-[11px] leading-tight">
                {item.countText}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

