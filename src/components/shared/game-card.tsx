import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Users, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { GameCardProps } from "@/types"

// GameCard displays a single game entry in a grid or list
export function GameCard({ game, className }: GameCardProps) {
  return (
    <Link href={`/games/${game.slug}`} className="group block h-full">
      <Card
        className={cn(
          "border-border bg-card h-full overflow-hidden transition-all duration-300",
          "hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg",
          className
        )}
      >
        <div className="bg-muted relative aspect-video w-full overflow-hidden">
          <Image
            src={game.imageUrl}
            alt={game.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <CardHeader className="p-5 pb-3">
          <h3 className="text-foreground group-hover:text-primary font-serif text-2xl leading-tight font-bold transition-colors">
            {game.title}
          </h3>

          <div className="text-muted-foreground mt-3 flex flex-wrap items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <Clock className="text-primary/70 h-4 w-4" />
              {game.timePeriod}
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="text-primary/70 h-4 w-4" />
              {game.players}
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-5 pt-0">
          <p className="text-secondary-foreground line-clamp-2 text-sm">{game.description}</p>
        </CardContent>

        <CardFooter className="mt-auto p-5 pt-0">
          <div className="text-primary group-hover:text-primary-hover flex w-full items-center text-sm font-medium transition-colors">
            কীভাবে খেলতে হয়
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
