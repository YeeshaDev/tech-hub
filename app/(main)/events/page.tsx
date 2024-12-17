import { EventCard } from '@/components/events/event-card';
import { EventCardSkeleton } from '@/components/events/event-card-skeleton';
import { useEvents } from '@/hooks/use-tech-events';
import React from 'react'

function AllEvents() {
     const { events, loading, error } = useEvents();
    return (
        <div>
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
        </div>
    )
}

export default AllEvents
