import { IconProps } from "@/types"

// VintageVillageArt renders a full-height right-aligned nostalgic rural landscape vector SVG
export function VintageVillageArt({
  className = "text-[#8B5E3C] opacity-35 dark:opacity-20",
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 340 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMaxYMid meet"
      {...props}
    >
      {/* ================= BACKGROUND: MOUNTAINS & HORIZON ================= */}
      {/* Distant Hills */}
      <path
        d="M0 175 C30 145, 60 140, 90 175 M75 175 C105 135, 135 130, 165 175 M150 175 C180 150, 205 150, 235 175"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.4"
        fill="none"
      />

      {/* Ground horizon / Country road dotted line */}
      <path
        d="M0 175 L340 175"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        strokeLinecap="round"
      />
      <path
        d="M0 180 L340 180"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.4"
        strokeDasharray="6 6"
      />

      {/* ================= SKY: FLYING BIRDS ================= */}
      <path
        d="M50 45 Q55 38 60 45 Q65 38 70 45"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M95 30 Q100 24 105 30 Q110 24 115 30"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M145 38 Q149 33 153 38 Q157 33 161 38"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />

      {/* ================= MIDGROUND: TREES ================= */}
      {/* Small Tree 1 */}
      <path
        d="M35 175 L35 145 M30 145 C20 145, 16 132, 26 122 C24 112, 38 108, 43 118 C52 112, 57 128, 48 138 C53 145, 42 147, 35 145 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Small Tree 2 */}
      <path
        d="M95 175 L95 135 M88 135 C75 135, 70 115, 84 105 C80 92, 102 88, 107 100 C120 92, 128 114, 116 126 C120 135, 104 138, 95 135 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Small Tree 3 */}
      <path
        d="M145 175 L145 140 M140 140 C128 140, 124 122, 136 112 C132 98, 150 94, 155 106 C168 98, 176 120, 164 132 C168 140, 154 142, 145 140 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="currentColor"
        fillOpacity="0.08"
      />

      {/* Foreground Grass Clumps */}
      <path
        d="M60 175 C64 162, 72 154, 80 175 M72 175 C78 158, 86 158, 92 175 M84 175 C90 164, 98 166, 104 175"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* ================= BICYCLE & CYCLIST ================= */}
      {/* Rear Wheel */}
      <circle cx="195" cy="170" r="14" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="195" cy="170" r="2" fill="currentColor" />
      <line x1="195" y1="156" x2="195" y2="184" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.6" />
      <line x1="181" y1="170" x2="209" y2="170" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.6" />
      <line x1="185" y1="160" x2="205" y2="180" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.6" />
      <line x1="185" y1="180" x2="205" y2="160" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.6" />

      {/* Front Wheel */}
      <circle cx="238" cy="170" r="14" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="238" cy="170" r="2" fill="currentColor" />
      <line x1="238" y1="156" x2="238" y2="184" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.6" />
      <line x1="224" y1="170" x2="252" y2="170" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.6" />
      <line x1="228" y1="160" x2="248" y2="180" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.6" />
      <line x1="228" y1="180" x2="248" y2="160" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.6" />

      {/* Frame */}
      <path
        d="M195 170 L212 170 L228 148 L206 148 Z M212 170 L209 142 M238 170 L227 138 L218 138 M204 142 L214 142"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Cyclist */}
      {/* Head */}
      <circle cx="222" cy="115" r="6.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
      <path d="M216 113 C216 109, 226 107, 230 113" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      {/* Torso */}
      <path
        d="M222 121 C220 128, 217 136, 215 143"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Arm to Handlebar */}
      <path
        d="M220 126 L227 138"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Leg to Pedal */}
      <path
        d="M215 143 L219 156 L212 170"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* ================= TALL FULL-HEIGHT MAJESTIC TREE ================= */}
      {/* Tree Trunk & Roots reaching bottom */}
      <path
        d="M298 175 C297 138, 292 100, 296 50 M308 175 C305 138, 301 100, 296 50"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* Roots */}
      <path
        d="M288 175 C293 170, 298 168, 298 158 M316 175 C310 170, 306 168, 305 158"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Main Branches reaching top */}
      <path
        d="M296 90 C284 76, 268 70, 252 66 M296 80 C306 66, 324 62, 338 58 M296 62 C288 46, 278 36, 266 28 M296 56 C304 42, 314 34, 324 26 M296 50 L296 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Twigs */}
      <path
        d="M272 74 C266 66, 260 64, 254 62 M316 65 C324 60, 330 56, 336 52 M282 44 C275 36, 268 32, 262 26 M308 38 C314 32, 320 28, 326 22"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Foliage Clouds reaching top boundary (Y=10 to Y=70) */}
      <circle cx="296" cy="16" r="22" fill="currentColor" fillOpacity="0.12" />
      <circle cx="264" cy="30" r="20" fill="currentColor" fillOpacity="0.12" />
      <circle cx="326" cy="28" r="20" fill="currentColor" fillOpacity="0.12" />
      <circle cx="250" cy="60" r="18" fill="currentColor" fillOpacity="0.10" />
      <circle cx="338" cy="56" r="18" fill="currentColor" fillOpacity="0.10" />
      <circle cx="286" cy="48" r="24" fill="currentColor" fillOpacity="0.14" />
      <circle cx="308" cy="44" r="22" fill="currentColor" fillOpacity="0.14" />

      {/* Foliage Leaf Texture Linework */}
      <path
        d="M256 24 Q260 18 264 24 M278 14 Q282 8 286 14 M304 10 Q308 4 312 10 M328 20 Q332 14 336 20 M248 54 Q252 48 256 54 M330 50 Q334 44 338 50 M280 38 Q284 32 288 38 M310 34 Q314 28 318 34"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
