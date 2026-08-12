import { MOCK_FOOD } from "@/lib/mock-data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { MapPin, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function FoodDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  
  const food = MOCK_FOOD.find((f) => f.slug === resolvedParams.slug)

  if (!food) {
    notFound()
  }

  return (
    <div className="w-full">
      <div className="bg-surface border-border border-b py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/food" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="size-4" />
            ফিরে যান
          </Link>
          <h1 className="text-foreground mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {food.title}
          </h1>
          <div className="text-secondary-foreground flex flex-wrap items-center gap-6 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 text-primary rounded-full p-2">
                <MapPin className="size-4" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs tracking-wider uppercase">স্থান</p>
                <p className="text-foreground">{food.district}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-secondary text-secondary-foreground rounded-full p-2">
                <Calendar className="size-4" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs tracking-wider uppercase">সময়</p>
                <p className="text-foreground">{food.year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-12 shadow-lg">
          <Image
            src={food.imageUrl || "/assets/memory_placeholder.png"}
            alt={food.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-secondary-foreground text-xl leading-relaxed">
            {food.description}
          </p>
          <div className="my-12"></div>
          <h2 className="text-foreground text-3xl font-bold">স্মৃতিকথা</h2>
          <p className="text-secondary-foreground text-lg leading-relaxed">
            স্কুলের টিফিন ব্রেকে বা ছুটির পর গেটের বাইরে দাঁড়িয়ে এই খাবারগুলোর স্বাদ নেওয়ার যে আনন্দ, তা আজও মনে পড়ে। 
            বন্ধুদের সাথে ভাগাভাগি করে খাওয়ার সেই দিনগুলো হয়তো আর ফিরে আসবে না, কিন্তু স্মৃতিতে তা সবসময় অমলিন হয়ে থাকবে।
          </p>
        </div>
      </div>
    </div>
  )
}
