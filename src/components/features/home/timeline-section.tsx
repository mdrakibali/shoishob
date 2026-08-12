import Link from "next/link"

export function TimelineSection() {
  return (
    <section className="bg-surface border-border border-y py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-foreground mb-4 font-serif text-3xl font-bold md:text-4xl">
            কোন সময়ের শৈশব দেখতে চান?
          </h2>
          <p className="text-muted-foreground">আপনার প্রিয় দশক বেছে নিন</p>
        </div>

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
      </div>
    </section>
  )
}
