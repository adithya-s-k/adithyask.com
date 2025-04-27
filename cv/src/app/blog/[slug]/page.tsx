import React from 'react';
import { notFound, redirect } from 'next/navigation';
import Image from 'next/image';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/mdx';
import { BlogPostUI } from '@/components/blog-post-ui';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import '../markdown.css';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts
    .filter(post => !post.externalUrl) // Only generate pages for internal posts
    .map(post => ({
      slug: post.slug
    }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post || !post.published) {
    notFound();
  }

  // If it's an external post, we can either redirect or show a summary page
  if (post.externalUrl) {
    // Option 1: Direct redirect to external site
    // redirect(post.externalUrl);
    
    // Option 2: Show a summary page with a link to the external content
    return (
      <BlogPostUI 
        title={post.title} 
        date={post.date} 
        readingTime={post.readingTime} 
        tags={[...(post.tags || [])]}
      >
        <div className="markdown-content text-foreground">
          <p className="my-4 leading-relaxed font-mono text-sm text-muted-foreground">
            {post.excerpt}
          </p>
          <div className="my-8 flex flex-col items-center justify-center">
            <p className="text-center text-muted-foreground mb-4">
              This article is hosted externally. Click below to read the full post.
            </p>
            <Button asChild className="inline-flex items-center gap-2">
              <a href={post.externalUrl} target="_blank" rel="noopener noreferrer">
                Read Full Article
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </BlogPostUI>
    );
  }

  // For internal posts with direct content
  const { title, date, readingTime, tags, content } = post;

  // Make sure content exists
  if (!content) {
    return (
      <BlogPostUI 
        title={title} 
        date={date} 
        readingTime={readingTime} 
        tags={[...(tags || [])]}
      >
        <div className="text-center py-8">
          <p className="text-muted-foreground">Content unavailable</p>
        </div>
      </BlogPostUI>
    );
  }

  return (
    <BlogPostUI 
      title={title} 
      date={date} 
      readingTime={readingTime} 
      tags={[...(tags || [])]}
    >
      <div className="markdown-content text-foreground">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({children, ...props}) => <h1 {...props} className="text-3xl font-bold mt-8 mb-4 text-foreground">{children}</h1>,
            h2: ({children, ...props}) => <h2 {...props} className="text-2xl font-bold mt-8 mb-3 text-foreground border-b border-muted pb-2">{children}</h2>,
            h3: ({children, ...props}) => <h3 {...props} className="text-xl font-semibold mt-6 mb-3 text-foreground">{children}</h3>,
            h4: ({children, ...props}) => <h4 {...props} className="text-lg font-medium mt-6 mb-2 text-foreground">{children}</h4>,
            p: ({children, ...props}) => <p {...props} className="my-4 leading-relaxed font-mono text-sm text-muted-foreground">{children}</p>,
            a: ({children, ...props}) => <a {...props} className="text-primary hover:underline transition-colors">{children}</a>,
            ul: ({children, ...props}) => <ul {...props} className="my-4 ml-6 list-disc font-mono text-sm text-muted-foreground">{children}</ul>,
            ol: ({children, ...props}) => <ol {...props} className="my-4 ml-6 list-decimal font-mono text-sm text-muted-foreground">{children}</ol>,
            li: ({children, ...props}) => <li {...props} className="mt-2">{children}</li>,
            blockquote: ({children, ...props}) => <blockquote {...props} className="border-l-2 border-muted pl-4 my-4 italic text-muted-foreground">{children}</blockquote>,
            img: ({src, alt, ...props}) => (
              <div className="my-6">
                {src && (
                  <Image 
                    src={src} 
                    alt={alt || "Blog post image"} 
                    width={800} 
                    height={450}
                    className="rounded-md max-w-full border border-muted" 
                  />
                )}
              </div>
            ),
            code: ({ className, children, ...props }: any) => {
              const match = /language-(\w+)/.exec(className || '');
              const inline = !match;
              return !inline ? (
                <div className="my-6 rounded-md overflow-hidden border border-muted">
                  <div className="bg-muted px-4 py-2 text-xs font-mono font-medium text-muted-foreground border-b border-muted">
                    {match[1].toUpperCase()}
                  </div>
                  <SyntaxHighlighter
                    style={nightOwl}
                    language={match[1]}
                    PreTag="div"
                    customStyle={{ 
                      margin: 0,
                      borderRadius: '0 0 4px 4px',
                      fontSize: '0.9rem'
                    }}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <code 
                  className="bg-muted text-foreground py-0.5 px-1.5 rounded text-[10px] font-mono"
                  {...props}
                >
                  {children}
                </code>
              )
            },
            table: ({children, ...props}) => <div className="overflow-x-auto"><table {...props} className="min-w-full divide-y divide-muted my-6 font-mono text-sm">{children}</table></div>,
            thead: ({children, ...props}) => <thead {...props} className="bg-muted">{children}</thead>,
            tr: ({children, ...props}) => <tr {...props} className="border-b border-muted">{children}</tr>,
            th: ({children, ...props}) => <th {...props} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">{children}</th>,
            td: ({children, ...props}) => <td {...props} className="px-4 py-3 text-xs border-muted border">{children}</td>
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </BlogPostUI>
  );
}