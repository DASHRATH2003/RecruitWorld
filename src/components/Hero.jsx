import React from "react";
import heroImage from "../assets/heroimage.avif";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div id="home" className="relative bg-gray-100 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-5">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#0A2472] text-2xl font-medium mb-2">
              Recruit World Consultancy Services
            </h2>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6 flex flex-wrap items-center">
              <span className="text-[#0A2472] mr-2">We are</span>
              <TypeAnimation
                sequence={[
                  "Recruitment Agency",
                  2000,
                  "HR Partner",
                  2000,
                  "Career Consultant",
                  2000,
                  "Staffing Experts",
                  2000,
                  "Talent Acquisition Team",
                  2000,
                ]}
                speed={50}
                wrapper="span"
                className="text-red-500"
                repeat={Infinity}
              />
            </h1>

            <p className="text-[#787f95] text-lg leading-relaxed mb-8 font-medium">
              Recruit World Consultancy Services is a trusted recruitment and
              staffing partner helping businesses find top talent and
              individuals find meaningful careers. With a focus on quality,
              speed, and transparency, we connect the right people with the
              right opportunities across industries.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 text-white px-8 py-3 rounded-full font-medium hover:bg-red-600 transition-colors"
            >
              MORE ABOUT
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={heroImage}
                alt="Professional"
                className="w-full rounded-lg transition-transform duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/0A2472/FFF?text=Professional";
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
