import { SectionHeaderProps, SectionProps } from "@/types"
import { cn } from "@/lib/utils"

// PageSection renders a responsive full-width container section
export function PageSection({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

// SectionHeader renders section titles, descriptions, and action triggers
export function SectionHeader({
  title,
  description,
  action,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "border-border mb-8 flex flex-col justify-between gap-4 border-b pb-4 md:flex-row md:items-end",
        className
      )}
      {...props}
    >
      <div>
        <h2 className="text-foreground text-3xl font-bold md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground mt-2 text-lg">{description}</p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  )
}
