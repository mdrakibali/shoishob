import * as React from "react"
import Link from "next/link"
import { BookOpen, ShieldCheck, History, Eye, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen py-16">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="text-foreground mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            কেন <span className="text-primary">Shoishob</span>?
          </h1>
          <p className="text-muted-foreground text-xl italic md:text-2xl">
            "আমাদের অনেক শৈশবের গল্প কোথাও লেখা নেই।"
          </p>
        </div>

        <div className="prose prose-lg md:prose-xl dark:prose-invert prose-headings: text-secondary-foreground mx-auto mb-16 max-w-none leading-relaxed">
          <p className="text-center font-medium">
            একটি খেলা হারিয়ে যায়।
            <br />
            একটি পাড়ার মাঠ হারিয়ে যায়।
            <br />
            একটি জেনারেশন বড় হয়ে যায়।
          </p>
          <p className="mt-6 text-center">Shoishob সেই ছোট ছোট জিনিসগুলো সংরক্ষণ করতে চায়।</p>

          <div className="my-16"></div>

          <h2 className="text-foreground text-center text-3xl font-bold">আমাদের গল্প</h2>
          <p>
            আমরা খেয়াল করলাম, আমাদের বাবা-দাদাদের আমলের অনেক খেলা, গল্প আর জায়গার কথা আস্তে আস্তে
            হারিয়ে যাচ্ছে। এগুলো কোনো বইয়ে লেখা নেই। গুগল করলে পাওয়া যায় না। অথচ এই ছোট ছোট
            স্মৃতিগুলোই আমাদের সংস্কৃতির এক বিশাল অংশ।
          </p>
          <p>
            আমরা এমন একটা ডিজিটাল আর্কাইভ বানাতে চাই যেখানে আগামী ২০৪৫ সালের একটা মানুষ এসে দেখতে
            পারবে, ২০০০ সালে বা তারও আগে বাংলাদেশের ছেলেমেয়েরা কীভাবে তাদের শৈশব কাটাতো।
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-surface border-border rounded-2xl border p-8">
            <BookOpen className="text-primary mb-4 h-8 w-8" />
            <h3 className="text-foreground mb-3 text-2xl font-bold">কীভাবে কাজ করে?</h3>
            <p className="text-secondary-foreground">
              যে কেউ এখানে তাদের শৈশবের স্মৃতি, হারিয়ে যাওয়া খেলার নিয়ম, বা কোনো বিশেষ জায়গার গল্প
              লিখে জমা দিতে পারে। এছাড়া পুরনো ছবি বা ভিডিও আপলোড করা যায়।
            </p>
          </div>

          <div className="bg-surface border-border rounded-2xl border p-8">
            <ShieldCheck className="text-primary mb-4 h-8 w-8" />
            <h3 className="text-foreground mb-3 text-2xl font-bold">মডারেশন</h3>
            <p className="text-secondary-foreground">
              আর্কাইভের মান ধরে রাখতে প্রতিটি সাবমিশন আমাদের ভলান্টিয়ার টিম ম্যানুয়ালি রিভিউ করে।
              ভুল তথ্য বা অপ্রাসঙ্গিক কনটেন্ট এড়িয়ে চলা হয়।
            </p>
          </div>

          <div className="bg-surface border-border rounded-2xl border p-8">
            <History className="text-primary mb-4 h-8 w-8" />
            <h3 className="text-foreground mb-3 text-2xl font-bold">তথ্যের উৎস</h3>
            <p className="text-secondary-foreground">
              আমরা তথ্যের উৎসকে খুব গুরুত্ব দেই। এটি কি আপনার নিজের স্মৃতি, নাকি বাবা-মায়ের কাছ থেকে
              শোনা, নাকি অন্য কোনো উৎস থেকে পাওয়া - তা উল্লেখ করতে হয়।
            </p>
          </div>

          <div className="bg-surface border-border rounded-2xl border p-8">
            <Eye className="text-primary mb-4 h-8 w-8" />
            <h3 className="text-foreground mb-3 text-2xl font-bold">ভবিষ্যতের স্বপ্ন</h3>
            <p className="text-secondary-foreground">
              আমাদের স্বপ্ন Shoishob একদিন বাংলাদেশের সবচেয়ে বড় "লিভিং ডিজিটাল মিউজিয়াম" হবে। যেখানে
              প্রতিটি স্মৃতি হবে এক একটি ঐতিহাসিক দলিল।
            </p>
          </div>
        </div>

        <div className="bg-primary/10 border-primary/20 rounded-2xl border p-10 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold">
            আমাদের এই যাত্রায় অংশ নিন
          </h2>
          <p className="text-secondary-foreground mx-auto mb-8 max-w-2xl text-lg">
            আপনার কাছে থাকা ছোট একটা স্মৃতিও হতে পারে আমাদের আর্কাইভের গুরুত্বপূর্ণ অংশ।
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary-hover text-primary-foreground"
          >
            <Link href="/submit">
              আপনার স্মৃতি যোগ করুন <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
