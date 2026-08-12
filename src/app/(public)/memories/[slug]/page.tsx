import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Tag, User, MessageCircle, Heart, Share2 } from "lucide-react"

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
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MemoryCard, type MemoryData } from "@/components/shared/memory-card"

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
      {/* HEADER HERO */}
      <div className="bg-surface border-border border-b pt-8 pb-12">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/explore">Memories</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-foreground line-clamp-1 font-medium">
                  বিকেল হলেই আমরা মাঠে চলে যেতাম
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mb-8 flex flex-col">
            <div className="text-muted-foreground mb-4 flex items-center gap-4 text-sm font-medium">
              <span className="bg-background border-border flex items-center gap-1.5 rounded-full border px-3 py-1">
                <Calendar className="h-4 w-4" /> 2003
              </span>
              <span className="bg-background border-border flex items-center gap-1.5 rounded-full border px-3 py-1">
                <MapPin className="h-4 w-4" /> Gazipur
              </span>
            </div>

            <h1 className="text-foreground mb-6 font-serif text-4xl leading-[1.2] font-bold md:text-5xl">
              বিকেল হলেই আমরা মাঠে চলে যেতাম
            </h1>

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <Avatar className="border-border h-10 w-10 border">
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">
                    SM
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-foreground text-sm font-medium">
                    সংরক্ষণ করেছেন: শাফায়াত মাহমুদ
                  </p>
                  <p className="text-muted-foreground flex items-center gap-1 text-xs italic">
                    <span className="bg-accent inline-block h-1.5 w-1.5 rounded-full"></span>
                    উৎস: নিজের স্মৃতি
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="border-border h-9 w-9">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-border h-9 w-9">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

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

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-a:text-primary text-secondary-foreground max-w-none leading-relaxed">
              <p>
                ২০০৩ সালের কথা। তখন মোবাইল ফোন বা ইন্টারনেটের এতো ছড়াছড়ি ছিল না। আমাদের বিকেলগুলো
                কাটত পাড়ার মাঠে। স্কুল ছুটি হলেই ব্যাগটা কোনোমতে ঘরে রেখেই দৌড় দিতাম মাঠে।
              </p>
              <p>
                মাঠে গিয়ে দেখতাম অনেকেই চলে এসেছে। শুরু হতো গোল্লাছুট বা কাবাডি। মাঝে মাঝে ক্রিকেট
                খেলা হতো। তবে আমাদের সবচেয়ে পছন্দের ছিল গোল্লাছুট। কারণ এই খেলায় দৌড়াতে হতো প্রচুর
                আর কোনো সরঞ্জাম লাগত না।
              </p>
              <p>
                মাঠের পাশেই ছিল একটা বড় কড়ই গাছ। ক্লান্ত হয়ে গেলে আমরা সবাই ওই গাছের নিচে বসতাম। কেউ
                একজন হয়তো একটা আইসক্রিম কিনে আনত। এক টাকার সেই আইসক্রিম ভাগ করে খাওয়ার মজা এখনকার
                কোনো দামি রেস্টুরেন্টে পাওয়া যায় না।
              </p>
              <p>
                সন্ধ্যা নামার সাথে সাথে যখন মাখরিবে আযান দিত, তখন আমরা বুঝতে পারতাম এবার বাসায় ফেরার
                পালা। না হলে মায়ের বকা শুনতে হবে। ধুলোমাখা শরীরে বাসায় ফিরে মায়ের বকুনি খাওয়াটাও ছিল
                আমাদের প্রতিদিনের রুটিন।
              </p>
              <p>
                আজ সেই মাঠের জায়গায় একটা বড় বিল্ডিং উঠেছে। সেই কড়ই গাছটাও আর নেই। কিন্তু আমার মনের
                পাতায় সেই বিকেলের স্মৃতিগুলো আজও জ্বলজ্বল করছে।
              </p>
            </div>

            <Separator className="my-10" />

            {/* COMMENTS SECTION */}
            <div id="comments">
              <div className="mb-8 flex items-center gap-2">
                <MessageCircle className="text-primary h-6 w-6" />
                <h3 className="text-foreground font-serif text-2xl font-bold">
                  এই স্মৃতি নিয়ে কথা বলুন (৩)
                </h3>
              </div>

              <div className="bg-surface border-border mb-8 flex flex-col items-center justify-center rounded-xl border p-6 text-center">
                <p className="text-muted-foreground mb-4">মন্তব্য করতে লগইন করুন</p>
                <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                  লগইন করুন
                </Button>
              </div>

              <div className="space-y-6">
                {/* COMMENT THREAD */}
                <div className="flex gap-4">
                  <Avatar className="border-border h-10 w-10 border">
                    <AvatarFallback className="bg-secondary text-secondary-foreground">
                      RD
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="bg-surface border-border rounded-xl rounded-tl-none border p-4">
                      <div className="mb-2 flex items-start justify-between">
                        <p className="text-foreground text-sm font-semibold">Rahimul Deep</p>
                        <p className="text-muted-foreground text-xs">২ দিন আগে</p>
                      </div>
                      <p className="text-secondary-foreground text-sm">
                        একদম ঠিক কথা বলেছেন! আমাদের এলাকার মাঠটাও এখন দখল হয়ে গেছে। সেই বিকেলগুলো
                        আসলেই খুব মিস করি।
                      </p>
                    </div>
                    <div className="mt-2 ml-2 flex gap-4">
                      <button className="text-muted-foreground hover:text-primary text-xs font-medium transition-colors">
                        Upvote (12)
                      </button>
                      <button className="text-muted-foreground hover:text-primary text-xs font-medium transition-colors">
                        Reply
                      </button>
                    </div>

                    {/* REPLY */}
                    <div className="mt-4 ml-8 flex gap-4">
                      <Avatar className="border-border h-8 w-8 border">
                        <AvatarFallback className="bg-primary/10 text-primary">SM</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="bg-background border-border rounded-xl rounded-tl-none border p-3">
                          <div className="mb-1 flex items-start justify-between">
                            <p className="text-foreground text-xs font-semibold">
                              শাফায়াত মাহমুদ{" "}
                              <span className="bg-primary text-primary-foreground ml-1 rounded px-1.5 py-0.5 text-[10px]">
                                Author
                              </span>
                            </p>
                            <p className="text-muted-foreground text-[10px]">১ দিন আগে</p>
                          </div>
                          <p className="text-secondary-foreground text-xs">
                            ধন্যবাদ ভাই। আমাদের সবার গল্পই আসলে অনেকটা একই রকম।
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ANOTHER COMMENT */}
                <div className="flex gap-4">
                  <Avatar className="border-border h-10 w-10 border">
                    <AvatarFallback className="bg-secondary text-secondary-foreground">
                      TS
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="bg-surface border-border rounded-xl rounded-tl-none border p-4">
                      <div className="mb-2 flex items-start justify-between">
                        <p className="text-foreground text-sm font-semibold">Tania Sultana</p>
                        <p className="text-muted-foreground text-xs">৫ দিন আগে</p>
                      </div>
                      <p className="text-secondary-foreground text-sm">
                        কড়ই গাছের নিচে এক টাকার আইসক্রিমের কথা মনে করিয়ে দিলেন! আমরাও এরকম খেতাম।
                      </p>
                    </div>
                    <div className="mt-2 ml-2 flex gap-4">
                      <button className="text-muted-foreground hover:text-primary text-xs font-medium transition-colors">
                        Upvote (5)
                      </button>
                      <button className="text-muted-foreground hover:text-primary text-xs font-medium transition-colors">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="bg-surface border-border sticky top-24 rounded-xl border p-6 shadow-sm">
              <h3 className="border-border mb-4 border-b pb-2 font-serif text-lg font-bold">
                স্মৃতির তথ্য
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-muted-foreground mb-1 text-xs tracking-wider uppercase">
                    সময়কাল
                  </p>
                  <p className="text-foreground flex items-center gap-2 text-sm font-medium">
                    <Calendar className="text-primary h-4 w-4" /> ২০০৩
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground mb-1 text-xs tracking-wider uppercase">
                    স্থান
                  </p>
                  <p className="text-foreground flex items-center gap-2 text-sm font-medium">
                    <MapPin className="text-primary h-4 w-4" /> গাজীপুর, বাংলাদেশ
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground mb-1 text-xs tracking-wider uppercase">ধরন</p>
                  <p className="text-foreground flex items-center gap-2 text-sm font-medium">
                    <Tag className="text-primary h-4 w-4" /> শৈশবের স্মৃতি
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground mb-1 text-xs tracking-wider uppercase">উৎস</p>
                  <p className="text-foreground flex items-center gap-2 text-sm font-medium">
                    <User className="text-primary h-4 w-4" /> নিজের স্মৃতি
                  </p>
                </div>
              </div>

              <Button
                asChild
                className="bg-primary hover:bg-primary-hover text-primary-foreground mt-8 w-full"
              >
                <Link href="/submit">আপনার এমন স্মৃতি যোগ করুন</Link>
              </Button>
            </div>
          </div>
        </div>

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
