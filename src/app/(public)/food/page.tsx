import { FoodContent } from "@/components/features/food/food-content"
import { MOCK_FOOD } from "@/lib/mock-data"
import { PageSection, SectionHeader } from "@/components/ui/section"

export default function FoodPage() {
  return (
    <PageSection className="bg-background">
      <SectionHeader 
        title="শৈশবের খাবার"
        description="স্কুলের গেটের ঝালমুড়ি কিংবা পাড়ার সেই রঙিন বরফ আইসক্রিম – চলুন ফিরে যাই সেই হারানো স্বাদে।"
      />

      <FoodContent items={MOCK_FOOD} />
    </PageSection>
  )
}
