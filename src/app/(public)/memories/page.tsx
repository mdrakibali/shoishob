import { MemoriesContent } from "@/components/features/memories/memories-content"
import { MemoriesFilters } from "@/components/features/memories/memories-filters"
import { MemoriesSearch } from "@/components/features/memories/memories-search"
import { MemoriesMobileFilter } from "@/components/features/memories/memories-mobile-filter"
import { MOCK_MEMORIES } from "@/lib/mock-data"
import { PageSection, SectionHeader } from "@/components/ui/section"

export default function MemoriesPage() {
  return (
    <PageSection className="bg-background">
      {/* Header section with search and mobile filters */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <SectionHeader 
          title="স্মৃতিসমূহ"
          description="হারিয়ে যাওয়া শৈশবের টুকরো স্মৃতিগুলো ফিরে দেখুন"
        />

        <div className="flex items-center gap-2">
          <MemoriesSearch />
          <MemoriesMobileFilter />
        </div>
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        {/* Desktop Filters */}
        <div className="hidden w-64 shrink-0 md:block">
          <MemoriesFilters />
        </div>

        {/* Content */}
        <MemoriesContent memories={MOCK_MEMORIES} />
      </div>
    </PageSection>
  )
}
