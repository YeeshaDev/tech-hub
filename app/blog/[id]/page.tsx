import { notFound } from 'next/navigation'
import Image from 'next/image'
import LikeButton from '@/components/blog/like-button'
import CommentSection from '@/components/blog/comment-section'
import { blogPosts } from '@/constant/constant'


export async function generateStaticParams() {
    return blogPosts.map((post) => ({
      id: post.id.toString(),
    }))
  }
  
  export default function BlogPost({ params }: { params: { id: string } }) {
    const post = blogPosts.find(post => post.id === parseInt(params.id))
  
    if (!post) {
      notFound()
    }
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-muted-foreground mb-8">{post.date}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {post.images.map((image, index) => (
            <div key={index} className="relative h-64 md:h-96 overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={`Image ${index + 1} for ${post.title}`}
                fill
                className="object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
          ))}
        </div>
        <div className="prose dark:prose-invert max-w-none mb-8">
          {post.content}
        </div>
        <LikeButton postId={post.id} />
        <CommentSection postId={post.id} />
      </div>
    )
  }
  
  