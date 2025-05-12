// src/pages/About/AboutUs.js
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Shield, Award } from "lucide-react";
import law from "./../../assets/headers/secPic1.jpg";

const AboutUs = () => {
  const aboutSections = [
    {
      title: "Our Story",
      description:
        "Learn about our journey and how we became one of Kenya's leading law firms.",
      icon: <Users className="w-8 h-8 text-amber-600" />,
      link: "/about/our-story",
    },
    {
      title: "Mission & Vision",
      description:
        "Discover our purpose and the future we're building for our clients.",
      icon: <Target className="w-8 h-8 text-amber-600" />,
      link: "/about/mission-vision",
    },
    {
      title: "Core Values",
      description: "Understand the principles that guide everything we do.",
      icon: <Shield className="w-8 h-8 text-amber-600" />,
      link: "/about/core-values",
    },
  ];

  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "1000+", label: "Cases Won" },
    { number: "500+", label: "Happy Clients" },
  ];

  return (
    <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="relative h-96 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center w-full h-full"
        style={{
          backgroundImage: `url(${law})`,
          filter: "brightness(0.4)",  // Adjust brightness as needed
        }}
      />
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">About KWCO Advocates</h1>
        <p className="text-xl">
        Kamuti Waweru & Co. Advocates - Your Trusted Legal Partner in Kenya.        </p>
      </div>
    </section>
  
  


      {/* Introduction Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-xl text-gray-600">
            KWCO Advocates is a premier law firm in Nairobi, Kenya. Established on 10th June 2015, we pride ourselves on being a top-notch lawfirm specializing in litigation, conveyancing, debt collection and dispute resolution, delivering strategic, client-centered solutions tailored to individuals, businesses, and institutions nationwide. We combine modern legal expertise with a commitment to excellence, KWCO Advocates ensures efficient, results driven representation across all sectors</p>
          </div>

          {/* About Sections Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {aboutSections.map((section, index) => (
              <Link
                key={index}
                to={section.link}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition duration-300"
              >
                <div className="mb-6">{section.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                <p className="text-gray-600 mb-6">{section.description}</p>
                <div className="flex items-center text-amber-600 font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-amber-600 rounded-lg py-12 px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-amber-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose KWCO Advocates?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Commitment to delivering exceptional legal services
              </p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">
                Upholding the highest ethical standards
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Client Focus</h3>
              <p className="text-gray-600">Putting our clients' needs first</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Results Driven</h3>
              <p className="text-gray-600">
                Focused on achieving the best outcomes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8">
            Let our experienced team of legal professionals help you with your
            legal needs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-amber-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
