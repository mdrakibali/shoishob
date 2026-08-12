"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export function ExploreFilters() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-3 font-medium">সময় (দশক)</h3>
        <div className="space-y-2.5">
          {["1990s", "2000s", "2010s", "2020s"].map((decade) => (
            <div key={decade} className="flex items-center space-x-2 text-sm">
              <Checkbox id={`decade-${decade}`} />
              <Label htmlFor={`decade-${decade}`} className="font-normal">
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
              <Checkbox id={`type-${type}`} />
              <Label htmlFor={`type-${type}`} className="font-normal">
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
              <Checkbox id={`dist-${district}`} />
              <Label htmlFor={`dist-${district}`} className="font-normal">
                {district}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
