'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

interface Comment {
  id: number
  content: string
  author: string
  date: string
}

interface CommentSectionProps {
  postId: number
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically make an API call to save the comment
    const comment: Comment = {
      id: Date.now(),
      content: newComment,
      author: 'Anonymous',
      date: new Date().toISOString(),
    }
    setComments(prevComments => [...prevComments, comment])
    setNewComment('')
  }

  return (
    <div className="mt-8 max-w-4xl">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <form onSubmit={handleSubmitComment} className="mb-4">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Leave a comment..."
          className="mb-2"
        />
        <Button type="submit">Post Comment</Button>
      </form>
      <div className="space-y-4">
        {comments.map(comment => (
          <div key={comment.id} className="bg-muted p-4 rounded-lg">
            <p className="mb-2">{comment.content}</p>
            <p className="text-sm text-muted-foreground">
              By {comment.author} on {new Date(comment.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
