import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MemoryCard } from "@/components/shared/memory-card"
import { RecentMemoriesSectionProps } from "@/types"

export function RecentMemoriesSection({ memories }: RecentMemoriesSectionProps) {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-foreground mb-3 font-serif text-3xl font-bold md:text-4xl">
              সম্প্রতি সংরক্ষিত স্মৃতি
            </h2>
            <p className="text-muted-foreground text-lg">অন্যদের ফেলে আসা দিনের গল্পগুলো পড়ুন।</p>
          </div>
          <Button
            variant="ghost"
            asChild
            className="text-primary hover:text-primary-hover group px-0 hover:bg-transparent"
          >
            <Link href="/explore">
              সব স্মৃতি দেখুন
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {memories.map((memory) => (
            <MemoryCard key={memory.id} memory={memory} />
          ))}
        </div>
      </div>
    </section>
  )
}
