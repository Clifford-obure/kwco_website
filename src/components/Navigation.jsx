// src/components/Navigation.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Scale } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Function to handle smooth scrolling for home page sections
  const handleSectionClick = (sectionId) => {
    if (location.pathname === "/") {
      // If we're on the home page, scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're not on the home page, navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  // Check if we should use scroll behavior or regular navigation
  const isHomePage = location.pathname === "/";

  const navItems = [
    {
      label: "Home",
      href: "/",
      sectionId: "home",
      isScrollable: true,
    },
    {
      label: "About Us",
      href: "/about",
      sectionId: "about",
      isScrollable: true,
      dropdown: [
        { label: "Our Story", href: "/about/our-story" },
        { label: "Mission & Vision", href: "/about/mission-vision" },
        {
          label: "Core Values",
          href: "/about/core-values",
          sectionId: "values",
          isScrollable: true,
        },
      ],
    },
    {
      label: "Practice Areas",
      href: "/practice-areas",
      sectionId: "practice-areas",
      isScrollable: true,
      dropdown: [
        { label: "Litigation", href: "/practice-areas/litigation" },
        {
          label: "Credit Collection",
          href: "/practice-areas/credit-collection",
        },
        { label: "Conveyancing", href: "/practice-areas/conveyancing" },
        {
          label: "Dispute Resolution",
          href: "/practice-areas/dispute-resolution",
        },
      ],
    },
    {
      label: "Our People",
      href: "/our-people",
      sectionId: "our-people",
      isScrollable: true,
    },
    {
      label: "Client Insights",
      href: "/insights",
      sectionId: "insights",
      isScrollable: true,
    },
    {
      label: "Contact Us",
      href: "/contact",
      sectionId: "contact",
      isScrollable: true,
    },
  ];

  const handleNavClick = (e, item) => {
    if (item.isScrollable && isHomePage) {
      e.preventDefault();
      handleSectionClick(item.sectionId);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                handleSectionClick("home");
              }
            }}
          >
            <Scale className="w-8 h-8 text-amber-600" />
            <div>
              <h1 className="text-2xl font-bold text-amber-600">KWCO</h1>
              <p className="text-xs text-gray-600">
                Kamuti Waweru & Co. Advocates
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <div
                    className="flex items-center cursor-pointer py-2 text-gray-700 hover:text-amber-600 transition"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.isScrollable && isHomePage ? (
                      <button
                        onClick={(e) => handleNavClick(e, item)}
                        className="flex items-center"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </button>
                    ) : (
                      <Link to={item.href} className="flex items-center">
                        <span>{item.label}</span>
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </Link>
                    )}
                    {activeDropdown === index && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg overflow-hidden">
                        {item.dropdown.map((dropItem, dropIndex) =>
                          dropItem.isScrollable && isHomePage ? (
                            <button
                              key={dropIndex}
                              onClick={(e) => handleNavClick(e, dropItem)}
                              className="w-full text-left px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition"
                            >
                              {dropItem.label}
                            </button>
                          ) : (
                            <Link
                              key={dropIndex}
                              to={dropItem.href}
                              className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition"
                            >
                              {dropItem.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : item.isScrollable && isHomePage ? (
                  <button
                    onClick={(e) => handleNavClick(e, item)}
                    className="py-2 text-gray-700 hover:text-amber-600 transition"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="py-2 text-gray-700 hover:text-amber-600 transition"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.isScrollable && isHomePage ? (
                  <button
                    onClick={(e) => handleNavClick(e, item)}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
                {item.dropdown &&
                  item.dropdown.map((dropItem, dropIndex) =>
                    dropItem.isScrollable && isHomePage ? (
                      <button
                        key={dropIndex}
                        onClick={(e) => handleNavClick(e, dropItem)}
                        className="w-full text-left px-8 py-2 text-gray-600 hover:bg-amber-50 hover:text-amber-600 transition"
                      >
                        {dropItem.label}
                      </button>
                    ) : (
                      <Link
                        key={dropIndex}
                        to={dropItem.href}
                        className="block px-8 py-2 text-gray-600 hover:bg-amber-50 hover:text-amber-600 transition"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {dropItem.label}
                      </Link>
                    )
                  )}
              </div>
            ))}
            <div className="p-4">
              <Link
                to="/contact"
                className="block w-full bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
