import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { GameCard, type GameData } from "@/components/shared/game-card"
import { MemoryCard, type MemoryData } from "@/components/shared/memory-card"
import { Button } from "@/components/ui/button"

const recentMemories: MemoryData[] = [
  {
    id: "1",
    slug: "bikel-holei-mathe",
    title: "বিকেল হলেই আমরা মাঠে চলে যেতাম",
    excerpt:
      "স্কুল ছুটি হলেই ব্যাগটা কোনোমতে ঘরে রেখেই দৌড় দিতাম মাঠে। যতক্ষণ মা এসে বকা না দিত, ততক্ষণ গোল্লাছুট আর কাবাডি চলত...",
    year: "২০০৩",
    district: "গাজীপুর",
    type: "নিজের স্মৃতি",
    source: "নিজের স্মৃতি",
    imageUrl: "/assets/memory_placeholder.png",
  },
  {
    id: "2",
    slug: "load-shedding-er-raat",
    title: "বিদ্যুৎ চলে গেলে সবাই বাইরে বের হতাম",
    excerpt:
      "তখন তো এত আইপিএস ছিল না। কারেন্ট গেলেই পাড়ার সব ছেলেপুলে রাস্তায় নেমে আসত। ল্যাম্পপোস্টের নিচে বসে কত ভূতের গল্প...",
    year: "১৯৯৮",
    district: "ঢাকা",
    type: "শৈশবের স্মৃতি",
    source: "বড় ভাইয়ের কাছে শোনা",
    imageUrl: "/assets/memory_placeholder.png",
  },
  {
    id: "3",
    slug: "school-er-shei-jhalmuri",
    title: "স্কুল গেটের সেই ঝালমুড়ি আর আচার",
    excerpt:
      "দুই টাকায় এক ঠোঙা ঝালমুড়ি পাওয়া যেত। স্কুলের টিফিনের টাকা জমিয়ে আমরা সবাই মিলে সেই ঝালমুড়ি কিনে ভাগ করে খেতাম...",
    year: "২০০৫",
    district: "সিলেট",
    type: "একটি জায়গা",
    source: "নিজের স্মৃতি",
    imageUrl: "/assets/memory_placeholder.png",
  },
]

const popularGames: GameData[] = [
  {
    id: "1",
    slug: "gollachhut",
    title: "গোল্লাছুট",
    description:
      "দল বেঁধে খেলার এক অন্যতম মজাদার গ্রামীণ খেলা, যেখানে একজন 'রাজা' থাকে আর বাকিরা তাকে রক্ষা করে দৌড়ে নির্দিষ্ট স্থানে যাওয়ার চেষ্টা করে।",
    timePeriod: "1990s–2000s",
    players: "6–12 জন",
    imageUrl: "/assets/game_placeholder.png",
  },
]

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      {/* HERO SECTION */}
      <section className="bg-background relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#E5E0D6_1px,transparent_1px),linear-gradient(to_bottom,#E5E0D6_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:4rem_4rem] opacity-30"></div>
        <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex max-w-2xl flex-col items-start">
              <div className="border-primary/20 bg-primary/10 text-primary mb-6 inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">
                <Sparkles className="mr-2 h-4 w-4" />
                ডিজিটাল আর্কাইভ
              </div>
              <h1 className="text-foreground mb-6  text-5xl leading-[1.1] font-bold tracking-tight sm:text-6xl md:text-7xl">
                আমাদের <span className="text-primary">শৈশব</span>
              </h1>
              <p className="text-secondary-foreground mb-4  text-xl font-medium md:text-2xl">
                "যা আজ স্মৃতি, তা কাল ইতিহাস।"
              </p>
              <p className="text-muted-foreground mb-10 max-w-lg text-base leading-relaxed md:text-lg">
                বাংলাদেশের বিভিন্ন প্রজন্মের খেলা, গল্প, জায়গা আর ছোট ছোট স্মৃতি এক জায়গায় সংরক্ষণ
                করুন। ভবিষ্যৎ প্রজন্মের জন্য রেখে যান আপনার ফেলে আসা শৈশব।
              </p>
              <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary-hover text-primary-foreground h-12 px-8 text-base"
                >
                  <Link href="/explore">শৈশব আবিষ্কার করুন</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-border text-foreground hover:bg-secondary h-12 px-8"
                >
                  <Link href="/submit">আমার স্মৃতি যোগ করুন</Link>
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="ring-border bg-muted relative aspect-[4/5] w-full rotate-2 overflow-hidden rounded-2xl shadow-2xl ring-1 transition-transform duration-500 hover:rotate-0 md:aspect-square">
                <Image
                  src="/assets/hero_collage.png"
                  alt="Bangladeshi childhood collage"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIME TRAVEL / TIMELINE */}
      <section className="bg-surface border-border border-y py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-foreground mb-4  text-3xl font-bold md:text-4xl">
              কোন সময়ের শৈশব দেখতে চান?
            </h2>
            <p className="text-muted-foreground">আপনার প্রিয় দশক বেছে নিন</p>
          </div>

          <div className="flex justify-center">
            <div className="bg-background border-border/50 inline-flex max-w-full space-x-1 overflow-x-auto rounded-full border p-1 shadow-sm">
              {["1990s", "2000s", "2010s", "2020s", "2026"].map((decade, idx) => (
                <button
                  key={decade}
                  className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                    idx === 1
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-secondary-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {decade}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RECENT MEMORIES */}
      <section className="bg-background py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-foreground mb-3  text-3xl font-bold md:text-4xl">
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
            {recentMemories.map((memory) => (
              <MemoryCard key={memory.id} memory={memory} />
            ))}
          </div>
        </div>
      </section>

      {/* GAMES SHOWCASE */}
      <section className="bg-surface border-border relative overflow-hidden border-y py-24">
        <div className="bg-accent/10 pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full blur-3xl"></div>
        <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-foreground mb-3  text-3xl font-bold md:text-4xl">
                হারিয়ে যাওয়া খেলাগুলো
              </h2>
              <p className="text-muted-foreground text-lg">
                যে খেলাগুলো আমাদের বিকেলগুলোকে ভরে রাখত। ডিজিটাল যুগে হারিয়ে যাওয়ার আগেই সংরক্ষণ
                করুন।
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
            {popularGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}

            <div className="border-border bg-background/50 hover:bg-background flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 text-center transition-colors">
              <div className="bg-secondary mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <Sparkles className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-foreground mb-2  text-xl font-bold">
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

      {/* CONTRIBUTION CTA */}
      <section className="bg-primary text-primary-foreground relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6  text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
            আপনার শৈশবও এখানে রেখে যান
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed opacity-90 md:text-2xl">
            আপনার কাছে হয়তো এটা শুধু একটা ছোট স্মৃতি। কিন্তু ভবিষ্যৎ প্রজন্মের কাছে সেটাই হতে পারে
            ইতিহাস।
          </p>
          <Button
            size="lg"
            asChild
            className="bg-background text-primary hover:bg-background/90 h-14 rounded-full px-10 text-lg shadow-xl transition-transform duration-300 hover:scale-105"
          >
            <Link href="/submit">স্মৃতি যোগ করুন</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
