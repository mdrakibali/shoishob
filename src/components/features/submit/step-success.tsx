import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { StepSuccessProps } from "@/types"
export function StepSuccess({ status, onReset }: StepSuccessProps) {
  return (
    <div className="animate-in fade-in zoom-in-95 bg-surface border-border mx-auto mt-12 max-w-xl rounded-2xl border p-10 text-center shadow-sm duration-500 md:p-16">
      {status === "success" && (
        <div className="flex flex-col items-center">
          <div className="bg-success/10 mb-8 flex h-24 w-24 items-center justify-center rounded-full">
            <CheckCircle2 className="text-success h-12 w-12" />
          </div>
          <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
            আপনার স্মৃতি সংরক্ষণের পথে!
          </h2>
          <p className="text-secondary-foreground mb-8 text-lg">
            আমাদের টিম এটি দেখে প্রকাশ করবে। ভবিষ্যৎ প্রজন্মের জন্য ইতিহাস সংরক্ষণে অংশ নেওয়ার জন্য
            ধন্যবাদ।
          </p>
          <div className="flex gap-4">
            <Button
              asChild
              variant="outline"
              className="border-border text-foreground hover:bg-secondary"
            >
              <Link href="/">হোমে ফিরে যান</Link>
            </Button>
            <Button
              onClick={onReset}
              className="bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              আরেকটি স্মৃতি যোগ করুন
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
