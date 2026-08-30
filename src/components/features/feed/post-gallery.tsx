import Image from "next/image"
import { PostGalleryProps } from "@/types"
import { cn } from "@/lib/utils"

// PostGallery renders a responsive multi-image layout with overflow counter badge
export function PostGallery({
  images,
  totalImagesCount,
  postTitle,
}: PostGalleryProps) {
  if (!images || images.length === 0) return null

  const count = images.length
  const overflow =
    totalImagesCount && totalImagesCount > count
      ? totalImagesCount - count
      : 0

  return (
    <div
      className={cn(
        "gap-2 overflow-hidden rounded-xl",
        count === 1 && "flex aspect-16/9 w-full",
        count === 2 && "grid grid-cols-2 aspect-16/9 w-full",
        count === 3 && "grid grid-cols-3 aspect-16/7 w-full",
        count >= 4 && "grid grid-cols-2 sm:grid-cols-4 aspect-16/6 w-full"
      )}
    >
      {images.map((src, index) => {
        const isLast = index === count - 1
        const hasOverlay = isLast && overflow > 0

        return (
          <div
            key={index}
            className="bg-muted relative h-full w-full overflow-hidden rounded-lg"
          >
            <Image
              src={src}
              alt={`${postTitle} - photo ${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            {hasOverlay && (
              <div className="bg-foreground/50 text-card absolute inset-0 flex items-center justify-center font-sans text-lg font-bold backdrop-blur-[2px]">
                +{overflow}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

