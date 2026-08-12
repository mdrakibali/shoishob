import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Users, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { GameData, GameCardProps } from "@/types"

// GameCard displays a single game entry in a grid or list
export function GameCard({ game, className }: GameCardProps) {
  return (
    <Link href={`/games/${game.slug}`} className="group block h-full">
      <Card className={cn(
        "h-full overflow-hidden border-border bg-card transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-lg hover:border-primary/30",
        className
      )}>
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <Image
            src={game.imageUrl}
            alt={game.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <CardHeader className="p-5 pb-3">
          <h3 className="font-serif text-2xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
            {game.title}
          </h3>
          
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mt-3 font-medium">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary/70" />
              {game.timePeriod}
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary/70" />
              {game.players}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-5 pt-0">
          <p className="text-sm text-secondary-foreground line-clamp-2">
            {game.description}
          </p>
        </CardContent>
        
        <CardFooter className="p-5 pt-0 mt-auto">
          <div className="flex w-full items-center font-medium text-sm text-primary transition-colors group-hover:text-primary-hover">
            কীভাবে খেলতে হয় 
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
