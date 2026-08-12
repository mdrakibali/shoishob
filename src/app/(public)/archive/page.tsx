import { ArchiveContent } from "@/components/features/archive/archive-content"
import { MOCK_ARCHIVES } from "@/lib/mock-data"

export default function ArchivePage() {
  // Show all categories in the master archive page
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
          সব সংগ্রহশালা
        </h1>
        <p className="text-muted-foreground mt-4 text-lg">
          আমাদের শৈশবের সব খেলা, স্মৃতি ও জায়গার কালেকশন।
        </p>
      </div>
      
      <div className="flex flex-col gap-8 md:flex-row">
        {/* We can add ArchiveFilter component here later */}
        <div className="w-full">
          <ArchiveContent initialItems={MOCK_ARCHIVES} />
        </div>
      </div>
    </div>
  )
}
