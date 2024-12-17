"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Calendar,
  LayoutDashboard,
  Ticket,
  Users,
  Settings,
  LogOut
} from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "@/hooks/use-toast"

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Events",
    href: "/dashboard/events",
    icon: Calendar,
  },
  {
    title: "My Tickets",
    href: "/dashboard/tickets",
    icon: Ticket,
  },
  {
    title: "Communities",
    href: "/dashboard/communities",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  return (
    <nav className="relative border-r bg-card w-72 px-4 py-8 hidden lg:block">
      <div className="mb-8 px-4">
        <h1 className="text-xl font-bold">TechEvents</h1>
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)] px-4">
        <div className="space-y-2">
          {sidebarNavItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start",
                pathname === item.href && "bg-secondary"
              )}
              asChild
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
      <div className="absolute bottom-8 left-4 right-4">
        <Button
          variant="ghost"
          className="w-full justify-start text-red-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
          //onClick={handleSignOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </nav>
  )
}