import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ClientsCarousel.css"; // Make sure the path is correct
import Blog1 from "../assets/Blog1.jpeg";
import Blog2 from "../assets/Blog2.jpg";
import Blog3 from "../assets/Blog3.jpg";

import teamImage from "../assets/team.jpg";

// Import all client logo images
const images = import.meta.glob("../assets/image*.png");

const products = [
  {
    title: "Staffing Services",
    description:
      "Premium quality staffing solutions, carefully handpicked to meet your exact requirements. Known for its efficiency and reliability in workforce management.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=300&fit=contain",
  },
  {
    title: "Recruitment Services",
    description:
      "High-grade recruitment services sourced from the best talent pools. Features a robust track and quality monitoring system to ensure optimal placement success.",
    image:
      "https://img.freepik.com/free-photo/business-situation-job-interview-concept-job-seeker-present-resume-managers_1421-78.jpg?semt=ais_hybrid&w=740",
  },
  {
    title: "Leadership Hiring",
    description:
      "Premium leadership talent from top-tier companies. Known for exceptional quality and high success rate. A powerful solution for executive positions.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&h=300&fit=contain",
  },
  {
    title: "IT Recruitment",
    description:
      "One of the specialized tech talent solutions. Prized for its intense rigor and diverse tech stack. Adds a powerful dimension to your technology team.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE05zJNedPe0oFpHvaM4s-YA7OyIY93CyBeihO83Oi4a2ONAYRsWAAy5huAqHXuWU-r2g&usqp=CAU",
  },
  {
    title: "HR Consulting",
    description:
      "Fresh and crisp HR solutions with vibrant ideas. Perfect for scaling and building organizations. Also natural fit for startups and growing companies.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=300&fit=contain",
  },
  {
    title: "Payroll Services",
    description:
      "Premium quality payroll services from Indian firms. Known for balanced cost and risk factor. Essential for modern business operations.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=300&fit=contain",
  },
];

