'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import { BlogPost } from '@/types/blogs'


interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => setIsLoading(false), 1000)

  if (isLoading) {
    return (
      <Card className="h-full">
        <div className="relative h-48 w-full">
          <Skeleton className="h-full w-full rounded-t-lg" />
        </div>
        <CardHeader>
          <Skeleton className="h-6 w-2/3" />
          <Skeleton className="h-4 w-1/3" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6" />
        </CardContent>
      </Card>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/blog/${post.id}`}>
        <Card className="h-full transition-transform hover:scale-105">
          <div className="relative h-48 w-full">
            <Image
              src={post.images[0]}
              alt={post.title}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-3">{post.content}</p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

