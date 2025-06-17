
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { toast } from 'sonner';

const AddBlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    categories: '',
    readTime: '',
    slug: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await addDoc(collection(db, 'blogs'), {
        ...formData,
        categories: formData.categories.split(',').map(cat => cat.trim()),
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        createdAt: new Date(),
        updatedAt: new Date()
      });

      toast.success('Blog post added successfully!');
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        categories: '',
        readTime: '',
        slug: ''
      });
    } catch (error) {
      toast.error('Error adding blog post');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="gold-card">
      <CardHeader>
        <CardTitle className="gold-text-gradient">Add New Blog Post</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title" className="text-gold-400">Blog Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="bg-black/50 border-gold-500/30 text-white"
            />
          </div>

          <div>
            <Label htmlFor="slug" className="text-gold-400">Slug (URL path)</Label>
            <Input
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              placeholder="my-blog-post"
              required
              className="bg-black/50 border-gold-500/30 text-white"
            />
          </div>

          <div>
            <Label htmlFor="excerpt" className="text-gold-400">Excerpt</Label>
            <Textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              required
              className="bg-black/50 border-gold-500/30 text-white"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="content" className="text-gold-400">Content</Label>
            <Textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              className="bg-black/50 border-gold-500/30 text-white"
              rows={8}
            />
          </div>

          <div>
            <Label htmlFor="categories" className="text-gold-400">Categories (comma separated)</Label>
            <Input
              id="categories"
              name="categories"
              value={formData.categories}
              onChange={handleChange}
              placeholder="React, JavaScript, Web Development"
              required
              className="bg-black/50 border-gold-500/30 text-white"
            />
          </div>

          <div>
            <Label htmlFor="readTime" className="text-gold-400">Read Time</Label>
            <Input
              id="readTime"
              name="readTime"
              value={formData.readTime}
              onChange={handleChange}
              placeholder="5 min read"
              required
              className="bg-black/50 border-gold-500/30 text-white"
            />
          </div>

          <Button type="submit" disabled={isLoading} className="gold-button w-full">
            {isLoading ? 'Adding Blog Post...' : 'Add Blog Post'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddBlogForm;
