// src/pages/About/OurStory.js
import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import law from "./../../assets/law.png";

const OurStory = () => {
  const milestones = [
    {
      year: "2015",
      title: "Foundation",
      description:
        "KWCO was founded by Kamuti Waweru with a vision to provide exceptional legal services in Kenya.  ",
    },
    {
      year: "2017",
      title: "Major Victories",
      description:
        "Won our landmark constitutional case, establishing our reputation in litigation.    ",
    },
    {
      year: "2019",
      title: " Rapid Expansion",
      description:
        "Expanded our practice areas",
    },
    {
      year: "2021",
      title: "Regional Recognition",
      description:
        "Recognized as one of East Africa's leading law firms for commercial litigation. ",
    },
    {
      year: "2023",
      title: "Digital Innovation",
      description:
        "Embraced technology to better serve our clients in the digital age. ",
    },
    {
      year: "2025",
      title: "Continued Excellence",
      description:
        "Celebrating 10+ years of legal excellence and client satisfaction.",
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
          <p className="text-xl">A Legacy of Legal Excellence </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
            KWCO Advocates traces its roots to Kamuti Waweru, a visionary lawyer with a steadfast commitment to justice and excellence. Building on extensive experience of legal practice, Kamuti officially founded Kamuti Waweru & Co. Advocates (KWCO Advocates) on 10th June 2015, driven by a mission to deliver exceptional, client-centered legal services that transform lives.

            </p>

            <p className="text-gray-600 mb-8">
            Starting with a small Nairobi office and a dedicated team of lawyers, KWCO Advocates has grown into one of Kenya’s most respected law firms. This growth reflects our unwavering focus on integrity, innovation, and client satisfaction in every case we undertake.
Since 2015, we have successfully resolved thousands of matters across diverse practice areas, from intricate commercial litigation to sensitive family disputes. Each case has sharpened our expertise and reinforced our deep understanding of Kenya’s dynamic legal environment.

            </p>

            <p className="text-gray-600 mb-8">
            Today, KWCO Advocates stands as a testament to the power of purpose-driven advocacy. We honor our founder’s legacy by blending time-tested values with modern legal strategies, ensuring adaptable, results-oriented representation for individuals, businesses, and institutions nationwide.
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
          As we move forward, KWCO Advocates remains steadfast in our commitment to innovation and adaptability, while upholding the core values of integrity, client-centered service, and excellence that have defined us since our founding. With a focus on strategic growth, we are poised to expand our practice areas, integrate cutting-edge legal technologies, and further elevate our standards of representation. The future holds immense promise as we continue empowering clients across Kenya with trusted, forward-thinking legal solutions.
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
