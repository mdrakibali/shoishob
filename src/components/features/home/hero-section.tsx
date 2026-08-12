import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="bg-background relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#E5E0D6_1px,transparent_1px),linear-gradient(to_bottom,#E5E0D6_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:4rem_4rem] opacity-30"></div>
      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex max-w-2xl flex-col items-start">
            <div className="border-primary/20 bg-primary/10 text-primary mb-6 inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">
              <Sparkles className="mr-2 h-4 w-4" />
              ডিজিটাল আর্কাইভ
            </div>
            <h1 className="text-foreground mb-6 font-serif text-5xl leading-[1.1] font-bold tracking-tight sm:text-6xl md:text-7xl">
              আমাদের <span className="text-primary">শৈশব</span>
            </h1>
            <p className="text-secondary-foreground mb-4 font-serif text-xl font-medium md:text-2xl">
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
            <div className="ring-border bg-muted relative aspect-4/5 w-full rotate-2 overflow-hidden rounded-2xl shadow-2xl ring-1 transition-transform duration-500 hover:rotate-0 md:aspect-square">
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
  )
}
