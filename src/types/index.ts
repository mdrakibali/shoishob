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

export interface MemoryCardProps {
  memory: MemoryData
  className?: string
}

export interface GameData {
  id: string
  slug: string
  title: string
  description: string
  timePeriod: string
  players: string
  imageUrl: string
}

export interface GameCardProps {
  game: GameData
  className?: string
}

export interface GameRelatedContentProps {
  memories?: MemoryData[]
  relatedGames?: GameData[]
}

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

export interface FoodData {
  id: string
  slug: string
  title: string
  description: string
  year: string
  district: string
  imageUrl: string
}

export interface FoodCardProps {
  food: FoodData
  className?: string
}

export interface PlaceData {
  id: string
  slug: string
  title: string
  description: string
  year: string
  district: string
  imageUrl: string
}

export interface PlaceCardProps {
  place: PlaceData
  className?: string
}

export * from "./components"
