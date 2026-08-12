import Link from "next/link"
import { Calendar, MapPin, Tag, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MemoryComments } from "@/components/features/memories/memory-comments"

export function MemoryContent() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
      <div className="md:col-span-8">
        <div className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-a:text-primary text-secondary-foreground max-w-none leading-relaxed">
          <p>
            ২০০৩ সালের কথা। তখন মোবাইল ফোন বা ইন্টারনেটের এতো ছড়াছড়ি ছিল না। আমাদের বিকেলগুলো কাটত
            পাড়ার মাঠে। স্কুল ছুটি হলেই ব্যাগটা কোনোমতে ঘরে রেখেই দৌড় দিতাম মাঠে।
          </p>
          <p>
            মাঠে গিয়ে দেখতাম অনেকেই চলে এসেছে। শুরু হতো গোল্লাছুট বা কাবাডি। মাঝে মাঝে ক্রিকেট খেলা
            হতো। তবে আমাদের সবচেয়ে পছন্দের ছিল গোল্লাছুট। কারণ এই খেলায় দৌড়াতে হতো প্রচুর আর কোনো
            সরঞ্জাম লাগত না।
          </p>
          <p>
            মাঠের পাশেই ছিল একটা বড় কড়ই গাছ। ক্লান্ত হয়ে গেলে আমরা সবাই ওই গাছের নিচে বসতাম। কেউ
            একজন হয়তো একটা আইসক্রিম কিনে আনত। এক টাকার সেই আইসক্রিম ভাগ করে খাওয়ার মজা এখনকার কোনো
            দামি রেস্টুরেন্টে পাওয়া যায় না।
          </p>
          <p>
            সন্ধ্যা নামার সাথে সাথে যখন মাখরিবে আযান দিত, তখন আমরা বুঝতে পারতাম এবার বাসায় ফেরার
            পালা। না হলে মায়ের বকা শুনতে হবে। ধুলোমাখা শরীরে বাসায় ফিরে মায়ের বকুনি খাওয়াটাও ছিল
            আমাদের প্রতিদিনের রুটিন।
          </p>
          <p>
            আজ সেই মাঠের জায়গায় একটা বড় বিল্ডিং উঠেছে। সেই কড়ই গাছটাও আর নেই। কিন্তু আমার মনের পাতায়
            সেই বিকেলের স্মৃতিগুলো আজও জ্বলজ্বল করছে।
          </p>
        </div>

        <Separator className="my-10" />

        <MemoryComments />
      </div>

      <div className="md:col-span-4">
        <div className="bg-surface border-border sticky top-24 rounded-xl border p-6 shadow-sm">
          <h3 className="border-border mb-4 border-b pb-2 font-serif text-lg font-bold">
            স্মৃতির তথ্য
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-muted-foreground mb-1 text-xs tracking-wider uppercase">সময়কাল</p>
              <p className="text-foreground flex items-center gap-2 text-sm font-medium">
                <Calendar className="text-primary h-4 w-4" /> ২০০৩
              </p>
            </div>

            <div>
              <p className="text-muted-foreground mb-1 text-xs tracking-wider uppercase">স্থান</p>
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
  )
}
