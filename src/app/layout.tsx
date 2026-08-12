import type { Metadata } from "next"
import { Noto_Serif_Bengali, Hind_Siliguri } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
})

const hindSiliguri = Hind_Siliguri({
  variable: "--font-sans",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Shoishob | যা আজ স্মৃতি, তা কাল ইতিহাস",
  description:
    "বাংলাদেশের বিভিন্ন প্রজন্মের খেলা, গল্প, জায়গা আর ছোট ছোট স্মৃতি এক জায়গায় সংরক্ষণ করুন।",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="bn"
      suppressHydrationWarning
      className={`${notoSerifBengali.variable} ${hindSiliguri.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
