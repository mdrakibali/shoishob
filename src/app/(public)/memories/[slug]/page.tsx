import * as React from "react"
import Image from "next/image"
import { MemoryCard } from "@/components/shared/memory-card"
import { type MemoryData } from "@/types"
import { MemoryDetailHeader } from "@/components/features/memories/memory-detail-header"
import { MemoryContent } from "@/components/features/memories/memory-content"

// MOCK DATA
const relatedMemories: MemoryData[] = [
  {
    id: "4",
    slug: "eid-er-salam",
    title: "ঈদের দিন সালামি জমানো",
    excerpt: "ঈদের দিন সকালে নতুন জামা পরে সবার আগে বের হতাম সালামি জোগাড় করতে...",
    year: "২০০৮",
    district: "চট্টগ্রাম",
    type: "শৈশবের স্মৃতি",
    source: "নিজের স্মৃতি",
    imageUrl: "/assets/memory_placeholder.png",
  },
  {
    id: "5",
    slug: "bristi-te-veja",
    title: "প্রথম বৃষ্টিতে ফুটবল খেলা",
    excerpt: "বৈশাখ মাসের প্রথম বৃষ্টি মানেই পাড়ার সবাই মিলে কাদা মেখে ফুটবল খেলা...",
    year: "২০০১",
    district: "রাজশাহী",
    type: "নিজের স্মৃতি",
    source: "বন্ধুর কাছে শোনা",
    imageUrl: "/assets/memory_placeholder.png",
  },
]

export default function MemoryDetailPage() {
  return (
    <div className="bg-background min-h-screen pb-16">
      <MemoryDetailHeader />

      {/* CONTENT */}
      <div className="container mx-auto -mt-6 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="border-border bg-muted relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-2xl border shadow-lg">
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
