"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Replace with actual API call
const tickets = [
  {
    id: "1",
    eventTitle: "React Conference 2024",
    eventDate: "2024-06-15",
    location: "San Francisco, CA",
    status: "CONFIRMED",
    ticketNumber: "RC2024-001",
  },
  // Add more tickets...
];

export default function DashboardTickets() {
  return (
    <div className="space-y-4">
      {tickets.map((ticket) => (
        <Card key={ticket.id}>
          <CardHeader className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <CardTitle>{ticket.eventTitle}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(ticket.eventDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{ticket.location}</span>
                  </div>
                </div>
              </div>
              <Badge variant={ticket.status === "CONFIRMED" ? "default" : "secondary"}>
                {ticket.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                Ticket #{ticket.ticketNumber}
              </div>
              <Button variant="outline">Download Ticket</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}