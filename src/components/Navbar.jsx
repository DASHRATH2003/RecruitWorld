import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/newlogodark.png";
import { Menu } from "@headlessui/react";

const navItems = [
  { name: "Home", to: "/", color: "text-accent" },
  { name: "About", to: "/about", color: "text-primary", hasDropdown: true },
  { name: "Our Services", to: "/services", color: "text-primary" },
  { name: "Free job post", to: "/post-job", color: "text-primary" },
  { name: "Our Clients", to: "/clients", color: "text-primary" },
  { name: "Internship", to: "/internship", color: "text-primary" },
  { name: "Jobs", to: "/jobs", color: "text-primary" },
  { name: "Industries", to: "/industries", color: "text-primary" },
  { name: "Blogs", to: "/blogs", color: "text-primary" },
  { name: "Contact", to: "/contact", color: "text-primary" },
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

  const handleAboutClick = () => {
    navigate("/about");
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
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-20 w-32" />
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
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
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) =>
              item.name === "About" ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                >
                  <button
                    onClick={handleAboutClick}
                    className={`text-base font-medium inline-flex items-center ${
                      location.pathname.startsWith("/about")
                        ? "text-accent"
                        : item.color
                    } hover:text-accent`}
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

                  {/* About Dropdown menu */}
                  {aboutDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <Link
                        to="/why-us"
                        className="block px-4 py-2 text-sm text-primary hover:bg-gray-50 hover:text-accent"
                      >
                        Why Us
                      </Link>
                      <Link
                        to="/our-company"
                        className="block px-4 py-2 text-sm text-primary hover:bg-gray-50 hover:text-accent"
                      >
                        Our Company
                      </Link>
                      <Link
                        to="/industries"
                        className="block px-4 py-2 text-sm text-primary hover:bg-gray-50 hover:text-accent"
                      >
                        Industries
                      </Link>
                      <Link
                        to="/our-client"
                        className="block px-4 py-2 text-sm text-primary hover:bg-gray-50 hover:text-accent"
                      >
                        Testimonial
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`text-base font-medium ${
                    location.pathname === item.to ? "text-accent" : item.color
                  } hover:text-accent`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white pb-4`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={`block px-3 py-2 text-base font-medium ${
                location.pathname === item.to ? "text-accent" : "text-primary"
              } hover:text-accent hover:bg-gray-50`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          {/* Mobile About dropdown items */}
          {location.pathname.startsWith("/about") && (
            <>
              <Link
                to="/why-us"
                className="block px-3 py-2 text-base font-medium text-primary hover:text-accent hover:bg-gray-50 pl-6"
              >
                Why Us
              </Link>
              <Link
                to="/our-company"
                className="block px-3 py-2 text-base font-medium text-primary hover:text-accent hover:bg-gray-50 pl-6"
              >
                Our Company
              </Link>
              <Link
                to="/industries"
                className="block px-3 py-2 text-base font-medium text-primary hover:text-accent hover:bg-gray-50 pl-6"
              >
                Industries
              </Link>
              <Link
                to="/our-client"
                className="block px-3 py-2 text-base font-medium text-primary hover:text-accent hover:bg-gray-50 pl-6"
              >
                Our Client
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
