import { LeftSidebarProps } from "@/types"
import { SidebarNavItem } from "@/components/features/feed/sidebar/sidebar-nav-item"
import { SidebarSection } from "@/components/features/feed/sidebar/sidebar-section"
import { SidebarThemeSwitch } from "@/components/features/feed/sidebar/sidebar-theme-switch"
import { cn } from "@/lib/utils"

// LeftSidebar renders the primary navigation, archive shortcuts, and discovery tags
export function LeftSidebar({ className }: LeftSidebarProps) {
  return (
    <aside
      className={cn(
        "flex h-full flex-col justify-between overflow-y-auto custom-scrollbar pr-2",
        className
      )}
    >
      <div className="flex flex-col gap-1">
        {/* Main Navigation */}
        <nav aria-label="Main Navigation" className="flex flex-col gap-0.5">
          <SidebarNavItem label="হোম" href="/" iconName="home" isExact />
          <SidebarNavItem label="এক্সপ্লোর" href="/memories" iconName="explore" />
          <SidebarNavItem label="গেমস" href="/games" iconName="games" />
          <SidebarNavItem label="স্মৃতিগুলো" href="/memories" iconName="memories" />
        </nav>

        {/* Your Archive Section */}
        <SidebarSection title="YOUR ARCHIVE">
          <SidebarNavItem label="সেভ করা" href="/memories?tab=saved" iconName="saved" />
          <SidebarNavItem label="আমার অবদান" href="/admin/submissions" iconName="my-contributions" />
        </SidebarSection>

        {/* Discover Eras Section */}
        <SidebarSection title="DISCOVER">
          <SidebarNavItem label="১৯৯০s" href="/memories?era=1990" iconName="clock" />
          <SidebarNavItem label="২০০০s" href="/memories?era=2000" iconName="clock" />
          <SidebarNavItem label="২০১০s" href="/memories?era=2010" iconName="clock" />
          <SidebarNavItem label="২০২০s" href="/memories?era=2020" iconName="clock" />
          <SidebarNavItem label="২০২৬" href="/memories?era=2026" iconName="clock" />
        </SidebarSection>
      </div>

      {/* Bottom Settings & About */}
      <div className="border-border/60 flex flex-col gap-1 border-t pt-3">
        <SidebarNavItem label="About Shoishob" href="/about" iconName="about" />
        <SidebarThemeSwitch />
      </div>
    </aside>
  )
}