const ProductShowcase = () => {
  const navigate = useNavigate();
  const [clientLogos, setClientLogos] = useState([]);

  useEffect(() => {
    // Load all client logo images
    const loadImages = async () => {
      const loadedLogos = await Promise.all(
        Object.entries(images).map(async ([path, loadImage]) => {
          const number = parseInt(path.match(/image(\d+)\.png/)[1]);
          const src = (await loadImage()).default;
          return {
            name: `Client ${number}`,
            logo: src,
            number: number,
          };
        })
      );

      // Sort logos by number
      const sortedLogos = loadedLogos.sort((a, b) => a.number - b.number);
      setClientLogos(sortedLogos);
    };

    loadImages();
  }, []);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A2472]">Our Services</h2>
          <p className="mt-2 text-gray-600 text-base max-w-2xl mx-auto">
            Explore our range of professional services crafted to empower your
            workforce and drive business success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9 bg-white p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-72 object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-center text-lg font-semibold text-[#0A2472] mb-3">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 text-center mb-4 h-24">
                  {product.description}
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

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-block bg-red-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-red-600 transition-colors"
          >
            View All Services
          </a>
        </div>
      </div>

      {/* About Company Section Below Services */}
      <section className="bg-white py-16 px-6 md:px-20 mt-16">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Left Highlight */}
          <div className="flex justify-center md:justify-start">
            <div className="border-l-8 border-r-8 border-red-500 px-6 py-10 text-center">
              <p className="text-5xl font-bold text-blue-900">6+</p>
              <p className="text-xl mt-2 text-blue-900">
                Years of
                <br />
                Trusted Services
              </p>
            </div>
          </div>

          {/* Center Heading */}
          <div>
            <p className="text-red-500 text-sm font-semibold uppercase mb-2">
              Since 2018
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              Empowering businesses with expert manpower and Recruit World solutions
            </h2>
          </div>

          {/* Right Description */}
          <div>
            <p className="text-gray-700">
              Recruit World Consultancy Services, established in 2018, is a
              trusted name in human resources and staffing solutions. We connect
              businesses with skilled professionals across industries. With a
              focus on quality and long-term partnerships, we strive to deliver
              the right talent that drives business success and organizational
              growth.
            </p>
            <button
              onClick={() => navigate("/about")}
              className="mt-6 text-red-600 font-semibold border-b-2 border-red-500 hover:text-red-800 transition"
            >
              ABOUT COMPANY
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#0A2472] py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-white text-4xl font-bold text-center mb-10">
            Let's <span className="text-red-500">Reach</span> with Us
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side Inputs */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-white text-black placeholder-gray-600 border-b-4 border-red-500 focus:outline-none rounded"
              />
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full p-3 bg-white text-black placeholder-gray-600 border-b-4 border-red-500 focus:outline-none rounded"
              />
              <input
                type="text"
                placeholder="Your Company"
                className="w-full p-3 bg-white text-black placeholder-gray-600 border-b-4 border-red-500 focus:outline-none rounded"
              />
            </div>

            {/* Right Side Inputs */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Mobile No"
                className="w-full p-3 bg-white text-black placeholder-gray-600 border-b-4 border-red-500 focus:outline-none rounded"
              />
              <textarea
                placeholder="How can we help you?"
                rows="5"
                className="w-full p-3 bg-white text-black placeholder-gray-600 border-b-4 border-red-500 focus:outline-none rounded resize-none"
              ></textarea>
            </div>

            {/* Submit Button (Centered Across Columns) */}
            <div className="md:col-span-2 text-center mt-6">
              <button
                type="submit"
                className="bg-red-500 text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <p className="text-red-600 font-semibold text-sm uppercase mb-3">
              Industry-leading expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2472] mb-6">
              Empowering businesses with the right talent
            </h2>
            <p className="text-gray-700 mb-6">
              At <strong>Recruit World Consultancy Services</strong>, we go
              beyond hiring — we connect ambition with opportunity. Our team
              specializes in end-to-end staffing, leadership hiring, and
              strategic Recruit World solutions tailored for modern enterprises.
              <br />
              <br />
              From startups to global organizations, we ensure every client
              receives dedicated support, market insight, and results that build
              lasting impact.
            </p>
            <Link
              to="/about"
              className="inline-block bg-[#0A2472] text-white px-6 py-3 rounded-full font-medium hover:bg-[#061a4e] transition"
            >
              View More →
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-gradient-to-tr from-[#0A2472] to-red-500 rounded-lg w-full h-full absolute top-3 left-3 -z-10" />
            <img
              src={teamImage}
              alt="Our Team"
              className="rounded-lg shadow-md object-cover w-full"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-[#0A2472]">850+</p>
            <p className="text-sm text-gray-600 mt-1">Clients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#0A2472]">60k+</p>
            <p className="text-sm text-gray-600 mt-1">Placements</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#0A2472]">8+</p>
            <p className="text-sm text-gray-600 mt-1">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#0A2472]">10+</p>
            <p className="text-sm text-gray-600 mt-1">Office Locations</p>
          </div>
        </div>
      </section>

      <section className="bg-[#0A2472] text-white py-20 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center mb-10">
            Partner with{" "}
            <span className="text-red-400">
              Recruit World Consultancy Services
            </span>{" "}
            for Elite Recruit World Solutions
          </h2>
          <p className="text-lg md:text-xl text-center max-w-4xl mx-auto mb-6">
            At Recruit World Consultancy Services, we do more than just connect
            candidates and companies — we deliver strategic HR solutions that
            build resilient, high-performing teams. Our tailored recruitment
            approach empowers businesses with skilled professionals and
            long-term success.
          </p>
          <p className="text-lg md:text-xl text-center max-w-4xl mx-auto">
            Join hands with Recruit World today and experience a fresh era of
            talent acquisition, leadership hiring, and workforce growth driven
            by integrity, efficiency, and unmatched expertise.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 overflow-hidden">
        <h2 className="text-center text-3xl font-bold text-blue-900 mb-8">
          Our Clients
        </h2>
        <div className="slider">
          <div className="slide-track">
            {clientLogos.concat(clientLogos).map((client, index) => (
              <div className="slide" key={`${client.number}-${index}`}>
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 md:h-20 object-contain mx-6"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
  <div className="text-center mb-12">
    <p className="text-red-600 font-semibold text-sm">
      Latest from Recruit World Consultancy Services
    </p>
    <h2 className="text-4xl font-bold text-blue-900">
      Subscribe for latest updates
    </h2>
    <p className="mt-2 text-gray-600">
      Insights, tips, and trends from the recruitment industry.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      {
        img: Blog1,
        title: "The Power of Teamwork in Recruitment",
        date: "JAN 18 2024",
      },
      {
        img: Blog2,
        title: "Navigating the Interview Process Successfully",
        date: "JAN 18 2024",
      },
      {
        img: Blog3,
        title: "The Importance of Soft Skills in Today's Workplace",
        date: "JAN 18 2024",
      },
    ].map((blog, index) => (
      <div
        key={index}
        className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition"
      >
        <img
          src={blog.img}
          alt={`Blog ${index + 1}`}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <p className="text-red-500 text-xs font-semibold mb-1">
            {blog.date}
          </p>
          <h3 className="text-sm font-bold text-blue-900">{blog.title}</h3>
        </div>
      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default ProductShowcase;
