import Link from "next/link"

import { Button } from "@/components/ui/button"
import { MemoryCard } from "@/components/shared/memory-card"
import { RecentMemoriesSectionProps } from "@/types"

export function RecentMemoriesSection({ memories }: RecentMemoriesSectionProps) {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border-border mb-8 flex flex-col justify-between gap-4 border-b pb-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-foreground font-serif text-3xl font-bold md:text-4xl">
              সাম্প্রতিক স্মৃতি
            </h2>
            <p className="text-muted-foreground mt-2 text-lg">
              আমাদের আর্কাইভের নতুন যুক্ত হওয়া স্মৃতিগুলো পড়ুন
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {memories.map((memory) => (
            <MemoryCard key={memory.id} memory={memory} />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button
            variant="ghost"
            asChild
            className="text-foreground hover:text-foreground hover:bg-muted"
          >
            <Link href="/explore">
              সব স্মৃতি দেখুন
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
