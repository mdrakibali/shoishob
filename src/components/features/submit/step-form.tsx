import { ChevronRight } from "lucide-react"
import { SubmissionType } from "./step-type-selection"
import { StepFormFields } from "./step-form-fields"
import { StepFormMetadata } from "./step-form-metadata"
import { StepFormFooter } from "./step-form-footer"

interface StepFormProps {
  type: SubmissionType
  onBack: () => void
  onSubmit: (e: React.FormEvent) => void
  isSubmitting?: boolean
}

export function StepForm({ type, onBack, onSubmit, isSubmitting = false }: StepFormProps) {
  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="mb-8 flex items-center gap-2">
        <button
          onClick={onBack}
          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
        >
          ধরন নির্বাচন
        </button>
        <ChevronRight className="text-muted-foreground h-4 w-4" />
        <span className="text-foreground text-sm font-medium">
          {type === "game"
            ? "খেলা যোগ করুন"
            : type === "memory"
              ? "স্মৃতি যোগ করুন"
              : "জায়গা যোগ করুন"}
        </span>
      </div>
      <div className="bg-surface border-border rounded-2xl border p-6 shadow-sm md:p-10">
        <h2 className="text-foreground mb-8 font-serif text-3xl font-bold">
          {type === "game" ? "খেলার তথ্য" : type === "memory" ? "স্মৃতির গল্প" : "জায়গার বিবরণ"}
        </h2>
        <form onSubmit={onSubmit} className="space-y-8">
          <StepFormFields type={type} />
          <StepFormMetadata />
          <StepFormFooter isSubmitting={isSubmitting} />
        </form>
      </div>
    </div>
  )
}
