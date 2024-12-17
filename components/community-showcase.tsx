"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Users } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Simulated community data (replace with actual API call)
const communities = [
  {
    id: "1",
    name: "React Developers",
    members: 15000,
    description: "A community for React developers to share knowledge and experiences.",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "2",
    name: "TypeScript Enthusiasts",
    members: 8000,
    description: "Everything TypeScript - from basics to advanced patterns.",
    imageUrl: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "3",
    name: "Next.js Builders",
    members: 12000,
    description: "Building the web with Next.js - best practices and innovations.",
    imageUrl: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "4",
    name: "TypeScript Enthusiasts",
    members: 8000,
    description: "Everything TypeScript - from basics to advanced patterns.",
    imageUrl: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "5",
    name: "Next.js Builders",
    members: 12000,
    description: "Building the web with Next.js - best practices and innovations.",
    imageUrl: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

export default function CommunityShowcase() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {communities.map((community) => (
        <motion.div
          key={community.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardHeader className="p-0">
              <div className="aspect-video relative h-full max-h-[400px]">
                <img
                  src={community.imageUrl}
                  alt={community.name}
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{community.name}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-1" />
                  {community.members.toLocaleString()}
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{community.description}</p>
              <Link href={`/communities/${community.id}`}>
                <Button className="w-full">Join Community</Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export function CommunityShowcaseSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <Card key={i}>
          <CardHeader className="p-0">
            <Skeleton className="aspect-video rounded-t-lg" />
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-4 w-16" />
            </div>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3 mb-4" />
            <Skeleton className="h-10 w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}