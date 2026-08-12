import { Button } from "@/components/ui/button"
import { ArrowRight, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function FeaturedStorySection() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-border mb-12 border-b pb-4">
          <span className="text-muted-foreground text-lg italic">F</span>
          <h2 className="text-foreground mt-2 text-3xl font-bold md:text-4xl">
            নির্বাচিত গল্প
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg md:aspect-video lg:aspect-square">
            <Image
              src="/assets/memory_placeholder.png"
              alt="Featured memory"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center">
            <Quote className="text-primary/20 mb-6 h-12 w-12" />
            <h3 className="text-foreground mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
              "বৃষ্টির দিনে টিনের চালে শব্দ আর কাগজের নৌকা ভাসানো"
            </h3>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed md:text-xl">
              তখন ক্লাস থ্রিতে পড়ি। বর্ষাকাল এলে স্কুল ছুটি হয়ে যেত। আমরা বন্ধুরা মিলে কাগজের নৌকা বানাতাম আর রাস্তার জমা জলে ভাসিয়ে দিতাম। কার নৌকা কতদূর যায় সেই নিয়ে চলত তুমুল প্রতিযোগিতা...
            </p>
            <div className="mb-8 flex items-center gap-4">
              <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                <span className="text-primary font-bold">R</span>
              </div>
              <div>
                <p className="text-foreground font-medium">রাকিব হাসান</p>
                <p className="text-muted-foreground text-sm">ঢাকা, ১৯৯০ দশক</p>
              </div>
            </div>
            <Button asChild className="w-fit rounded-none px-8" size="lg">
              <Link href="/memories/paper-boats">
                পুরো গল্পটি পড়ুন <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
