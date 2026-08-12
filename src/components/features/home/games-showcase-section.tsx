import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GameCard } from "@/components/shared/game-card"
import { type GameData } from "@/types"

interface GamesShowcaseSectionProps {
  games: GameData[]
}

export function GamesShowcaseSection({ games }: GamesShowcaseSectionProps) {
  return (
    <section className="bg-surface border-border relative overflow-hidden border-y py-24">
      <div className="bg-accent/10 pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full blur-3xl"></div>
      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-foreground mb-3 font-serif text-3xl font-bold md:text-4xl">
              হারিয়ে যাওয়া খেলাগুলো
            </h2>
            <p className="text-muted-foreground text-lg">
              যে খেলাগুলো আমাদের বিকেলগুলোকে ভরে রাখত। ডিজিটাল যুগে হারিয়ে যাওয়ার আগেই সংরক্ষণ করুন।
            </p>
          </div>
          <Button
            variant="ghost"
            asChild
            className="text-primary hover:text-primary-hover group shrink-0 px-0 hover:bg-transparent"
          >
            <Link href="/games">
              সব খেলা দেখুন
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}

          <div className="border-border bg-background/50 hover:bg-background flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 text-center transition-colors">
            <div className="bg-secondary mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <Sparkles className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-foreground mb-2 font-serif text-xl font-bold">
              আপনার এলাকার খেলা যোগ করুন
            </h3>
            <p className="text-muted-foreground mb-6 max-w-sm">
              আপনার অঞ্চলে এমন কোনো খেলা ছিল যা এখন আর দেখা যায় না?
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5"
            >
              <Link href="/submit">খেলা যোগ করুন</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
