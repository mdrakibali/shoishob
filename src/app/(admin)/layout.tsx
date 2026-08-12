import { AdminSidebar } from "@/components/layout/admin-sidebar"
import * as React from "react"

export const metadata = {
  title: "Admin | Shoishob",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="bg-background text-foreground flex min-h-screen font-sans">
      <AdminSidebar />
      <main className="flex min-h-screen flex-1 flex-col overflow-hidden">
        {/* Admin Header / Topbar could go here if needed */}
        <div className="bg-surface flex-1 overflow-y-auto p-8">
          <div className="mx-auto max-w-6xl">{children}</div>
        </div>
      </main>
    </div>
  )
}
