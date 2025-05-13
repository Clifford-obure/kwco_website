// src/pages/PracticeAreas/Litigation.js
import React from "react";
import {
  Scale,
  Gavel,
  Shield,
  FileText,
  Users,
  ArrowRight,
  Check,
  Briefcase,
} from "lucide-react";
import law from "./../../assets/law.png";

const Litigation = () => {
  const services = [
    {
      title: "Civil Litigation",
      description:
        "Representing clients in civil disputes including contract disputes, tort claims, and property matters.",
      icon: <FileText className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Commercial Disputes",
      description:
        "Handling complex business litigation including shareholder disputes, partnership conflicts, and corporate governance issues.",
      icon: <Briefcase className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Constitutional Litigation",
      description:
        "Defending constitutional rights and challenging government actions that violate the constitution.",
      icon: <Shield className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Employment Disputes",
      description:
        "Representing both employers and employees in workplace conflicts, wrongful termination, and discrimination cases.",
      icon: <Users className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Judicial Review",
      description:
        "Challenging administrative decisions and ensuring government agencies act within their legal authority.",
      icon: <Gavel className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Alternative Dispute Resolution",
      description:
        "Mediation and arbitration services to resolve disputes efficiently outside of court.",
      icon: <Scale className="w-8 h-8 text-amber-600" />,
    },
  ];

  const caseTypes = [
    "Contract Disputes",
    "Property Litigation",
    "Insurance Claims",
    "Professional Negligence",
    "Defamation Cases",
    "Intellectual Property Disputes",
    "Public Interest Litigation",
    "Administrative Law Cases",
  ];

  const courtRepresentation = [
    "Supreme Court of Kenya",
    "Court of Appeal",
    "High Court",
    "Employment and Labour Relations Court",
    "Environment and Land Court",
    "Magistrates Courts",
    "Tribunals and Arbitration Forums",
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
          <Scale className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Litigation Services</h1>
          <p className="text-xl">
            Experienced Advocates Fighting for Your Rights in Court
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xl text-gray-600 mb-8">
            KWCO's litigation practice is built on decades of courtroom
            experience and a deep understanding of Kenya's legal system. Our
            litigation team comprises some of Kenya's most respected advocates,
            known for their strategic thinking, persuasive advocacy, and
            commitment to achieving the best possible outcomes for our clients.
          </p>
          <p className="text-gray-600 mb-8">
            We represent clients across all levels of the Kenyan judiciary, from
            magistrates' courts to the Supreme Court. Our approach combines
            thorough preparation, innovative legal strategies, and aggressive
            representation to protect our clients' interests.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Litigation Services
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

      {/* Court Representation & Case Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Courts We Appear In</h3>
              <ul className="space-y-3">
                {courtRepresentation.map((court, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-amber-600 mr-3" />
                    <span className="text-gray-700">{court}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8">
                Types of Cases We Handle
              </h3>
              <ul className="space-y-3">
                {caseTypes.map((type, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-amber-600 mr-3" />
                    <span className="text-gray-700">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Litigation Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Case Evaluation</h3>
              <p className="text-gray-600">
                Thorough assessment of your case to determine the best legal
                strategy
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Legal Strategy</h3>
              <p className="text-gray-600">
                Development of a comprehensive litigation strategy tailored to
                your goals
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Court Representation</h3>
              <p className="text-gray-600">
                Aggressive and skilled advocacy in court proceedings
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Resolution</h3>
              <p className="text-gray-600">
                Achievement of favorable outcomes through judgment or settlement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose KWCO for Litigation?
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <Check className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
                <p className="text-gray-600">
                  Successful representation in over 1000 cases with a high
                  success rate
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <Check className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Expert Advocates</h3>
                <p className="text-gray-600">
                  Team of experienced litigators with expertise across various
                  legal areas
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <Check className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Strategic Approach</h3>
                <p className="text-gray-600">
                  Customized litigation strategies designed to achieve your
                  specific objectives
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <Check className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Client Communication</h3>
                <p className="text-gray-600">
                  Regular updates and clear communication throughout the
                  litigation process
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Need Legal Representation?
          </h2>
          <p className="text-xl mb-8">
            Contact our litigation team today for a consultation
          </p>
          <a
            href="/contact"
            className="bg-white text-amber-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Litigation;
