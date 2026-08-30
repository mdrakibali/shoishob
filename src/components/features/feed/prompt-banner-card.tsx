"use client"

import { useState } from "react"
import {
  Gamepad2,
  Heart,
  MapPin,
  MoreHorizontal,
  Plus,
  Send,
  Soup,
} from "lucide-react"
import Link from "next/link"
import { PromptBannerCardProps, PromptCategoryItem } from "@/types"
import { PROMPT_CATEGORIES } from "@/lib/mock-data/feed-data"
import { VintageVillageArt } from "@/components/shared/icons/vintage-village-art"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function getCategoryIcon(iconName: PromptCategoryItem["iconName"]) {
  switch (iconName) {
    case "game":
      return <Gamepad2 className="h-3.5 w-3.5 text-primary" />
    case "heart":
      return <Heart className="h-3.5 w-3.5 text-destructive" />
    case "location":
      return <MapPin className="h-3.5 w-3.5 text-accent" />
    case "food":
      return <Soup className="h-3.5 w-3.5 text-success" />
    case "more":
      return <MoreHorizontal className="h-3.5 w-3.5 text-muted-foreground" />
  }
}

// PromptBannerCard renders the creation banner with textarea and exact Figma proportions
export function PromptBannerCard({ className }: PromptBannerCardProps) {
  const [memoryText, setMemoryText] = useState("")

  return (
    <div
      className={cn(
        "border-border bg-card relative overflow-hidden rounded-2xl border p-5 shadow-xs sm:p-6",
        className
      )}
    >
      {/* Decorative Vintage Illustration Watermark confined to top-right to prevent overlap */}
      <div className="pointer-events-none absolute top-2 right-3 h-24 w-48 opacity-35 dark:opacity-20">
        <VintageVillageArt className="h-full w-full object-contain" />
      </div>

      <div className="relative z-10 flex flex-col gap-4">
        {/* Memory Textarea Header */}
        <div className="max-w-md">
          <textarea
            value={memoryText}
            onChange={(e) => setMemoryText(e.target.value)}
            rows={memoryText ? 2 : 1}
            placeholder="কোন স্মৃতিটা আজ মনে পড়ছে?"
            className="text-foreground placeholder:text-foreground/75 font-serif text-lg font-bold sm:text-xl w-full resize-none border-none bg-transparent p-0 focus:outline-none focus:ring-0"
          />
        </div>

        {/* Bottom Row: Category Pills on left & Action Button on right */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex flex-wrap items-center gap-2">
            {PROMPT_CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={category.href || "/memories"}
                className="border-border/70 bg-secondary/50 hover:bg-secondary text-foreground flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-medium transition-colors"
              >
                {getCategoryIcon(category.iconName)}
                <span>{category.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            {memoryText ? (
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary-hover shadow-warm-xs rounded-lg px-3.5 text-xs font-semibold"
                onClick={() => setMemoryText("")}
              >
                <Send className="mr-1 h-3.5 w-3.5" />
                <span>পোস্ট করুন</span>
              </Button>
            ) : (
              <Button
                asChild
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary-hover shadow-warm-xs rounded-lg px-3.5 text-xs font-semibold"
              >
                <Link href="/submit" className="flex items-center gap-1">
                  <Plus className="h-3.5 w-3.5" />
                  <span>স্মৃতি যোগ করুন</span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
