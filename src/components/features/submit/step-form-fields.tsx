import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { StepFormFieldsProps } from "@/types"

export function StepFormFields({ type }: StepFormFieldsProps) {
  return (
    <>
      <div className="space-y-3">
        <Label htmlFor="title" className="text-base">
          শিরোনাম <span className="text-destructive">*</span>
        </Label>
        <Input
          id="title"
          placeholder="যেমন: বিকেল হলেই মাঠে গোল্লাছুট"
          required
          className="h-12 text-base"
        />
      </div>
      <div className="space-y-3">
        <Label htmlFor="story" className="text-base">
          গল্পটি লিখুন <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="story"
          placeholder="আপনার স্মৃতি বা গল্পটি বিস্তারিতভাবে লিখুন..."
          required
          className="min-h-37.5 resize-y text-base"
        />
      </div>
      {type === "game" && (
        <div className="space-y-3">
          <Label htmlFor="howToPlay" className="text-base">
            কীভাবে খেলতে হয়?
          </Label>
          <Textarea
            id="howToPlay"
            placeholder="খেলার নিয়ম, কতজন লাগে, কী কী জিনিস লাগে..."
            className="min-h-30 resize-y text-base"
          />
        </div>
      )}
    </>
  )
}
