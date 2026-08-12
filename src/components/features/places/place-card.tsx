import { PlaceCardProps } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { Map, Calendar } from "lucide-react"

export function PlaceCard({ place, className }: PlaceCardProps) {
  return (
    <Link href={`/places/${place.slug}`} className={`group flex flex-col sm:flex-row overflow-hidden rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors ${className}`}>
      <div className="relative h-48 sm:h-auto sm:w-2/5 shrink-0 overflow-hidden">
        <Image
          src={place.imageUrl}
          alt={place.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col p-6 sm:w-3/5">
        <div className="mb-4 flex items-center gap-4 text-xs font-semibold text-primary">
          <span className="flex items-center gap-1.5 bg-primary/10 px-2.5 py-1 rounded-md">
            <Map className="size-3.5" />
            {place.district}
          </span>
          <span className="flex items-center gap-1.5 bg-secondary/50 px-2.5 py-1 rounded-md text-muted-foreground">
            <Calendar className="size-3.5" />
            {place.year}
          </span>
        </div>
        
        <h3 className="mb-3 text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
          {place.title}
        </h3>
        
        <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed mb-4">
          {place.description}
        </p>
        
        <div className="mt-auto text-sm font-medium text-primary flex items-center gap-1">
          বিস্তারিত দেখুন <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  )
}
