import React from 'react';
import Blog1 from '../assets/Blog1.jpeg';
import Blog2 from '../assets/Blog2.jpg';
import Blog3 from '../assets/Blog3.jpg';
import Blog4 from '../assets/Blog4.jpeg';
import Blog5 from '../assets/Blog5.jpeg';
import Blog6 from '../assets/Blog6.jpeg';
import Blog7 from '../assets/Blog7.jpeg';

const blogs = [
  {
    title: "The Future of Remote Work in HR",
    category: "HR Trends",
    date: "June 15, 2024",
    image: Blog1,
    excerpt: "Explore how remote work is reshaping HR practices and what it means for the future of workforce management.",
    readTime: "5 min read"
  },
  {
    title: "Essential Skills for Modern HR Professionals",
    category: "Career Development",
    date: "June 12, 2024",
    image: Blog2,
    excerpt: "Discover the key skills that modern HR professionals need to succeed in today's dynamic workplace.",
    readTime: "4 min read"
  },
  {
    title: "Building an Inclusive Workplace Culture",
    category: "Workplace Culture",
    date: "June 10, 2024",
    image: Blog3,
    excerpt: "Learn effective strategies for creating and maintaining an inclusive workplace environment.",
    readTime: "6 min read"
  },
  {
    title: "AI in Recruitment: Trends and Best Practices",
    category: "Technology",
    date: "June 8, 2024",
    image: Blog4,
    excerpt: "Understanding how AI is transforming recruitment and how to leverage it effectively.",
    readTime: "7 min read"
  },
  {
    title: "Employee Wellness Programs That Work",
    category: "Employee Wellness",
    date: "June 5, 2024",
    image: Blog5,
    excerpt: "Explore successful employee wellness initiatives and their impact on workplace productivity.",
    readTime: "5 min read"
  },
  {
    title: "The Art of Employee Retention",
    category: "HR Management",
    date: "June 3, 2024",
    image: Blog6,
    excerpt: "Discover proven strategies for keeping your top talent engaged and committed.",
    readTime: "6 min read"
  }
];

const Blogs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Recruit World Insights & Updates</h1>
        <p className="text-lg max-w-2xl mx-auto px-4">
          Stay informed with the latest trends, insights, and best practices in HR
        </p>
      </div>

      {/* Featured Post */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative">
            <img
              src={Blog7}
              alt="Featured Blog"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-accent text-white px-4 py-1 rounded-full text-sm">
                Featured
              </span>
            </div>
          </div>
          <div>
            <span className="text-accent font-medium">Recruit World Strategy</span>
            <h2 className="text-3xl font-bold text-primary mt-2 mb-4">
              Strategic Recruit World Planning for 2024 and Beyond
            </h2>
            <p className="text-gray-600 mb-6">
              In this comprehensive guide, we explore the key trends shaping Recruit World
              strategy in 2024 and provide actionable insights for Recruit World professionals
              to prepare their organizations for the future of work.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <span>June 18, 2024</span>
              <span className="mx-2">•</span>
              <span>8 min read</span>
            </div>
            <button className="bg-accent hover:bg-accent-dark text-white font-semibold py-2 px-6 rounded transition-colors">
              Read More
            </button>
          </div>
        </div>

        {/* Blog Grid */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8">Latest Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-accent text-sm font-medium">
                      {blog.category}
                    </span>
                    <span className="text-gray-500 text-sm">{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{blog.date}</span>
                    <button className="text-accent hover:text-accent-dark font-medium transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get the latest Recruit World insights, trends, and best practices delivered
            straight to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-2 rounded transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs; 