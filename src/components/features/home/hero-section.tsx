import { Button } from "@/components/ui/button"

import Link from "next/link"

export function HeroSection() {
  return (
    <section className="bg-background relative py-20 md:py-32">
      <div className="container mx-auto flex max-w-4xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-foreground mb-6 text-5xl leading-tight font-bold tracking-tight sm:text-6xl md:text-7xl">
          আমাদের শৈশব
        </h1>
        <p className="text-secondary-foreground mb-10 text-xl font-medium md:text-2xl">
          "যা আজ স্মৃতি, তা কাল ইতিহাস।"
        </p>
        <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-base leading-relaxed md:text-lg">
          বাংলাদেশের বিভিন্ন প্রজন্মের খেলা, গল্প, জায়গা আর ছোট ছোট স্মৃতি এক জায়গায় সংরক্ষণ করুন।
          ভবিষ্যৎ প্রজন্মের জন্য রেখে যান আপনার ফেলে আসা শৈশব।
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <Button
            size="lg"
            asChild
            className="bg-primary px-8 text-base text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/explore">শৈশব আবিষ্কার করুন</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-border px-8 text-foreground hover:bg-secondary"
          >
            <Link href="/submit">আমার স্মৃতি যোগ করুন</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
