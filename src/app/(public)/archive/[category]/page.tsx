import { ArchiveContent } from "@/components/features/archive/archive-content"
import { MOCK_ARCHIVES } from "@/lib/mock-data"
import { ArchiveCategory } from "@/types"

export default async function CategoryArchivePage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const resolvedParams = await params
  const category = resolvedParams.category as ArchiveCategory

  // Filter items by category
  const filteredItems = MOCK_ARCHIVES.filter((item) => item.category === category)

  const titles: Record<string, string> = {
    games: "খেলার সংগ্রহশালা",
    memories: "শৈশবের স্মৃতি",
    food: "খাবারের সংগ্রহশালা",
    places: "প্রিয় জায়গা",
  }

  const descriptions: Record<string, string> = {
    games: "আমাদের হারানো শৈশবের মজার সব খেলার কালেকশন।",
    memories: "আমাদের ফেলে আসা দিনগুলোর ছোট ছোট টুকরো স্মৃতি।",
    food: "শৈশবের সেই প্রিয় খাবারগুলোর গল্প।",
    places: "যে জায়গাগুলো আমাদের শৈশবের অবিচ্ছেদ্য অংশ।",
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
          {titles[category] || "সংগ্রহশালা"}
        </h1>
        <p className="text-muted-foreground mt-4 text-lg">
          {descriptions[category] || "আমাদের শৈশবের নানা টুকরো স্মৃতি।"}
        </p>
      </div>
      
      <div className="flex flex-col gap-8 md:flex-row">
        {/* We can add ArchiveFilter component here later */}
        <div className="w-full">
          <ArchiveContent initialItems={filteredItems} />
        </div>
      </div>
    </div>
  )
}
