"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Replace with actual API call
const communities = [
  {
    id: "1",
    name: "React Developers",
    role: "ADMIN",
    members: 15000,
    description: "A community for React developers to share knowledge and experiences.",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  // Add more communities...
];

export default function DashboardCommunities() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {communities.map((community) => (
        <Card key={community.id}>
          <CardHeader className="p-0">
            <div className="aspect-video relative">
              <img
                src={community.imageUrl}
                alt={community.name}
                className="object-cover w-full h-full rounded-t-lg"
              />
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">{community.name}</h3>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <Users className="h-4 w-4 mr-1" />
                  {community.members.toLocaleString()} members
                </div>
              </div>
              <Badge>{community.role}</Badge>
            </div>
            <p className="text-muted-foreground mb-4">
              {community.description}
            </p>
            <Button className="w-full">Manage Community</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}