import { Joystick, Image as ImageIcon, MapPin } from "lucide-react"
import { StepTypeSelectionProps } from "@/types"

export function StepTypeSelection({ onSelectType }: StepTypeSelectionProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-12 text-center">
        <h1 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">
          আপনি কী সংরক্ষণ করতে চান?
        </h1>
        <p className="text-muted-foreground text-lg">
          আপনার যেকোনো একটি স্মৃতি নির্বাচন করুন যা আপনি আর্কাইভ করতে চান
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <button
          onClick={() => onSelectType("game")}
          className="border-border bg-surface hover:border-primary hover:bg-primary/5 group flex flex-col items-center rounded-2xl border-2 p-8 text-center transition-all"
        >
          <div className="bg-primary/10 mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-transform group-hover:scale-110">
            <Joystick className="text-primary h-8 w-8" />
          </div>
          <h3 className="text-foreground mb-2 text-2xl font-bold">খেলা</h3>
          <p className="text-secondary-foreground text-sm">
            হারিয়ে যাওয়া কোনো গ্রামীণ বা শহরের খেলা ও তার নিয়মকানুন
          </p>
        </button>

        <button
          onClick={() => onSelectType("memory")}
          className="border-border bg-surface hover:border-primary hover:bg-primary/5 group flex flex-col items-center rounded-2xl border-2 p-8 text-center transition-all"
        >
          <div className="bg-primary/10 mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-transform group-hover:scale-110">
            <ImageIcon className="text-primary h-8 w-8" />
          </div>
          <h3 className="text-foreground mb-2 text-2xl font-bold">শৈশবের স্মৃতি</h3>
          <p className="text-secondary-foreground text-sm">
            ছেলেবেলার কোনো মজার ঘটনা বা নস্টালজিক স্মৃতি
          </p>
        </button>

        <button
          onClick={() => onSelectType("place")}
          className="border-border bg-surface hover:border-primary hover:bg-primary/5 group flex flex-col items-center rounded-2xl border-2 p-8 text-center transition-all"
        >
          <div className="bg-primary/10 mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-transform group-hover:scale-110">
            <MapPin className="text-primary h-8 w-8" />
          </div>
          <h3 className="text-foreground mb-2 text-2xl font-bold">একটি জায়গা</h3>
          <p className="text-secondary-foreground text-sm">
            স্কুল, পাড়ার মাঠ বা কোনো বিশেষ জায়গার স্মৃতি
          </p>
        </button>
      </div>
    </div>
  )
}
