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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MemoryCard, type MemoryData } from "@/components/shared/memory-card"

// MOCK DATA
const relatedMemories: MemoryData[] = [
  { id: "4", slug: "eid-er-salam", title: "ঈদের দিন সালামি জমানো", excerpt: "ঈদের দিন সকালে নতুন জামা পরে সবার আগে বের হতাম সালামি জোগাড় করতে...", year: "২০০৮", district: "চট্টগ্রাম", type: "শৈশবের স্মৃতি", source: "নিজের স্মৃতি", imageUrl: "/assets/memory_placeholder.png" },
  { id: "5", slug: "bristi-te-veja", title: "প্রথম বৃষ্টিতে ফুটবল খেলা", excerpt: "বৈশাখ মাসের প্রথম বৃষ্টি মানেই পাড়ার সবাই মিলে কাদা মেখে ফুটবল খেলা...", year: "২০০১", district: "রাজশাহী", type: "নিজের স্মৃতি", source: "বন্ধুর কাছে শোনা", imageUrl: "/assets/memory_placeholder.png" },
]

export default function MemoryDetailPage() {
  return (
    <div className="bg-background min-h-screen pb-16">
      
      {/* HEADER HERO */}
      <div className="bg-surface border-b border-border pt-8 pb-12">
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
                <BreadcrumbPage className="font-medium text-foreground line-clamp-1">বিকেল হলেই আমরা মাঠে চলে যেতাম</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex flex-col mb-8">
            <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground mb-4">
              <span className="flex items-center gap-1.5 bg-background px-3 py-1 rounded-full border border-border">
                <Calendar className="h-4 w-4" /> 2003
              </span>
              <span className="flex items-center gap-1.5 bg-background px-3 py-1 rounded-full border border-border">
                <MapPin className="h-4 w-4" /> Gazipur
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-[1.2]">
              বিকেল হলেই আমরা মাঠে চলে যেতাম
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border border-border">
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">SM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-foreground">সংরক্ষণ করেছেন: শাফায়াত মাহমুদ</p>
                  <p className="text-xs text-muted-foreground italic flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span>
                    উৎস: নিজের স্মৃতি
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="h-9 w-9 border-border">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-9 w-9 border-border">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* CONTENT */}
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-6">
        
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border border-border mb-12 bg-muted">
          <Image
            src="/assets/memory_placeholder.png"
            alt="বিকেল হলেই আমরা মাঠে চলে যেতাম"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          <div className="md:col-span-8">
            <div className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-a:text-primary max-w-none text-secondary-foreground leading-relaxed">
              <p>
                ২০০৩ সালের কথা। তখন মোবাইল ফোন বা ইন্টারনেটের এতো ছড়াছড়ি ছিল না। আমাদের বিকেলগুলো কাটত পাড়ার মাঠে। স্কুল ছুটি হলেই ব্যাগটা কোনোমতে ঘরে রেখেই দৌড় দিতাম মাঠে। 
              </p>
              <p>
                মাঠে গিয়ে দেখতাম অনেকেই চলে এসেছে। শুরু হতো গোল্লাছুট বা কাবাডি। মাঝে মাঝে ক্রিকেট খেলা হতো। তবে আমাদের সবচেয়ে পছন্দের ছিল গোল্লাছুট। কারণ এই খেলায় দৌড়াতে হতো প্রচুর আর কোনো সরঞ্জাম লাগত না। 
              </p>
              <p>
                মাঠের পাশেই ছিল একটা বড় কড়ই গাছ। ক্লান্ত হয়ে গেলে আমরা সবাই ওই গাছের নিচে বসতাম। কেউ একজন হয়তো একটা আইসক্রিম কিনে আনত। এক টাকার সেই আইসক্রিম ভাগ করে খাওয়ার মজা এখনকার কোনো দামি রেস্টুরেন্টে পাওয়া যায় না।
              </p>
              <p>
                সন্ধ্যা নামার সাথে সাথে যখন মাখরিবে আযান দিত, তখন আমরা বুঝতে পারতাম এবার বাসায় ফেরার পালা। না হলে মায়ের বকা শুনতে হবে। ধুলোমাখা শরীরে বাসায় ফিরে মায়ের বকুনি খাওয়াটাও ছিল আমাদের প্রতিদিনের রুটিন।
              </p>
              <p>
                আজ সেই মাঠের জায়গায় একটা বড় বিল্ডিং উঠেছে। সেই কড়ই গাছটাও আর নেই। কিন্তু আমার মনের পাতায় সেই বিকেলের স্মৃতিগুলো আজও জ্বলজ্বল করছে।
              </p>
            </div>
            
            <Separator className="my-10" />
            
            {/* COMMENTS SECTION */}
            <div id="comments">
              <div className="flex items-center gap-2 mb-8">
                <MessageCircle className="h-6 w-6 text-primary" />
                <h3 className="font-serif text-2xl font-bold text-foreground">এই স্মৃতি নিয়ে কথা বলুন (৩)</h3>
              </div>
              
              <div className="bg-surface p-6 rounded-xl border border-border mb-8 flex flex-col items-center justify-center text-center">
                <p className="text-muted-foreground mb-4">মন্তব্য করতে লগইন করুন</p>
                <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                  লগইন করুন
                </Button>
              </div>
              
              <div className="space-y-6">
                
                {/* COMMENT THREAD */}
                <div className="flex gap-4">
                  <Avatar className="h-10 w-10 border border-border">
                    <AvatarFallback className="bg-secondary text-secondary-foreground">RD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="bg-surface p-4 rounded-xl border border-border rounded-tl-none">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-semibold text-sm text-foreground">Rahimul Deep</p>
                        <p className="text-xs text-muted-foreground">২ দিন আগে</p>
                      </div>
                      <p className="text-sm text-secondary-foreground">
                        একদম ঠিক কথা বলেছেন! আমাদের এলাকার মাঠটাও এখন দখল হয়ে গেছে। সেই বিকেলগুলো আসলেই খুব মিস করি।
                      </p>
                    </div>
                    <div className="flex gap-4 mt-2 ml-2">
                      <button className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">Upvote (12)</button>
                      <button className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">Reply</button>
                    </div>
                    
                    {/* REPLY */}
                    <div className="flex gap-4 mt-4 ml-8">
                      <Avatar className="h-8 w-8 border border-border">
                        <AvatarFallback className="bg-primary/10 text-primary">SM</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="bg-background p-3 rounded-xl border border-border rounded-tl-none">
                          <div className="flex justify-between items-start mb-1">
                            <p className="font-semibold text-xs text-foreground">শাফায়াত মাহমুদ <span className="bg-primary text-primary-foreground text-[10px] px-1.5 py-0.5 rounded ml-1">Author</span></p>
                            <p className="text-[10px] text-muted-foreground">১ দিন আগে</p>
                          </div>
                          <p className="text-xs text-secondary-foreground">
                            ধন্যবাদ ভাই। আমাদের সবার গল্পই আসলে অনেকটা একই রকম।
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* ANOTHER COMMENT */}
                <div className="flex gap-4">
                  <Avatar className="h-10 w-10 border border-border">
                    <AvatarFallback className="bg-secondary text-secondary-foreground">TS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="bg-surface p-4 rounded-xl border border-border rounded-tl-none">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-semibold text-sm text-foreground">Tania Sultana</p>
                        <p className="text-xs text-muted-foreground">৫ দিন আগে</p>
                      </div>
                      <p className="text-sm text-secondary-foreground">
                        কড়ই গাছের নিচে এক টাকার আইসক্রিমের কথা মনে করিয়ে দিলেন! আমরাও এরকম খেতাম।
                      </p>
                    </div>
                    <div className="flex gap-4 mt-2 ml-2">
                      <button className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">Upvote (5)</button>
                      <button className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">Reply</button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
          
          <div className="md:col-span-4">
            <div className="sticky top-24 bg-surface p-6 rounded-xl border border-border shadow-sm">
              <h3 className="font-serif font-bold text-lg mb-4 pb-2 border-b border-border">স্মৃতির তথ্য</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">সময়কাল</p>
                  <p className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" /> ২০০৩
                  </p>
                </div>
                
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">স্থান</p>
                  <p className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" /> গাজীপুর, বাংলাদেশ
                  </p>
                </div>
                
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">ধরন</p>
                  <p className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Tag className="h-4 w-4 text-primary" /> শৈশবের স্মৃতি
                  </p>
                </div>
                
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">উৎস</p>
                  <p className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" /> নিজের স্মৃতি
                  </p>
                </div>
              </div>
              
              <Button asChild className="w-full mt-8 bg-primary hover:bg-primary-hover text-primary-foreground">
                <Link href="/submit">আপনার এমন স্মৃতি যোগ করুন</Link>
              </Button>
            </div>
          </div>
          
        </div>
        
        <div className="mt-20">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">এমন আরও স্মৃতি</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedMemories.map(memory => (
              <MemoryCard key={memory.id} memory={memory} />
            ))}
          </div>
        </div>
        
      </div>
    </div>
  )
}
