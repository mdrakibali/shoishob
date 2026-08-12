export function StatsSection() {
  const stats = [
    { label: "সংরক্ষিত স্মৃতি", value: "১,২০০+" },
    { label: "হারিয়ে যাওয়া খেলা", value: "৮৫+" },
    { label: "যুক্ত হয়েছেন", value: "৩,৫০০+" },
    { label: "জেলা কভার করা হয়েছে", value: "৬৪" },
  ]

  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center">
              <span className="mb-2 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
                {stat.value}
              </span>
              <span className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wider md:text-base">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
