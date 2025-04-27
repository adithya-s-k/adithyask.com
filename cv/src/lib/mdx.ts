import { RESUME_DATA } from '@/data/resume-data';
import { BlogPost } from '@/components/blog-card';

// Get all blog posts from RESUME_DATA
export function getAllBlogPosts(): BlogPost[] {
  try {
    // Use the blogs array from RESUME_DATA
    const blogPosts = RESUME_DATA.blogs;
    
    // Filter for published posts and sort by date
    return blogPosts
      .filter(post => post.published === true || post.published === undefined)
      .sort((a, b) => {
        // Sort by date in descending order
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  } catch (error) {
    console.error("Error retrieving blog posts:", error);
    return [];
  }
}

// Get a blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const blogPosts = getAllBlogPosts();
    const post = blogPosts.find(post => post.slug === slug);
    
    if (!post) {
      throw new Error(`Blog post not found: ${slug}`);
    }
    
    return post;
  } catch (error) {
    console.error(`Error getting blog post ${slug}:`, error);
    return null;
  }
}

// Helper function to calculate reading time
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}