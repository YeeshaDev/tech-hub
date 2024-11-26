import BlogPostCard from "@/components/blog/post-card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/constant/constant";
import { BlogPost } from "@/types/blogs";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Tech News & Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post: BlogPost) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Our Tech Community</h2>
        <p className="mb-4">Stay updated with the latest tech news and events!</p>
        <Button>Join Now</Button>
      </div>
    </div>
  );
}
