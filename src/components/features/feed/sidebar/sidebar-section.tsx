import { SidebarSectionProps } from "@/types"
import { cn } from "@/lib/utils"

// SidebarSection groups related sidebar items under an accessible section header
export function SidebarSection({ title, children, className }: SidebarSectionProps) {
  return (
    <section className={cn("flex flex-col gap-0.5", className)}>
      <h3 className="text-muted-foreground/80 px-3.5 pt-3 pb-1 text-[11px] font-semibold tracking-wider uppercase">
        {title}
      </h3>
      <div className="flex flex-col gap-0.5">{children}</div>
    </section>
  )
}

