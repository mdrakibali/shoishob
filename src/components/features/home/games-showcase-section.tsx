import Link from "next/link"
import { GameCard } from "@/components/shared/game-card"
import { type GameData } from "@/types"
import { PageSection, SectionHeader } from "@/components/ui/section"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

export function GamesShowcaseSection({ games }: { games: GameData[] }) {
  return (
    <PageSection className="bg-background">
      <SectionHeader 
        title="হারিয়ে যাওয়া খেলাগুলো"
        description="যে খেলাগুলো আমাদের বিকেলগুলোকে ভরে রাখত, ডিজিটাল যুগে হারিয়ে যাওয়ার আগেই সংরক্ষণ করুন"
        action={
          <Button variant="outline" asChild className="shrink-0">
            <Link href="/games">সব খেলা দেখুন</Link>
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
          {games.map((game) => (
            <CarouselItem key={game.id} className="pl-4 md:basis-1/2 md:pl-6 lg:basis-1/3">
              <GameCard game={game} />
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
