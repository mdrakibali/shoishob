import Link from "next/link"
import { MemoryCard } from "@/components/shared/memory-card"
import { type MemoryData } from "@/types"
import { PageSection, SectionHeader } from "@/components/ui/section"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

export function RecentMemoriesSection({ memories }: { memories: MemoryData[] }) {
  return (
    <PageSection className="bg-background">
      <SectionHeader 
        title="সাম্প্রতিক স্মৃতি"
        description="আমাদের আর্কাইভের নতুন যুক্ত হওয়া স্মৃতিগুলো পড়ুন"
        action={
          <Button variant="outline" asChild className="shrink-0">
            <Link href="/explore">সব স্মৃতি দেখুন</Link>
          </Button>
        }
      />
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          {memories.map((memory) => (
            <CarouselItem key={memory.id} className="pl-4 md:basis-1/2 md:pl-6 lg:basis-1/3">
              <MemoryCard memory={memory} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-8 flex justify-end gap-2 pr-4">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </PageSection>
  )
}
