export type ArchiveCategory = "games" | "memories" | "food" | "places"

export interface ArchiveItem {
  id: string
  category: ArchiveCategory
  slug: string
  title: string
  description: string
  imageUrl: string
  meta: {
    year?: string
    district?: string
    type?: string
    players?: string
    timePeriod?: string
  }
}

// Defines the structure of a memory entry (deprecated, transitioning to ArchiveItem)
export interface MemoryData {
  id: string
  slug: string
  title: string
  excerpt: string
  year: string
  district: string
  type: string
  source: string
  imageUrl: string
}

// Defines the props for the MemoryCard component
export interface MemoryCardProps {
  memory: MemoryData
  className?: string
}

// Defines the structure of a game entry
export interface GameData {
  id: string
  slug: string
  title: string
  description: string
  timePeriod: string
  players: string
  imageUrl: string
}

// Defines the props for the GameCard component
export interface GameCardProps {
  game: GameData
  className?: string
}

// Defines the structure of a submission entry for the admin panel
export interface SubmissionData {
  id: string
  title: string
  type: string
  year: string
  district: string
  submitter: string
  status: "Pending" | "Approved" | "Rejected"
  created: string
}
export * from "./components"
