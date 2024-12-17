"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { EventCard } from "@/components/events/event-card"
import { EventCardSkeleton } from "@/components/events/event-card-skeleton"
import { CreateEventDialog } from "@/components/events/create-event-dialog"
//import { supabase } from "@/lib/supabase/client"
import { Database } from "@/lib/supabase/types"
import { createClient } from "@/lib/supabase/client"
import { DashboardTitle } from "@/components/dashboard/dashboard-title"
import { useEvents } from "@/hooks/use-tech-events"

//type Event = Database['public']['Tables']['events']['Row']

export default function EventsPage() {
  const [showCreateDialog, setShowCreateDialog] = useState(false)
 const { events, loading, error } = useEvents(true);

  return (
    <DashboardShell>
      <DashboardTitle heading="My Events" text="Create and manage your events.">
        <Button onClick={() => setShowCreateDialog(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Event
        </Button>
      </DashboardTitle>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          Array(6)
            .fill(0)
            .map((_, i) => <EventCardSkeleton key={i} />)
        ) : events.length === 0 ? (
          <p className="col-span-full text-center text-muted-foreground">
            No events found. Create your first event!
          </p>
        ) : (
          events.map((event) => <EventCard key={event.id} event={event} />)
        )}
      </div>

      <CreateEventDialog
        open={showCreateDialog}
        onOpenChange={setShowCreateDialog}
      />
    </DashboardShell>
  )
}