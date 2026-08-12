import { MemoryContent } from "@/components/features/memories/memory-content"
import { MemoryDetailHeader } from "@/components/features/memories/memory-detail-header"
import { MemoryCard } from "@/components/shared/memory-card"
import { MOCK_MEMORIES } from "@/lib/mock-data"
import Image from "next/image"

// MOCK DATA is imported from @/lib/mock-data.ts
const relatedMemories = MOCK_MEMORIES.slice(3, 5)

export default function MemoryDetailPage() {
  return (
    <div className="bg-background min-h-screen pb-16">
      <MemoryDetailHeader />

      {/* CONTENT */}
      <div className="container mx-auto -mt-6 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="border-border bg-muted relative mb-12 aspect-video w-full overflow-hidden rounded-2xl border shadow-lg">
          <Image
            src="/assets/memory_placeholder.png"
            alt="বিকেল হলেই আমরা মাঠে চলে যেতাম"
            fill
            className="object-cover"
            priority
          />
        </div>

        <MemoryContent />

        <div className="mt-20">
          <h2 className="text-foreground mb-8 font-serif text-3xl font-bold">এমন আরও স্মৃতি</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {relatedMemories.map((memory) => (
              <MemoryCard key={memory.id} memory={memory} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
