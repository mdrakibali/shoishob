import { cn } from "@/lib/utils"
import { MemoryCardProps } from "@/types"
import { Folder, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// MemoryCard displays a single memory entry in a clean, minimalist archive style
export function MemoryCard({ memory, className }: MemoryCardProps) {
  return (
    <Link href={`/memories/${memory.slug}`} className={cn("group block", className)}>
      <div className="border-border bg-card flex flex-col gap-3 rounded-lg border overflow-hidden pb-4">
        {/* Image with proper aspect ratio */}
        <div className="bg-muted relative aspect-4/3 w-full overflow-hidden">
          <Image
            src={memory.imageUrl}
            alt={memory.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Minimalist content below image */}
        <div className="flex flex-col gap-1.5 px-4">
          <h3 className="text-foreground line-clamp-1 font-serif text-lg font-bold">
            {memory.title}
          </h3>
          
          <div className="text-muted-foreground flex flex-wrap items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5">
              <Folder className="h-3 w-3" />
              {memory.type}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" />
              {memory.district}, {memory.year}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
