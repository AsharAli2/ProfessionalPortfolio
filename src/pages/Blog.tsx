
import React from 'react';
import Navigation from '@/components/Navigation';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-32">
        <div className="container mx-auto px-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Blog
          </h1>
          <p className="text-neutral-600 mt-4 max-w-2xl">
            Thoughts, tutorials, and insights about web development, programming, 
            and the tech industry based on my experience as a Full Stack Developer.
          </p>
        </div>
        <BlogSection />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
