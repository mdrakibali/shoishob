import { AdminSidebar } from "@/components/layout/admin-sidebar";
import * as React from "react";

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
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans">
      <AdminSidebar />
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Admin Header / Topbar could go here if needed */}
        <div className="flex-1 overflow-y-auto p-8 bg-surface">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
