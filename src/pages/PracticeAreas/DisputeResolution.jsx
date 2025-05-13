// src/pages/PracticeAreas/DisputeResolution.js
import React from "react";
import {
  Shield,
  Users,
  Gavel,
  HandshakeIcon,
  Scale,
  MessageSquare,
  Check,
  ArrowRight,
} from "lucide-react";

const DisputeResolution = () => {
  const services = [
    {
      title: "Mediation",
      description:
        "Facilitating dialogue between parties to reach mutually acceptable solutions without court intervention.",
      icon: <Users className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Arbitration",
      description:
        "Private dispute resolution with binding decisions made by experienced arbitrators.",
      icon: <Gavel className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Negotiation",
      description:
        "Strategic negotiation services to resolve disputes efficiently and protect your interests.",
      icon: <HandshakeIcon className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Commercial ADR",
      description:
        "Specialized alternative dispute resolution for complex commercial and business disputes.",
      icon: <MessageSquare className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Labor Disputes",
      description:
        "Resolution of employment and labor disputes through conciliation and mediation.",
      icon: <Shield className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Family Mediation",
      description:
        "Sensitive handling of family disputes including divorce, custody, and inheritance matters.",
      icon: <Scale className="w-8 h-8 text-amber-600" />,
    },
  ];

  const benefits = [
    "Cost-effective compared to litigation",
    "Faster resolution of disputes",
    "Confidential proceedings",
    "Preservation of business relationships",
    "Flexible and informal procedures",
    "Control over the outcome",
    "Enforcement of agreements",
    "Expert neutral facilitators",
  ];

  const disputeTypes = [
    "Commercial Contract Disputes",
    "Partnership & Shareholder Conflicts",
    "Employment & Labor Disputes",
    "Construction Disputes",
    "Insurance Claims",
    "Intellectual Property Disputes",
    "Family & Inheritance Matters",
    "Land & Property Disputes",
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description:
        "Assessment of your dispute and recommendation of appropriate ADR method",
    },
    {
      step: "2",
      title: "Agreement to Proceed",
      description:
        "Parties agree on the ADR process and select neutral facilitator",
    },
    {
      step: "3",
      title: "Preparation",
      description: "Document exchange and preparation of positions",
    },
    {
      step: "4",
      title: "ADR Sessions",
      description: "Facilitated discussions, negotiations, or hearings",
    },
    {
      step: "5",
      title: "Resolution",
      description: "Agreement reached or binding decision made",
    },
    {
      step: "6",
      title: "Implementation",
      description: "Documentation and enforcement of the resolution",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/api/placeholder/1920/600')`,
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">
            Dispute Resolution Services
          </h1>
          <p className="text-xl">
            Effective Alternative Dispute Resolution for Faster, Cost-Efficient
            Solutions
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xl text-gray-600 mb-8">
            KWCO's Dispute Resolution practice offers comprehensive alternative
            dispute resolution (ADR) services designed to resolve conflicts
            efficiently and cost-effectively outside the courtroom. Our
            experienced team of mediators and arbitrators helps parties reach
            amicable solutions while preserving relationships and minimizing
            costs.
          </p>
          <p className="text-gray-600 mb-8">
            We understand that litigation isn't always the best path to
            resolution. Our ADR services provide flexible, confidential, and
            timely solutions to various disputes, from commercial conflicts to
            family matters, ensuring outcomes that work for all parties
            involved.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Dispute Resolution Services
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Benefits of Alternative Dispute Resolution
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <Check className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Disputes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Types of Disputes We Handle
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {disputeTypes.map((type, index) => (
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

      {/* ADR Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our ADR Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-amber-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">
            Why Choose KWCO for Dispute Resolution?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Experienced Mediators & Arbitrators
              </h3>
              <p className="text-amber-100">
                Our team includes accredited mediators and arbitrators with
                extensive experience in various fields of law, ensuring expert
                handling of your dispute.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">High Success Rate</h3>
              <p className="text-amber-100">
                Over 90% of our mediation cases result in successful
                settlements, saving our clients time and money compared to
                traditional litigation.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Tailored Approach</h3>
              <p className="text-amber-100">
                We customize our ADR approach to suit the specific needs of each
                dispute, ensuring the most effective resolution method is
                employed.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Confidential Process</h3>
              <p className="text-amber-100">
                All ADR proceedings are strictly confidential, protecting your
                business interests and personal matters from public exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">
                When should I consider ADR instead of litigation?
              </h3>
              <p className="text-gray-600">
                ADR is ideal when you want to maintain relationships, need a
                faster resolution, want to keep costs down, or prefer
                confidentiality. It's particularly effective for commercial,
                employment, and family disputes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">
                Is the outcome of ADR legally binding?
              </h3>
              <p className="text-gray-600">
                Arbitration decisions are legally binding and enforceable.
                Mediation results in a binding agreement if all parties sign the
                settlement agreement. The enforceability depends on the type of
                ADR chosen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">
                How long does the ADR process take?
              </h3>
              <p className="text-gray-600">
                Most ADR processes are completed within 1-3 months, compared to
                litigation which can take years. The timeline depends on the
                complexity of the dispute and the availability of parties.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">
                Can I still go to court if ADR doesn't work?
              </h3>
              <p className="text-gray-600">
                Yes, if mediation doesn't result in a settlement, you retain the
                right to pursue litigation. However, arbitration decisions are
                final and binding, with very limited grounds for appeal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Resolve Your Dispute Efficiently
          </h2>
          <p className="text-xl mb-8">
            Contact our dispute resolution team to explore your ADR options
          </p>
          <a
            href="/contact"
            className="bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transition inline-block"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default DisputeResolution;
