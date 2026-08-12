"use client"
import { PlaceCard } from "@/components/features/places/place-card"
import { PlaceData } from "@/types"

export function PlacesContent({ items }: { items: PlaceData[] }) {
  return (
    <div className="w-full">
      {items.length > 0 ? (
        <div className="flex flex-col gap-6">
          {items.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <h3 className="text-foreground mb-2 text-xl font-medium">কোনো জায়গা পাওয়া যায়নি</h3>
        </div>
      )}
    </div>
  )
}
