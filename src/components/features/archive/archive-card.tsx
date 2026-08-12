import { ArchiveItem } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock, Users } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ArchiveCardProps {
  item: ArchiveItem
  viewMode?: "grid" | "list"
}

export function ArchiveCard({ item, viewMode = "grid" }: ArchiveCardProps) {
  const isList = viewMode === "list"

  return (
    <Card className={`group overflow-hidden rounded-md transition-all hover:shadow-lg ${isList ? "flex flex-col sm:flex-row" : ""}`}>
      <Link href={`/archive/${item.category}/${item.slug}`} className={`relative block overflow-hidden ${isList ? "h-48 sm:h-auto sm:w-1/3 sm:shrink-0" : "aspect-video"}`}>
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>
      
      <CardContent className={`flex flex-col p-5 ${isList ? "sm:w-2/3" : ""}`}>
        <div className="mb-3 flex items-center gap-2">
          <Badge variant="secondary" className="bg-secondary/50 capitalize rounded-md">
            {item.category === "games" ? "খেলাধুলা" : item.category === "food" ? "খাবার" : "স্মৃতি"}
          </Badge>
          {item.meta.type && (
            <Badge variant="outline" className="text-muted-foreground rounded-md border-border/50">
              {item.meta.type}
            </Badge>
          )}
        </div>

        <Link href={`/archive/${item.category}/${item.slug}`} className="group-hover:text-primary transition-colors">
          <h3 className="mb-2 text-xl font-bold leading-tight">{item.title}</h3>
        </Link>
        
        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm leading-relaxed">
          {item.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
          {item.meta.year && (
            <div className="flex items-center gap-1.5">
              <Calendar className="size-3.5" />
              <span>{item.meta.year}</span>
            </div>
          )}
          {item.meta.timePeriod && (
            <div className="flex items-center gap-1.5">
              <Clock className="size-3.5" />
              <span>{item.meta.timePeriod}</span>
            </div>
          )}
          {item.meta.district && (
            <div className="flex items-center gap-1.5">
              <MapPin className="size-3.5" />
              <span>{item.meta.district}</span>
            </div>
          )}
          {item.meta.players && (
            <div className="flex items-center gap-1.5">
              <Users className="size-3.5" />
              <span>{item.meta.players}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
