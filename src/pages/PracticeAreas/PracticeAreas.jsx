// src/pages/PracticeAreas/PracticeAreas.js
import React from "react";
import { Link } from "react-router-dom";
import { Scale, Briefcase, FileText, Shield, ArrowRight } from "lucide-react";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      id: "litigation",
      icon: <Scale className="w-16 h-16" />,
      title: "Litigation",
      description:
        "Comprehensive litigation services across civil, commercial, and constitutional matters. Our experienced advocates represent clients in all levels of Kenyan courts.",
      services: [
        "Civil Litigation",
        "Commercial Disputes",
        "Constitutional Litigation",
        "Judicial Review",
        "Employment Disputes",
        "Alternative Dispute Resolution",
      ],
      link: "/practice-areas/litigation",
    },
    {
      id: "Debt-collection",
      icon: <Briefcase className="w-16 h-16" />,
      title: "Credit Collection",
      description:
        "Strategic debt recovery solutions to help businesses and financial institutions manage their credit portfolios effectively and recover outstanding debts.",
      services: [
        "Debt Recovery",
        "Demand Letters",
        "Negotiation & Settlement",
        "Asset Tracing",
        "Bankruptcy Proceedings",
        "Credit Portfolio Management",
      ],
      link: "/practice-areas/credit-collection",
    },
    {
      id: "conveyancing",
      icon: <FileText className="w-16 h-16" />,
      title: "Conveyancing",
      description:
        "Full-service conveyancing solutions for property transactions, ensuring smooth transfers and protecting our clients' interests in real estate matters.",
      services: [
        "Property Sales & Purchases",
        "Title Searches",
        "Due Diligence",
        "Lease Agreements",
        "Property Registration",
        "Land Dispute Resolution",
      ],
      link: "/practice-areas/conveyancing",
    },
    {
      id: "dispute-resolution",
      icon: <Shield className="w-16 h-16" />,
      title: "Dispute Resolution",
      description:
        "Alternative dispute resolution services including mediation and arbitration, providing efficient and cost-effective solutions to conflicts outside the courtroom.",
      services: [
        "Mediation",
        "Arbitration",
        "Negotiation",
        "Commercial ADR",
        "Labor Disputes",
        "Family Mediation",
      ],
      link: "/practice-areas/dispute-resolution",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('src/assets/client/img3.jpg')`,
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Practice Areas</h1>
          <p className="text-xl">
            Comprehensive Legal Services Tailored to Your Needs
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl text-gray-600">
            At KWCO, we offer specialized legal services across four core
            practice areas. Our team of experienced lawyers brings deep
            expertise and a proven track record in each of these fields,
            ensuring you receive the highest quality legal representation.
          </p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {practiceAreas.map((area) => (
              <div
                key={area.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                    {area.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                  <p className="text-gray-600 mb-6">{area.description}</p>
                  <h4 className="font-semibold mb-3">Key Services:</h4>
                  <ul className="space-y-2 mb-8">
                    {area.services.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={area.link}
                    className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose KWCO for Your Legal Needs?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">50+</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Years of Experience</h3>
              <p className="text-gray-600">
                Cumulative experience in the Kenyan legal system
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">1000+</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Successful Cases</h3>
              <p className="text-gray-600">
                Proven track record of winning cases
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">24/7</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Client Support</h3>
              <p className="text-gray-600">
                Always available for urgent legal matters
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">100%</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Client Satisfaction</h3>
              <p className="text-gray-600">
                Committed to exceeding expectations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Need Legal Assistance?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your legal needs and how we can help.
          </p>
          <Link
            to="/contact"
            className="bg-white text-amber-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;
