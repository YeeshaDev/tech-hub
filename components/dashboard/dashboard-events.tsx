"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import Link from "next/link";

// Replace with actual API call
const events = [
  {
    id: "1",
    title: "React Conference 2024",
    description: "Join us for the biggest React conference of the year.",
    date: "2024-06-15",
    location: "San Francisco, CA",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 599,
    totalTickets: 1000,
    soldTickets: 750,
    waitingList: 50,
  },
  // Add more events...
];

export default function DashboardEvents() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <Card key={event.id} className="flex flex-col">
          <CardHeader className="p-0">
            <div className="aspect-video relative">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="object-cover w-full h-full rounded-t-lg"
              />
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-6">
            <CardTitle className="mb-2">{event.title}</CardTitle>
            <CardDescription className="mb-4">
              {event.description}
            </CardDescription>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{event.soldTickets} / {event.totalTickets} tickets sold</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <div className="flex justify-between items-center w-full">
              <div className="text-lg font-bold">${event.price}</div>
              <Link href={`/events/${event.id}/manage`}>
                <Button>Manage Event</Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}