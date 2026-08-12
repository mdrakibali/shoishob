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
      <Card className={cn(
        "h-full overflow-hidden border-border bg-card transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-lg hover:border-primary/30",
        className
      )}>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
          <Image
            src={memory.imageUrl}
            alt={memory.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 right-3 flex gap-2">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm hover:bg-background border-none text-xs font-medium">
              {memory.type}
            </Badge>
          </div>
        </div>
        
        <CardHeader className="p-5 pb-3">
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-medium">
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {memory.year}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {memory.district}
            </div>
          </div>
          
          <h3 className="font-serif text-xl font-bold leading-tight text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {memory.title}
          </h3>
        </CardHeader>
        
        <CardContent className="p-5 pt-0">
          <p className="text-sm text-secondary-foreground line-clamp-3">
            "{memory.excerpt}"
          </p>
        </CardContent>
        
        <CardFooter className="p-5 pt-0 mt-auto border-t border-border/50">
          <div className="mt-4 flex w-full items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5 italic">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span>
              {memory.source}
            </span>
            <span className="font-medium text-primary flex items-center group-hover:underline">
              স্মৃতিটি পড়ুন
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
