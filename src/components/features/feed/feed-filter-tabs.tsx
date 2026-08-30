"use client"

import { FeedFilterTabsProps } from "@/types"
import { FEED_FILTER_TABS } from "@/lib/mock-data/feed-data"
import { cn } from "@/lib/utils"

// FeedFilterTabs renders the tab bar for switching between feed sorting and filtering modes
export function FeedFilterTabs({
  activeTab,
  onTabChange,
  className,
}: FeedFilterTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Feed filter options"
      className={cn(
        "border-border flex items-center gap-2 border-b pt-1 pb-2 overflow-x-auto scrollbar-none",
        className
      )}
    >
      {FEED_FILTER_TABS.map((tab) => {
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            role="tab"
            type="button"
            aria-selected={isActive}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "relative px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors rounded-lg",
              isActive
                ? "text-primary bg-secondary/70 shadow-xs"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
            )}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}

