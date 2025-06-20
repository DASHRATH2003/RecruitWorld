import React from 'react';
import { motion } from 'framer-motion';

const Ourcompany = () => {
  return (
    <div>
      <section className="bg-white py-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-accent font-semibold">Our Journey</p>
          <h2 className="text-3xl font-bold text-primary">Know about our company</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
          {[
            { year: "2017", title: "Founded", desc: "We founded the company to fill the gap between employers and employees." },
            { year: "2018", title: "Expanded", desc: "We expanded our HR consultancy services company with 5 HR Experts." },
            { year: "2019", title: "New Offices", desc: "We successfully opened five offices at the time. It was a very happy moment for us." },
            { year: "2020", title: "Awards", desc: "This year we got so many awards from so many companies & channels." },
            { year: "2021", title: "Recognitions", desc: "We are recognized by unicorn companies in India and outside of India." },
            { year: "2022", title: "New Franchise", desc: "Being a successful recruitment agency, we started the franchise module." },
            { year: "2023", title: "Growing", desc: "As a top recruitment agency in India, we continuously grow to build an organization in India." },
            { year: "2024", title: "Growing", desc: "As a best HR Services Provider, we continuously help organizations to make their HR ecosystem strong." }
          ].map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="text-accent font-bold text-lg"
              >
                {item.year}
              </motion.p>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="text-primary font-semibold mt-2"
              >
                {item.title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mt-1 text-gray-700"
              >
                {item.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ourcompany;