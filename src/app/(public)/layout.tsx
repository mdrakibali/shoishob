import { Header } from "@/components/layout/header"

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="bg-background flex min-h-screen flex-col overflow-hidden">
      <Header />
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  )
}
