import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload } from "lucide-react"
import { StepFormFooterProps } from "@/types"

export function StepFormFooter({ isSubmitting = false }: StepFormFooterProps) {
  return (
    <>
      <div className="space-y-3">
        <Label className="text-base">ছবি বা মিডিয়া (ঐচ্ছিক)</Label>
        <div className="border-border bg-background hover:bg-secondary/50 cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition-colors">
          <Upload className="text-muted-foreground mx-auto mb-4 h-10 w-10" />
          <p className="text-foreground mb-1 text-sm font-medium">ক্লিক করে ছবি আপলোড করুন</p>
          <p className="text-muted-foreground text-xs">PNG, JPG, বা GIF (সর্বোচ্চ ৫ মেগাবাইট)</p>
        </div>
      </div>
      <div className="border-border space-y-6 border-t pt-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <Label htmlFor="name" className="text-base">
              আপনার নাম <span className="text-destructive">*</span>
            </Label>
            <Input id="name" placeholder="আপনার নাম" required className="h-12 text-base" />
          </div>
          <div className="space-y-3">
            <Label htmlFor="email" className="text-base">
              ইমেইল <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              required
              className="h-12 text-base"
            />
            <p className="text-muted-foreground text-xs">আপনার ইমেইল প্রকাশ্যে দেখানো হবে না।</p>
          </div>
        </div>
        <div className="bg-muted border-border flex h-16.25 w-full max-w-75 items-center justify-center rounded-sm border p-2">
          <div className="flex w-full items-center gap-3">
            <div className="border-muted-foreground h-6 w-6 rounded-sm border-2"></div>
            <span className="text-secondary-foreground text-sm font-medium">
              Verify you are human
            </span>
          </div>
        </div>
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="bg-primary hover:bg-primary-hover text-primary-foreground h-14 w-full text-lg"
      >
        {isSubmitting ? "সংরক্ষণ করা হচ্ছে..." : "সংরক্ষণ করুন"}
      </Button>
    </>
  )
}
