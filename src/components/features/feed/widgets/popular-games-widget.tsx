import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PopularGamesWidgetProps } from "@/types"
import { cn } from "@/lib/utils"

// PopularGamesWidget renders the 'জনপ্রিয় খেলা' sidebar list
export function PopularGamesWidget({ games, className }: PopularGamesWidgetProps) {
  return (
    <div
      className={cn(
        "border-border bg-card flex flex-col gap-3 rounded-2xl border p-4.5 shadow-xs",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-foreground font-serif text-sm font-bold">
          জনপ্রিয় খেলা
        </h3>
        <Link
          href="/games"
          className="text-primary hover:text-primary-hover flex items-center gap-1 text-xs font-semibold"
        >
          <span>সব দেখুন</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="flex flex-col gap-2.5">
        {games.map((game) => (
          <Link
            key={game.id}
            href={`/games/${game.slug}`}
            className="hover:bg-secondary/50 flex items-center gap-3 rounded-xl p-1.5 transition-colors"
          >
            <div className="bg-muted relative h-9 w-9 shrink-0 overflow-hidden rounded-lg">
              <Image
                src={game.imageUrl}
                alt={game.title}
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col min-w-0">
              <span className="text-foreground text-xs font-bold leading-tight">
                {game.title}
              </span>
              <span className="text-muted-foreground text-[11px] leading-tight">
                {game.countText}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

