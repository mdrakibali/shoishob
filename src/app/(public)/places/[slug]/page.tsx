import { MOCK_PLACES } from "@/lib/mock-data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { MapPin, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function PlaceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  
  const place = MOCK_PLACES.find((p) => p.slug === resolvedParams.slug)

  if (!place) {
    notFound()
  }

  return (
    <div className="w-full">
      <div className="bg-surface border-border border-b py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/places" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="size-4" />
            ফিরে যান
          </Link>
          <h1 className="text-foreground mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {place.title}
          </h1>
          <div className="text-secondary-foreground flex flex-wrap items-center gap-6 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 text-primary rounded-full p-2">
                <MapPin className="size-4" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs tracking-wider uppercase">স্থান</p>
                <p className="text-foreground">{place.district}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-secondary text-secondary-foreground rounded-full p-2">
                <Calendar className="size-4" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs tracking-wider uppercase">সময়</p>
                <p className="text-foreground">{place.year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-12 shadow-lg">
          <Image
            src={place.imageUrl || "/assets/memory_placeholder.png"}
            alt={place.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-secondary-foreground text-xl leading-relaxed">
            {place.description}
          </p>
          <div className="my-12"></div>
          <h2 className="text-foreground text-3xl font-bold">পুরোনো স্মৃতি</h2>
          <p className="text-secondary-foreground text-lg leading-relaxed">
            এখানে কাটানো সময়গুলো জীবনের সেরা কিছু মুহূর্ত। চারপাশের সেই চেনা গন্ধ, পরিচিত মানুষের কোলাহল, 
            আর শৈশবের সেই হারানো বিকেল—সব যেন আজও চোখের সামনে ভাসে। এই জায়গাগুলো শুধু মাটি আর ইট-পাথরের নয়, 
            এগুলো একেকটি অমূল্য স্মৃতির ভান্ডার।
          </p>
        </div>
      </div>
    </div>
  )
}
