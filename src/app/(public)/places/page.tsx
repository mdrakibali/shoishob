import { PlacesContent } from "@/components/features/places/places-content"
import { MOCK_PLACES } from "@/lib/mock-data"
import { PageSection, SectionHeader } from "@/components/ui/section"

export default function PlacesPage() {
  return (
    <PageSection className="bg-background">
      <SectionHeader 
        title="শৈশবের জায়গা"
        description="বাড়ির পেছনের পুকুর পাড়, স্কুলের মাঠ, কিংবা নদীর ধার – সেই চেনা জায়গাগুলোতে ফিরে যাই চলুন।"
      />

      <PlacesContent items={MOCK_PLACES} />
    </PageSection>
  )
}
