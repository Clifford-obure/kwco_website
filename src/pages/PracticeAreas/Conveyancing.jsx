// src/pages/PracticeAreas/Conveyancing.js
import React from "react";
import {
  FileText,
  Home,
  Search,
  Shield,
  Key,
  ClipboardCheck,
  Check,
  ArrowRight,
} from "lucide-react";
import law from "./../../assets/law.png";

const Conveyancing = () => {
  const services = [
    {
      title: "Property Sales & Purchases",
      description:
        "Complete legal support for buying and selling residential and commercial properties.",
      icon: <Home className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Title Searches",
      description:
        "Comprehensive searches to verify property ownership and identify any encumbrances.",
      icon: <Search className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Due Diligence",
      description:
        "Thorough investigation of property documentation and legal compliance.",
      icon: <ClipboardCheck className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Lease Agreements",
      description:
        "Drafting and reviewing commercial and residential lease agreements.",
      icon: <FileText className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Property Registration",
      description:
        "Handling all aspects of property registration with the relevant authorities.",
      icon: <Key className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Land Dispute Resolution",
      description:
        "Resolving boundary disputes, ownership conflicts, and other land-related issues.",
      icon: <Shield className="w-8 h-8 text-amber-600" />,
    },
  ];

  const propertyTypes = [
    "Residential Properties",
    "Commercial Buildings",
    "Industrial Properties",
    "Agricultural Land",
    "Development Land",
    "Mixed-Use Properties",
    "Condominiums",
    "Gated Communities",
  ];

  const conveyancingProcess = [
    {
      step: "1",
      title: "Initial Consultation",
      description:
        "Understanding your property transaction needs and requirements",
    },
    {
      step: "2",
      title: "Document Review",
      description: "Examining all relevant property documents and agreements",
    },
    {
      step: "3",
      title: "Due Diligence",
      description: "Conducting searches and verifying property details",
    },
    {
      step: "4",
      title: "Contract Preparation",
      description: "Drafting or reviewing sale/purchase agreements",
    },
    {
      step: "5",
      title: "Transfer Process",
      description: "Managing the transfer of ownership and funds",
    },
    {
      step: "6",
      title: "Registration",
      description: "Completing property registration with authorities",
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
          <FileText className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Conveyancing Services</h1>
          <p className="text-xl">
            Expert Property Law Services for Smooth Real Estate Transactions
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xl text-gray-600 mb-8">
            KWCO's Conveyancing practice provides comprehensive legal services
            for all aspects of property transactions in Kenya. Our experienced
            conveyancing team ensures that your property dealings are handled
            efficiently, professionally, and in full compliance with Kenyan
            property laws.
          </p>
          <p className="text-gray-600 mb-8">
            Whether you're buying your first home, selling commercial property,
            or managing a complex real estate portfolio, we provide the
            expertise and attention to detail necessary to protect your
            interests and ensure smooth transactions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Conveyancing Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conveyancing Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Conveyancing Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conveyancingProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < conveyancingProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-amber-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Property Types We Handle
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow text-center"
              >
                <p className="font-semibold text-gray-700">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose KWCO for Conveyancing?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/api/placeholder/600/400"
                alt="Property transaction"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Check className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
                  <p className="text-gray-600">
                    Decades of experience in Kenyan property law
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Check className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Thorough Due Diligence
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive property searches and verification
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Check className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Transparent Pricing
                  </h3>
                  <p className="text-gray-600">
                    Clear fee structure with no hidden costs
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Check className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
                  <p className="text-gray-600">
                    Efficient processing of property transactions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">
                How long does a typical property transaction take?
              </h3>
              <p className="text-gray-600">
                Most property transactions take between 30-60 days from start to
                finish, depending on the complexity of the transaction and how
                quickly all parties can provide necessary documentation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">
                What documents do I need to sell my property?
              </h3>
              <p className="text-gray-600">
                You'll need the original title deed, national ID/passport, PIN
                certificate, latest land rates clearance certificate, and any
                relevant approvals or consents depending on the property type.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">
                Do you handle both residential and commercial properties?
              </h3>
              <p className="text-gray-600">
                Yes, we handle all types of properties including residential
                homes, commercial buildings, industrial properties, and
                agricultural land.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">
                What are your conveyancing fees?
              </h3>
              <p className="text-gray-600">
                Our fees are based on the Advocates Remuneration Order and
                depend on the property value. We provide a detailed fee quote
                after our initial consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Property Transaction?
          </h2>
          <p className="text-xl mb-8">
            Contact our conveyancing team for expert assistance
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

export default Conveyancing;
