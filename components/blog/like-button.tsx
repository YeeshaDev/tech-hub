'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'

interface LikeButtonProps {
  postId: number
}

export default function LikeButton({ postId }: LikeButtonProps) {
  const [likes, setLikes] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = async () => {
    setLikes(prevLikes => isLiked ? prevLikes - 1 : prevLikes + 1)
    setIsLiked(!isLiked)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleLike}
      className={`flex items-center space-x-2 ${isLiked ? 'text-red-500' : ''}`}
    >
      <motion.div
        animate={{ scale: isLiked ? [1, 1.2, 1] : 1 }}
        transition={{ duration: 0.2 }}
      >
        <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
      </motion.div>
      <span>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
    </Button>
  )
}

