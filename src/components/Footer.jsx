import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';



import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0A2472] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          {/* Logo & Description */}
          <div className="md:col-span-1">
          <img src={logo} alt="logo" className="h-28 w-42 mb-4 -mt-4" />
            <p className="text-gray-200 mb-4">
              We are the leading human resources consulting firm dedicated to providing comprehensive Recruit World solutions for businesses in India.
            </p>
            <div className="flex space-x-4 text-white">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-red-500">About us</Link></li>
              <li><Link to="/services" className="hover:text-red-500">Our services</Link></li>
              <li><Link to="/clients" className="hover:text-red-500">Our Clients</Link></li>
              <li><Link to="/internship" className="hover:text-red-500">Internship</Link></li>
              <li><Link to="/job" className="hover:text-red-500">Job</Link></li>
              <li><Link to="/industries" className="hover:text-red-500">Industries</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/team" className="hover:text-red-500">Our Team</Link></li>
              <li><Link to="/why-us" className="hover:text-red-500">Why Us</Link></li>
              <li><Link to="/testimonial" className="hover:text-red-500">Testimonial</Link></li>
              <li><Link to="/franchise" className="hover:text-red-500">Franchise</Link></li>
              <li><Link to="/company-profile" className="hover:text-red-500">Company Profile</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/staffing-services" className="hover:text-red-500">Staffing Services</Link></li>
              <li><Link to="/recruitment-services" className="hover:text-red-500">Recruitment Services</Link></li>
              <li><Link to="/leadership-hiring" className="hover:text-red-500">Leadership Hiring</Link></li>
              <li><Link to="/manpower-services" className="hover:text-red-500">Manpower Services</Link></li>
              <li><Link to="/it-recruitment" className="hover:text-red-500">IT Recruitment Services</Link></li>
            </ul>
            <Link to="/services" className="inline-block mt-3 bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600">
              View More
            </Link>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-base font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li><Link to="/retail" className="hover:text-red-500">Retail</Link></li>
              <li><Link to="/real-estate" className="hover:text-red-500">Real Estate</Link></li>
              <li><Link to="/pharmaceuticals" className="hover:text-red-500">Pharmaceuticals</Link></li>
              <li><Link to="/fmcg" className="hover:text-red-500">FMCG</Link></li>
              <li><Link to="/ev" className="hover:text-red-500">Electric Vehicles (EV)</Link></li>
            </ul>
            <Link to="/industries" className="inline-block mt-3 bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600">
              View More
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-xs mb-2 md:mb-0">© Copyright 2023 Recruit World, All Rights Reserved.</p>
          <div className="flex space-x-4 text-xs">
            <Link to="/privacy-policy" className="text-gray-300 hover:text-red-500">Privacy policy</Link>
            <Link to="/terms-of-service" className="text-gray-300 hover:text-red-500">Terms of service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
