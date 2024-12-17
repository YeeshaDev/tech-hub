import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { getUser } from "@/lib/actions/user-details"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getUser()
  //console.log('client', user)
  return (
    <div>
     <DashboardHeader
        user={user}
            />
    <div className="flex min-h-screen">
      <DashboardSidebar/>
      <main className="flex-1 p-8">{children}</main>
    </div>
    </div>
  )
}