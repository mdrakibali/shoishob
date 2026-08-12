import Link from "next/link"

import { Button } from "@/components/ui/button"
import { GameCard } from "@/components/shared/game-card"
import { GamesShowcaseSectionProps } from "@/types"

export function GamesShowcaseSection({ games }: GamesShowcaseSectionProps) {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-border mb-8 flex flex-col justify-between gap-4 border-b pb-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-foreground font-serif text-3xl font-bold md:text-4xl">
              হারিয়ে যাওয়া খেলাগুলো
            </h2>
            <p className="text-muted-foreground mt-2 text-lg">
              যে খেলাগুলো আমাদের বিকেলগুলোকে ভরে রাখত, ডিজিটাল যুগে হারিয়ে যাওয়ার আগেই সংরক্ষণ করুন
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}

          {/* Minimalist CTA instead of the bordered container */}
          <div className="flex h-full flex-col justify-center gap-4 py-12 px-6">
            <h3 className="text-foreground font-serif text-xl font-bold">
              আপনার এলাকার খেলা যোগ করুন
            </h3>
            <p className="text-muted-foreground text-sm">
              আপনার অঞ্চলে এমন কোনো খেলা ছিল যা এখন আর দেখা যায় না?
            </p>
            <Button
              asChild
              variant="outline"
              className="rounded-none border-border w-fit"
            >
              <Link href="/submit">খেলা যোগ করুন</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button
            variant="ghost"
            asChild
            className="text-foreground hover:text-foreground hover:bg-muted"
          >
            <Link href="/games">
              সব খেলা দেখুন
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
