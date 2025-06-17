
import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, Eye } from 'lucide-react';
import { toast } from 'sonner';

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  categories: string[];
  date: string;
  readTime: string;
  slug: string;
}

const BlogsList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      const blogsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Blog[];
      setBlogs(blogsData);
    } catch (error) {
      toast.error('Error fetching blogs');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'blogs', id));
      setBlogs(blogs.filter(blog => blog.id !== id));
      toast.success('Blog post deleted successfully');
    } catch (error) {
      toast.error('Error deleting blog post');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center text-gold-400">Loading blog posts...</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold gold-text-gradient">Manage Blog Posts</h2>
      
      {blogs.length === 0 ? (
        <Card className="gold-card">
          <CardContent className="pt-6">
            <p className="text-center text-gray-400">No blog posts found. Add your first blog post!</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Card key={blog.id} className="gold-card">
              <CardHeader className="border-b border-gold-500/10">
                <div className="flex justify-between items-center text-sm text-gold-500/70 mb-2">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>
                <CardTitle className="text-gold-400">{blog.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="pt-4">
                <CardDescription className="text-gray-400 mb-4">
                  {blog.excerpt}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {blog.categories.map((category, i) => (
                    <span key={i} className="text-xs text-gold-500/70">
                      #{category}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={`/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </a>
                </Button>
                
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => deleteBlog(blog.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogsList;
