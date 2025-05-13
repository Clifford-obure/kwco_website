// src/pages/About/OurStory.js
import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import law from "./../../assets/law.png";

const OurStory = () => {
  const milestones = [
    {
      year: "1990",
      title: "Foundation",
      description:
        "KWCO was founded by Kamuti Waweru with a vision to provide exceptional legal services in Kenya.",
    },
    {
      year: "1995",
      title: "First Major Victory",
      description:
        "Won our first landmark constitutional case, establishing our reputation in litigation.",
    },
    {
      year: "2000",
      title: "Expansion",
      description:
        "Expanded our practice areas to include corporate law and conveyancing.",
    },
    {
      year: "2010",
      title: "Regional Recognition",
      description:
        "Recognized as one of East Africa's leading law firms for commercial litigation.",
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description:
        "Embraced technology to better serve our clients in the digital age.",
    },
    {
      year: "2025",
      title: "Continued Excellence",
      description:
        "Celebrating 35 years of legal excellence and client satisfaction.",
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
          <h1 className="text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl">A Legacy of Legal Excellence Since 1990</p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              KWCO's journey began in 1990 when Kamuti Waweru, a visionary
              lawyer with a passion for justice, established the firm with a
              simple yet powerful mission: to provide exceptional legal services
              that make a difference in people's lives.
            </p>

            <p className="text-gray-600 mb-8">
              Starting from a small office in Nairobi with just three lawyers,
              KWCO has grown into one of Kenya's most respected law firms. Our
              growth has been driven by our unwavering commitment to excellence,
              integrity, and client satisfaction.
            </p>

            <p className="text-gray-600 mb-8">
              Over the years, we have handled thousands of cases across various
              practice areas, from complex commercial litigation to sensitive
              family matters. Each case has strengthened our expertise and
              deepened our understanding of the Kenyan legal landscape.
            </p>

            <p className="text-gray-600 mb-8">
              Today, KWCO stands as a testament to what can be achieved through
              dedication, hard work, and an unwavering commitment to justice. We
              continue to build on our founder's vision, adapting to the
              changing legal landscape while maintaining the core values that
              have made us successful.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Journey Through Time
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex items-center mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}">
                        <Calendar className="w-6 h-6 text-amber-600 mr-2" />
                        <span className="text-2xl font-bold text-amber-600">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Looking to the Future</h2>
          <p className="text-xl text-gray-600 mb-8">
            As we continue our journey, we remain committed to evolving with the
            times while staying true to our founding principles. The future of
            KWCO is bright, with plans to expand our services, embrace new
            technologies, and continue providing exceptional legal
            representation to our clients.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transition"
          >
            Join Our Story
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
