// src/pages/About/CoreValues.js
import React from "react";
import { Shield, Scale, Heart, Award, Users, Lightbulb } from "lucide-react";
import law from "./../../assets/law.png";

const CoreValues = () => {
  const values = [
    {
      icon: <Shield className="w-12 h-12 text-amber-600" />,
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in all our dealings, ensuring transparency and honesty in every interaction.",
      details: [
        "Maintaining confidentiality",
        "Acting with honesty",
        "Avoiding conflicts of interest",
        "Upholding professional ethics",
      ],
    },
    {
      icon: <Scale className="w-12 h-12 text-amber-600" />,
      title: "Justice",
      description:
        "We are committed to the pursuit of justice and fairness, ensuring equal access to legal representation.",
      details: [
        "Fighting for what's right",
        "Ensuring fair representation",
        "Promoting equality before the law",
        "Defending the rule of law",
      ],
    },
    {
      icon: <Award className="w-12 h-12 text-amber-600" />,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, continuously improving our skills and services.",
      details: [
        "Delivering quality work",
        "Continuous learning",
        "Attention to detail",
        "Exceeding expectations",
      ],
    },
    {
      icon: <Heart className="w-12 h-12 text-amber-600" />,
      title: "Compassion",
      description:
        "We treat every client with empathy and understanding, recognizing the human element in legal matters.",
      details: [
        "Listening to client needs",
        "Showing empathy",
        "Providing emotional support",
        "Understanding unique circumstances",
      ],
    },
    {
      icon: <Users className="w-12 h-12 text-amber-600" />,
      title: "Teamwork",
      description:
        "We believe in the power of collaboration, working together to achieve the best outcomes for our clients.",
      details: [
        "Collaborative approach",
        "Sharing knowledge",
        "Supporting colleagues",
        "Collective problem-solving",
      ],
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-amber-600" />,
      title: "Innovation",
      description:
        "We embrace new ideas and technologies to provide better, more efficient legal services.",
      details: [
        "Adopting new technologies",
        "Creative solutions",
        "Continuous improvement",
        "Forward-thinking approach",
      ],
    },
  ];

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
          <h1 className="text-5xl font-bold mb-4">Our Core Values</h1>
          <p className="text-xl">The Principles That Guide Everything We Do</p>
        </div>
      </section>

      {/* Values Introduction */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl text-gray-600 mb-8">
            At KWCO, our core values are more than just words – they are the
            foundation of our practice and the principles that guide every
            decision we make. These values shape our culture, define our
            approach to law, and ensure we deliver the highest quality service
            to our clients.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="mb-6">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600 mb-6">{value.description}</p>
                  <ul className="space-y-2">
                    {value.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Values in Action
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/api/placeholder/600/400"
                alt="Team collaboration"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Living Our Values Every Day
              </h3>
              <p className="text-gray-600 mb-6">
                Our values are reflected in everything we do, from how we
                interact with clients to how we approach complex legal
                challenges. We believe that by staying true to these principles,
                we can make a positive impact on our clients' lives and
                contribute to a better legal system in Kenya.
              </p>
              <p className="text-gray-600 mb-6">
                Every member of our team is committed to upholding these values,
                ensuring that KWCO remains a firm you can trust with your most
                important legal matters.
              </p>
              <a
                href="/our-people"
                className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition"
              >
                Meet Our Team
                <svg
                  className="w-5 h-5 ml-2"
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
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Experience Our Values</h2>
          <p className="text-xl mb-8">
            See how our values translate into exceptional legal services for our
            clients.
          </p>
          <a
            href="/contact"
            className="bg-white text-amber-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default CoreValues;
