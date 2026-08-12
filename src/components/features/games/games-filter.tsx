"use client"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export function GamesFilter() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const handleFilterChange = (key: string, value: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams.toString())
    const currentValues = params.getAll(key)

    if (checked) {
      if (!currentValues.includes(value)) {
        params.append(key, value)
      }
    } else {
      params.delete(key)
      const newValues = currentValues.filter((v) => v !== value)
      newValues.forEach((v) => params.append(key, v))
    }

    router.push(`${pathname}?${params.toString()}`)
  }

  const isChecked = (key: string, value: string) => {
    return searchParams.getAll(key).includes(value)
  }

  const handleReset = () => {
    router.push(pathname)
  }

  return (
    <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold">ফিল্টার</h2>
        <Button
          onClick={handleReset}
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground h-8 text-xs"
        >
          রিসেট
        </Button>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h3 className="mb-3 font-medium">খেলোয়াড় সংখ্যা</h3>
          <div className="space-y-2.5">
            {["একা", "দলবদ্ধ (২-৪ জন)", "বড় দল (৪+ জন)"].map((playerCount) => (
              <div key={playerCount} className="flex items-center space-x-2 text-sm">
                <Checkbox
                  id={`players-${playerCount}`}
                  checked={isChecked("players", playerCount)}
                  onCheckedChange={(checked) =>
                    handleFilterChange("players", playerCount, checked as boolean)
                  }
                />
                <Label htmlFor={`players-${playerCount}`} className="cursor-pointer font-normal">
                  {playerCount}
                </Label>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div>
          <h3 className="mb-3 font-medium">এক্টিভিটি লেভেল</h3>
          <div className="space-y-2.5">
            {["শারীরিক", "মানসিক", "দুটোই"].map((activity) => (
              <div key={activity} className="flex items-center space-x-2 text-sm">
                <Checkbox
                  id={`activity-${activity}`}
                  checked={isChecked("activity", activity)}
                  onCheckedChange={(checked) =>
                    handleFilterChange("activity", activity, checked as boolean)
                  }
                />
                <Label htmlFor={`activity-${activity}`} className="cursor-pointer font-normal">
                  {activity}
                </Label>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div>
          <h3 className="mb-3 font-medium">খেলার স্থান</h3>
          <div className="space-y-2.5">
            {["ইনডোর (ঘরের ভেতর)", "আউটডোর (মাঠে বা বাইরে)"].map((location) => (
              <div key={location} className="flex items-center space-x-2 text-sm">
                <Checkbox
                  id={`location-${location}`}
                  checked={isChecked("location", location)}
                  onCheckedChange={(checked) =>
                    handleFilterChange("location", location, checked as boolean)
                  }
                />
                <Label htmlFor={`location-${location}`} className="cursor-pointer font-normal">
                  {location}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
