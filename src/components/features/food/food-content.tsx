"use client"
import { FoodCard } from "@/components/features/food/food-card"
import { FoodData } from "@/types"

export function FoodContent({ items }: { items: FoodData[] }) {
  return (
    <div className="w-full">
      {items.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {items.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <h3 className="text-foreground mb-2 text-xl font-medium">কোনো খাবার পাওয়া যায়নি</h3>
        </div>
      )}
    </div>
  )
}
