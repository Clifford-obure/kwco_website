// src/pages/About/MissionVision.js
import React from "react";
import { Target, Eye, Compass, Star } from "lucide-react";
import law from "./../../assets/law.png";

const MissionVision = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${law})`,
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center text-black max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Mission & Vision</h1>
          <p className="text-xl">Our Purpose and the Future We're Building</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-6">
              <Target className="w-10 h-10 text-amber-600" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-2xl text-gray-700 font-medium mb-8">
              "To be the best law firm in Kenya by creating meaningful
              experiences for each client and delivering exceptional legal
              solutions that protect their interests and achieve their goals."
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Client Excellence</h3>
                <p className="text-gray-600">
                  Providing personalized legal services that exceed client
                  expectations.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">
                  Professional Integrity
                </h3>
                <p className="text-gray-600">
                  Maintaining the highest ethical standards in all our legal
                  practices.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Embracing new approaches to deliver better legal solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-6">
              <Eye className="w-10 h-10 text-amber-600" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-2xl text-gray-700 font-medium mb-8">
              "To be recognized as Kenya's most trusted legal partner, setting
              the standard for excellence in legal practice and becoming the
              first choice for clients seeking outstanding legal
              representation."
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Compass className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Leadership</h3>
                <p className="text-gray-600">
                  Leading the transformation of legal services in Kenya through
                  innovation and excellence.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Star className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Recognition</h3>
                <p className="text-gray-600">
                  Becoming the benchmark for quality legal services in East
                  Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Goals Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Strategic Goals
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Client Satisfaction</h3>
              <p className="text-gray-600">
                Achieve 100% client satisfaction through personalized service
                delivery.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Market Leadership</h3>
              <p className="text-gray-600">
                Become the top-rated law firm in Kenya within our practice
                areas.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Team Excellence</h3>
              <p className="text-gray-600">
                Build and maintain a team of Kenya's most skilled legal
                professionals.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Social Impact</h3>
              <p className="text-gray-600">
                Contribute positively to Kenya's legal system and society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <blockquote className="text-3xl font-light italic mb-6">
            "Excellence is not a skill, it's an attitude."
          </blockquote>
          <p className="text-xl">
            This philosophy drives everything we do at KWCO
          </p>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;
