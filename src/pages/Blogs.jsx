import React from 'react';
import { motion } from 'framer-motion';
import Blog1 from '../assets/Blog1.jpeg';
import Blog2 from '../assets/Blog2.jpg';
import Blog3 from '../assets/Blog3.jpg';
import Blog4 from '../assets/Blog4.jpeg';
import Blog5 from '../assets/Blog5.jpeg';
import Blog6 from '../assets/Blog6.jpeg';
import Blog7 from '../assets/planning.jpg';

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
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-primary text-white text-center py-12"
      >
        <h1 className="text-4xl font-bold mb-4">Recruit World Insights & Updates</h1>
        <p className="text-lg max-w-2xl mx-auto px-4">
          Stay informed with the latest trends, insights, and best practices in HR
        </p>
      </motion.div>

      {/* Featured Post */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center mb-16"
        >
          <motion.div 
            className="relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={Blog7}
              alt="Featured Blog"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-accent text-white px-4 py-1 rounded-full text-sm">
                Featured
              </span>
            </div>
          </motion.div>
          <div>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold text-primary mb-4"
            >
              Strategic Recruit World Planning for 2024 and Beyond
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm text-gray-700 text-center mb-4 h-24 font-medium"
            >
              In this comprehensive guide, we explore the key trends shaping Recruit World
              strategy in 2024 and provide actionable insights for Recruit World professionals
              to prepare their organizations for the future of work.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white px-6 py-2 rounded-full"
            >
              Read More
            </motion.button>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <motion.div 
                className="h-48 overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
              </motion.div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-accent text-sm">{blog.category}</span>
                  <span className="text-gray-500 text-sm">{blog.date}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-primary">{blog.title}</h3>
                <p className="text-sm text-gray-700 text-center mb-4 h-24 font-medium">{blog.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{blog.readTime}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-accent font-medium hover:text-primary"
                  >
                    Read More →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-sm text-gray-700 text-center mb-4 h-24 font-medium">
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