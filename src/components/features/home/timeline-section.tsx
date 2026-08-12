import { Section, SectionHeader } from "@/components/ui/section"
import Link from "next/link"

export function TimelineSection() {
  return (
    <Section className="bg-surface border-border border-y">
      <SectionHeader 
        title="কোন সময়ের শৈশব দেখতে চান?"
        description="আপনার প্রিয় দশক বেছে নিন"
        className="justify-center text-center"
      />

      <div className="flex justify-center">
        <div className="bg-background border-border/50 inline-flex max-w-full space-x-1 overflow-x-auto rounded-full border p-1 shadow-sm">
          {["1990s", "2000s", "2010s", "2020s"].map((decade, idx) => (
            <Link
              key={decade}
              href={`/explore?decade=${decade}`}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                idx === 0
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-secondary-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {decade}
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}
