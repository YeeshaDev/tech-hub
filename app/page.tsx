import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendarDays, Users, Ticket, ChevronRight } from "lucide-react";
import Link from "next/link";
import FeaturedEvents from "@/components/featured-events";
import CommunityShowcase from "@/components/community-showcase";
import Marquee from "@/components/ui/marquee";
import { EventShowcase } from "@/components/scroll-animation";
import NumberTicker from "@/components/ui/number-ticker";

export default function Home() {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-5 md:py-7 overflow-x-hidden w-full">
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
          <Link href="/events">
            <Button size="lg">
            Browse Events
              <ChevronRight className="mr-2 h-5 w-5 transition-all duration-300 ease-out shrink-0 hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/communities">
            <Button size="lg" variant="outline">
              <Users className="mr-2 h-5 w-5" />
              Join Communities
            </Button>
          </Link>
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

     

      {/* Featured Events Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Events</h2>
        <FeaturedEvents />
      </section>

      {/* Community Showcase */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8">Popular Communities</h2>
        <CommunityShowcase />
      </section>
    </div>
  );
}