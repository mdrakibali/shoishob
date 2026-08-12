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
    excerpt: "স্কুল ছুটি হলেই ব্যাগটা কোনোমতে ঘরে রেখেই দৌড় দিতাম মাঠে। যতক্ষণ মা এসে বকা না দিত, ততক্ষণ গোল্লাছুট আর কাবাডি চলত...",
    year: "২০০৩",
    district: "গাজীপুর",
    type: "নিজের স্মৃতি",
    source: "নিজের স্মৃতি",
    imageUrl: "/assets/memory_placeholder.png"
  },
  {
    id: "2",
    slug: "load-shedding-er-raat",
    title: "বিদ্যুৎ চলে গেলে সবাই বাইরে বের হতাম",
    excerpt: "তখন তো এত আইপিএস ছিল না। কারেন্ট গেলেই পাড়ার সব ছেলেপুলে রাস্তায় নেমে আসত। ল্যাম্পপোস্টের নিচে বসে কত ভূতের গল্প...",
    year: "১৯৯৮",
    district: "ঢাকা",
    type: "শৈশবের স্মৃতি",
    source: "বড় ভাইয়ের কাছে শোনা",
    imageUrl: "/assets/memory_placeholder.png"
  },
  {
    id: "3",
    slug: "school-er-shei-jhalmuri",
    title: "স্কুল গেটের সেই ঝালমুড়ি আর আচার",
    excerpt: "দুই টাকায় এক ঠোঙা ঝালমুড়ি পাওয়া যেত। স্কুলের টিফিনের টাকা জমিয়ে আমরা সবাই মিলে সেই ঝালমুড়ি কিনে ভাগ করে খেতাম...",
    year: "২০০৫",
    district: "সিলেট",
    type: "একটি জায়গা",
    source: "নিজের স্মৃতি",
    imageUrl: "/assets/memory_placeholder.png"
  }
]

const popularGames: GameData[] = [
  {
    id: "1",
    slug: "gollachhut",
    title: "গোল্লাছুট",
    description: "দল বেঁধে খেলার এক অন্যতম মজাদার গ্রামীণ খেলা, যেখানে একজন 'রাজা' থাকে আর বাকিরা তাকে রক্ষা করে দৌড়ে নির্দিষ্ট স্থানে যাওয়ার চেষ্টা করে।",
    timePeriod: "1990s–2000s",
    players: "6–12 জন",
    imageUrl: "/assets/game_placeholder.png"
  }
]

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-background pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#E5E0D6_1px,transparent_1px),linear-gradient(to_bottom,#E5E0D6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
        <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            
            <div className="flex flex-col items-start max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                <Sparkles className="mr-2 h-4 w-4" />
                ডিজিটাল আর্কাইভ
              </div>
              <h1 className="font-serif text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl mb-6 leading-[1.1]">
                আমাদের <span className="text-primary">শৈশব</span>
              </h1>
              <p className="text-xl md:text-2xl font-serif text-secondary-foreground mb-4 font-medium">
                "যা আজ স্মৃতি, তা কাল ইতিহাস।"
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
                বাংলাদেশের বিভিন্ন প্রজন্মের খেলা, গল্প, জায়গা আর ছোট ছোট স্মৃতি এক জায়গায় সংরক্ষণ করুন। ভবিষ্যৎ প্রজন্মের জন্য রেখে যান আপনার ফেলে আসা শৈশব।
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button size="lg" asChild className="bg-primary hover:bg-primary-hover text-primary-foreground text-base h-12 px-8">
                  <Link href="/explore">শৈশব আবিষ্কার করুন</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-border text-foreground hover:bg-secondary h-12 px-8">
                  <Link href="/submit">আমার স্মৃতি যোগ করুন</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] md:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border rotate-2 hover:rotate-0 transition-transform duration-500 bg-muted">
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
      <section className="py-20 bg-surface border-y border-border">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              কোন সময়ের শৈশব দেখতে চান?
            </h2>
            <p className="text-muted-foreground">আপনার প্রিয় দশক বেছে নিন</p>
          </div>
          
          <div className="flex justify-center">
            <div className="inline-flex p-1 space-x-1 bg-background rounded-full border border-border/50 shadow-sm overflow-x-auto max-w-full">
              {['1990s', '2000s', '2010s', '2020s', '2026'].map((decade, idx) => (
                <button
                  key={decade}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    idx === 1 
                      ? 'bg-primary text-primary-foreground shadow-md' 
                      : 'text-secondary-foreground hover:text-foreground hover:bg-secondary/50'
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
      <section className="py-24 bg-background">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                সম্প্রতি সংরক্ষিত স্মৃতি
              </h2>
              <p className="text-muted-foreground text-lg">
                অন্যদের ফেলে আসা দিনের গল্পগুলো পড়ুন।
              </p>
            </div>
            <Button variant="ghost" asChild className="text-primary hover:text-primary-hover hover:bg-transparent px-0 group">
              <Link href="/explore">
                সব স্মৃতি দেখুন 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentMemories.map(memory => (
              <MemoryCard key={memory.id} memory={memory} />
            ))}
          </div>
        </div>
      </section>

      {/* GAMES SHOWCASE */}
      <section className="py-24 bg-surface border-y border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                হারিয়ে যাওয়া খেলাগুলো
              </h2>
              <p className="text-muted-foreground text-lg">
                যে খেলাগুলো আমাদের বিকেলগুলোকে ভরে রাখত। ডিজিটাল যুগে হারিয়ে যাওয়ার আগেই সংরক্ষণ করুন।
              </p>
            </div>
            <Button variant="ghost" asChild className="text-primary hover:text-primary-hover hover:bg-transparent px-0 group shrink-0">
              <Link href="/games">
                সব খেলা দেখুন 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {popularGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
            
            <div className="flex flex-col justify-center items-center p-8 border-2 border-dashed border-border rounded-xl bg-background/50 hover:bg-background transition-colors text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">আপনার এলাকার খেলা যোগ করুন</h3>
              <p className="text-muted-foreground mb-6 max-w-sm">আপনার অঞ্চলে এমন কোনো খেলা ছিল যা এখন আর দেখা যায় না?</p>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <Link href="/submit">খেলা যোগ করুন</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTRIBUTION CTA */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            আপনার শৈশবও এখানে রেখে যান
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
            আপনার কাছে হয়তো এটা শুধু একটা ছোট স্মৃতি। কিন্তু ভবিষ্যৎ প্রজন্মের কাছে সেটাই হতে পারে ইতিহাস।
          </p>
          <Button size="lg" asChild className="bg-background text-primary hover:bg-background/90 text-lg h-14 px-10 rounded-full shadow-xl hover:scale-105 transition-transform duration-300">
            <Link href="/submit">স্মৃতি যোগ করুন</Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
