// src/pages/PracticeAreas/CreditCollection.js
import React from "react";
import {
  Briefcase,
  DollarSign,
  FileText,
  Search,
  Shield,
  BarChart3,
  Check,
  ArrowRight,
} from "lucide-react";
import law from "./../../assets/headers/law2.png";

const CreditCollection = () => {
  const services = [
    {
      title: "Debt Recovery",
      description:
        "Efficient recovery of outstanding debts through legal proceedings and enforcement mechanisms.",
      icon: <DollarSign className="w-8 h-8 text-slate-600" />,
    },
    {
      title: "Demand Letters",
      description:
        "Professional demand letters that comply with legal requirements and maximize recovery potential.",
      icon: <FileText className="w-8 h-8 text-slate-600" />,
    },
    {
      title: "Negotiation & Settlement",
      description:
        "Skilled negotiation to reach favorable settlements and payment arrangements.",
      icon: <Briefcase className="w-8 h-8 text-slate-600" />,
    },
    {
      title: "Asset Tracing",
      description:
        "Comprehensive asset searches to identify and locate debtor assets for recovery.",
      icon: <Search className="w-8 h-8 text-slate-600" />,
    },
    {
      title: "Bankruptcy Proceedings",
      description:
        "Representation in bankruptcy and insolvency proceedings to maximize creditor recovery.",
      icon: <Shield className="w-8 h-8 text-slate-600" />,
    },
    {
      title: "Credit Portfolio Management",
      description:
        "Strategic management of credit portfolios to minimize defaults and optimize recovery.",
      icon: <BarChart3 className="w-8 h-8 text-slate-600" />,
    },
  ];

  const industries = [
    "Banking & Financial Services",
    "Telecommunications",
    "Manufacturing",
    "Real Estate",
    "Healthcare",
    "Retail & Wholesale",
    "Energy & Utilities",
    "Insurance",
  ];

  const recoveryProcess = [
    {
      step: "1",
      title: "Initial Assessment",
      description:
        "Review of documentation and evaluation of recovery prospects",
    },
    {
      step: "2",
      title: "Demand & Notice",
      description: "Issue of statutory demand letters and legal notices",
    },
    {
      step: "3",
      title: "Negotiation",
      description: "Attempted resolution through negotiation and settlement",
    },
    {
      step: "4",
      title: "Legal Action",
      description: "Institution of court proceedings when necessary",
    },
    {
      step: "5",
      title: "Enforcement",
      description: "Execution of judgments and recovery of assets",
    },
    {
      step: "6",
      title: "Recovery",
      description: "Successful collection and remittance to client",
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
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="relative z-10 text-center text-black max-w-4xl mx-auto px-4">
          {/* <Briefcase className="w-16 h-16 mx-auto mb-4" /> */}
          <h1 className="text-5xl font-bold mb-4">Debt Collection</h1>
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xl text-gray-600 mb-8">
            KWCO Advocates' Debt Collection practice delivers end-to-end debt
            recovery solutions for businesses, financial institutions, and
            creditors nationwide. Leveraging our deep understanding of Kenya's
            legal and commercial landscape, we prioritize maximizing recovery
            rates while preserving client relationships and reputations.
          </p>
          <p className="text-gray-600 mb-8">
            Our team combines strategic legal expertise with pragmatic business
            insight to design recovery processes that align with your
            operational goals. Recognizing the unique complexities of each case,
            we craft tailored, results-driven strategies—from pre-litigation
            negotiations to enforcement of court judgments—to secure optimal
            outcomes efficiently and ethically. KWCO Advocates has built a
            reputation for blending modern legal innovation with client-centered
            service, ensuring your financial interests are safeguarded at every
            stage.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Debt Collection Services
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

      {/* Recovery Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Recovery Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recoveryProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < recoveryProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-slate-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow text-center"
              >
                <p className="font-semibold text-gray-700">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Success Metrics
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">85%</div>
              <p className="text-slate-300">Average Recovery Rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">30</div>
              <p className="text-slate-300">Days Average Resolution</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">KES 1B+</div>
              <p className="text-slate-300">Total Amount Recovered</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-slate-300">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose KWCO Advocates for Debt Recovery?
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <Check className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">High Recovery Rates</h3>
                <p className="text-gray-600">
                  Consistently achieving above-average recovery rates for our
                  clients
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <Check className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Legal Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of debt collection laws and regulatory
                  requirements
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <Check className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Professional Approach
                </h3>
                <p className="text-gray-600">
                  Maintaining professionalism while pursuing aggressive recovery
                  strategies
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <Check className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">No Recovery, No Fee</h3>
                <p className="text-gray-600">
                  Flexible fee arrangements including contingency-based options
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Improve Your Cash Flow Today
          </h2>
          <p className="text-xl mb-8">
            Let our expert team help you recover outstanding debts efficiently
          </p>
          <a
            href="/contact"
            className="bg-slate-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-700 transition inline-block"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default CreditCollection;
