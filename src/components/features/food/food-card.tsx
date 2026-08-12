import { FoodCardProps } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"

export function FoodCard({ food, className }: FoodCardProps) {
  return (
    <Link href={`/food/${food.slug}`} className={`group block ${className}`}>
      <div className="relative overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:shadow-xl border border-border/50">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={food.imageUrl}
            alt={food.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 text-white">
            <h3 className="mb-2 text-2xl font-bold tracking-tight">
              {food.title}
            </h3>
            <div className="flex items-center gap-4 text-sm font-medium text-white/90">
              <span className="rounded-full bg-white/20 px-3 py-1 backdrop-blur-md">
                {food.year}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="size-4" />
                {food.district}
              </span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="text-muted-foreground line-clamp-2 leading-relaxed">
            {food.description}
          </p>
        </div>
      </div>
    </Link>
  )
}
