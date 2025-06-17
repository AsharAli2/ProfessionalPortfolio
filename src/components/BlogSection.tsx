
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  categories: string[];
}

const BlogSection = ({ limit: blogLimit }: { limit?: number }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      let blogsQuery = query(
        collection(db, 'blogs'),
        orderBy('createdAt', 'desc')
      );
      
      if (blogLimit) {
        blogsQuery = query(blogsQuery, limit(blogLimit));
      }

      const querySnapshot = await getDocs(blogsQuery);
      const blogsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[];
      
      setBlogPosts(blogsData);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [blogLimit]);

  if (loading) {
    return (
      <section className="py-20" id="blog">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="gold-text-gradient">Latest Blog Posts</span>
          </h2>
          <div className="text-center text-gold-400">Loading blog posts...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20" id="blog">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="gold-text-gradient">Latest Blog Posts</span>
        </h2>
        
        {blogPosts.length === 0 ? (
          <div className="text-center text-gray-400">
            No blog posts available yet.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {blogPosts.map((post) => (
                <Card key={post.id} className="gold-card overflow-hidden group transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="border-b border-gold-500/10">
                    <div className="flex justify-between items-center text-sm text-gold-500/70 mb-2">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-gold-400">{post.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-4">
                    <CardDescription className="text-gray-400 mb-4">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {post.categories.map((category, i) => (
                        <span key={i} className="text-xs text-gold-500/70">
                          #{category}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="text-gold-500 hover:text-gold-300 transition inline-flex items-center"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {blogLimit && (
              <div className="text-center">
                <Link to="/blog" className="gold-button inline-block">
                  View All Blog Posts
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
