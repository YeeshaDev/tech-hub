"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/dashboard/overview"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { DashboardShell } from "@/components/dashboard/shell"
import { DashboardTitle } from "@/components/dashboard/dashboard-title"

type Stats = {
  totalEvents: number
  totalTickets: number
  totalCommunities: number
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({
    totalEvents: 0,
    totalTickets: 0,
    totalCommunities: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   async function loadStats() {
  //     const { data: { user } } = await supabase.auth.getUser()
  //     if (!user) return

  //     //const [events, tickets, communities] = await Promise.all([
  //       //supabase.from('events').select('id', { count: 'exact' }).eq('organizer_id', user.id),
  //       //supabase.from('tickets').select('id', { count: 'exact' }).eq('user_id', user.id),
  //       //supabase.from('communities').select('id', { count: 'exact' }).eq('owner_id', user.id),
  //     //])

  //     setStats({
  //       totalEvents: events.count || 0,
  //       totalTickets: tickets.count || 0,
  //       totalCommunities: communities.count || 0,
  //     })
  //     setIsLoading(false)
  //   }

  //   loadStats()
  // }, [])

  return (
    <DashboardShell>
      <DashboardTitle
        heading="Dashboard"
        text="Overview of your events, tickets, and communities."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{isLoading ? "-" : stats.totalEvents}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{isLoading ? "-" : stats.totalTickets}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Communities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{isLoading ? "-" : stats.totalCommunities}</div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}