"use client"

import { useEffect, useRef, useState } from "react"
import {
  Gamepad2,
  Heart,
  ImageIcon,
  MapPin,
  MoreHorizontal,
  Plus,
  Send,
  Soup,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PromptBannerCardProps, PromptCategoryItem } from "@/types"
import { PROMPT_CATEGORIES } from "@/lib/mock-data/feed-data"
import { VintageVillageArt } from "@/components/shared/icons/vintage-village-art"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function getCategoryIcon(iconName: PromptCategoryItem["iconName"]) {
  switch (iconName) {
    case "game":
      return <Gamepad2 className="h-3.5 w-3.5 text-primary" />
    case "heart":
      return <Heart className="h-3.5 w-3.5 text-destructive" />
    case "location":
      return <MapPin className="h-3.5 w-3.5 text-accent" />
    case "food":
      return <Soup className="h-3.5 w-3.5 text-success" />
    case "more":
      return <MoreHorizontal className="h-3.5 w-3.5 text-muted-foreground" />
  }
}

// PromptBannerCard renders an interactive creation banner with hidden scrollbar and min-h-200
export function PromptBannerCard({ className }: PromptBannerCardProps) {
  const [memoryText, setMemoryText] = useState("")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Clean up object URLs on unmount or when image changes
  useEffect(() => {
    return () => {
      if (selectedImage && selectedImage.startsWith("blob:")) {
        URL.revokeObjectURL(selectedImage)
      }
    }
  }, [selectedImage])

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (selectedImage && selectedImage.startsWith("blob:")) {
        URL.revokeObjectURL(selectedImage)
      }
      const url = URL.createObjectURL(file)
      setSelectedImage(url)
    }
  }

  const handleRemoveImage = () => {
    if (selectedImage && selectedImage.startsWith("blob:")) {
      URL.revokeObjectURL(selectedImage)
    }
    setSelectedImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemoryText(e.target.value)
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${Math.max(60, textareaRef.current.scrollHeight)}px`
    }
  }

  const handlePost = () => {
    setMemoryText("")
    handleRemoveImage()
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
    }
  }

  const hasContent = memoryText.trim().length > 0 || selectedImage !== null

  return (
    <div
      className={cn(
        "border-border bg-card relative mb-3.5 w-full shrink-0 rounded-2xl border p-6 sm:p-7 shadow-xs min-h-[200px] flex flex-col justify-between",
        className
      )}
    >
      {/* Background artwork placed on the right side with full height */}
      <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-64 sm:w-72 overflow-hidden rounded-r-2xl flex items-center justify-end">
        <VintageVillageArt className="h-full w-full object-contain text-primary/35 dark:text-primary/20" />
      </div>

      {/* Hidden File Input for Image Upload */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={handleImageSelect}
      />

      {/* Textarea Input Section with 0 scrollbar */}
      <div className="relative z-10 flex flex-1 flex-col justify-start gap-2.5">
        <textarea
          ref={textareaRef}
          value={memoryText}
          onChange={handleTextChange}
          placeholder="কোন স্মৃতিটা আজ মনে পড়ছে? শৈশবের গল্প বা স্মৃতি লিখুন..."
          className="text-foreground placeholder:text-foreground/75 font-serif text-lg font-bold sm:text-xl w-full max-w-lg min-h-[70px] resize-none border-none bg-transparent p-0 focus:outline-none focus:ring-0 leading-snug scrollbar-none overflow-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        />

        {/* Selected Image Thumbnail Preview */}
        {selectedImage && (
          <div className="border-border relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border shadow-xs">
            <Image
              src={selectedImage}
              alt="Selected memory attachment"
              fill
              className="object-cover"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="bg-foreground/75 text-card hover:bg-foreground absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full transition-colors"
              aria-label="Remove image"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        )}
      </div>

      {/* Category Pills & Attachment Row */}
      <div className="relative z-10 flex flex-wrap items-center gap-2 pt-4 pr-36">
        {/* Image Attachment Trigger Button */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="border-border bg-card/60 hover:bg-secondary text-foreground flex items-center gap-1.5 rounded-xl border px-3.5 py-1.5 text-xs font-medium transition-colors shadow-2xs"
        >
          <ImageIcon className="h-3.5 w-3.5 text-primary" />
          <span>ছবি যোগ করুন</span>
        </button>

        {/* Category Pills */}
        {PROMPT_CATEGORIES.map((category) => (
          <Link
            key={category.id}
            href={category.href || "/memories"}
            className="border-border bg-card/60 hover:bg-secondary text-foreground flex items-center gap-1.5 rounded-xl border px-3.5 py-1.5 text-xs font-medium transition-colors shadow-2xs"
          >
            {getCategoryIcon(category.iconName)}
            <span>{category.label}</span>
          </Link>
        ))}
      </div>

      {/* Floating CTA Button with negative bottom position */}
      <div className="absolute right-6 -bottom-4.5 z-20">
        {hasContent ? (
          <Button
            size="sm"
            onClick={handlePost}
            className="bg-primary text-primary-foreground hover:bg-primary-hover shadow-md h-9.5 rounded-lg px-4 text-xs font-semibold sm:text-sm transition-all"
          >
            <Send className="mr-1.5 h-3.5 w-3.5" />
            <span>পোস্ট করুন</span>
          </Button>
        ) : (
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary-hover shadow-md h-9.5 rounded-lg px-4 text-xs font-semibold sm:text-sm transition-all"
          >
            <Link href="/submit" className="flex items-center gap-1.5">
              <Plus className="h-4 w-4" />
              <span>স্মৃতি যোগ করুন</span>
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
