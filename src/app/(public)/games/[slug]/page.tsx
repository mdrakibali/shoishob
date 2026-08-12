import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Clock, Users, ArrowRight, Share2, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { GameCard, type GameData } from "@/components/shared/game-card"
import { MemoryCard, type MemoryData } from "@/components/shared/memory-card"

// MOCK DATA
const relatedGames: GameData[] = [
  {
    id: "2",
    slug: "dariabandha",
    title: "দাঁড়িয়াবান্ধা",
    description: "মাটিতে দাগ কেটে ঘর তৈরি করে দুই দলের মধ্যে খেলা হয়।",
    timePeriod: "1990s–2000s",
    players: "8–10 জন",
    imageUrl: "/assets/game_placeholder.png",
  },
  {
    id: "6",
    slug: "bouchi",
    title: "বউচি",
    description: "একজন 'বউ' থাকে যাকে নির্দিষ্ট একটি ঘর থেকে আরেক ঘরে নিরাপদে পৌঁছে দেওয়ার খেলা।",
    timePeriod: "1990s–2000s",
    players: "8–12 জন",
    imageUrl: "/assets/game_placeholder.png",
  },
]

const memories: MemoryData[] = [
  {
    id: "1",
    slug: "bikel-holei-mathe",
    title: "বিকেল হলেই আমরা মাঠে চলে যেতাম",
    excerpt: "স্কুল ছুটি হলেই ব্যাগটা কোনোমতে ঘরে রেখেই দৌড় দিতাম মাঠে...",
    year: "২০০৩",
    district: "গাজীপুর",
    type: "নিজের স্মৃতি",
    source: "নিজের স্মৃতি",
    imageUrl: "/assets/memory_placeholder.png",
  },
]

