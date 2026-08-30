import { IconProps } from "@/types"

// BrandLogo renders the nostalgic Shoishob sprout emblem
export function BrandLogo({ className = "h-7 w-7 text-primary", size = 28, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="16" cy="16" r="3" fill="currentColor" />
      <path
        d="M16 6C16 11 11 16 6 16C11 16 16 21 16 26C16 21 21 16 26 16C21 16 16 11 16 6Z"
        fill="currentColor"
        fillOpacity="0.25"
      />
      <circle cx="16" cy="6" r="2.5" fill="currentColor" />
      <circle cx="16" cy="26" r="2.5" fill="currentColor" />
      <circle cx="6" cy="16" r="2.5" fill="currentColor" />
      <circle cx="26" cy="16" r="2.5" fill="currentColor" />
      <circle cx="9" cy="9" r="2" fill="currentColor" />
      <circle cx="23" cy="9" r="2" fill="currentColor" />
      <circle cx="9" cy="23" r="2" fill="currentColor" />
      <circle cx="23" cy="23" r="2" fill="currentColor" />
    </svg>
  )
}

