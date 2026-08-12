import { SubmitFormWizard } from "@/components/features/submit/submit-form-wizard"

export default function SubmitPage() {
  return (
    <div className="bg-background min-h-screen py-12 md:py-20">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SubmitFormWizard />
      </div>
    </div>
  )
}
