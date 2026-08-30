import { SubmissionData, GameData, MemoryData } from "./index"

// Defines the props for the MobileMenu component
export interface MobileMenuProps {
  navigation: { name: string; href: string }[]
}

// Defines the props for the GameRelatedContent component
export interface GameRelatedContentProps {
  memories: MemoryData[]
  relatedGames: GameData[]
}

// Defines the props for the RecentMemoriesSection component
export interface RecentMemoriesSectionProps {
  memories: MemoryData[]
}

// Defines the props for the GamesShowcaseSection component
export interface GamesShowcaseSectionProps {
  games: GameData[]
}

export type SubmissionType = "game" | "memory" | "place" | null

// Defines the props for the StepTypeSelection component
export interface StepTypeSelectionProps {
  onSelectType: (type: SubmissionType) => void
}

// Defines the props for the StepFormFooter component
export interface StepFormFooterProps {
  isSubmitting?: boolean
}

// Defines the props for the StepSuccess component
export interface StepSuccessProps {
  status: "submitting" | "success"
  onReset: () => void
}

// Defines the props for the StepForm component
export interface StepFormProps {
  type: SubmissionType
  onBack: () => void
  onSubmit: (e: React.FormEvent) => void
  isSubmitting?: boolean
}

// Defines the props for the StepFormFields component
export interface StepFormFieldsProps {
  type: SubmissionType
}

// Defines the props for the ReviewDialog component
export interface ReviewDialogProps {
  submission: SubmissionData
  trigger: React.ReactElement
  onUpdateStatus: (id: string, newStatus: SubmissionData["status"]) => void
}

// Defines the props for the RejectDialog component
export interface RejectDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onReject: () => void
  isRejecting: boolean
  disabled?: boolean
}

// Defines standard Icon props
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  size?: number | string
}

// Defines props for PageSection component
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

// Defines props for SectionHeader component
export interface SectionHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
}