export default function GameDetailPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* HEADER HERO */}
      <div className="bg-surface border-border border-b pt-8 pb-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/games">Games</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-foreground font-medium">গোল্লাছুট</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mb-8 flex flex-col items-start gap-8 md:flex-row md:items-end">
            <div className="flex-1">
              <h1 className="text-foreground mb-4 font-serif text-5xl font-bold md:text-6xl">
                গোল্লাছুট
              </h1>

              <div className="text-secondary-foreground flex flex-wrap items-center gap-6 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 text-primary rounded-full p-2">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs tracking-wider uppercase">সময়</p>
                    <p className="text-foreground">1990s–2000s</p>
                  </div>
                </div>

                <Separator orientation="vertical" className="hidden h-10 sm:block" />

                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 text-primary rounded-full p-2">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs tracking-wider uppercase">
                      খেলোয়াড়
                    </p>
                    <p className="text-foreground">6–12 জন</p>
                  </div>
                </div>

                <Separator orientation="vertical" className="hidden h-10 sm:block" />

                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 text-primary rounded-full p-2">
                    <Info className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs tracking-wider uppercase">ধরন</p>
                    <p className="text-foreground">Outdoor</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full gap-3 md:w-auto">
              <Button className="flex-1 md:flex-none" variant="outline">
                <Share2 className="mr-2 h-4 w-4" /> শেয়ার
              </Button>
            </div>
          </div>

          <div className="border-border relative aspect-video w-full overflow-hidden rounded-2xl border shadow-lg">
            <Image
              src="/assets/game_placeholder.png"
              alt="গোল্লাছুট"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* CONTENT SECTIONS */}
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-a:text-primary max-w-none">
          <h2 className="text-foreground text-3xl font-bold">গোল্লাছুট কী?</h2>
          <p className="text-secondary-foreground text-lg leading-relaxed">
            গোল্লাছুট বাংলাদেশের একটি অন্যতম জনপ্রিয় গ্রামীণ খেলা। এই খেলায় দল বেঁধে দৌড়াদৌড়ি করতে
            হয়। মাঠের এক প্রান্তে একটি ছোট গোল ঘর (গোল্লা) থাকে, আর সেখান থেকে নির্দিষ্ট দূরত্বে
            একটি বড় সীমানা থাকে। এই খেলায় একজন 'রাজা' থাকে, যার কাজ হলো প্রতিপক্ষের ছোঁয়া থেকে
            বাঁচিয়ে সীমানার বাইরে যাওয়া।
          </p>

          <div className="my-12"></div>

          <h2 className="text-foreground text-3xl font-bold">কী কী লাগবে?</h2>
          <ul className="text-secondary-foreground">
            <li>একটি উন্মুক্ত মাঠ বা বড় ফাঁকা জায়গা</li>
            <li>মাটিতে দাগ কাটার জন্য একটি কাঠি বা চক</li>
            <li>৬ থেকে ১২ জন খেলোয়াড় (দুই দলে বিভক্ত)</li>
          </ul>

          <div className="my-12"></div>

          <h2 className="text-foreground text-3xl font-bold">কীভাবে খেলতে হয়?</h2>

          <div className="not-prose my-8 space-y-6">
            <div className="flex gap-4">
              <div className="bg-primary text-primary-foreground flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl font-serif text-xl font-bold shadow-sm">
                01
              </div>
              <div>
                <h4 className="text-foreground mb-1 text-lg font-bold">দলের গঠন</h4>
                <p className="text-secondary-foreground">
                  খেলোয়াড়রা সমান দুই ভাগে বিভক্ত হয়ে দুটি দল গঠন করে। টসের মাধ্যমে ঠিক করা হয় কোন দল
                  আগে 'রাজা' হবে আর কোন দল 'চোর' (পাহারাদার) হবে।
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-primary text-primary-foreground flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl font-serif text-xl font-bold shadow-sm">
                02
              </div>
              <div>
                <h4 className="text-foreground mb-1 text-lg font-bold">মাঠ তৈরি</h4>
                <p className="text-secondary-foreground">
                  মাঠের এক প্রান্তে একটি ছোট বৃত্ত আঁকা হয় যাকে 'গোল্লা' বলা হয়। সেখান থেকে ২৫-৩০
                  হাত দূরে একটি সীমানা রেখা টানা হয়।
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-primary text-primary-foreground flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl font-serif text-xl font-bold shadow-sm">
                03
              </div>
              <div>
                <h4 className="text-foreground mb-1 text-lg font-bold">খেলার শুরু</h4>
                <p className="text-secondary-foreground">
                  আক্রমণকারী দলের সবাই গোল্লার ভেতরে থাকে। এদের মধ্যে একজন হয় 'রাজা'। প্রতিপক্ষ দলের
                  খেলোয়াড়রা মাঠের চারদিকে ছড়িয়ে থাকে পাহারাদার হিসেবে।
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-primary text-primary-foreground flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl font-serif text-xl font-bold shadow-sm">
                04
              </div>
              <div>
                <h4 className="text-foreground mb-1 text-lg font-bold">রাজার দৌড়</h4>
                <p className="text-secondary-foreground">
                  রাজাকে নিরাপদে পাহারাদারদের চোখ এড়িয়ে বা ফাঁকি দিয়ে সীমানা রেখা পার হতে হয়। রাজা
                  সীমানা পার হতে পারলে দল জয়ী হয়। কিন্তু রাজা পার হওয়ার আগে পাহারাদার কাউকে ছুঁয়ে
                  দিলে সে আউট হয়ে যায়।
                </p>
              </div>
            </div>
          </div>

          <div className="my-12"></div>

          <div className="bg-surface border-border mb-12 rounded-2xl border p-8">
            <h2 className="text-foreground mt-0 mb-2 text-2xl font-bold">
              আমাদের এলাকায় একে কী নামে ডাকত?
            </h2>
            <p className="text-secondary-foreground mb-6">
              বাংলাদেশের বিভিন্ন অঞ্চলে গোল্লাছুট বিভিন্ন নামে পরিচিত। কোথাও একে "বউচি" বা
              "চোর-পুলিশ" এর ভিন্ন রূপ হিসেবে খেলা হতো।
            </p>
            <Button asChild className="bg-primary hover:bg-primary-hover text-primary-foreground">
              <Link href="/submit">আপনার এলাকার নিয়ম বা স্মৃতি যোগ করুন</Link>
            </Button>
          </div>
        </div>

        <Separator className="my-16" />

        <div className="mb-16">
          <h2 className="text-foreground mb-8 font-serif text-3xl font-bold">
            এই খেলা নিয়ে মানুষের স্মৃতি
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {memories.map((memory) => (
              <MemoryCard key={memory.id} memory={memory} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-foreground mb-8 font-serif text-3xl font-bold">এই সময়ের আরও খেলা</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {relatedGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
