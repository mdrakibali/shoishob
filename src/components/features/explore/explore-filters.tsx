"use client"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export function ExploreFilters() {
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
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-serif text-lg font-bold">ফিল্টার</h2>
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
          <h3 className="mb-3 font-medium">সময় (দশক)</h3>
          <div className="space-y-2.5">
            {["1990s", "2000s", "2010s", "2020s"].map((decade) => (
              <div key={decade} className="flex items-center space-x-2 text-sm">
                <Checkbox
                  id={`decade-${decade}`}
                  checked={isChecked("decade", decade)}
                  onCheckedChange={(checked) =>
                    handleFilterChange("decade", decade, checked as boolean)
                  }
                />
                <Label htmlFor={`decade-${decade}`} className="font-normal cursor-pointer">
                  {decade}
                </Label>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div>
          <h3 className="mb-3 font-medium">ধরন</h3>
          <div className="space-y-2.5">
            {["খেলা", "শৈশবের স্মৃতি", "একটি জায়গা"].map((type) => (
              <div key={type} className="flex items-center space-x-2 text-sm">
                <Checkbox
                  id={`type-${type}`}
                  checked={isChecked("type", type)}
                  onCheckedChange={(checked) =>
                    handleFilterChange("type", type, checked as boolean)
                  }
                />
                <Label htmlFor={`type-${type}`} className="font-normal cursor-pointer">
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div>
          <h3 className="mb-3 font-medium">জেলা</h3>
          <div className="space-y-2.5">
            {["ঢাকা", "গাজীপুর", "চট্টগ্রাম", "সিলেট", "রাজশাহী", "বরিশাল"].map((district) => (
              <div key={district} className="flex items-center space-x-2 text-sm">
                <Checkbox
                  id={`dist-${district}`}
                  checked={isChecked("district", district)}
                  onCheckedChange={(checked) =>
                    handleFilterChange("district", district, checked as boolean)
                  }
                />
                <Label htmlFor={`dist-${district}`} className="font-normal cursor-pointer">
                  {district}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
