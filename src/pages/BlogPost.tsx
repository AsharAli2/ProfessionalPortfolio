
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// This would typically come from a CMS or database
const blogPosts = [
  {
    slug: "building-scalable-react-applications",
    title: "Building Scalable React Applications",
    date: "May 10, 2025",
    readTime: "8 min read",
    categories: ["React", "Architecture"],
    content: `
      <h2>Introduction</h2>
      <p>As React applications grow in size and complexity, maintaining clean, efficient code becomes increasingly challenging. This article explores strategies for building React applications that scale effectively.</p>
      
      <h2>Component Architecture</h2>
      <p>One of the most important aspects of a scalable React application is a well-thought-out component architecture. Breaking down your UI into small, reusable components not only makes your code more maintainable but also improves performance.</p>
      
      <h2>State Management</h2>
      <p>Choosing the right state management solution is crucial for scalability. While React's built-in useState and useContext may be sufficient for smaller applications, larger applications often benefit from solutions like Redux, MobX, or Zustand.</p>
      
      <h2>Code Splitting</h2>
      <p>Implementing code splitting with React.lazy() and Suspense can significantly improve initial load times by only loading the code necessary for the current view.</p>
      
      <h2>Performance Optimization</h2>
      <p>Regularly audit your application's performance using React DevTools and implement optimizations such as memoization, virtualization for long lists, and efficient rendering strategies.</p>
      
      <h2>Conclusion</h2>
      <p>Building scalable React applications requires careful planning, a solid understanding of React's performance characteristics, and continuous refactoring as your application evolves. By following these strategies, you can create React applications that remain maintainable and performant as they grow.</p>
    `
  },
  {
    slug: "mongodb-performance-optimization",
    title: "MongoDB Performance Optimization Techniques",
    date: "May 5, 2025",
    readTime: "12 min read",
    categories: ["MongoDB", "Backend", "Performance"],
    content: `
      <h2>Introduction to MongoDB Performance</h2>
      <p>MongoDB is a powerful NoSQL database, but without proper optimization, performance can degrade as data grows. This article explores advanced techniques to ensure your MongoDB deployment remains fast and efficient.</p>
      
      <h2>Indexing Strategies</h2>
      <p>Proper indexing is perhaps the most important factor in MongoDB performance. We'll look at when to create indexes, which types to use, and how to identify missing indexes that could improve query performance.</p>
      
      <h2>Query Optimization</h2>
      <p>Learn how to analyze and optimize your queries using the explain() method, how to structure queries for better performance, and common pitfalls to avoid.</p>
      
      <h2>Schema Design for Performance</h2>
      <p>MongoDB's flexible schema comes with trade-offs. We'll explore how to design your schema with performance in mind, including embedding vs. referencing, denormalization strategies, and data modeling patterns.</p>
      
      <h2>Conclusion</h2>
      <p>By implementing these MongoDB performance optimization techniques, you can ensure your database scales effectively with your application's growth while maintaining fast query responses and efficient resource utilization.</p>
    `
  },
  {
    slug: "payment-gateways-nodejs",
    title: "Integrating Payment Gateways with Node.js",
    date: "April 28, 2025",
    readTime: "10 min read",
    categories: ["Node.js", "Payments", "API"],
    content: `
      <h2>Introduction to Payment Processing</h2>
      <p>Implementing secure, reliable payment processing is critical for any e-commerce application. This guide walks through the process of integrating popular payment gateways into your Node.js application.</p>
      
      <h2>Selecting a Payment Gateway</h2>
      <p>We'll compare popular options like Stripe, PayPal, and Square, discussing their features, fee structures, and which types of businesses they best serve.</p>
      
      <h2>Implementation with Stripe</h2>
      <p>A step-by-step guide to implementing Stripe checkout in your Node.js application, including handling webhooks for event-driven architecture.</p>
      
      <h2>Security Best Practices</h2>
      <p>Security is paramount when handling payments. Learn about PCI compliance, tokenization, and other security measures to protect sensitive payment information.</p>
      
      <h2>Testing Payment Flows</h2>
      <p>We'll cover strategies for thoroughly testing payment flows without processing actual transactions, including test cards, sandbox environments, and automated testing approaches.</p>
      
      <h2>Conclusion</h2>
      <p>With the right approach to payment gateway integration, your Node.js application can provide a seamless checkout experience while maintaining robust security and reliability.</p>
    `
  }
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <div className="pt-32 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
          <Link to="/blog" className="text-gold-500 hover:text-gold-300">
            Back to all blog posts
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="text-gold-500 hover:text-gold-300 inline-flex items-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to all posts
            </Link>
            
            <article className="gold-card p-8 rounded-lg mb-12">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gold-400">{post.title}</h1>
                <div className="flex flex-wrap gap-4 items-center mb-4">
                  <span className="text-sm text-gold-500/70">{post.date}</span>
                  <span className="text-sm text-gold-500/70">{post.readTime}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category, i) => (
                    <span key={i} className="bg-gold-500/10 text-gold-400 text-xs px-2 py-1 rounded-full">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              
              <div 
                className="prose prose-invert prose-headings:text-gold-400 prose-a:text-gold-500 max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
