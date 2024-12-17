import { Button } from "@/components/ui/button"
import { EventCardSkeleton } from "@/components/events/event-card-skeleton"
import { CalendarDays, ChevronRight, Link, Ticket, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import NumberTicker from "@/components/ui/number-ticker"
import { EventShowcase } from "@/components/scroll-card"
import CommunityShowcase from "@/components/community-showcase"

export default async function Home() {
  // const { data: events } = await supabase
  //   .from('events')
  //   .select('*')
  //   .order('created_at', { ascending: false })
  //   .limit(6)

  return (
    <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="text-center pt-20 pb-14 space-y-4">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
          Where Tech Communities <br />
          <span className="text-primary">Come Together</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
          Discover amazing tech conferences, connect with communities, and grow your network.
        </p>
        <div className="flex gap-4 justify-center mt-8">
         
            <Button size="lg">
            Browse Events
              <ChevronRight className="mr-2 h-5 w-5 transition-all duration-300 ease-out shrink-0 hover:translate-x-1" />
            </Button>
         
            <Button size="lg" variant="outline">
              <Users className="mr-2 h-5 w-5" />
              Join Communities
            </Button>
         
        </div>
      </section>
      {/* Events Scroll Animation Section */}
 <section>
        <EventShowcase/>
      </section>

       {/* Stats Section */}
       <section className="grid md:grid-cols-3 gap-8 py-5 mt-8">
        <Card className="p-6 text-center !border-0 !shadow-0 space-y-2">
          <CalendarDays className="w-12 h-12 mx-auto text-primary" />
          <h3 className="text-2xl font-bold">200+</h3>
          <p className="text-muted-foreground">Upcoming Events</p>
        </Card>
        <Card className="p-6 text-center space-y-2">
          <Users className="w-12 h-12 mx-auto text-primary" />
          <h3 className="text-2xl font-bold">
          <NumberTicker value={50} />
              K+
            </h3>
          <p className="text-muted-foreground">Community Members</p>
        </Card>
        <Card className="p-6 text-center space-y-2 !border-0 !shadow-0">
          <Ticket className="w-12 h-12 mx-auto text-primary" />
          <h3 className="text-2xl font-bold">100K+</h3>
          <p className="text-muted-foreground">Tickets Sold</p>
        </Card>
      </section>

      <section className="py-12 px-4 layout mx-auto">
        <h2 className="text-2xl font-bold mb-6">Featured Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            Array(6).fill(0).map((_, i) => (
              <EventCardSkeleton key={i} />
            )
          )}
        </div>
      </section>

       {/* Community Showcase */}
       <section className="py-12 layout">
        <h2 className="text-3xl font-bold mb-8">Popular Communities</h2>
        <CommunityShowcase />
      </section>
    </main>
  )
}

// {events ? (
//   events.map((event:any) => (
//     <EventCard key={event.id} event={event} />
//   ))
// ) : (
//   Array(6).fill(0).map((_, i) => (
//     <EventCardSkeleton key={i} />
//   ))
// )}