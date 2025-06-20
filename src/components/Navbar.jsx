import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/newlogodark.png";
import { Menu } from "@headlessui/react";

const navItems = [
  { name: "Home", to: "/", color: "text-red-500", fontWeight: "font-semibold" },
  {
    name: "About",
    to: "/about",
    color: "text-blue-900",
    hasDropdown: true,
    fontWeight: "font-semibold",
  },
  {
    name: "Our Services",
    to: "/services",
    color: "text-blue-900",
    fontWeight: "font-semibold",
  },
  {
    name: "Free job post",
    to: "/post-job",
    color: "text-blue-900",
    fontWeight: "font-semibold",
  },
  {
    name: "Our Clients",
    to: "/clients",
    color: "text-blue-900",
    fontWeight: "font-semibold",
  },
  {
    name: "Internship",
    to: "/internship",
    color: "text-blue-900",
    fontWeight: "font-semibold",
  },
  {
    name: "Jobs",
    to: "/jobs",
    color: "text-blue-900",
    fontWeight: "font-semibold",
  },
  {
    name: "Industries",
    to: "/industries",
    color: "text-blue-900",
    fontWeight: "font-semibold",
  },
  {
    name: "Blogs",
    to: "/blogs",
    color: "text-blue-900",
    fontWeight: "font-semibold",
  },
  {
    name: "Contact",
    to: "/contact",
    color: "text-blue-900",
    fontWeight: "font-semibold",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (to) => {
    navigate(to);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAboutClick = () => {
    handleNavigation("/about");
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            onClick={() => handleNavigation("/")}
            className="flex-shrink-0 cursor-pointer"
          >
            <img src={logo} alt="Logo" className="h-28 w-48 ml-[-50px]" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-red-500 hover:text-primary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) =>
              item.name === "About" ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                >
                  <button
                    onClick={handleAboutClick}
                    className={`text-xl inline-flex items-center font-semibold ${
                      location.pathname.startsWith("/about")
                        ? "text-blue-900"
                        : item.color
                    } hover:text-red-500 transition-colors duration-200`}
                  >
                    {item.name}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Invisible bridge to prevent hover gap */}
                  <div className="absolute -bottom-2 left-0 right-0 h-2 bg-transparent"></div>

                  {/* About Dropdown menu */}
                  {aboutDropdownOpen && (
                    <div className="absolute left-0 top-full w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                      <div
                        onClick={() => handleNavigation("/why-us")}
                        className="block px-4 py-2 text-xl font-semibold text-blue-900 hover:bg-gray-50 hover:text-red-500  cursor-pointer transition-colors duration-150"
                      >
                        Why Us
                      </div>
                      <div
                        onClick={() => handleNavigation("/our-company")}
                        className="block px-4 py-2 text-xl font-semibold text-blue-900 hover:bg-gray-50 hover:text-red-500 cursor-pointer transition-colors duration-150"
                      >
                        Our Company
                      </div>
                      <div
                        onClick={() => handleNavigation("/our-client")}
                        className="block px-4 py-2 text-xl font-semibold text-blue-900 hover:bg-gray-50 hover:text-red-500 cursor-pointer transition-colors duration-150"
                      >
                        Testimonial
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div
                  key={item.name}
                  onClick={() => handleNavigation(item.to)}
                  className={`text-xl cursor-pointer ${
                    location.pathname === item.to
                      ? `${
                          item.name === "Home"
                            ? "text-red-500 text-2xl"
                            : "text-blue-900"
                        } font-semibold`
                      : `${item.color} font-semibold`
                  } hover:text-red-500 transition-colors duration-200`}
                >
                  {item.name}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white pb-4`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <div
              key={item.name}
              onClick={() => {
                handleNavigation(item.to);
                setIsOpen(false);
              }}
              className={`block px-3 py-2 text-xl ${
                item.fontWeight
              } cursor-pointer ${
                location.pathname === item.to
                  ? `${
                      item.name === "Home"
                        ? "text-red-500 text-2xl"
                        : "text-blue-900"
                    }`
                  : item.color
              } hover:text-blue-700 hover:bg-gray-50 transition-colors duration-200`}
            >
              {item.name}
            </div>
          ))}
          {/* Mobile About dropdown items */}
          {location.pathname.startsWith("/about") && (
            <>
              <div
                onClick={() => {
                  handleNavigation("/why-us");
                  setIsOpen(false);
                }}
                className="block px-3 py-2 text-xl font-bold text-blue-900 hover:text-blue-700 hover:bg-gray-50 pl-6 cursor-pointer transition-colors duration-200"
              >
                Why Us
              </div>
              <div
                onClick={() => {
                  handleNavigation("/our-company");
                  setIsOpen(false);
                }}
                className="block px-3 py-2 text-xl font-bold text-blue-900 hover:text-blue-700 hover:bg-gray-50 pl-6 cursor-pointer transition-colors duration-200"
              >
                Our Company
              </div>
              <div
                onClick={() => {
                  handleNavigation("/our-client");
                  setIsOpen(false);
                }}
                className="block px-3 py-2 text-xl font-bold text-blue-900 hover:text-blue-700 hover:bg-gray-50 pl-6 cursor-pointer transition-colors duration-200"
              >
                Our Client
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
