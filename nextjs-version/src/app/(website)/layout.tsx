import { WbsSidebar } from "@/components/wbs-sidebar"

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <WbsSidebar />
      <main className="flex-1 p-6 lg:p-8">{children}</main>
    </div>
  )
}
