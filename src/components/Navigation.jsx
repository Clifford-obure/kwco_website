// src/components/Navigation.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Scale, ArrowRight } from "lucide-react";
import logo from "./../assets/sklogo.jpg";

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
          label: "Debt Collection",
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
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200"
          : "bg-white/90 backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                handleSectionClick("home");
              }
            }}
          >
            <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
              <img
                src={logo}
                alt="KWCO Advocates"
                className="w-40 h-auto transition-all duration-300"
              />
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <div
                    className="flex items-center cursor-pointer py-2 text-gray-700 hover:text-slate-800 transition-all duration-300 relative"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.isScrollable && isHomePage ? (
                      <button
                        onClick={(e) => handleNavClick(e, item)}
                        className="flex items-center font-medium hover:text-blue-600 transition-all duration-300"
                      >
                        <span className="relative">
                          {item.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className="flex items-center font-medium hover:text-blue-600 transition-all duration-300"
                      >
                        <span className="relative">
                          {item.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                      </Link>
                    )}
                    {activeDropdown === index && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border border-gray-200 overflow-hidden animate-fade-in-up">
                        <div className="p-2">
                          {item.dropdown.map((dropItem, dropIndex) =>
                            dropItem.isScrollable && isHomePage ? (
                              <button
                                key={dropIndex}
                                onClick={(e) => handleNavClick(e, dropItem)}
                                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-slate-50 hover:text-slate-800 transition-all duration-300 rounded-lg group/item"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-medium">
                                    {dropItem.label}
                                  </span>
                                  <ArrowRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-x-0 group-hover/item:translate-x-1" />
                                </div>
                              </button>
                            ) : (
                              <Link
                                key={dropIndex}
                                to={dropItem.href}
                                className="block px-4 py-3 text-gray-700 hover:bg-slate-50 hover:text-slate-800 transition-all duration-300 rounded-lg group/item"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-medium">
                                    {dropItem.label}
                                  </span>
                                  <ArrowRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-x-0 group-hover/item:translate-x-1" />
                                </div>
                              </Link>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ) : item.isScrollable && isHomePage ? (
                  <button
                    onClick={(e) => handleNavClick(e, item)}
                    className="py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-8 py-3 rounded-lg hover:from-slate-800 hover:to-slate-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold flex items-center group"
            >
              Get Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-180 opacity-0"
                    : "rotate-0 opacity-100"
                }`}
              >
                <Menu className="w-6 h-6" />
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-0 opacity-100"
                    : "rotate-180 opacity-0"
                }`}
              >
                <X className="w-6 h-6" />
              </span>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-xl">
            <div className="py-4 space-y-2">
              {navItems.map((item, index) => (
                <div key={index} className="px-4">
                  {item.isScrollable && isHomePage ? (
                    <button
                      onClick={(e) => handleNavClick(e, item)}
                      className="w-full text-left px-4 py-4 text-gray-700 hover:bg-slate-50 hover:text-slate-800 transition-all duration-300 rounded-lg font-medium"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-4 py-4 text-gray-700 hover:bg-slate-50 hover:text-slate-800 transition-all duration-300 rounded-lg font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((dropItem, dropIndex) =>
                        dropItem.isScrollable && isHomePage ? (
                          <button
                            key={dropIndex}
                            onClick={(e) => handleNavClick(e, dropItem)}
                            className="w-full text-left px-4 py-3 text-gray-600 hover:bg-slate-50 hover:text-slate-800 transition-all duration-300 rounded-lg flex items-center justify-between group"
                          >
                            <span className="text-sm">{dropItem.label}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                          </button>
                        ) : (
                          <Link
                            key={dropIndex}
                            to={dropItem.href}
                            className="block px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 rounded-lg flex items-center justify-between group text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span>{dropItem.label}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg text-center font-semibold flex items-center justify-center group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
