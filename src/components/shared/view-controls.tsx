"use client"

import { LayoutGrid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export type ViewMode = "grid" | "list"
export type SortOption = "newest" | "oldest" | "popular"

interface ViewControlsProps {
  viewMode: ViewMode
  onViewModeChange: (mode: ViewMode) => void
  sortBy: SortOption
  onSortByChange: (sort: SortOption) => void
  totalItems: number
}

export function ViewControls({
  viewMode,
  onViewModeChange,
  sortBy,
  onSortByChange,
  totalItems,
}: ViewControlsProps) {
  return (
    <div className="border-border mb-6 flex flex-col items-start justify-between gap-4 border-b pb-4 sm:flex-row sm:items-center">
      <p className="text-muted-foreground text-sm font-medium">
        {totalItems}টি ফলাফল পাওয়া গেছে
      </p>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground hidden text-sm sm:inline-block">সর্ট করুন:</span>
          <Select value={sortBy} onValueChange={(v) => onSortByChange(v as SortOption)}>
            <SelectTrigger className="w-[140px] bg-background">
              <SelectValue placeholder="সর্ট করুন" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">নতুনগুলো আগে</SelectItem>
              <SelectItem value="oldest">পুরানো আগে</SelectItem>
              <SelectItem value="popular">জনপ্রিয়</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="bg-muted inline-flex items-center rounded-md p-1">
          <Button
            variant="ghost"
            size="sm"
            className={`h-8 w-8 px-0 ${viewMode === "grid" ? "bg-background shadow-sm" : "hover:bg-background/50 text-muted-foreground"}`}
            onClick={() => onViewModeChange("grid")}
            title="Grid View"
          >
            <LayoutGrid className="h-4 w-4" />
            <span className="sr-only">Grid View</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`h-8 w-8 px-0 ${viewMode === "list" ? "bg-background shadow-sm" : "hover:bg-background/50 text-muted-foreground"}`}
            onClick={() => onViewModeChange("list")}
            title="List View"
          >
            <List className="h-4 w-4" />
            <span className="sr-only">List View</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
