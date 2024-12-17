"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"
import { format } from "date-fns"
import Image from "next/image"
import { Database } from "@/lib/supabase/types"
import { Event } from "@/hooks/use-tech-events"
//import { Event } from "@/hooks/use-tech-events"

//type Event = Database['public']['Tables']['events']['Row']

export function EventCard({ event }: { event: Event }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={event.image_url}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-sm text-muted-foreground">{event.category}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold">${event.price}</p>
            <p className="text-sm text-muted-foreground">
              {event.available_tickets} tickets left
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            {format(new Date(event.date), 'PPP')}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4" />
            {event.location}
          </div>
          {event.waitlist_count > 0 && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="mr-2 h-4 w-4" />
              {event.waitlist_count} people waiting
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          {event.available_tickets > 0 ? 'Buy Ticket' : 'Join Waitlist'}
        </Button>
      </CardFooter>
    </Card>
  )
}