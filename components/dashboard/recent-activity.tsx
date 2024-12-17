"use client"

import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { supabase } from "@/lib/supabase/client"

type Activity = {
  id: string
  type: "ticket_purchase" | "event_created" | "community_joined"
  title: string
  date: string
  user: {
    name: string
    avatar_url: string
  }
}

export function RecentActivity() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadActivities() {
      // In a real app, you would fetch actual activity data
      // This is just mock data for demonstration
      setActivities([
        {
          id: "1",
          type: "ticket_purchase",
          title: "Purchased ticket for React Conference 2024",
          date: "2024-03-20",
          user: {
            name: "John Doe",
            avatar_url: "",
          },
        },
        {
          id: "2",
          type: "community_joined",
          title: "Joined React Developers Community",
          date: "2024-03-19",
          user: {
            name: "Jane Smith",
            avatar_url: "",
          },
        },
      ])
      setIsLoading(false)
    }

    loadActivities()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-8">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.user.avatar_url} alt={activity.user.name} />
            <AvatarFallback>
              {activity.user.name.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.title}</p>
            <p className="text-sm text-muted-foreground">
              {new Date(activity.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}