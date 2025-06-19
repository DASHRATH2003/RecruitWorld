import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Staffing Services',
    description: 'Premium quality staffing solutions, carefully handpicked to meet your exact requirements. Known for its efficiency and reliability in workforce management.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=300&fit=contain'
  },
  {
    title: 'Recruitment Services',
    description: 'High-grade recruitment services sourced from the best talent pools. Features a robust track and quality monitoring system to ensure optimal placement success.',
    image: 'https://img.freepik.com/free-photo/business-situation-job-interview-concept-job-seeker-present-resume-managers_1421-78.jpg?semt=ais_hybrid&w=740'
  },
  {
    title: 'Leadership Hiring',
    description: 'Premium leadership talent from top-tier companies. Known for exceptional quality and high success rate. A powerful solution for executive positions.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&h=300&fit=contain'
  },
  {
    title: 'IT Recruitment',
    description: 'One of the specialized tech talent solutions. Prized for its intense rigor and diverse tech stack. Adds a powerful dimension to your technology team.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE05zJNedPe0oFpHvaM4s-YA7OyIY93CyBeihO83Oi4a2ONAYRsWAAy5huAqHXuWU-r2g&usqp=CAU'
  },
  {
    title: 'HR Consulting',
    description: 'Fresh and crisp HR solutions with vibrant ideas. Perfect for scaling and building organizations. Also natural fit for startups and growing companies.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=300&fit=contain'
  },
  {
    title: 'Payroll Services',
    description: 'Premium quality payroll services from Indian firms. Known for balanced cost and risk factor. Essential for modern business operations.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=300&fit=contain'
  },

  {
    title: 'Staffing Services',
    description: 'Premium quality staffing solutions, carefully handpicked to meet your exact requirements. Known for its efficiency and reliability in workforce management.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=300&fit=crop'
  },
  {
    title: 'Recruitment Services',
    description: 'High-grade recruitment services sourced from the best talent pools. Features a robust track and quality monitoring system to ensure optimal placement success.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE05zJNedPe0oFpHvaM4s-YA7OyIY93CyBeihO83Oi4a2ONAYRsWAAy5huAqHXuWU-r2g&usqp=CAU'
  },
  {
    title: 'Leadership Hiring',
    description: 'Premium leadership talent from top-tier companies. Known for exceptional quality and high success rate. A powerful solution for executive positions.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&h=300&fit=crop'
  },
  {
    title: 'IT Recruitment',
    description: 'One of the specialized tech talent solutions. Prized for its intense rigor and diverse tech stack. Adds a powerful dimension to your technology team.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=300&fit=crop'
  },
  {
    title: 'HR Consulting',
    description: 'Fresh and crisp HR solutions with vibrant ideas. Perfect for scaling and building organizations. Also natural fit for startups and growing companies.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=300&fit=crop'
  },
  {
    title: 'Payroll Services',
    description: 'Premium quality payroll services from Indian firms. Known for balanced cost and risk factor. Essential for modern business operations.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=300&fit=crop'
  },
];

const Services = () => {
  return (
    <div id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A2472]">Our Services</h2>
          <p className="mt-2 text-gray-600 text-base max-w-2xl mx-auto">
            Explore our range of professional services crafted to empower your workforce and drive business success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9 bg-white p-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-center text-lg font-semibold text-[#0A2472] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 text-center mb-4 h-24">
                  {service.description}
                </p>
                <div className="text-center">
                  <button className="bg-[#0A2472] text-white px-6 py-2 rounded text-sm font-medium hover:bg-[#083072] transition-colors">
                    SEND ENQUIRY
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
