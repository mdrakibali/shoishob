import { Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MemoryData, MemoryCardProps } from "@/types"

// MemoryCard displays a single memory entry in a grid or list
export function MemoryCard({ memory, className }: MemoryCardProps) {
  return (
    <Link href={`/memories/${memory.slug}`} className="group block h-full">
      <Card
        className={cn(
          "border-border bg-card h-full overflow-hidden transition-all duration-300",
          "hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg",
          className
        )}
      >
        <div className="bg-muted relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={memory.imageUrl}
            alt={memory.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 right-3 flex gap-2">
            <Badge
              variant="secondary"
              className="bg-background/90 hover:bg-background border-none text-xs font-medium backdrop-blur-sm"
            >
              {memory.type}
            </Badge>
          </div>
        </div>

        <CardHeader className="p-5 pb-3">
          <div className="text-muted-foreground mb-3 flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {memory.year}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {memory.district}
            </div>
          </div>

          <h3 className="text-foreground group-hover:text-primary line-clamp-2 font-serif text-xl leading-tight font-bold transition-colors">
            {memory.title}
          </h3>
        </CardHeader>

        <CardContent className="p-5 pt-0">
          <p className="text-secondary-foreground line-clamp-3 text-sm">"{memory.excerpt}"</p>
        </CardContent>

        <CardFooter className="border-border/50 mt-auto border-t p-5 pt-0">
          <div className="text-muted-foreground mt-4 flex w-full items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 italic">
              <span className="bg-accent inline-block h-1.5 w-1.5 rounded-full"></span>
              {memory.source}
            </span>
            <span className="text-primary flex items-center font-medium group-hover:underline">
              স্মৃতিটি পড়ুন
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
