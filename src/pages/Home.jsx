// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Check,
  Scale,
  Briefcase,
  FileText,
  Clock,
  Target,
  Shield,
  Award,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Lightbulb,
  Eye,
} from "lucide-react";

// Import banner images
import banner1 from "./../assets/banners/sk_banner2.jpg";
import banner2 from "./../assets/banners/sk_banner4.jpg";
import banner3 from "./../assets/banners/sk_banner3.jpg";

import bank from "./../assets/client/kingdom bank.png";
import Melvin from "./../assets/team/Melvin.jpg";
import Jackline from "./../assets/team/jackline55.jpg";
import Seif from "./../assets/team/seif33.png";
import bidico from "./../assets/client/bidco_logo.png";
import hashi from "./../assets/headers/hashi.png";
import Skbig from "./../assets/skbig.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of your banner images
  const bannerImages = [
    banner1,
    banner2,
    banner3,
    // Add more banner images here
  ];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [bannerImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const practiceAreas = [
    {
      id: "litigation",
      icon: <Scale className="w-12 h-12" />,
      title: "Litigation",
      description:
        "Comprehensive litigation services across civil, commercial, and constitutional matters.",
      link: "/practice-areas/litigation",
    },
    {
      id: "debt-collection",
      icon: <Briefcase className="w-12 h-12" />,
      title: "Debt Collection",
      description:
        "Strategic debt recovery solutions to help businesses and financial institutions.",
      link: "/practice-areas/debt-collection",
    },
    {
      id: "conveyancing",
      icon: <FileText className="w-12 h-12" />,
      title: "Conveyancing",
      description:
        "Full-service conveyancing solutions for property transactions.",
      link: "/practice-areas/conveyancing",
    },
    {
      id: "dispute-resolution",
      icon: <Shield className="w-12 h-12" />,
      title: "Dispute Resolution",
      description:
        "Alternative dispute resolution services including mediation and arbitration.",
      link: "/practice-areas/dispute-resolution",
    },
  ];

  const testimonials = [
    {
      client: "Sarah Kimani",
      company: "Tech Innovations Ltd",
      text: "KWCO Advocates' expertise in commercial litigation helped us resolve a complex dispute efficiently.",
    },
    {
      client: "John Omondi",
      company: "Real Estate Ventures",
      text: "The conveyancing team at KWCO Advocates made our property acquisition seamless.",
    },
    {
      client: "Mary Wanjiku",
      company: "Finance Solutions Kenya",
      text: "Their debt collection services have significantly improved our debt recovery rates.",
    },
    {
      client: "Peter Mwangi",
      company: "Manufacturing Co. Ltd",
      text: "KWCO Advocates' mediation services helped us resolve our partnership dispute without going to court.",
    },
  ];

  const teamMembers = [
    {
      name: "Kamuti Waweru",
      position: "Managing Partner",
      expertise: ["debt Collection", "Banking Law", "Debt Recovery"],
      description:
        "Handles diverse cases with particular strength in legal research and documentation.",
      image: Skbig,
    },
    {
      name: "Jackline Jowi",
      position: "Debt Collection",
      expertise: ["debt Collection", "Banking Law", "Debt Recovery"],
      description:
        "Drives the firm's growth strategy and client relationships.",
      image: Jackline,
    },
    {
      name: "Seif Mohamed",
      position: "Business Development Manager",
      expertise: ["Debt Collection", "Banking Law", "Debt Recovery"],
      description:
        "Drives the firm's growth strategy and client relationships.",
      image: Seif,
    },
  ];

  const coreValues = [
    {
      icon: <Shield className="w-12 h-12 text-slate-400" />,
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in all our dealings.",
    },
    {
      icon: <Target className="w-12 h-12 text-slate-400" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do.",
    },
    {
      icon: <Users className="w-12 h-12 text-slate-400" />,
      title: "Client Focus",
      description: "We put our clients' needs at the center of our practice.",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-slate-400" />,
      title: "Innovation",
      description: "We embrace new ideas and technologies to serve better.",
    },
  ];

  const recentInsights = [
    {
      image: bank,
      title: "Kingdom Bank of Kenya",
      category: "Financial",
    },
    {
      title: "Bidco Africa",
      image: bidico,
      category: "Financial",
    },
    {
      title: "Hashi Energy",
      image: hashi,
      category: "Technology",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Hero Section with Image Slider */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Image Slider Background */}
        <div className="absolute inset-0 w-full h-full">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Law office banner ${index + 1}`}
                className="w-full h-full object-contain"
                style={{ filter: "brightness(0.4)" }}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-slate-600/50 text-white p-2 rounded-full hover:bg-slate-600/70 transition"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-slate-600/50 text-white p-2 rounded-full hover:bg-slate-600/70 transition"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? "bg-slate-400" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-slate-600 text-white font-semibold px-8 py-3 rounded-lg text-lg hover:bg-slate-700 transition"
            >
              Get Legal Help Now
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg hover:bg-white/10 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-300 mb-4">
              About KWCO
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At KWCO Advocates We are a distinguished legal practice committed
              to delivering exceptional legal practice services across a broad
              spectrum of practice areas. Our team of seasoned legal
              practitioner offer unparalleled expertise, strategic advocacy and
              bespoke legal solution tailored to meet the unique needs of our
              esteemed clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800">
              <div className="w-16 h-16 bg-slate-600/20 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Our Mission
              </h3>
              <p className="text-gray-300">
                To be the best law firm in Kenya by creating meaningful
                experiences for each client.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800">
              <div className="w-16 h-16 bg-slate-600/20 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-gray-300">
                To be recognized as Kenya's most trusted legal partner.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800">
              <div className="w-16 h-16 bg-slate-600/20 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Our Experience
              </h3>
              <p className="text-gray-300">
                With 10+ years of cumulative experience in Kenya's legal system.{" "}
              </p>
            </div>
          </div>

          {/* About Navigation Cards */}
          <div className="text-center">
            <Link
              to="/about"
              className="inline-flex items-center bg-slate-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition mr-4 mb-4"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/about/our-story"
              className="inline-flex items-center border border-slate-500 text-slate-300 px-6 py-3 rounded-lg hover:bg-slate-600/10 transition mr-4 mb-4"
            >
              Our Story
            </Link>
            <Link
              to="/about/mission-vision"
              className="inline-flex items-center border border-slate-500 text-slate-300 px-6 py-3 rounded-lg hover:bg-slate-600/10 transition mr-4 mb-4"
            >
              Mission & Vision
            </Link>
            <Link
              to="/about/core-values"
              className="inline-flex items-center border border-slate-500 text-slate-300 px-6 py-3 rounded-lg hover:bg-slate-600/10 transition mb-4"
            >
              Core Values
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-300 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our practice and define our commitment
              to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-slate-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section id="practice-areas" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-300 mb-4">
              Our Expertise Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive expert services across this four core
              practice areas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {practiceAreas.map((area) => (
              <div
                key={area.id}
                className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-slate-600/20 rounded-full flex items-center justify-center mb-6">
                    {React.cloneElement(area.icon, {
                      className: "w-12 h-12 text-slate-400",
                    })}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {area.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{area.description}</p>
                  <Link
                    to={area.link}
                    className="text-slate-400 font-semibold flex items-center hover:text-slate-300 transition"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/practice-areas"
              className="inline-flex items-center bg-slate-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-700 transition"
            >
              View All Practice Areas
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our People Section */}
      <section id="our-people" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-300 mb-4">
              Our People
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the experienced professionals behind KWCO Advocate's success
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-800"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-contain object-top rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-slate-400 font-semibold mb-4">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/our-people"
              className="inline-flex items-center bg-slate-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-700 transition"
            >
              Meet Our Full Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Insights Section */}
      <section id="insights" className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-300 mb-2">
              Our Trusted Clients In Business & Legal Practice
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              "Delivering Excellence: Trusted by Leading Organizations for Legal
              and debt Collection Services."
            </p>
          </div>

          {/* Grid Layout for Insights */}
          <div className="grid md:grid-cols-3 gap-6">
            {recentInsights.map((insight, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-800"
              >
                <div className="flex items-center p-6 space-x-8">
                  {/* Image Section */}
                  <div className="w-1/3">
                    <img
                      src={insight.image}
                      alt={`Insight ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  {/* Text Section */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {insight.title}
                    </h3>
                    <p className="text-gray-300">{insight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Clients Button */}
          <div className="text-center mt-10">
            <Link
              to="/insights"
              className="inline-flex items-center bg-slate-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-slate-700 transition"
            >
              View All Clients
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Hear what our clients say about their experiences with KWCO
              Advocates
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800/60 backdrop-blur-sm p-8 rounded-lg border border-slate-600"
              >
                <div className="mb-6">
                  <p className="text-lg italic">"{testimonial.text}"</p>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.client}</p>
                  <p className="text-slate-300">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-300 mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our legal team for a consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Visit Us</h3>
              <p className="text-gray-300">
                Nineth Planet Apartments
                <br />
                suit P4 Karbarnet Gardens,
                <br />
                Gong Rd
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Call Us</h3>
              <p className="text-gray-300">
                020 20202 8640
                <br />
                0792 280 484
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Email Us</h3>
              <p className="text-gray-300">
                info@kwco.legal
                <br />
                www.kwco.legal
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-slate-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-700 transition"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="mt-12 bg-black p-8 rounded-lg text-center border border-gray-800">
            <h3 className="text-xl font-bold mb-4 text-white">
              Emergency Legal Services
            </h3>
            <p className="text-gray-300 mb-4">
              For urgent legal matters outside office hours
            </p>
            <p className="text-2xl font-bold text-slate-300">+254 725 766457</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 text-slate-300">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Let our experienced team of legal professionals help you with your
            legal needs.
          </p>
          <Link
            to="/contact"
            className="bg-slate-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-700 transition inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
