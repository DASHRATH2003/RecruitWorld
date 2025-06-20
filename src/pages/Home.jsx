import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import Services from '../components/Services';

const Home = () => {
  return (
    <main>
      <Hero />
      <ProductShowcase />
      {/* <Services /> */}
      
      {/* Additional sections with hover animations */}
      
      

      {/* Client Testimonials */}
      {/* <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-6 rounded-lg shadow-lg"
              >
                <motion.div 
                  className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={`/path/to/client-${index + 1}.jpg`}
                    alt={`Client ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </motion.div>
                <p className="text-gray-600 text-center mb-4">
                  "Excellent service and professional team..."
                </p>
                <h3 className="text-blue-900 font-semibold text-center">
                  Client Name
                </h3>
                <p className="text-gray-500 text-sm text-center">
                  Position, Company
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}
    </main>
  );
};

export default Home; 