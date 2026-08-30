import { IconProps } from "@/types"

// VintageVillageArt renders the subtle decorative nostalgic village scenery watermark
export function VintageVillageArt({ className = "text-primary/10", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 360 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M20 135 C60 135, 100 130, 160 132 C220 134, 280 132, 350 135"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <circle cx="280" cy="50" r="32" fill="currentColor" fillOpacity="0.12" />
      <circle cx="310" cy="65" r="24" fill="currentColor" fillOpacity="0.10" />
      <circle cx="255" cy="70" r="20" fill="currentColor" fillOpacity="0.10" />
      <path
        d="M280 82 L280 135 M275 135 L285 135"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Bicycle */}
      <circle cx="190" cy="120" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="220" cy="120" r="10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M190 120 L202 120 L212 108 L200 108 Z M202 120 L200 102 M220 120 L212 108 M212 108 L215 100 L219 100 M196 102 L204 102"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Distant trees */}
      <path
        d="M90 135 Q105 85 120 135 M125 135 Q135 95 145 135 M40 135 Q55 100 70 135"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Birds */}
      <path
        d="M140 40 Q145 35 150 40 Q155 35 160 40 M170 30 Q174 26 178 30 Q182 26 186 30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

