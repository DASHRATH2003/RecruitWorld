import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-[#033A78] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-8 text-sm">
            <a href="tel:+919686621257" className="hover:text-gray-300">
              +91 9590019829
            </a>
            <a href="mailto:contact@zeethr.com" className="hover:text-gray-300">
              Employer - recruitworldconsultancy@gmail.com
            </a>
            <a href="mailto:jobs@zeethr.com" className="hover:text-gray-300">
              Candidates - www.recruitworldconsultancy.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
