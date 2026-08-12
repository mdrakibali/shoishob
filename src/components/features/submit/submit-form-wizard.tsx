"use client"
import * as React from "react"
import { StepTypeSelection, SubmissionType } from "./step-type-selection"
import { StepForm } from "./step-form"
import { StepSuccess } from "./step-success"

export function SubmitFormWizard() {
  const [step, setStep] = React.useState<"type" | "form" | "submitting" | "success">("type")
  const [type, setType] = React.useState<SubmissionType>(null)

  const handleSelectType = (selectedType: SubmissionType) => {
    setType(selectedType)
    setStep("form")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("submitting")

    // Mock API call
    setTimeout(() => {
      setStep("success")
    }, 2000)
  }

  const handleReset = () => {
    setStep("type")
    setType(null)
  }

  return (
    <>
      {step === "type" && <StepTypeSelection onSelectType={handleSelectType} />}
      {(step === "form" || step === "submitting") && (
        <StepForm
          type={type}
          onBack={() => setStep("type")}
          onSubmit={handleSubmit}
          isSubmitting={step === "submitting"}
        />
      )}
      {step === "success" && <StepSuccess status={step} onReset={handleReset} />}
    </>
  )
}
